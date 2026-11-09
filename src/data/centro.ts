/**
 * Dades publicades per Amicitia Salud a la seva web (Wix) i a Doctoralia.
 * El que no està confirmat queda a `pendiente` i no es mostra com a fet.
 */
export const centro = {
  name: 'Amicitia Salud',
  tagline: 'Centro médico y de rehabilitación deportiva',
  street: 'Passeig dels Pins, 47',
  postalCode: '08980',
  city: 'Sant Feliu de Llobregat',
  region: 'Barcelona',
  /** A la seva web l'enllaç és «tel:+93 802 98 70» (mal format). */
  phone: { display: '938 02 98 70', e164: '+34938029870' },
  email: 'amicitiasalud@gmail.com',
  whatsapp: 'https://wa.me/message/VFPOM7I63NV4I1',
  instagram: 'https://www.instagram.com/amicitiasalud/',
  tiktok: 'https://www.tiktok.com/@amicitiasalud',
  maps: 'https://maps.app.goo.gl/EAJh5fwx5Ge6QJVy9',
  /** Mútues dels logos publicats a la seva web; ells diuen «más de 20». */
  mutuas: [
    'Adeslas', 'Sanitas', 'MAPFRE', 'FIATC', 'Cigna', 'Asistencia Sanitaria', 'Atlàntida', 'Agrupació Mútua',
    'Mutuacat', 'Cosalud', 'HMT', 'Clínicum', 'Clínicas Fision', 'SaludOnNet', 'Dentycard', 'Vivofácil',
  ],
  pendiente: {
    /** Obligatori en publicitat sanitària (Catalunya). */
    registroSanitario: null as string | null,
    horario: null as string | null,
  },
} as const;

export const telUrl = `tel:${centro.phone.e164}`;
