import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
// Logo horizontal: texto azul para modo claro, texto blanco para modo oscuro
import logo from '../../assets/logos/logo.png'
import logoBlanco from '../../assets/logos/logo-horizontal-blanco.png'
import { contacto, dashboardLoginUrl } from '../../data/contacto'

/**
 * Barra de navegación principal (fija arriba).
 * Incluye el logo, los enlaces a las páginas, el botón "Entrar" al sistema, WhatsApp
 * y el cambio de tema. En celular los enlaces se agrupan en un menú desplegable.
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false) // menú de celular abierto o cerrado
    const { theme, toggleTheme } = useTheme()
    const { pathname } = useLocation()
    const [scrolled, setScrolled] = useState(false) // true cuando el usuario ya bajó por la página

    // Detecta si se bajó más de 10px para cambiar el fondo de la barra
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // En el inicio, mientras no se ha bajado, el header es transparente y deja ver el banner detrás
    const transparent = pathname === '/' && !scrolled && !isOpen

    // Si se toca el enlace de la página en la que ya estás, la ruta no cambia: sube manualmente
    const subirSiMismaPagina = (path) => {
        if (path === pathname) window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Enlaces del menú, en el orden en que se muestran
    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Misiones', path: '/misiones' },
        { name: 'Formación', path: '/formacion' },
        { name: 'Eventos', path: '/eventos' },
        { name: 'Contacto', path: '/contacto' },
        { name: 'Ofrenda', path: '/ofrenda' },
    ]

    // Botón sol/luna para cambiar el tema (se usa en la versión de escritorio y en la de celular)
    const themeToggleBtn = (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-brand-navy-light/30 dark:hover:bg-brand-navy-light/60 text-brand-gold hover:text-brand-gold-light focus:outline-none transition-all duration-300 shadow-inner shrink-0"
            aria-label="Alternar tema"
        >
            {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m14.071-5.071l-.707.707M6.343 17.657l-.707.707M16.929 17.657l.707.707M7.757 5.636l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
        </button>
    )

    return (
        <nav className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-500 ${transparent
            ? 'bg-white/30 dark:bg-brand-navy-dark/30 border-white/30 dark:border-brand-gold/15 shadow-none'
            : 'bg-white/95 dark:bg-brand-blue/95 border-slate-200 dark:border-brand-navy-light/40 shadow-lg'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 m-2">

                    {/* Logo Section */}
                    <Link to="/" onClick={() => subirSiMismaPagina('/')} className="flex items-center shrink-0" aria-label="Visión Sin Límites - Inicio">
                        <img src={logo} alt="Visión Sin Límites" className="h-12 sm:h-14 w-auto dark:hidden" />
                        <img src={logoBlanco} alt="Visión Sin Límites" className="h-12 sm:h-14 w-auto hidden dark:block" />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => subirSiMismaPagina(link.path)}
                                className={({ isActive }) =>
                                    `relative py-2 px-1 text-sm lg:text-base font-semibold transition-all duration-300 ${isActive
                                        ? 'texto-dorado after:scale-x-100'
                                        : 'text-slate-600 hover:text-brand-blue dark:text-gray-300 dark:hover:text-brand-gold-light after:scale-x-0'
                                    } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-linear-to-r after:from-logo-gold-claro after:to-logo-gold-oscuro after:origin-left after:transition-transform after:duration-300`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Login Button */}
                        <a
                            href={dashboardLoginUrl}
                            className="text-slate-600 hover:text-brand-blue dark:text-gray-300 dark:hover:text-brand-gold font-bold px-4 py-2 text-sm transition-colors duration-300 flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Entrar
                        </a>

                        {/* CTA button */}
                        <a
                            href={contacto.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-blue hover:bg-brand-navy-light text-white dark:bg-linear-to-r dark:from-logo-gold-claro dark:to-logo-gold-oscuro dark:hover:brightness-110 dark:text-brand-navy-dark px-5 py-2.5 rounded-md font-semibold transition-colors duration-300 text-sm shrink-0"
                        >
                            Visítanos
                        </a>

                        {/* Desktop Theme Switcher */}
                        {themeToggleBtn}
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex lg:hidden items-center space-x-3">
                        {/* Mobile Theme Switcher */}
                        {themeToggleBtn}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-white hover:bg-slate-100 dark:hover:bg-brand-navy-light/35 focus:outline-none transition-colors duration-300"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu dropdown */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[32rem] opacity-100 border-t border-slate-200 dark:border-brand-navy-light/40 bg-white dark:bg-brand-navy-dark' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => {
                                setIsOpen(false)
                                subirSiMismaPagina(link.path)
                            }}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive
                                    ? 'bg-slate-100 text-brand-gold border-l-4 border-brand-gold dark:bg-brand-blue/30 dark:text-brand-gold'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue dark:text-gray-300 dark:hover:bg-brand-navy-light/20 dark:hover:text-brand-gold'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="px-3 pt-3 flex flex-col gap-2">
                        <a
                            href={dashboardLoginUrl}
                            className="block w-full text-center border-2 border-slate-200 dark:border-brand-navy-light/40 text-slate-700 dark:text-gray-200 font-bold py-2.5 px-4 rounded-md hover:bg-slate-50 dark:hover:bg-brand-navy-light/20 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Entrar al Sistema
                        </a>
                        <a
                            href={contacto.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro text-brand-navy-dark font-bold py-2.5 px-4 rounded-md shadow-md hover:brightness-110 transition-colors duration-300"
                        >
                            Visítanos en WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


