// Envío de formularios al correo de la iglesia (sugerencias del Inicio y mensajes de Contacto).
//
// Usa Web3Forms (https://web3forms.com), un servicio gratuito que reenvía formularios a un correo
// sin necesidad de servidor propio. La clave se crea en su página con el correo de la iglesia
// y se coloca en el archivo .env como VITE_WEB3FORMS_KEY (ver .env.example).
// Esa clave solo permite enviar mensajes a ese correo, por eso puede ir en la página.

const URL_ENVIO = "https://api.web3forms.com/submit";
const CLAVE = import.meta.env.VITE_WEB3FORMS_KEY;

/**
 * Envía un correo con los campos indicados. Lanza un error con un mensaje claro si falla.
 * @param {string} asunto Asunto del correo
 * @param {object} campos Datos que se muestran en el correo ({ "Nombre": "Juan", ... })
 * @param {string} [correo] Correo de la persona: al responder el correo, le llega a ella
 * @param {boolean} [trampa] Campo oculto contra robots: si viene marcado, Web3Forms descarta el mensaje
 */
async function enviarCorreo({ asunto, campos, correo, trampa }) {
  if (!CLAVE) {
    throw new Error("El envío de mensajes aún no está configurado. Inténtalo más tarde.");
  }

  let respuesta;
  try {
    respuesta = await fetch(URL_ENVIO, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: CLAVE,
        subject: asunto,
        from_name: "Página web Visión Sin Límites",
        ...campos,
        ...(correo && { email: correo }),
        botcheck: trampa,
      }),
    });
  } catch {
    throw new Error("No hay conexión. Revisa tu internet e inténtalo de nuevo.");
  }

  const resultado = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok || !resultado.success) {
    throw new Error("No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.");
  }
}

// Recibe { tipo, sugerencia, nombre, correo, trampa }
export function enviarSugerencia({ tipo, sugerencia, nombre, correo, trampa }) {
  return enviarCorreo({
    asunto: `Sugerencia para la página web: ${tipo}`,
    campos: { "Tipo de sugerencia": tipo, Sugerencia: sugerencia, Nombre: nombre || "Anónimo" },
    correo,
    trampa,
  });
}

// Recibe { nombre, correo, telefono, mensaje, trampa }
export function enviarMensajeContacto({ nombre, correo, telefono, mensaje, trampa }) {
  return enviarCorreo({
    asunto: `Petición o consulta desde la página web: ${nombre}`,
    campos: { Nombre: nombre, Correo: correo, "WhatsApp / Teléfono": telefono || "No indicado", Mensaje: mensaje },
    correo,
    trampa,
  });
}
