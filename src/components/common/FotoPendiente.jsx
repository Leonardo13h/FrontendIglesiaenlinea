/**
 * Espacio reservado mientras llegan las fotos reales.
 * Si se pasa "src", muestra la imagen; si no, un recuadro gris con un ícono y el texto indicado.
 * @param {string} [src] Ruta de la imagen (null o vacío = mostrar el recuadro)
 * @param {string} [alt] Texto alternativo de la imagen
 * @param {string} [texto] Texto del recuadro cuando no hay imagen
 * @param {string} [className] Clases de tamaño y forma (se aplican a la imagen o al recuadro)
 */
export default function FotoPendiente({ src, alt = "", texto = "Foto pendiente", className = "" }) {
  if (src) {
    return <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" />;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-slate-200 dark:bg-brand-navy-light/30 text-slate-400 dark:text-gray-500 ${className}`}
    >
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-xs font-semibold uppercase tracking-wider">{texto}</span>
    </div>
  );
}
