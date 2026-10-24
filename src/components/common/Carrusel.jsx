import { useState, useEffect } from 'react'
// Fotos en blanco y negro: el color se les da en BannerSection según el tema (claro/oscuro)
// Copias livianas (1920px) de "Banner1 (2).png", etc.
import banner1 from '../../assets/images/banner/banner1-web.jpg'
import banner2 from '../../assets/images/banner/banner2-web.jpg'
import banner3 from '../../assets/images/banner/banner3-web.jpg'

const images = [banner1, banner2, banner3]

// Tiempo que se muestra cada foto antes de pasar a la siguiente
const INTERVALO_MS = 5000

/**
 * Carrusel de fotos a pantalla completa del banner del Inicio.
 * Avanza solo cada 5 segundos; tiene flechas (al pasar el mouse) y puntos para elegir foto.
 */
export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Va a la foto anterior (de la primera salta a la última)
  const prevSlide = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  // Va a la foto siguiente (de la última vuelve a la primera)
  const nextSlide = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  // Salta a una foto concreta (puntos de abajo)
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  // Avance automático. Se reinicia cada vez que cambia la foto,
  // así el usuario tiene 5 segundos completos después de tocar una flecha.
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))
    }, INTERVALO_MS)
    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className="w-full h-full relative group overflow-hidden bg-gray-950">
      {/* Contenedor de diapositivas */}
      <div className="flex h-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      
      {/* Flecha Izquierda */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:flex absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-all z-10"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:flex absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-all z-10"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicadores (Dots) */}
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all duration-300 rounded-full h-3 ${
                currentIndex === slideIndex 
                  ? 'bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro w-8'
                  : 'w-3 bg-brand-blue/25 hover:bg-brand-blue/50 dark:bg-white/40 dark:hover:bg-white/80'
              }`}
              aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}