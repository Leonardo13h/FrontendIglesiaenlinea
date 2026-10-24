import EstructuraIglesia from './EstructuraIglesia'
// Letras "Sin Límites" del arte original (SinLímitesBanner(1).png), recortadas al contenido.
// Se usan como máscara: azul marino en modo claro y blanco en modo oscuro.
import sinLimitesTitulo from '../../assets/images/nosotros/sin-limites-titulo.png'

const mascara = {
  WebkitMaskImage: `url(${sinLimitesTitulo})`,
  maskImage: `url(${sinLimitesTitulo})`,
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
}

/**
 * Página Nosotros: portada "Sin Límites", visión, misión, lema y estructura de la iglesia.
 */
const Nosotros = () => {
  return (
    <div className="bg-slate-50 dark:bg-brand-navy-dark min-h-screen transition-colors duration-300">

      {/* Portada "Sin Límites" a todo el ancho: fondo claro con letras azules, o azul de la marca con letras blancas */}
      <section className="bg-white dark:bg-brand-blue border-b border-slate-200 dark:border-brand-navy-light/60 px-4 sm:px-6 lg:px-8 py-24 sm:py-32 transition-colors duration-300">
        <h1 className="sr-only">Nosotros</h1>
        <div
          role="img"
          aria-label="Sin Límites"
          className="mx-auto w-full max-w-sm sm:max-w-2xl aspect-[978/380] bg-brand-blue dark:bg-white transition-colors duration-300"
          style={mascara}
        />
        <div className="mx-auto mt-10 h-px w-28 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro" aria-hidden="true" />
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold texto-dorado uppercase tracking-wider">¿Quiénes Somos?</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Nuestra Visión y Misión</p>
          <div className="h-1 w-20 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision card */}
          <div className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-3xl p-8 md:p-10 shadow-md dark:shadow-xl hover:border-brand-gold/40 dark:hover:border-brand-gold/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors duration-300"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300">Visión</h3>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-light transition-colors duration-300">
              Ser una iglesia firmemente establecida en el fundamento apostólico, con un carácter profundamente ministerial y misionero.
            </p>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-light mt-4 transition-colors duration-300">
              Buscamos consolidar <strong className="texto-dorado font-semibold">familias sólidas y ministerios maduros</strong> que impulsen un avivamiento en San Diego y toda Venezuela, estando listos para responder con obediencia y poder al llamado de Dios en cualquier parte del mundo.
            </p>
          </div>

          {/* Mission card */}
          <div className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-3xl p-8 md:p-10 shadow-md dark:shadow-xl hover:border-brand-gold/40 dark:hover:border-brand-gold/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 dark:bg-brand-blue/20 rounded-full blur-2xl group-hover:bg-brand-blue/30 transition-colors duration-300"></div>

            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300">Misión</h3>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-light transition-colors duration-300">
              Proclamar el Evangelio de Jesucristo, fundamentado en las enseñanzas del libro de los Hechos:
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700 dark:text-gray-300 pl-4 border-l-2 border-brand-gold/40 mb-4 transition-colors duration-300">
              <li>• Arrepentimiento de pecados.</li>
              <li>• Bautismo en agua en el nombre de Jesús.</li>
              <li>• Bautismo del Espíritu Santo con la señal inicial de hablar en lenguas.</li>
            </ul>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-light transition-colors duration-300">
              Trabajamos activamente para edificar familias sólidas e impulsar un avivamiento espiritual que transforme el municipio San Diego y nuestra nación, Venezuela, siendo de bendición global.
            </p>
          </div>
        </div>

        {/* Lema Quote banner */}
        <div className="mt-16 bg-white dark:bg-gradient-to-r dark:from-brand-blue dark:to-brand-navy-light/40 border border-slate-200 dark:border-brand-blue/40 rounded-2xl p-8 text-center shadow-md dark:shadow-lg transition-colors duration-300">
          <p className="text-xl sm:text-2xl italic text-slate-700 dark:text-gray-200 transition-colors duration-300">
            "La familia soñada por Dios"
          </p>
          <div className="mt-2 text-xs texto-dorado uppercase tracking-wider font-semibold">
            Lema Institucional VSL
          </div>
        </div>
      </div>

      {/* Organigrama del sistema celular */}
      <div className="mt-20">
        <EstructuraIglesia />
      </div>
    </div>
  )
}

export default Nosotros

