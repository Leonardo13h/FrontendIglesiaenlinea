import FotoPendiente from "../../../components/common/FotoPendiente";
import { redesSociales } from "../../../data/contacto";

const canalYoutube = redesSociales.youtube;

// Predicaciones del canal (la más reciente primero: se muestra en grande).
// "youtubeId" es el código del video: en https://www.youtube.com/watch?v=ABC123 el código es "ABC123".
// "vistas": la de más vistas se marca como "La más vista". Números tomados del canal el 22/10/2026.
const predicaciones = [
  { titulo: "Es pues la fe", predicador: "Rev. René Sira", fecha: "Octubre 2026", youtubeId: "igFDPsNkp60", vistas: 270 },
  { titulo: "Buscad a Jehová antes que sea tarde", predicador: "Rev. Isrrael Tesorero", fecha: "Julio 2026", youtubeId: "oSbUsZ2IShY", vistas: 77 },
  { titulo: "Visitas que cambian", predicador: "Rev. Isrrael Tesorero", fecha: "8 de marzo de 2026", youtubeId: "PQphSJw0A04", vistas: 199 },
  { titulo: "Culto especial “PROCLAMA” · Día sábado", predicador: "Audio del culto especial", fecha: "Noviembre 2025", youtubeId: "iww4u3Ws5D0", vistas: 643 },
];

const masVista = predicaciones.reduce((a, b) => (b.vistas > a.vistas ? b : a));

// Etiqueta dorada "La más vista"
function EtiquetaMasVista() {
  return (
    <span className="inline-flex items-center gap-1 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro text-brand-navy-dark text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
      La más vista
    </span>
  );
}

/**
 * Sección de predicaciones: la más reciente en grande (video) y las demás en una lista lateral.
 */
export default function PredicacionesSection() {
  const [principal, ...resto] = predicaciones;
  // La más vista va primero en la lista lateral
  const anteriores = [...resto].sort((a, b) => (b === masVista) - (a === masVista));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Predicaciones</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
            Enseñanzas y{" "}
            <span className="texto-dorado">Prédicas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Última predicación, en grande */}
          <div className="lg:col-span-2 bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl overflow-hidden transition-colors duration-300">
            <div className="aspect-video">
              {principal.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${principal.youtubeId}`}
                  title={principal.titulo}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <FotoPendiente texto="Video pendiente" className="w-full h-full" />
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider texto-dorado">Última predicación · {principal.fecha}</p>
                {principal === masVista && <EtiquetaMasVista />}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{principal.titulo}</h3>
              <p className="mt-1 text-slate-600 dark:text-gray-400 transition-colors duration-300">{principal.predicador}</p>
            </div>
          </div>

          {/* Otras predicaciones */}
          <div className="flex flex-col gap-4">
            {anteriores.map((pred) => {
              const destacada = pred === masVista;
              // Sin video todavía: la tarjeta no es un enlace
              const Tarjeta = pred.youtubeId ? "a" : "div";
              const enlace = pred.youtubeId
                ? { href: `https://www.youtube.com/watch?v=${pred.youtubeId}`, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Tarjeta
                  key={pred.youtubeId || pred.titulo}
                  {...enlace}
                  className={`group flex gap-4 rounded-2xl p-4 border transition-all duration-300 ${
                    destacada
                      ? "bg-brand-gold/10 dark:bg-brand-gold/10 border-brand-gold shadow-lg shadow-brand-gold/10"
                      : "bg-white dark:bg-brand-blue/15 border-slate-200 dark:border-brand-blue/30 hover:border-brand-gold/40"
                  }`}
                >
                  <div className="relative w-32 h-20 rounded-lg overflow-hidden shrink-0">
                    <FotoPendiente
                      src={pred.youtubeId ? `https://img.youtube.com/vi/${pred.youtubeId}/mqdefault.jpg` : null}
                      alt={pred.titulo}
                      texto=""
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Ícono de reproducir */}
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                      <svg className="w-8 h-8 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="min-w-0">
                    {destacada && <EtiquetaMasVista />}
                    <p className="mt-1 text-xs texto-dorado font-semibold">{pred.fecha}</p>
                    <h4 className="font-bold text-slate-800 dark:text-white leading-snug transition-colors duration-300">{pred.titulo}</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400 transition-colors duration-300">{pred.predicador}</p>
                  </div>
                </Tarjeta>
              );
            })}

            {/* Ir al canal */}
            <a
              href={canalYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
              </svg>
              Ver más predicaciones en YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
