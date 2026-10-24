import BannerSection from './sections/BannerSection'
import ServiciosSection from './sections/ServiciosSection'
import FamiliaPastoralSection from './sections/FamiliaPastoralSection'
import ConferenciaSection from './sections/ConferenciaSection'
import HistorialConferenciasSection from './sections/HistorialConferenciasSection'
import PredicacionesSection from './sections/PredicacionesSection'
import TestimoniosSection from './sections/TestimoniosSection'
import UbicacionSatelital from '../../components/common/UbicacionSatelital'

// Testimonios: los escriben los visitantes. Cambia a false para ocultar la sección.
const MOSTRAR_TESTIMONIOS = true

// Para cambiar el orden de la página, solo mueve las secciones de lugar.
const Inicio = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-brand-navy-dark transition-colors duration-300">
            {/* 1. Banner (carrusel) */}
            <BannerSection/>

            {/* 2. Servicios, Doctrina y Misiones */}
            <ServiciosSection/>

            {/* 3. Familia Pastoral */}
            <FamiliaPastoralSection/>

            {/* 4. Próxima conferencia */}
            <ConferenciaSection/>

            {/* 5. Historial de conferencias */}
            <HistorialConferenciasSection/>

            {/* 6. Predicaciones del domingo */}
            <PredicacionesSection/>

            {/* 7. Testimonios (se muestra según MOSTRAR_TESTIMONIOS, arriba) */}
            {MOSTRAR_TESTIMONIOS && <TestimoniosSection/>}

            {/* 8. Ubicación (la misma tarjeta de la página de Contacto) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
                <UbicacionSatelital/>
            </section>
        </div>
    )
}

export default Inicio
