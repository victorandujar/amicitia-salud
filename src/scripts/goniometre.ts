/**
 * Goniòmetre: el rang (0-135°) gira la tíbia, dibuixa el sector recorregut
 * i mostra la fase de recuperació corresponent.
 */
const K = { x: 230, y: 150 };
const R = 74;
const MAX = 135;

function sector(deg: number): string {
  const a = (deg * Math.PI) / 180;
  const x = (K.x + R * Math.cos(a)).toFixed(2);
  const y = (K.y + R * Math.sin(a)).toFixed(2);
  return `M ${K.x} ${K.y} L ${K.x + R} ${K.y} A ${R} ${R} 0 0 1 ${x} ${y} Z`;
}

export function initGoniometre(root: HTMLElement): void {
  const rang = root.querySelector<HTMLInputElement>('[data-rang]');
  const tibia = root.querySelector<SVGGElement>('[data-tibia]');
  const sect = root.querySelector<SVGPathElement>('[data-sector]');
  const graus = root.querySelector<HTMLElement>('[data-graus]');
  const fases = [...root.querySelectorAll<HTMLElement>('[data-fase]')];
  const salts = [...root.querySelectorAll<HTMLButtonElement>('[data-salt]')];
  if (!rang || !tibia || !sect || !graus) return;

  let actual = -1;
  const pinta = (deg: number) => {
    tibia.style.transform = `rotate(${deg}deg)`;
    sect.setAttribute('d', sector(Math.max(deg, 0.01)));
    graus.textContent = String(Math.round(deg));
    rang.style.setProperty('--p', `${(deg / MAX) * 100}%`);
    let idx = 0;
    fases.forEach((f, i) => { if (deg >= Number(f.dataset.min)) idx = i; });
    if (idx !== actual) {
      actual = idx;
      fases.forEach((f, i) => { f.hidden = i !== idx; });
      salts.forEach((b, i) => {
        if (i === idx) b.setAttribute('aria-current', 'step');
        else b.removeAttribute('aria-current');
      });
      rang.setAttribute('aria-valuetext', `${Math.round(deg)} grados · ${fases[idx]?.querySelector('h3')?.textContent ?? ''}`);
    }
  };

  let anim = 0;
  const anima = (fi: number) => {
    cancelAnimationFrame(anim);
    const ini = Number(rang.value);
    const t0 = performance.now();
    const pas = (t: number) => {
      const p = Math.min(1, (t - t0) / 700);
      const v = ini + (fi - ini) * (1 - Math.pow(1 - p, 3));
      rang.value = String(v);
      pinta(v);
      if (p < 1) anim = requestAnimationFrame(pas);
    };
    anim = requestAnimationFrame(pas);
  };

  rang.addEventListener('input', () => { cancelAnimationFrame(anim); pinta(Number(rang.value)); });
  salts.forEach((b) => b.addEventListener('click', () => anima(Number(b.dataset.salt))));
  pinta(Number(rang.value));

  // Petita demostració quan entra a la pantalla: la rodilla es doblega i torna.
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      setTimeout(() => anima(60), 500);
      setTimeout(() => anima(15), 1500);
    }, { threshold: 0.5 });
    io.observe(root);
  }
}
