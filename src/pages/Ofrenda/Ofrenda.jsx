import { useState } from 'react'
import logoZinli from '../../assets/metodos-pago/zinli.png'
import { contacto } from '../../data/contacto'

// Mientras sea true, la página muestra el aviso "en construcción" en vez de los métodos de pago
const EN_CONSTRUCCION = true

// Logos de marca (Zelle y Binance tomados de Simple Icons, simpleicons.org)
const LogoMarca = ({ d, fondo, color }) => (
  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: fondo }}>
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d={d} />
    </svg>
  </div>
)

// Ícono dorado de teléfono para Pago Móvil (no tiene logo de marca propio)
const LogoPagoMovil = () => (
  <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  </div>
)

// Métodos para ofrendar. Para completar uno, cambia "Por rellenar" por el dato real.
// "copiar": el valor que se copia al tocar el botón (sin guiones ni espacios, si hace falta).
// "estado": etiqueta opcional junto al título (ej. "Por crear"); bórrala cuando ya no aplique.
const POR_RELLENAR = 'Por rellenar'

const metodos = [
  {
    nombre: 'Pago Móvil',
    descripcion: 'Desde cualquier banco en Venezuela.',
    logo: <LogoPagoMovil />,
    datos: [
      { etiqueta: 'Banco', valor: 'Provincial (0108)', copiar: '0108' },
      { etiqueta: 'Teléfono', valor: '0412-4687901', copiar: '04124687901' },
      { etiqueta: 'Cédula', valor: '22.224.161', copiar: '22224161' },
    ],
  },
  {
    nombre: 'Zelle',
    descripcion: 'Transferencias desde Estados Unidos.',
    logo: <LogoMarca fondo="#6D1ED4" color="#FFFFFF" d="M13.559 24h-2.841a.483.483 0 0 1-.483-.483v-2.765H5.638a.667.667 0 0 1-.666-.666v-2.234a.67.67 0 0 1 .142-.412l8.139-10.382h-7.25a.667.667 0 0 1-.667-.667V3.914c0-.367.299-.666.666-.666h4.23V.483c0-.266.217-.483.483-.483h2.841c.266 0 .483.217.483.483v2.765h4.323c.367 0 .666.299.666.666v2.137a.67.67 0 0 1-.141.41l-8.19 10.481h7.665c.367 0 .666.299.666.666v2.477a.667.667 0 0 1-.666.667h-4.32v2.765a.483.483 0 0 1-.483.483Z" />,
    datos: [
      { etiqueta: 'Correo', valor: POR_RELLENAR },
      { etiqueta: 'Titular', valor: POR_RELLENAR },
    ],
  },
  {
    nombre: 'Binance',
    descripcion: 'Envío en USDT por Binance Pay.',
    logo: <LogoMarca fondo="#1E2026" color="#F0B90B" d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6595 4.6356-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7164L18.5682 12l2.6924-2.7164zm-9.272.001l2.7163 2.6914-2.7164 2.7174v-.001L9.2721 12l2.7164-2.7154zm-9.2722-.001L5.4088 12l-2.6914 2.6924L0 12l2.7164-2.7164zM11.9885.0115l7.353 7.329-2.7174 2.7154-4.6356-4.6356-4.6355 4.6595-2.7174-2.7154 7.353-7.353z" />,
    datos: [
      { etiqueta: 'Pay ID', valor: POR_RELLENAR },
      { etiqueta: 'Correo', valor: POR_RELLENAR },
    ],
  },
  {
    nombre: 'Zinli',
    descripcion: 'Billetera digital en dólares.',
    logo: <img src={logoZinli} alt="" className="w-12 h-12 rounded-lg shrink-0 shadow-sm" />,
    estado: 'Por crear',
    datos: [
      { etiqueta: 'Correo', valor: POR_RELLENAR },
    ],
  },
]

// Botón que copia un dato al portapapeles y muestra "¡Copiado!" por 2 segundos
const BotonCopiar = ({ texto }) => {
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      // Algunos navegadores bloquean el portapapeles; el dato sigue visible para copiarlo a mano
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      className="text-xs font-semibold px-2.5 py-1 rounded-md border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 transition-colors duration-300 shrink-0"
      aria-label={`Copiar ${texto}`}
    >
      {copiado ? '¡Copiado!' : 'Copiar'}
    </button>
  )
}

// Aviso que se muestra mientras EN_CONSTRUCCION sea true
const EnConstruccion = () => (
  <div className="bg-slate-50 dark:bg-brand-navy-dark min-h-[70vh] flex items-center justify-center py-16 sm:py-24 px-4 transition-colors duration-300">
    <div className="max-w-lg w-full text-center bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-8 sm:p-12 shadow-md transition-colors duration-300">
      <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mx-auto mb-6">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h2 className="text-base font-semibold texto-dorado uppercase tracking-wider">Ofrenda</h2>
      <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Página en Construcción</p>
      <div className="h-1 w-20 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro mx-auto mt-4 rounded-full"></div>
      <p className="mt-6 text-sm text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
        Estamos preparando esta sección. Mientras tanto, si deseas ofrendar, escríbenos por WhatsApp y con gusto te daremos los datos.
      </p>
      <a
        href={contacto.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro text-brand-navy-dark font-bold py-2.5 px-6 rounded-md shadow-md hover:brightness-110 transition-all duration-300 text-sm"
      >
        Escríbenos por WhatsApp
      </a>
    </div>
  </div>
)

/**
 * Página de Ofrenda: tarjetas con los datos de cada método de pago y botón para enviar el comprobante.
 */
const Ofrenda = () => {
  if (EN_CONSTRUCCION) return <EnConstruccion />

  return (
    <div className="bg-slate-50 dark:bg-brand-navy-dark min-h-screen py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold texto-dorado uppercase tracking-wider">Ofrenda</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Siembra en la Obra de Dios</p>
          <div className="h-1 w-20 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-sm text-slate-600 dark:text-gray-300 italic leading-relaxed transition-colors duration-300">
            "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."
            <span className="block not-italic font-semibold texto-dorado mt-2">2 Corintios 9:7</span>
          </p>
        </div>

        {/* Payment methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metodos.map((metodo) => (
            <div
              key={metodo.nombre}
              className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-6 sm:p-8 shadow-md transition-colors duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                {metodo.logo}
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 flex-wrap transition-colors duration-300">
                    {metodo.nombre}
                    {metodo.estado && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold">
                        {metodo.estado}
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 transition-colors duration-300">{metodo.descripcion}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {metodo.datos.map((dato) => {
                  const pendiente = dato.valor === POR_RELLENAR
                  return (
                    <li
                      key={dato.etiqueta}
                      className="flex items-center justify-between gap-3 border-t border-slate-100 dark:border-brand-blue/30 pt-3"
                    >
                      <div className="min-w-0">
                        <h4 className="text-xs font-semibold text-slate-400 dark:text-gray-400 transition-colors duration-300">{dato.etiqueta}</h4>
                        <p className={`text-base font-semibold break-all transition-colors duration-300 ${pendiente ? 'text-slate-400 dark:text-gray-500 italic font-normal' : 'text-slate-800 dark:text-white'}`}>
                          {dato.valor}
                        </p>
                      </div>
                      {!pendiente && <BotonCopiar texto={dato.copiar ?? dato.valor} />}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Confirmation note */}
        <div className="mt-10 bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6 text-center">
          <p className="text-sm text-slate-700 dark:text-gray-200 transition-colors duration-300">
            Al realizar tu ofrenda, envíanos el comprobante por WhatsApp para confirmarla.
          </p>
          <a
            href={contacto.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro text-brand-navy-dark font-bold py-2.5 px-6 rounded-md shadow-md hover:brightness-110 transition-all duration-300 text-sm"
          >
            Enviar comprobante
          </a>
        </div>
      </div>
    </div>
  )
}

export default Ofrenda
