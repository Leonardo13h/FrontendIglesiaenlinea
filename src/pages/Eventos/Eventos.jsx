import { Link } from 'react-router-dom'
// Mismo fondo que la sección de la conferencia en el Inicio: horizontal para computadora y vertical para celular
import fondoWeb from '../../assets/images/conferencia/conferencia-fondo-web.jpg'
import fondoMovil from '../../assets/images/conferencia/conferencia-fondo-movil.jpg'
// Los datos del evento se editan en src/data/conferencia.js
import { conferencia, enfoques, dias, conferencistas } from '../../data/conferencia'

const iconoFlecha = 'M17 8l4 4m0 0l-4 4m4-4H3'

// Botón al cronograma completo en Canva
const BotonCronograma = ({ className = '' }) => (
  <a
    href={conferencia.cronogramaUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center justify-center gap-2 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm ${className}`}
  >
    Ver cronograma completo
    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconoFlecha} />
    </svg>
  </a>
)

/**
 * Página de Eventos: portada de la próxima conferencia, cómo está organizada,
 * programa día a día y conferencistas invitados. Los datos salen de src/data/conferencia.js.
 */
const Eventos = () => {
  return (
    <div className="bg-slate-50 dark:bg-brand-navy-dark min-h-screen transition-colors duration-300">

      {/* Portada del evento */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(min-width: 768px)" srcSet={fondoWeb} />
            <img src={fondoMovil} alt="" className="w-full h-full object-cover object-top md:object-center" />
          </picture>
          {/* Capa oscura para que el texto se lea sobre la imagen */}
          <div className="absolute inset-0 bg-brand-navy-dark/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-wider uppercase texto-dorado">Eventos</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            {conferencia.titulo}
          </h1>
          <p className="-mt-3 text-2xl sm:text-3xl font-semibold italic texto-dorado">“{conferencia.lema}”</p>
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">{conferencia.descripcionLarga}</p>

          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-8 text-gray-100 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro" />
              {conferencia.fechaTexto}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro" />
              {conferencia.lugar}
            </li>
          </ul>

          <div className="mt-2 flex flex-wrap gap-4">
            <BotonCronograma />
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold text-white border border-white/40 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
            >
              Quiero asistir
            </Link>
          </div>
        </div>
      </section>

      {/* ¿Cómo está organizado? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Organización</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
              ¿Cómo está{" "}
              <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">organizado?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enfoques.map((enfoque) => (
              <div
                key={enfoque.titulo}
                className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-8 transition-colors duration-300"
              >
                <p className="text-xs font-semibold uppercase tracking-wider texto-dorado">{enfoque.horario}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{enfoque.titulo}</h3>
                <p className="mt-3 text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{enfoque.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa por día (resumen) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brand-navy-dark border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Programa</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
              Día a{" "}
              <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">día</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dias.map((d) => (
              <article
                key={d.dia}
                className="flex flex-col bg-slate-50 dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-6 hover:border-brand-gold/40 transition-all duration-300"
              >
                <p className="text-3xl font-bold texto-dorado">{d.dia}</p>
                <p className="text-sm text-slate-500 dark:text-gray-400 transition-colors duration-300">{d.fecha}</p>
                <h3 className="mt-4 text-lg font-bold text-slate-800 dark:text-white transition-colors duration-300">{d.titulo}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-gray-200 transition-colors duration-300">{d.horario}</p>
                {d.tema && (
                  <p className="mt-3 text-sm italic text-slate-600 dark:text-gray-300 transition-colors duration-300">Seminario: {d.tema}</p>
                )}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-brand-blue/30">
                  <p className="text-xs font-bold uppercase tracking-wider texto-dorado mb-2">Predican</p>
                  <ul className="space-y-1">
                    {d.predicadores.map((p) => (
                      <li key={p} className="text-sm text-slate-700 dark:text-gray-200 transition-colors duration-300">{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              Los horarios exactos de cada predicación están en el cronograma completo.
            </p>
            <BotonCronograma />
          </div>
        </div>
      </section>

      {/* Conferencistas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Invitados</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
              Nuestros{" "}
              <span className="texto-dorado">conferencistas</span>
            </h2>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 sm:gap-x-6">
            {conferencistas.map(({ nombre, rol, foto, pais }) => (
              <li key={nombre} className="group">
                <figure>
                  {/* Retrato con marco fino */}
                  <div className="overflow-hidden rounded-md bg-slate-200 dark:bg-brand-blue/30 ring-1 ring-slate-200 dark:ring-brand-navy-light">
                    <img
                      src={foto}
                      alt={nombre}
                      width="600"
                      height="800"
                      loading="lazy"
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Placa con el nombre */}
                  <figcaption className="mt-4 text-center">
                    <p className="font-serif text-lg sm:text-xl leading-snug text-slate-800 dark:text-white transition-colors duration-300">
                      {nombre}
                    </p>
                    <div className="mx-auto mt-2 h-px w-10 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro" aria-hidden="true" />
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider texto-dorado">
                      {rol || "Conferencista"}
                    </p>
                    {pais && (
                      <p className="mt-2 inline-flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                        <img
                          src={pais.bandera}
                          alt=""
                          width="20"
                          height="15"
                          className="w-5 h-[15px] rounded-[2px] ring-1 ring-black/10 dark:ring-white/15 object-cover"
                        />
                        {pais.nombre}
                      </p>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  )
}

export default Eventos
