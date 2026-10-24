import FotoPendiente from "../../../components/common/FotoPendiente";

// Agrega aquí cada conferencia pasada (la más reciente primero).
// "imagen": ruta dentro de /public (cuadrada). Déjala en null mientras no haya foto.
// Las de /imagesConferencia/web/ son copias livianas (900px) de las originales.
const conferencias = [
  {
    anio: "2025",
    titulo: "Grandiosas Promesas",
    lema: "Con fundamentos eternos",
    imagen: "/imagesConferencia/web/grandiosas-promesas-2025.jpg",
  },
  {
    anio: "2024",
    titulo: "El Diseño Original",
    lema: "",
    imagen: "/imagesConferencia/web/diseno-original-2024.jpg",
  },
  {
    anio: "2023",
    titulo: "Naturaleza Divina",
    lema: "",
    imagen: "/imagesConferencia/web/naturaleza-divina-2023.jpg",
  },
  {
    anio: "2022",
    titulo: "Sin Límites",
    lema: "",
    imagen: "/imagesConferencia/web/sin-limites-2022.jpg",
  },
];

/**
 * Sección "Conferencias anteriores": una tarjeta por cada conferencia pasada.
 */
export default function HistorialConferenciasSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brand-navy-dark border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Nuestra historia</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
            Conferencias{" "}
            <span className="texto-dorado">anteriores</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conferencias.map((conf) => (
            <article
              key={conf.anio}
              className="group bg-slate-50 dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl overflow-hidden hover:border-brand-gold/40 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <FotoPendiente
                  src={conf.imagen}
                  alt={conf.titulo}
                  className="w-full aspect-square group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro text-brand-navy-dark text-xs font-bold px-3 py-1 rounded-full">
                  {conf.anio}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{conf.titulo}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider texto-dorado">Conferencia {conf.anio}</p>
                {conf.lema && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-gray-400 transition-colors duration-300">{conf.lema}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
