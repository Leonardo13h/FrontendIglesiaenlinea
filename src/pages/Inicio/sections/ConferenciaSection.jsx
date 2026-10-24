import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Copias livianas de "fondo (1).png": horizontal para computadora y vertical para celular
import fondoWeb from "../../../assets/images/conferencia/conferencia-fondo-web.jpg";
import fondoMovil from "../../../assets/images/conferencia/conferencia-fondo-movil.jpg";
// Los datos del evento se editan en src/data/conferencia.js
import { conferencia } from "../../../data/conferencia";

/**
 * Calcula cuánto falta para una fecha.
 * @param {string} fecha Fecha en formato ISO (ej. "2026-10-29T17:30:00")
 * @returns {{dias:number, horas:number, minutos:number, segundos:number} | null} null si la fecha ya pasó
 */
function getTiempoRestante(fecha) {
  const diff = new Date(fecha) - new Date();
  if (diff <= 0) return null;
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

const detalles = [
  {
    texto: conferencia.fechaTexto,
    icono:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    texto: conferencia.horaTexto,
    enlace: conferencia.cronogramaUrl,
    icono: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    texto: conferencia.lugar,
    icono:
      "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

/**
 * Sección de la próxima conferencia con cuenta regresiva. Los datos salen de src/data/conferencia.js.
 */
export default function ConferenciaSection() {
  const [restante, setRestante] = useState(() =>
    getTiempoRestante(conferencia.inicio),
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setRestante(getTiempoRestante(conferencia.inicio));
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const contador = restante && [
    { valor: restante.dias, etiqueta: "Días" },
    { valor: restante.horas, etiqueta: "Horas" },
    { valor: restante.minutos, etiqueta: "Min" },
    { valor: restante.segundos, etiqueta: "Seg" },
  ];

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Banner de fondo a todo el ancho */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={fondoWeb} />
          <img src={fondoMovil} alt="" className="w-full h-full object-cover object-top md:object-center" />
        </picture>
        {/* Capa oscura para que el texto se lea sobre la imagen */}
        <div className="absolute inset-0 bg-brand-navy-dark/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Información */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase texto-dorado">
            {conferencia.tag}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {conferencia.titulo}
          </h2>

          <p className="-mt-3 font-serif text-2xl sm:text-3xl italic texto-dorado">
            “{conferencia.lema}”
          </p>

          <p className="text-gray-200 text-lg leading-relaxed">
            {conferencia.descripcion}
          </p>

          {/* Fecha, hora y lugar */}
          <ul className="flex flex-col gap-3">
            {detalles.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-100">
                <span className="texto-dorado shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icono}
                    />
                  </svg>
                </span>
                {item.enlace ? (
                  <a
                    href={item.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 decoration-brand-gold-light/60 hover:text-brand-gold-light transition-colors duration-300"
                  >
                    Ver {item.texto.toLowerCase()}
                  </a>
                ) : (
                  <span className="font-medium">{item.texto}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Cuenta regresiva */}
          {contador ? (
            <div className="grid grid-cols-4 gap-3 max-w-md">
              {contador.map((item) => (
                <div
                  key={item.etiqueta}
                  className="border border-white/20 rounded-md py-3 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-semibold text-white tabular-nums">
                    {String(item.valor).padStart(2, "0")}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-gray-300">
                    {item.etiqueta}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="texto-dorado font-semibold">
              ¡El evento ya comenzó! Te esperamos.
            </p>
          )}

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark transition-colors duration-300"
            >
              Quiero asistir
            </Link>
            <Link
              to="/eventos"
              className="inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors duration-300"
            >
              Ver detalles del evento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
