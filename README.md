# Amicitia Salud — propuesta de web

Demo de Web Local Growth para Amicitia Salud, centro médico y de rehabilitación deportiva (Passeig dels Pins, 47, Sant Feliu de Llobregat). **No es la web oficial.**

## Por qué

Su web actual es un Wix gratuito (`amicitiasalud.wixsite.com/amicitia`) con el anuncio de Wix visible, sin dominio propio y con el enlace del teléfono mal escrito (`tel:+93 802 98 70`), así que el botón de llamar no funciona en el móvil.

## Identidad

- **Colores del logo:** verde #006B35, rojo #DE0B14 y negro, sobre papel #F6F4EF. La franja verde y roja del logo separa la cabecera y el pie.
- **Tipografía:** Barlow Condensed (titulares en mayúsculas, ritmo deportivo) y Barlow (texto). Autoalojadas con @fontsource.
- **Elemento interactivo:** un goniómetro. Al mover la rodilla (0–135°) se ven las cuatro fases de la recuperación y los servicios del centro que las cubren. Funciona con teclado y lector de pantalla (`input range` con `aria-valuetext`) y respeta `prefers-reduced-motion`.

## Contenido y fuentes

- Textos y servicios: su web actual. Opiniones: enlace a Doctoralia (sin citar testimonios).
- Fotos: las suyas (tratamientos y sala de readaptación). **No se usa** la foto de yoga: sus metadatos indican que se hizo con Canva y puede ser de stock.
- Mutuas: nombres de los logos de su web, en texto (sin usar logos de terceros).

## Publicidad sanitaria

Ofrece medicina general y pediatría, así que se aplican las normas de publicidad sanitaria: sin testimonios, sin precios ni promesas de resultado, y el número de registro sanitario visible en el pie (**pendiente** de que lo facilite el centro). El goniómetro se presenta como orientativo.

## Pendiente

- [ ] Número de registro sanitario, titular y NIF (aviso legal y privacidad).
- [ ] Horario.
- [ ] Confirmar el teléfono 938 02 98 70 (lo publica su web, pero con el enlace mal escrito).
- [ ] Imagen para compartir (`public/og.png`).

## Stack

Astro (SSG) · TypeScript estricto · Tailwind 4 · JS mínimo (reveal y goniómetro). Modo demo con `PUBLIC_IS_DEMO` (por defecto activo: `noindex`, `robots.txt` cerrado y aviso visible).

```bash
npm install
npm run dev
npm run build
```
