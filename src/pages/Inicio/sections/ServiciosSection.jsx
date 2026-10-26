import { Fragment, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { zonas } from '../../../data/rediles'

// Zonas del menú "Buscar mi grupo", cada una con los rediles que ya tienen territorio cargado
const zonasMenu = zonas.map((z) => ({ ...z, rediles: z.rediles.filter((r) => r.territorio) }))

const claseOpcion = 'flex w-full items-center justify-between gap-2 px-4 py-2 text-sm text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-brand-blue/30 hover:text-brand-blue dark:hover:text-brand-gold-light transition-colors duration-300 cursor-pointer'

// Flecha del menú (abajo o a la derecha)
const Flecha = ({ girada = false, derecha = false }) => (
    <svg className={`w-4 h-4 shrink-0 transition-transform duration-300 ${girada ? 'rotate-180' : ''} ${derecha ? '-rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
)

// Botón "Buscar mi grupo": menú de zonas. Las zonas con territorios se despliegan y cada territorio
// lleva a su redil en Misiones; las demás llevan directo a la zona.
const MenuGrupos = () => {
    const [abierto, setAbierto] = useState(false)
    const [zonaAbierta, setZonaAbierta] = useState(null)
    const contenedor = useRef(null)
    const cerrar = () => {
        setAbierto(false)
        setZonaAbierta(null)
    }

    // Cerrar al tocar fuera del menú o con la tecla Escape
    useEffect(() => {
        if (!abierto) return
        const alTocarFuera = (e) => !contenedor.current?.contains(e.target) && cerrar()
        const alPresionar = (e) => e.key === 'Escape' && cerrar()
        document.addEventListener('mousedown', alTocarFuera)
        document.addEventListener('keydown', alPresionar)
        return () => {
            document.removeEventListener('mousedown', alTocarFuera)
            document.removeEventListener('keydown', alPresionar)
        }
    }, [abierto])

    return (
        <div ref={contenedor} className="relative mt-auto self-center">
            <button
                type="button"
                onClick={() => (abierto ? cerrar() : setAbierto(true))}
                aria-expanded={abierto}
                aria-haspopup="true"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-brand-blue dark:border-brand-gold-light text-brand-blue dark:text-brand-gold-light text-sm font-semibold hover:bg-brand-blue hover:text-white dark:hover:bg-linear-to-r dark:hover:from-logo-gold-claro dark:hover:to-logo-gold-oscuro dark:hover:text-brand-navy-dark transition-colors duration-300 cursor-pointer"
            >
                Buscar mi grupo
                <Flecha girada={abierto} />
            </button>

            {abierto && (
                <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 max-h-96 overflow-y-auto rounded-md border border-slate-200 dark:border-brand-navy-light bg-white dark:bg-brand-navy-dark shadow-xl py-2 text-left">
                    {zonasMenu.map((zona) =>
                        zona.rediles.length > 0 ? (
                            // Zona con territorios: se despliega
                            <div key={zona.id}>
                                <button
                                    type="button"
                                    onClick={() => setZonaAbierta(zonaAbierta === zona.id ? null : zona.id)}
                                    aria-expanded={zonaAbierta === zona.id}
                                    className={`${claseOpcion} font-semibold`}
                                >
                                    {zona.nombre}
                                    <Flecha girada={zonaAbierta === zona.id} />
                                </button>
                                {zonaAbierta === zona.id &&
                                    zona.rediles.map((redil) => (
                                        <Link key={redil.id} to={`/misiones#redil-${redil.id}`} onClick={cerrar} className={`${claseOpcion} pl-8`}>
                                            <span>
                                                <span className="texto-dorado">{redil.nombre}:</span> {redil.territorio}
                                            </span>
                                        </Link>
                                    ))}
                            </div>
                        ) : (
                            // Zona sin territorios cargados: lleva directo a la zona
                            <Link key={zona.id} to={`/misiones#zona-${zona.id}`} onClick={cerrar} className={`${claseOpcion} font-semibold`}>
                                {zona.nombre}
                                <Flecha derecha />
                            </Link>
                        )
                    )}
                    <Link
                        to="/misiones#celulas"
                        onClick={cerrar}
                        className="block mt-1 pt-3 pb-1 px-4 border-t border-slate-200 dark:border-brand-navy-light text-xs font-semibold text-brand-blue dark:text-brand-gold-light hover:underline"
                    >
                        Ver todas las zonas
                    </Link>
                </div>
            )}
        </div>
    )
}

const horarios = [
    { nombre: 'Servicio de la Mañana', inicio: '9:40 AM', fin: '12:00 PM' },
    { nombre: 'Servicio de la Tarde', inicio: '5:40 PM', fin: '8:00 PM' },
]

const pilares = ['Predicamos', 'Vivimos', 'Trabajamos']

// Texto destacado dentro de un párrafo
const Resaltado = ({ children, dorado = false }) => (
    <strong className={`font-semibold transition-colors duration-300 ${dorado ? 'texto-dorado' : 'text-slate-800 dark:text-white'}`}>
        {children}
    </strong>
)

const sistemas = [
    {
        nombre: 'Celular',
        detalle: <>Una iglesia que se <Resaltado>reúne en los templos</Resaltado> y se <Resaltado>multiplica en las casas</Resaltado>.</>,
    },
    {
        nombre: 'Multi-ministerial',
        detalle: <>Contamos con diversos ministerios <Resaltado>sirviendo activamente</Resaltado> según los <Resaltado>dones que Dios le ha dado</Resaltado>.</>,
    },
    {
        nombre: 'Misionero',
        detalle: <>Predicando el evangelio <Resaltado>a todas las naciones</Resaltado>, atendiendo el llamado de Dios a cualquier parte del mundo.</>,
    },
]

const cardClass = 'flex flex-col bg-white dark:bg-brand-blue/30 border border-slate-200 dark:border-brand-navy-light border-t-2 border-t-brand-gold rounded-md p-8 lg:p-10 transition-colors duration-300'

// Encabezado de cada tarjeta: etiqueta dorada pequeña y título
const Encabezado = ({ etiqueta, titulo }) => (
    <div className="text-center mb-6 pb-6 border-b border-slate-200 dark:border-brand-navy-light">
        <p className="text-[11px] font-semibold uppercase tracking-wider texto-dorado mb-2">
            {etiqueta}
        </p>
        <h3 className="font-serif text-2xl text-slate-800 dark:text-white transition-colors duration-300">{titulo}</h3>
    </div>
)

/**
 * Sección con tres tarjetas: horarios de los servicios, doctrina y sistema de la iglesia.
 */
const ServiciosSection = () => {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Encabezado de la sección */}
            <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-base font-semibold texto-dorado uppercase tracking-wider">IPUV San Diego</h2>
                <p className="mt-2 font-serif text-3xl sm:text-4xl text-slate-800 dark:text-white transition-colors duration-300">
                    ¡Tú eres la Iglesia!
                </p>
                <p className="mt-4 text-slate-600 dark:text-gray-400 transition-colors duration-300">
                   «Dios nos llama a edificar una Iglesia que no solo impacte a esta generación, sino que deje un legado en el último avivamiento de la historia.»
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Horarios */}
                <div className={cardClass}>
                    <Encabezado etiqueta="Servicio" titulo="Servicios Evangelísticos" />
                    <div className="text-center mb-6">
                        <h4 className="font-serif text-lg sm:text-xl leading-snug transition-colors duration-300">
                            <Resaltado dorado>Iglesia Pentecostal Unida de Venezuela en San Diego</Resaltado>
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-400 transition-colors duration-300">
                            Vinculados oficialmente a la organización{' '}
                            <a
                                href="https://ipuv.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-slate-800 dark:text-white underline decoration-brand-gold/60 underline-offset-4 hover:text-brand-gold transition-colors duration-300"
                            >
                                IPUV
                            </a>
                            .
                        </p>
                    </div>
                    <p className="mt-auto mb-4 text-center text-sm leading-relaxed text-slate-600 dark:text-gray-400 transition-colors duration-300">
                        Cada domingo celebramos <Resaltado>dos servicios</Resaltado> en los siguientes horarios:
                    </p>
                    <ul className="space-y-4">
                        {horarios.map((h) => (
                            <li key={h.nombre} className="rounded-md border border-slate-200 dark:border-brand-navy-light bg-slate-50 dark:bg-brand-navy-dark/40 px-5 py-4 text-center transition-colors duration-300">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">{h.nombre}</p>
                                <p className="mt-1 font-serif text-xl text-slate-800 dark:text-white">
                                    {h.inicio} <span className="texto-dorado mx-1">—</span> {h.fin}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Card 2: Doctrina */}
                <div className={cardClass}>
                    <Encabezado etiqueta="Fundamento" titulo="Nuestra Doctrina" />
                    <blockquote className="text-center">
                        <p className="font-serif italic text-slate-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                            “<Resaltado dorado>Arrepentíos</Resaltado>, y <Resaltado dorado>bautícese</Resaltado> cada uno de vosotros <Resaltado dorado>en el nombre de Jesucristo</Resaltado> para perdón de los pecados; y recibiréis el <Resaltado dorado>don del Espíritu Santo</Resaltado>.”
                        </p>
                        <footer className="mt-3 text-xs font-semibold uppercase tracking-wider texto-dorado">Hechos 2:38</footer>
                    </blockquote>
                    <p className="mt-6 text-center text-sm leading-relaxed text-slate-600 dark:text-gray-400 transition-colors duration-300">
                        Proclamamos el <Resaltado>Evangelio de Jesucristo</Resaltado>, fundamentado en las enseñanzas del <Resaltado>libro de los Hechos</Resaltado>.
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-brand-blue/30 flex justify-center items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 transition-colors duration-300">
                        {pilares.map((p, i) => (
                            <Fragment key={p}>
                                {i > 0 && <span className="texto-dorado">·</span>}
                                <span>{p}</span>
                            </Fragment>
                        ))}
                    </div>
                </div>

                {/* Card 3: Estructura (Celular, Ministerial y Misionera) */}
                <div className={cardClass}>
                    <Encabezado etiqueta="Estructura" titulo="Nuestro Sistema" />
                    <p className="text-center text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 transition-colors duration-300">
                        Somos una iglesia estructurada bajo el sistema <Resaltado>celular, multi-ministerial y misionero</Resaltado>:
                    </p>
                    <ul className="space-y-4 mb-6">
                        {sistemas.map((s) => (
                            <li key={s.nombre} className="pl-4 border-l-2 border-brand-gold/60">
                                <div>
                                    <p className="font-serif text-lg text-slate-800 dark:text-white transition-colors duration-300">{s.nombre}</p>
                                    <p className="text-sm text-slate-600 dark:text-gray-400 transition-colors duration-300">{s.detalle}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <MenuGrupos />
                </div>
            </div>
        </section>
    )
}

export default ServiciosSection
