import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const horarios = [
    { nombre: 'Congregación de la Mañana', inicio: '9:40 AM', fin: '12:00 PM' },
    { nombre: 'Congregación de la Tarde', inicio: '5:40 PM', fin: '8:00 PM' },
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
        nombre: 'Ministerial',
        detalle: <>Cada creyente <Resaltado>sirviendo activamente</Resaltado> según los <Resaltado>dones que Dios le ha dado</Resaltado>.</>,
    },
    {
        nombre: 'Misionera',
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
                    <Encabezado etiqueta="Cada Domingo" titulo="Servicios Evangelísticos" />
                    <h4 className="text-center font-serif text-lg sm:text-xl leading-snug text-slate-700 dark:text-gray-300 mb-6 transition-colors duration-300">
                        Dos congregaciones,<br />
                        <Resaltado dorado>una sola visión, una sola Iglesia.</Resaltado>
                    </h4>
                    <ul className="space-y-4 mt-auto">
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

                {/* Card 3: Visión (Celular, Ministerial y Misionera) */}
                <div className={cardClass}>
                    <Encabezado etiqueta="Visión" titulo="Nuestro Sistema" />
                    <p className="text-center text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 transition-colors duration-300">
                        Somos una iglesia estructurada bajo el sistema <Resaltado>celular, ministerial y misionero</Resaltado>:
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
                    <Link
                        to="/misiones#celulas"
                        className="mt-auto self-center px-5 py-2 rounded-md border border-brand-blue dark:border-brand-gold-light text-brand-blue dark:text-brand-gold-light text-sm font-semibold hover:bg-brand-blue hover:text-white dark:hover:bg-linear-to-r dark:hover:from-logo-gold-claro dark:hover:to-logo-gold-oscuro dark:hover:text-brand-navy-dark transition-colors duration-300"
                    >
                        Buscar mi grupo
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServiciosSection
