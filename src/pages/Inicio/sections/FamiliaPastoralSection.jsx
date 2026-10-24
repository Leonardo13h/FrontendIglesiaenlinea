import { Fragment } from "react";
import { Link } from "react-router-dom";
import FotoPendiente from "../../../components/common/FotoPendiente";

// Fechas reales: los años se calculan solos y aumentan cada aniversario
const INICIO_MINISTERIO = new Date(2005, 8, 15); // 15 de septiembre de 2005: salida al ministerio
const INSTALACION_SAN_DIEGO = new Date(2006, 4, 13); // 13 de mayo de 2006: instalación en San Diego

/**
 * Años completos transcurridos desde una fecha (cuenta solo los aniversarios cumplidos).
 * @param {Date} fecha
 * @returns {number}
 */
function aniosDesde(fecha) {
  const hoy = new Date();
  let anios = hoy.getFullYear() - fecha.getFullYear();
  const yaCumplio =
    hoy.getMonth() > fecha.getMonth() ||
    (hoy.getMonth() === fecha.getMonth() && hoy.getDate() >= fecha.getDate());
  if (!yaCumplio) anios--;
  return anios;
}

const aniosMinisterio = aniosDesde(INICIO_MINISTERIO);
const aniosSanDiego = aniosDesde(INSTALACION_SAN_DIEGO);

const pastoralFamily = {
  // Mientras sea null se muestra el aviso "Muy pronto la foto de nuestra familia pastoral".
  // Para poner la foto: colócala en public/ y escribe aquí su nombre, por ejemplo "/FamilyPastoral.jpg"
  photo: null,
  badge: {
    title: "Familia",
    subtitle: "Iglesia VSL",
  },
  tag: "Nuestra Familia Pastoral",
  pastores: [
    { nombre: "Rvdo. Isrrael Tesorero", rol: "Pastor" },
    { nombre: "María Pérez de Tesorero", rol: "Esposa de Pastor" },
  ],
  paragraph:
    `Con ${aniosMinisterio} años en el ministerio y ${aniosSanDiego} de ellos en San Diego, nuestros pastores han dedicado su vida a guiar a la congregación con amor, visión y dedicación. Su corazón está en ver a cada persona crecer en su comunión con Dios.`,
  highlights: [
    {
      title: "Visión clara",
      description: "Guiar a cada persona a un encuentro genuino con Dios.",
    },
    {
      title: "Servicio con amor",
      description: `${aniosSanDiego} años pastoreando en San Diego con pasión y entrega.`,
    },
    {
      title: "Familia y comunidad",
      description: "Construyendo lazos que trascienden generaciones.",
    },
  ],
};

// Línea fina usada como separador
function Ornamento() {
  return <div className="mx-auto h-px w-24 bg-brand-gold/50" aria-hidden="true" />;
}

/**
 * Sección de la Familia Pastoral: foto, nombres de los pastores y puntos destacados.
 */
export default function FamiliaPastoralSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Encabezado */}
        <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase texto-dorado">
          {pastoralFamily.tag}
        </p>
        <div className="mt-4">
          <Ornamento />
        </div>

        {/* Foto */}
        <div className="relative mt-12 mx-auto max-w-2xl">
          <div className="relative rounded-md overflow-hidden shadow-md">
            <FotoPendiente
              src={pastoralFamily.photo}
              alt="Familia Pastoral"
              texto="Muy pronto la foto de nuestra familia pastoral"
              className="w-full h-[320px] sm:h-[460px]"
            />
          </div>

          {/* Distintivo centrado bajo la foto */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-brand-navy-dark border border-slate-200 dark:border-brand-navy-light rounded-md px-6 py-2.5 shadow-sm transition-colors duration-300">
            <p className="text-slate-800 dark:text-white text-sm font-semibold tracking-wide transition-colors duration-300">
              {pastoralFamily.badge.title}
              <span className="texto-dorado mx-2">·</span>
              <span className="texto-dorado font-normal">{pastoralFamily.badge.subtitle}</span>
            </p>
          </div>
        </div>

        {/* Nombres de los pastores, unidos por un "&" */}
        <h2 className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          {pastoralFamily.pastores.map((pastor, i) => (
            <Fragment key={pastor.nombre}>
              {i > 0 && (
                <span className="font-serif italic text-3xl sm:text-4xl texto-dorado">
                  <span className="sr-only">y</span>
                  <span aria-hidden="true">&amp;</span>
                </span>
              )}
              <span className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl text-slate-800 dark:text-white leading-tight lg:whitespace-nowrap transition-colors duration-300">
                  {pastor.nombre}
                </span>
                <span className="mt-2 text-[11px] font-semibold tracking-wider uppercase texto-dorado">
                  {pastor.rol}
                </span>
              </span>
            </Fragment>
          ))}
        </h2>

        {/* Párrafo */}
        <p className="mt-6 text-slate-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto italic transition-colors duration-300">
          “{pastoralFamily.paragraph}”
        </p>

        <div className="mt-10">
          <Ornamento />
        </div>

        {/* Puntos destacados */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-brand-gold/20">
          {pastoralFamily.highlights.map((item, i) => (
            <div key={i} className="px-6">
              <h3 className="font-serif text-xl texto-dorado">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Botón */}
        <div className="mt-14">
          <Link
            to="/nosotros"
            className="inline-block border border-brand-blue dark:border-brand-gold-light text-brand-blue dark:text-brand-gold-light hover:bg-brand-blue hover:text-white dark:hover:bg-linear-to-r dark:hover:from-logo-gold-claro dark:hover:to-logo-gold-oscuro dark:hover:text-brand-navy-dark font-semibold tracking-wider uppercase text-xs px-10 py-4 rounded-md transition-colors duration-300"
          >
            Conoce más de la iglesia
          </Link>
        </div>
      </div>
    </section>
  );
}
