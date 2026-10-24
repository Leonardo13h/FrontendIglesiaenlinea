// Datos de contacto de la iglesia. Se usan en el encabezado, el pie de página,
// Contacto, Misiones, Ofrenda y el botón flotante de WhatsApp.
// Si cambia un número o un enlace, basta con cambiarlo aquí.

export const contacto = {
  // Número en formato internacional, sin "+" ni espacios (lo usa wa.me)
  whatsappNumero: '584144420751',
  whatsappUrl: 'https://wa.me/584144420751',
  // Número tal como se muestra en pantalla
  telefonoTexto: '+58 414-4420751',
  correo: 'Secretariavisionsinlimite@gmail.com',
  direccion: 'Maco Maco, San Diego 2006, Carabobo, Venezuela',
  mapsUrl: 'https://maps.app.goo.gl/kkCPVVcf5GGjJ9TM7',
}

export const redesSociales = {
  instagram: 'https://www.instagram.com/ipuvsandiego/',
  youtube: 'https://www.youtube.com/@ipuvsandiego',
  facebook: 'https://www.facebook.com/people/IPUV-San-Diego/100093423662913/',
}

// Enlace al sistema administrativo (botón "Entrar").
// Se configura con VITE_DASHBOARD_URL en el archivo .env (ver .env.example).
export const dashboardLoginUrl = import.meta.env.VITE_DASHBOARD_URL
  ? `${import.meta.env.VITE_DASHBOARD_URL}/login`
  : 'http://localhost:5174/login'

/**
 * Arma un enlace de WhatsApp con un mensaje ya escrito.
 * @param {string} mensaje Texto que aparecerá en el chat
 * @returns {string} URL de wa.me lista para usar en un <a href>
 */
export const whatsappConMensaje = (mensaje) =>
  `${contacto.whatsappUrl}?text=${encodeURIComponent(mensaje)}`
