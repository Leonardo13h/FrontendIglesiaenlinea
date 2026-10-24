import RedilesCelulas from './RedilesCelulas'

// ACTUALIZAR CADA SEMANA: solo cambia los datos de este objeto.
// PDF: copia el archivo en la carpeta public/celula/ y escribe aquí su ruta,
// por ejemplo "/celula/ensenanza-2026-10-26.pdf". Déjalo vacío si aún no hay PDF.
// Portada: imagen de la primera página del PDF, en la misma carpeta (ej. "/celula/ensenanza-2026-10-26.jpg").
// Déjala vacía si no hay imagen y se mostrará el ícono.
const ensenanza = {
  semana: 'Semana del 19 al 25 de octubre de 2026',
  titulo: 'La carga del cansancio',
  textoBase: 'Mateo 11:28',
  resumen:
    'Todos los fatigados y cargados son invitados a reposar en Cristo. El Señor no nos pide que llevemos la carga solos; nos invita a un intercambio donde Él asume el peso principal. Comprendamos cómo Dios ve nuestro cansancio, identifiquemos sus causas y aprendamos a recibir el descanso y las nuevas fuerzas que Él nos promete.',
  puntos: [
    'Una invitación personal a la pausa: Jesús no nos reprende por estar cansados, nos dice "Venid a mí" (Mateo 11:28).',
    'El intercambio de cargas: cuando caminamos con Él bajo su yugo, Cristo lleva la mayor parte del peso.',
    'La provisión de nuevas fuerzas: los que esperan en Jehová tendrán nuevas fuerzas (Isaías 40:31).',
  ],
  preguntas: [
    '¿Por qué Jesús nos hizo un llamado a descansar en Él?',
    '¿Qué consecuencias trae el cargar tantos problemas y dificultades?',
    '¿Por qué muchas personas no le entregan a Jesús sus cargas y problemas?',
    '¿Alguien quisiera experimentar el descanso verdadero en Jesús?',
  ],
  pdf: '/celula/la-carga-del-cansancio.pdf',
  portada: '/celula/la-carga-del-cansancio.jpg',
}

const iconoDescarga = 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'

/**
 * Página de Misiones: enseñanza semanal de célula (con PDF) y el listado de zonas, rediles y células.
 */
const Misiones = () => {
  return (
    <div className="bg-slate-50 dark:bg-brand-navy-dark min-h-screen py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold texto-dorado uppercase tracking-wider">Misiones</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Célula en Línea</p>
          <div className="h-1 w-20 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Cada semana compartimos la enseñanza que se imparte en nuestras células. Prepárate antes de la reunión,
            o vívela desde donde estés.
          </p>
          <p className="mt-2 text-sm font-semibold texto-dorado">{ensenanza.semana}</p>
        </div>

        {/* Descarga del PDF */}
        <div className="mb-8 bg-white dark:bg-brand-blue/15 border border-brand-gold/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-md dark:shadow-none transition-colors duration-300">
          {ensenanza.portada && ensenanza.pdf ? (
            <a
              href={ensenanza.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 sm:w-36 shrink-0 rounded-lg overflow-hidden border border-slate-200 dark:border-brand-blue/40 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={ensenanza.portada}
                alt={`Primera página de la enseñanza "${ensenanza.titulo}"`}
                loading="lazy"
                className="w-full h-auto block"
              />
            </a>
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconoDescarga} />
              </svg>
            </div>
          )}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Enseñanza completa en PDF</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-gray-400 transition-colors duration-300">
              {ensenanza.pdf
                ? 'Descárgala para leerla, imprimirla o compartirla con tu célula.'
                : 'El PDF de esta semana estará disponible muy pronto.'}
            </p>
          </div>
          {ensenanza.pdf ? (
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={ensenanza.pdf}
                download
                className="text-center bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                Descargar PDF
              </a>
              <a
                href={ensenanza.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border border-slate-300 dark:border-brand-blue text-slate-800 dark:text-white hover:border-brand-gold hover:text-brand-gold font-semibold px-6 py-3 rounded-full transition-colors duration-300 text-sm"
              >
                Ver en línea
              </a>
            </div>
          ) : (
            <span className="px-5 py-3 rounded-full border border-dashed border-slate-300 dark:border-brand-blue/50 text-sm font-semibold text-slate-400 dark:text-gray-500">
              Próximamente
            </span>
          )}
        </div>

        {/* Enseñanza de la semana */}
        <div className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-8 sm:p-10 shadow-sm dark:shadow-none transition-colors duration-300">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-wider rounded-full">
              {ensenanza.textoBase}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{ensenanza.titulo}</h3>
          <p className="mt-4 text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{ensenanza.resumen}</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider texto-dorado mb-4">Puntos principales</h4>
              <ol className="space-y-3">
                {ensenanza.puntos.map((punto, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 dark:text-gray-200 transition-colors duration-300">
                    <span className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{punto}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider texto-dorado mb-4">Para compartir</h4>
              <ul className="space-y-3">
                {ensenanza.preguntas.map((pregunta, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 dark:text-gray-200 transition-colors duration-300">
                    <span className="texto-dorado font-bold">?</span>
                    <span>{pregunta}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <RedilesCelulas />

      </div>
    </div>
  )
}

export default Misiones
