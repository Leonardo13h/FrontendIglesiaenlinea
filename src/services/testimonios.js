// Guardado de testimonios.
//
// PRUEBA LOCAL: se guardan en el navegador (localStorage), así que cada
// navegador solo ve los suyos. Para que todos los visitantes vean los mismos
// testimonios, hay que reemplazar estas dos funciones por llamadas a un
// servidor (por ejemplo, un archivo PHP en el hosting). El resto de la
// página no necesita cambios.

const CLAVE = "vsl-testimonios";

// Lee la lista guardada en el navegador (lista vacía si no hay nada o los datos están dañados)
function leer() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
  } catch {
    return [];
  }
}

// Devuelve los testimonios, el más reciente primero
export async function obtenerTestimonios() {
  return leer().sort((a, b) => b.fecha.localeCompare(a.fecha));
}

// Recibe { nombre, apellido, valoracion, comentario, foto } y devuelve el testimonio guardado
export async function guardarTestimonio(datos) {
  const nuevo = {
    ...datos,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    fecha: new Date().toISOString(),
  };
  const lista = [nuevo, ...leer()];
  try {
    localStorage.setItem(CLAVE, JSON.stringify(lista));
  } catch {
    throw new Error("No se pudo guardar el testimonio. Intenta con una foto más pequeña.");
  }
  return nuevo;
}

// Reduce la foto a un cuadrado pequeño (por defecto 200x200) para que pese poco
export function reducirFoto(archivo, lado = 200) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();
    lector.onerror = () => reject(new Error("No se pudo leer la foto."));
    lector.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("El archivo no es una imagen válida."));
      img.onload = () => {
        // Recorte cuadrado centrado
        const corte = Math.min(img.width, img.height);
        const canvas = document.createElement("canvas");
        canvas.width = lado;
        canvas.height = lado;
        canvas
          .getContext("2d")
          .drawImage(img, (img.width - corte) / 2, (img.height - corte) / 2, corte, corte, 0, 0, lado, lado);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = lector.result;
    };
    lector.readAsDataURL(archivo);
  });
}
