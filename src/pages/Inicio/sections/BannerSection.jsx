import { Link } from 'react-router-dom'
import Carrusel from '../../../components/common/Carrusel'

/**
 * Portada del Inicio: carrusel de fotos de fondo, lema y botones principales.
 */
const BannerSection = () => {
    return (
        // -mt-24 sube el banner por detrás del header (que mide 96px) para que se vea a través de él
        <section className="relative overflow-hidden -mt-24 pt-52 pb-28 sm:pt-64 sm:pb-40 border-b border-slate-200 dark:border-brand-blue/20 transition-all duration-300">

            {/* Full-bleed background image with theme-adaptive overlays */}
            <div className="absolute inset-0 z-0">
                <Carrusel/>
                {/* Pasa las fotos a blanco y negro */}
                <div className="absolute inset-0 bg-slate-500 dark:bg-brand-navy-light mix-blend-color transition-colors duration-300"></div>
                {/* Capa plana para dar contraste al texto */}
                <div className="absolute inset-0 bg-white/80 dark:bg-brand-navy-dark/80 transition-colors duration-300"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="texto-dorado text-xs font-semibold uppercase tracking-wider mb-6">
                    Bienvenidos a Iglesia VSL
                </p>

                <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
                    La familia soñada <br />
                    <span className="texto-dorado">por Dios</span>
                </h1>

                <p className="mt-6 text-sm sm:text-lg text-slate-900 dark:text-white max-w-3xl mx-auto leading-relaxed font-medium transition-colors duration-300">
                    Ser una iglesia firmemente establecida en el fundamento apostólico, con un carácter profundamente ministerial y misionero. Buscamos consolidar familias sólidas y ministerios maduros.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        to="/contacto"
                        className="w-full sm:w-auto bg-brand-blue hover:bg-brand-navy-light text-white font-semibold px-8 py-4 rounded-md transition-colors duration-300 text-center text-sm dark:bg-linear-to-r dark:from-logo-gold-claro dark:to-logo-gold-oscuro dark:hover:brightness-110 dark:text-brand-navy-dark"
                    >
                        Planea tu Visita
                    </Link>
                    <Link
                        to="/nosotros"
                        className="w-full sm:w-auto bg-transparent hover:bg-slate-100 dark:hover:bg-brand-navy-light/50 border border-slate-400 dark:border-slate-500 text-slate-800 dark:text-white font-semibold px-8 py-4 rounded-md transition-colors duration-300 text-center text-sm"
                    >
                        Conoce nuestra Visión
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BannerSection
