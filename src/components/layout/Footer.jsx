import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'
import { contacto, redesSociales } from '../../data/contacto'

// Enlaces de la columna "Navegación"
const enlaces = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Misiones', path: '/misiones' },
  { name: 'Formación Ministerial', path: '/formacion' },
  { name: 'Eventos', path: '/eventos' },
  { name: 'Contacto', path: '/contacto' },
]

/**
 * Pie de página: logo y lema, enlaces, datos de contacto, redes sociales y derechos de autor.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { pathname } = useLocation()

  // Si se toca el enlace de la página en la que ya estás, la ruta no cambia: sube manualmente
  const subirSiMismaPagina = (path) => {
    if (path === pathname) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-200/50 dark:bg-brand-blue/25 border-t-2 border-brand-gold/35 dark:border-brand-gold/30 text-slate-600 dark:text-gray-300 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Slogan */}
          <div className="md:col-span-1 flex flex-col space-y-4">
            <Link to="/" onClick={() => subirSiMismaPagina('/')} className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-full flex items-center justify-center">
                <img src={logo} alt="Logo VSL" className="h-8 w-8 object-contain" />
              </div>
              <span className="text-slate-800 dark:text-white font-bold text-base tracking-wide">Visión Sin Límites</span>
            </Link>
            <p className="texto-dorado font-medium italic text-xs">"La familia soñada por Dios"</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Proclamando el Evangelio de Jesucristo para edificar familias sólidas e impulsar un avivamiento espiritual.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-brand-gold/30 pb-1 inline-block">Navegación</h3>
            <ul className="space-y-2 text-xs">
              {enlaces.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} onClick={() => subirSiMismaPagina(link.path)} className="hover:text-brand-gold transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-1">
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-brand-gold/30 pb-1 inline-block">Contacto</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{contacto.direccion}</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contacto.telefonoTexto}</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{contacto.correo}</span>
              </li>
            </ul>
          </div>

          {/* Social and Maps */}
          <div className="md:col-span-1">
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-brand-gold/30 pb-1 inline-block">Redes Sociales</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href={redesSociales.instagram}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-brand-blue hover:bg-linear-to-r hover:from-logo-gold-claro hover:to-logo-gold-oscuro text-white hover:text-brand-navy-dark flex items-center justify-center transition-colors duration-300 shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a 
                href={redesSociales.youtube}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-brand-blue hover:bg-linear-to-r hover:from-logo-gold-claro hover:to-logo-gold-oscuro text-white hover:text-brand-navy-dark flex items-center justify-center transition-colors duration-300 shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a 
                href={redesSociales.facebook}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-brand-blue hover:bg-linear-to-r hover:from-logo-gold-claro hover:to-logo-gold-oscuro text-white hover:text-brand-navy-dark flex items-center justify-center transition-colors duration-300 shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <a 
              href={contacto.mapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs texto-dorado hover:underline flex items-center space-x-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Ver Ubicación en Google Maps</span>
            </a>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-slate-200 dark:border-brand-blue/30 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-gray-500 transition-colors duration-300">
          <p>© {currentYear} Iglesia Apostólica Visión Sin Límites. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">San Diego, Carabobo, Venezuela.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer