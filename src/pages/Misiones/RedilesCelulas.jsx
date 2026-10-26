import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { zonas } from '../../data/rediles'
import { whatsappConMensaje } from '../../data/contacto'


const iconos = {
  ubicacion: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  casa: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  persona: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  reloj: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  flecha: 'M9 5l7 7-7 7',
}

// Ícono SVG de línea a partir de la ruta "d"
const Icono = ({ d, className = 'w-4 h-4 text-brand-gold' }) => (
  <svg className={`${className} shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
  </svg>
)

// Texto con singular o plural según la cantidad. Ej.: plural(1, "Célula", "Células") → "1 Célula"
const plural = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`

// "Ministra" o "Ministro" según el campo "genero" de los datos (vacío: "Ministro(a)")
const titulo = (genero) => (genero === 'F' ? 'Ministra' : genero === 'M' ? 'Ministro' : 'Ministro(a)')

// Tarjeta de una célula con su ministro, lugar, horario y botón para unirse por WhatsApp
const Celula = ({ celula, redil }) => {
  const mensaje = `Hola, quisiera más información sobre la célula "${celula.nombre}" del ${redil.nombre}`
  return (
    <div className="bg-white dark:bg-brand-navy-dark/60 border border-slate-200 dark:border-brand-blue/30 rounded-xl p-4 hover:border-brand-gold dark:hover:border-brand-gold transition-colors duration-300 flex flex-col justify-between">
      <div>
        <h5 className="font-bold text-slate-800 dark:text-white text-sm mb-2 transition-colors duration-300">{celula.nombre}</h5>
        <div className="space-y-1.5 text-xs text-slate-600 dark:text-gray-300 transition-colors duration-300">
          <p className="flex items-center gap-2">
            <Icono d={iconos.persona} className="w-3.5 h-3.5 texto-dorado" />
            <span>{titulo(celula.genero)}: <strong className="font-medium text-slate-800 dark:text-white">{celula.ministro}</strong></span>
          </p>
          {celula.lugar && (
            <p className="flex items-center gap-2">
              <Icono d={iconos.ubicacion} className="w-3.5 h-3.5 texto-dorado" />
              <span>{celula.lugar}</span>
            </p>
          )}
          {celula.horario && (
            <p className="flex items-center gap-2">
              <Icono d={iconos.reloj} className="w-3.5 h-3.5 texto-dorado" />
              <span>{celula.horario}</span>
            </p>
          )}
        </div>
      </div>
      <a
        href={whatsappConMensaje(mensaje)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-center block bg-slate-100 hover:bg-linear-to-r hover:from-logo-gold-claro hover:to-logo-gold-oscuro hover:text-brand-navy-dark text-slate-700 dark:bg-brand-blue dark:text-white dark:hover:text-brand-navy-dark text-[11px] font-semibold py-2 px-3 rounded-lg transition-all duration-300"
      >
        Unirme a esta célula
      </a>
    </div>
  )
}

// Bloque de un redil con su ministro y la cuadrícula de sus células
const Redil = ({ redil }) => (
  <div id={`redil-${redil.id}`} className="scroll-mt-28 bg-slate-50 dark:bg-brand-blue/10 border border-slate-200 dark:border-brand-blue/20 rounded-2xl p-5 transition-colors duration-300">
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
          <Icono d={iconos.casa} className="w-5 h-5 texto-dorado" />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 dark:text-white transition-colors duration-300">
            {redil.nombre}
            {redil.territorio && <span className="texto-dorado"> · {redil.territorio}</span>}
          </h4>
          {redil.ministro && (
            <p className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
              {titulo(redil.genero)} a cargo: <span className="font-semibold text-slate-700 dark:text-slate-200">{redil.ministro}</span>
            </p>
          )}
          {redil.comprende && (
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
              <Icono d={iconos.ubicacion} className="w-3.5 h-3.5 texto-dorado" />
              <span>Comprende: <span className="font-semibold text-slate-700 dark:text-slate-200">{redil.comprende}</span></span>
            </p>
          )}
        </div>
      </div>
      {redil.celulas.length > 0 && (
        <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 dark:bg-purple-500/10 dark:border-purple-400/30 dark:text-purple-300 text-xs font-semibold">
          {plural(redil.celulas.length, 'Célula', 'Células')}
        </span>
      )}
    </div>
    {redil.celulas.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {redil.celulas.map((celula) => (
          <Celula key={celula.nombre} celula={celula} redil={redil} />
        ))}
      </div>
    ) : (
      <p className="text-sm text-slate-500 dark:text-gray-400">Muy pronto publicaremos las células de este redil.</p>
    )}
  </div>
)

// Zona desplegable: al tocarla muestra u oculta sus rediles
const Zona = ({ zona, abierta, onToggle }) => (
  <div
    id={`zona-${zona.id}`}
    className={`scroll-mt-28 bg-white dark:bg-brand-blue/10 border rounded-3xl shadow-sm dark:shadow-none transition-all duration-300 ${
      abierta ? 'border-brand-gold/60 shadow-md' : 'border-slate-200 dark:border-brand-blue/30 hover:shadow-md'
    }`}
  >
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={abierta}
      className="w-full text-left p-5 sm:p-7 flex flex-col md:flex-row md:items-center gap-4 cursor-pointer"
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
          <Icono d={iconos.ubicacion} className="w-7 h-7 texto-dorado" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{zona.nombre}</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[11px] font-bold">
              {zona.tipo}
            </span>
          </div>
          {zona.descripcion && (
            <p className="mt-1 text-sm text-slate-500 dark:text-gray-400 transition-colors duration-300">{zona.descripcion}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <div className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-brand-blue/40 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">{titulo(zona.genero)} de zona</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-white flex items-center justify-center gap-1.5 transition-colors duration-300">
            <Icono d={iconos.persona} className="w-3.5 h-3.5 text-purple-500" />
            {zona.ministro}
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-400/30 dark:text-blue-300 text-xs font-semibold">
          {plural(zona.resumen.rediles, 'Redil', 'Rediles')}
        </span>
        <span className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 dark:bg-purple-500/10 dark:border-purple-400/30 dark:text-purple-300 text-xs font-semibold">
          {plural(zona.resumen.celulas, 'Célula', 'Células')}
        </span>
        <Icono
          d={iconos.flecha}
          className={`w-5 h-5 text-slate-400 ml-auto md:ml-2 transition-transform duration-300 ${abierta ? 'rotate-90' : ''}`}
        />
      </div>
    </button>

    {abierta && (
      <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-1 space-y-5 border-t border-slate-100 dark:border-brand-blue/20">
        <div className="h-1" />
        {zona.rediles.length > 0 ? (
          zona.rediles.map((redil) => <Redil key={redil.id} redil={redil} />)
        ) : (
          <p className="text-center text-sm text-slate-500 dark:text-gray-400 py-6">
            Muy pronto publicaremos los rediles y células de esta zona.
          </p>
        )}
      </div>
    )}
  </div>
)

/**
 * Sección "Nuestros Rediles y Células" (ancla #celulas). Los datos salen de src/data/rediles.js.
 * Varias zonas pueden estar abiertas a la vez.
 */
const RedilesCelulas = () => {
  const [abiertas, setAbiertas] = useState([])
  const { hash } = useLocation()
  const destinoPendiente = useRef(null)

  // Si se llega con un enlace como /misiones#zona-2 o /misiones#redil-2 (menú "Buscar mi grupo"
  // del Inicio), abre esa zona y baja hasta ella o hasta el redil
  useEffect(() => {
    const [, tipo, numero] = hash.match(/^#(zona|redil)-(\d+)$/) || []
    const id = Number(numero)
    const zona = zonas.find((z) => (tipo === 'zona' ? z.id === id : z.rediles.some((r) => r.id === id)))
    if (!zona) return
    destinoPendiente.current = hash.slice(1)
    setAbiertas((prev) => (prev.includes(zona.id) ? prev : [...prev, zona.id]))
  }, [hash])

  useEffect(() => {
    const destino = destinoPendiente.current && document.getElementById(destinoPendiente.current)
    if (!destino) return
    destino.scrollIntoView({ behavior: 'smooth' })
    destinoPendiente.current = null
  }, [abiertas, hash])

  const alternar = (id) =>
    setAbiertas((prev) => (prev.includes(id) ? prev.filter((z) => z !== id) : [...prev, id]))

  return (
    <section id="celulas" className="mt-20 scroll-mt-28">

      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-base font-semibold texto-dorado uppercase tracking-wider">Estructura Organizativa</h2>
        <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Nuestros Rediles y Células</p>
        <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light transition-colors duration-300">
          Trabajamos organizados por Zonas, Rediles y Células familiares. Abre tu zona, encuentra tu grupo y conéctate para adorar y compartir en familia durante la semana.
        </p>
        <div className="h-1 w-20 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="space-y-5">
        {zonas.map((zona) => (
          <Zona key={zona.id} zona={zona} abierta={abiertas.includes(zona.id)} onToggle={() => alternar(zona.id)} />
        ))}
      </div>

    </section>
  )
}

export default RedilesCelulas
