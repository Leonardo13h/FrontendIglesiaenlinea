import { contacto } from '../../data/contacto'

/**
 * Tarjeta de ubicación con botón a Google Maps. Se usa en Contacto y en el Inicio.
 */
const UbicacionSatelital = () => {
  return (
    <div className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-md transition-colors duration-300">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center space-x-2 transition-colors duration-300">
        <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        <span>Ubicación Satelital</span>
      </h3>
      <p className="text-xs text-slate-600 dark:text-gray-400 mb-6 font-light transition-colors duration-300">Para facilitar tu llegada, puedes hacer clic en el botón de navegación GPS directa a Google Maps.</p>

      <div className="bg-slate-50 dark:bg-brand-navy-dark rounded-2xl border border-slate-200 dark:border-brand-blue/20 p-8 text-center flex flex-col justify-center items-center h-48 sm:h-56 relative overflow-hidden group transition-all duration-300">
        {/* Visual background map simulation */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#b98e16_1px,transparent_1px),linear-gradient(to_bottom,#b98e16_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="absolute w-24 h-24 bg-brand-gold/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>

        <svg className="w-10 h-10 text-brand-gold mb-3 relative z-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-sm font-semibold text-slate-800 dark:text-white relative z-10 mb-4 transition-colors duration-300">Iglesia Apostólica Visión Sin Límites</p>

        <a
          href={contacto.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-blue hover:bg-linear-to-r hover:from-logo-gold-claro hover:to-logo-gold-oscuro hover:text-brand-navy-dark text-white text-xs font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 relative z-10 shadow-md hover:shadow-lg"
        >
          Cómo llegar (Google Maps GPS)
        </a>
      </div>
    </div>
  )
}

export default UbicacionSatelital
