import { useRef, Fragment } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { estudio, llaves, lecciones } from '../../data/llavesDelReino'

const iconoLlave = 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
const iconoDescarga = 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'

// Convierte **texto** en negrita
const conFormato = (texto) =>
  texto.split(/(\*\*[^*]+\*\*)/g).map((parte, i) =>
    parte.startsWith('**') && parte.endsWith('**') ? (
      <strong key={i} className="font-semibold text-slate-900 dark:text-white">{parte.slice(2, -2)}</strong>
    ) : (
      parte
    )
  )

// Ícono SVG de línea a partir de la ruta "d"
const Icono = ({ d, className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
  </svg>
)

// Devuelve el marcador de un elemento de lista: "1)", "a)" o null (viñeta)
const marcadorDe = (tipo, i) => {
  if (tipo === 'numero') return `${i + 1})`
  if (tipo === 'letra') return `${String.fromCharCode(97 + i)})`
  return null
}

// Lista numerada, con letras o con viñetas; cada elemento puede tener una sublista
const Lista = ({ marcador, items }) => (
  <ul className="space-y-3 my-5">
    {items.map((item, i) => {
      // Ojo: los textos traen su propio método .sub(), por eso se revisa el tipo
      const texto = typeof item === 'string' ? item : item.texto
      const sub = typeof item === 'string' ? null : item.sub
      const marca = marcadorDe(marcador, i)
      return (
        <li key={i} className="flex gap-3">
          {marca ? (
            <span className="font-bold texto-dorado shrink-0 min-w-6">{marca}</span>
          ) : (
            <span className="mt-2.5 w-1.5 h-1.5 rotate-45 bg-brand-gold shrink-0" aria-hidden="true"></span>
          )}
          <div className="flex-1">
            {conFormato(texto)}
            {sub && (
              <ul className="mt-2 space-y-2">
                {sub.map((subitem, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 rotate-45 bg-brand-gold/60 shrink-0" aria-hidden="true"></span>
                    <span>{conFormato(subitem)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      )
    })}
  </ul>
)

// Pasaje bíblico: un texto corrido o varios versículos numerados
const Cita = ({ referencia, texto, versos }) => (
  <figure className="my-6 rounded-r-xl border-l-4 border-brand-gold bg-amber-50/70 dark:bg-brand-blue/30 px-5 py-4 sm:px-6 transition-colors duration-300">
    <figcaption className="mb-2 text-xs font-bold uppercase tracking-[0.2em] texto-dorado">{referencia}</figcaption>
    <blockquote className="font-serif italic text-[0.95rem] sm:text-base leading-relaxed text-slate-700 dark:text-gray-200">
      {versos ? (
        versos.map(([n, t]) => (
          <span key={n} className="block mb-1 last:mb-0">
            <sup className="not-italic font-sans font-bold text-[0.65rem] texto-dorado mr-1">{n}</sup>
            {conFormato(t)}
          </span>
        ))
      ) : (
        <p>“{conFormato(texto)}”</p>
      )}
    </blockquote>
  </figure>
)

// Botones de las cuatro llaves; cada uno lleva a su lección
const LasCuatroLlaves = ({ alElegir }) => (
  <div className="my-8 space-y-3">
    {llaves.map((llave, i) => (
      <Fragment key={llave.numero}>
        {i === 3 && <p className="text-center font-serif italic texto-dorado py-1">Y hay una cuarta que se añade.</p>}
        <button
          type="button"
          onClick={() => alElegir(llave.leccion)}
          className="group w-full flex items-stretch rounded-xl overflow-hidden border border-slate-200 dark:border-brand-blue/40 text-left hover:border-brand-gold/60 transition-colors duration-300"
        >
          <span className={`w-24 sm:w-28 shrink-0 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider ${i === 3 ? 'bg-brand-gold text-brand-navy-dark' : 'bg-brand-blue text-brand-gold-light'}`}>
            {llave.numero} llave
          </span>
          <span className="flex-1 px-4 py-3 bg-white dark:bg-brand-blue/15 text-sm sm:text-base font-semibold uppercase text-slate-800 dark:text-white transition-colors duration-300">
            {llave.nombre}
          </span>
          <span className="hidden sm:flex items-center px-4 bg-white dark:bg-brand-blue/15 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
            <Icono d="M9 5l7 7-7 7" className="w-4 h-4" />
          </span>
        </button>
      </Fragment>
    ))}
  </div>
)

// Dibuja un bloque de la lección según su tipo (ver la lista de tipos en src/data/llavesDelReino.js)
const Bloque = ({ bloque, alElegir }) => {
  switch (bloque.tipo) {
    case 'titulo':
      return <h3 className="mt-12 mb-4 first:mt-0 text-2xl sm:text-[1.7rem] font-bold text-slate-800 dark:text-white transition-colors duration-300">{bloque.texto}</h3>
    case 'subtitulo':
      return <h4 className="mt-8 mb-3 font-serif text-lg font-bold texto-dorado">{bloque.texto}</h4>
    case 'p':
      return <p className="my-4">{conFormato(bloque.texto)}</p>
    case 'cita':
      return <Cita referencia={bloque.ref} texto={bloque.texto} versos={bloque.versos} />
    case 'lista':
      return <Lista marcador={bloque.marcador} items={bloque.items} />
    case 'destacado':
      return <p className="my-8 text-center font-serif text-xl sm:text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{bloque.texto}</p>
    case 'etiquetas':
      return (
        <div className="my-5 flex flex-wrap gap-2">
          {bloque.items.map((item) => (
            <span key={item} className="px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-sm font-semibold text-slate-800 dark:text-white transition-colors duration-300">
              {item}
            </span>
          ))}
        </div>
      )
    case 'llaves':
      return <LasCuatroLlaves alElegir={alElegir} />
    case 'cambio':
      return (
        <div className="my-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center">
          <div className="space-y-3">
            {bloque.filas.map(([antes]) => (
              <div key={antes} className="rounded-xl bg-brand-blue px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-white">{antes}</div>
            ))}
          </div>
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-gray-300 py-2">
            Y a partir de hoy<br />
            <span className="texto-dorado text-sm">voy a:</span>
            <Icono d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-5 h-5 mx-auto mt-1 text-brand-gold rotate-90 md:rotate-0" />
          </div>
          <div className="space-y-3">
            {bloque.filas.map(([, despues]) => (
              <div key={despues} className="rounded-xl border-l-4 border-brand-gold bg-amber-50/70 dark:bg-brand-blue/30 px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-slate-800 dark:text-white transition-colors duration-300">{despues}</div>
            ))}
          </div>
        </div>
      )
    case 'nombre':
      return (
        <div className="my-8 mx-auto max-w-md rounded-2xl border border-brand-gold/30 bg-white dark:bg-brand-blue/15 divide-y divide-slate-100 dark:divide-brand-blue/30 transition-colors duration-300">
          {['Padre', 'Hijo', 'Espíritu Santo'].map((persona) => (
            <div key={persona} className="flex items-center justify-between gap-4 px-6 py-4">
              <span className="text-sm text-slate-600 dark:text-gray-300">El nombre del {persona} es</span>
              <span className="font-serif text-2xl font-bold texto-dorado">JESÚS</span>
            </div>
          ))}
        </div>
      )
    case 'tabla':
      return (
        <div className="my-8">
          <h4 className="mb-4 text-center font-serif text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{bloque.titulo}</h4>
          {/* En celular: tarjetas */}
          <div className="space-y-3 md:hidden">
            {bloque.filas.map((fila) => (
              <div key={fila[0]} className="rounded-xl border border-slate-200 dark:border-brand-blue/40 bg-white dark:bg-brand-blue/15 p-4 text-sm transition-colors duration-300">
                <p className="font-bold texto-dorado">{fila[0]}</p>
                <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                  {bloque.columnas.slice(1).map((columna, i) => (
                    <Fragment key={columna}>
                      <dt className="text-slate-500 dark:text-gray-400">{columna}</dt>
                      <dd className="text-slate-800 dark:text-white">{fila[i + 1]}</dd>
                    </Fragment>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          {/* En pantallas grandes: tabla */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200 dark:border-brand-blue/40">
            <table className="w-full text-sm text-left">
              <thead className="bg-brand-blue text-brand-gold-light text-xs uppercase tracking-wider">
                <tr>
                  {bloque.columnas.map((columna) => (
                    <th key={columna} scope="col" className="px-4 py-3 font-semibold">{columna}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-brand-blue/30">
                {bloque.filas.map((fila) => (
                  <tr key={fila[0]} className="bg-white odd:bg-amber-50/50 dark:bg-brand-blue/10 dark:odd:bg-brand-blue/25 transition-colors duration-300">
                    {fila.map((celda, i) => (
                      <td key={i} className={`px-4 py-3 ${i === 0 ? 'font-bold texto-dorado whitespace-nowrap' : i === 4 ? 'font-semibold text-slate-800 dark:text-white' : 'text-slate-600 dark:text-gray-300'}`}>
                        {celda}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    case 'definicion':
      return (
        <div className="my-6 rounded-xl border border-brand-gold/50 bg-amber-50/70 dark:bg-brand-blue/30 px-5 py-4 transition-colors duration-300">
          <span className="font-serif font-bold uppercase texto-dorado">{bloque.termino}: </span>
          <span className="italic">{bloque.texto}</span>
        </div>
      )
    case 'columnas':
      return (
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {bloque.items.map((col) => (
            <div key={col.titulo} className="rounded-xl overflow-hidden border border-slate-200 dark:border-brand-blue/40 bg-white dark:bg-brand-blue/15 transition-colors duration-300">
              <p className="bg-brand-blue px-4 py-3 text-center font-serif font-bold uppercase text-brand-gold-light">{col.titulo}</p>
              <ul className="p-4 space-y-2 text-sm">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Icono d="M5 13l4 4L19 7" className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    case 'cierre':
      return (
        <div className="mt-12 text-center">
          <p className="texto-dorado tracking-[0.5em]" aria-hidden="true">✦ ✦ ✦</p>
          <p className="mt-3 font-serif text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">¿No es esto grandioso?</p>
          <p className="font-serif text-2xl italic font-bold texto-dorado">“¡Es maravilloso!”</p>
          <p className="mt-1 font-serif text-3xl font-bold text-slate-800 dark:text-white transition-colors duration-300">“Jesucristo te ama”</p>
        </div>
      )
    default:
      return null
  }
}

/**
 * Página del estudio "Las llaves del Reino de los Cielos".
 * La lección abierta se guarda en la URL (?leccion=2), así se puede compartir el enlace directo.
 */
const LlavesDelReino = () => {
  const [params, setParams] = useSearchParams()
  const lectura = useRef(null)

  const numero = Number(params.get('leccion'))
  const actual = numero >= 1 && numero <= lecciones.length ? numero - 1 : 0
  const leccion = lecciones[actual]

  const irA = (indice) => {
    setParams(indice === 0 ? {} : { leccion: String(indice + 1) })
    lectura.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-slate-50 dark:bg-brand-navy-dark min-h-screen transition-colors duration-300">

      {/* Portada del estudio */}
      {/* La portada siempre es azul: la clase "dark" hace que el texto dorado use el tono claro también en modo claro */}
      <section className="dark relative overflow-hidden bg-brand-blue text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(231,196,86,0.18),transparent_60%)]" aria-hidden="true"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <Link to="/formacion" className="inline-flex items-center gap-1 text-xs font-semibold text-gray-300 hover:text-brand-gold-light transition-colors">
            <Icono d="M15 19l-7-7 7-7" className="w-4 h-4" />
            Formación
          </Link>
          <p className="mt-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold-light">Estudio bíblico · {estudio.nivel}</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
            Las llaves del Reino<br />
            <span className="texto-dorado">de los Cielos</span>
          </h1>
          <p className="mt-5 font-serif italic text-brand-gold-light">{estudio.lema}</p>
          <p className="text-xs text-gray-400 mt-1">{estudio.lemaRef}</p>
          <Icono d={iconoLlave} className="w-12 h-12 mx-auto mt-8 text-brand-gold-light" />
          {estudio.pdf && (
            <a
              href={estudio.pdf}
              download
              className="mt-8 inline-flex items-center gap-2 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              <Icono d={iconoDescarga} />
              Descargar PDF
            </a>
          )}
        </div>
      </section>

      <div ref={lectura} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-24">
        <div className="lg:grid lg:grid-cols-[16rem_1fr] lg:gap-10">

          {/* Índice de lecciones */}
          <nav aria-label="Lecciones del estudio" className="mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-wider texto-dorado mb-3">Lecciones</p>
              <ol className="flex flex-col gap-2">
                {lecciones.map((l, i) => (
                  <li key={l.titulo}>
                    <button
                      type="button"
                      onClick={() => irA(i)}
                      aria-current={i === actual ? 'step' : undefined}
                      className={`w-full text-left rounded-xl border px-4 py-3 transition-colors duration-300 ${
                        i === actual
                          ? 'border-brand-gold bg-white dark:bg-brand-blue/40 shadow-sm'
                          : 'border-slate-200 dark:border-brand-blue/30 bg-white/60 dark:bg-brand-blue/10 hover:border-brand-gold/50'
                      }`}
                    >
                      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${i === actual ? 'bg-brand-gold text-white' : 'bg-brand-gold/10 text-slate-700 dark:text-gray-200'}`}>{i + 1}</span>
                        <span className="texto-dorado">{l.etiqueta}</span>
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-slate-800 dark:text-white leading-snug">{l.titulo}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* Lección */}
          <article className="min-w-0 bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-6 sm:p-10 shadow-sm dark:shadow-none text-slate-700 dark:text-gray-200 leading-relaxed transition-colors duration-300">
            <header className="mb-8 pb-6 border-b border-slate-100 dark:border-brand-blue/30">
              <p className="text-xs font-bold uppercase tracking-[0.25em] texto-dorado">
                Lección {actual + 1} de {lecciones.length} · {leccion.etiqueta}
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{leccion.titulo}</h2>
              <div className="h-1 w-16 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro mt-4 rounded-full"></div>
            </header>

            <div className="[&>h3:first-child]:mt-0">
              {leccion.bloques.map((bloque, i) => (
                <Bloque key={i} bloque={bloque} alElegir={irA} />
              ))}
            </div>

            {/* Navegación entre lecciones */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-brand-blue/30 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
              {actual > 0 ? (
                <button type="button" onClick={() => irA(actual - 1)} className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-brand-blue text-slate-800 dark:text-white hover:border-brand-gold hover:text-brand-gold font-semibold px-5 py-3 rounded-full transition-colors duration-300 text-sm">
                  <Icono d="M15 19l-7-7 7-7" className="w-4 h-4" />
                  Anterior
                </button>
              ) : <span />}
              {actual < lecciones.length - 1 ? (
                <button type="button" onClick={() => irA(actual + 1)} className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 text-sm">
                  Siguiente: {lecciones[actual + 1].etiqueta}
                  <Icono d="M9 5l7 7-7 7" className="w-4 h-4" />
                </button>
              ) : (
                <Link to="/contacto" className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 text-sm">
                  Quiero dar el siguiente paso
                  <Icono d="M9 5l7 7-7 7" className="w-4 h-4" />
                </Link>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default LlavesDelReino
