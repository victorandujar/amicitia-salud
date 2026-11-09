/** Fases orientatives d'una recuperació i els serveis del centre que hi corresponen. */
export const fases = [
  {
    id: 'dolor', nom: 'Cuando duele', graus: 15,
    text: 'Lo primero es bajar el dolor y entender de dónde viene. Valoración, terapia manual y tratamiento de la zona.',
    serveis: ['Fisioterapia', 'Osteopatía', 'Masaje terapéutico'],
  },
  {
    id: 'mobilitat', nom: 'Recuperar el movimiento', graus: 60,
    text: 'Cuando el dolor cede, toca devolver el rango a la articulación y corregir los gestos que lo provocaron.',
    serveis: ['Fisioterapia', 'Taller de higiene postural'],
  },
  {
    id: 'forca', nom: 'Volver a cargar', graus: 100,
    text: 'Ejercicio guiado en la sala de readaptación: fuerza, equilibrio y control, con el fisio al lado.',
    serveis: ['Rehabilitación deportiva'],
  },
  {
    id: 'tornada', nom: 'Volver a tu deporte', graus: 135,
    text: 'De vuelta a la pista, al gimnasio o a la montaña. Y trabajo de prevención para no repetir la lesión.',
    serveis: ['Pilates', 'Yoga', 'Rehabilitación deportiva'],
  },
] as const;
