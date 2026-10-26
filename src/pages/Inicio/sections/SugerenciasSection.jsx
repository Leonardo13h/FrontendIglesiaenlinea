import { useState } from "react";
import { enviarSugerencia } from "../../../services/correo";

const TIPOS = ["Diseño de la página", "Contenido o información", "Algo no funciona", "Otra idea"];
const MAX_CARACTERES = 800;

// Valores iniciales del formulario ("trampa" es el campo oculto contra robots)
const formularioVacio = { tipo: TIPOS[0], sugerencia: "", nombre: "", correo: "", trampa: false };

const claseCampo =
  "w-full bg-slate-50 dark:bg-brand-navy-dark border border-slate-200 dark:border-brand-blue/40 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-gold text-sm transition-all duration-300";
const claseEtiqueta =
  "block text-[11px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors duration-300";

/**
 * Sección de sugerencias: los visitantes proponen mejoras para la página
 * y llegan al correo de la iglesia (src/services/correo.js).
 */
export default function SugerenciasSection() {
  const [datos, setDatos] = useState(formularioVacio);
  const [estado, setEstado] = useState("listo"); // listo | enviando | enviado
  const [error, setError] = useState("");

  const cambiar = (campo) => (e) => setDatos({ ...datos, [campo]: e.target.value });

  const enviar = async (e) => {
    e.preventDefault();
    setEstado("enviando");
    setError("");
    try {
      await enviarSugerencia({
        ...datos,
        sugerencia: datos.sugerencia.trim(),
        nombre: datos.nombre.trim(),
        correo: datos.correo.trim(),
      });
      setDatos(formularioVacio);
      setEstado("enviado");
    } catch (err) {
      setError(err.message);
      setEstado("listo");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Sugerencias</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
            Ayúdanos a{" "}
            <span className="texto-dorado">mejorar</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-gray-300 font-light transition-colors duration-300">
            ¿Viste algo que podamos hacer mejor en esta página? Cuéntanos tu idea; la leeremos con atención.
          </p>
        </div>

        <div className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-6 sm:p-8 shadow-lg transition-colors duration-300">
          {estado === "enviado" ? (
            <div className="text-center py-10" role="status">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-300">¡Gracias por tu sugerencia!</h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 font-light transition-colors duration-300">
                La recibimos y la tendremos en cuenta. Dios te bendiga.
              </p>
              <button
                type="button"
                onClick={() => setEstado("listo")}
                className="mt-6 text-sm font-semibold text-brand-gold hover:underline cursor-pointer"
              >
                Enviar otra sugerencia
              </button>
            </div>
          ) : (
            <form onSubmit={enviar} className="space-y-5">
              {/* Campo oculto contra robots: las personas no lo ven */}
              <input
                type="checkbox"
                name="botcheck"
                checked={datos.trampa}
                onChange={(e) => setDatos({ ...datos, trampa: e.target.checked })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="s-tipo" className={claseEtiqueta}>¿Sobre qué es tu sugerencia?</label>
                <select id="s-tipo" value={datos.tipo} onChange={cambiar("tipo")} className={`${claseCampo} cursor-pointer`}>
                  {TIPOS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="s-sugerencia" className={claseEtiqueta}>Tu sugerencia</label>
                <textarea
                  id="s-sugerencia"
                  required
                  rows={5}
                  maxLength={MAX_CARACTERES}
                  value={datos.sugerencia}
                  onChange={cambiar("sugerencia")}
                  placeholder="Ej. Me gustaría ver los horarios de las células en la página…"
                  className={`${claseCampo} resize-none`}
                />
                <p className="mt-1 text-right text-xs text-slate-400 dark:text-gray-500">
                  {datos.sugerencia.length}/{MAX_CARACTERES}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="s-nombre" className={claseEtiqueta}>Nombre (opcional)</label>
                  <input id="s-nombre" maxLength={60} value={datos.nombre} onChange={cambiar("nombre")} placeholder="Ej. Juan Pérez" className={claseCampo} />
                </div>
                <div>
                  <label htmlFor="s-correo" className={claseEtiqueta}>Correo (opcional)</label>
                  <input
                    id="s-correo"
                    type="email"
                    maxLength={100}
                    value={datos.correo}
                    onChange={cambiar("correo")}
                    placeholder="Para responderte"
                    className={claseCampo}
                  />
                </div>
              </div>

              {error && <p className="text-sm font-semibold text-red-600 dark:text-red-400" role="alert">{error}</p>}

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={estado === "enviando"}
                  className="w-full sm:w-auto bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 disabled:opacity-60 text-brand-navy-dark font-bold px-8 py-3 rounded-full shadow-md transition-all duration-300 text-sm cursor-pointer"
                >
                  {estado === "enviando" ? "Enviando…" : "Enviar sugerencia"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
