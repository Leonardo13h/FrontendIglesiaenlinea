import { Routes, Route, Navigate } from 'react-router-dom'

// Estructura fija que acompaña a todas las páginas
import ScrollToTop from './components/layout/ScrollToTop'
import TopNavbar from './components/layout/TopNavbar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFlotante from './components/layout/WhatsAppFlotante'

// Páginas (una carpeta por página en src/pages)
import Inicio from './pages/Inicio/Inicio'
import Nosotros from './pages/Nosotros/Nosotros'
import Misiones from './pages/Misiones/Misiones'
import Formacion from './pages/Formacion/Formacion'
import LlavesDelReino from './pages/Formacion/LlavesDelReino'
import Eventos from './pages/Eventos/Eventos'
import Contacto from './pages/Contacto/Contacto'
import Ofrenda from './pages/Ofrenda/Ofrenda'

/**
 * Componente raíz: dibuja el encabezado, la página que corresponde a la URL y el pie de página.
 */
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 dark:bg-brand-navy-dark dark:text-white font-sans selection:bg-brand-gold selection:text-white transition-colors duration-300">
      <ScrollToTop />

      {/* Barra de información superior */}
      <TopNavbar />

      {/* Barra de navegación principal */}
      <Navbar />

      {/* Contenido principal con rutas */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/misiones" element={<Misiones />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/formacion/las-llaves-del-reino" element={<LlavesDelReino />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ofrenda" element={<Ofrenda />} />

          {/* Direcciones antiguas: redirigen a la página actual */}
          <Route path="/mision" element={<Navigate to="/nosotros" replace />} />
          <Route path="/grupos" element={<Navigate to="/misiones#celulas" replace />} />
        </Routes>
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFlotante />
    </div>
  )
}

export default App
