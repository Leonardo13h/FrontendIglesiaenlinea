import { useState, useEffect } from "react";
import { obtenerTestimonios, guardarTestimonio, reducirFoto } from "../../../services/testimonios";

// Cuántos testimonios se ven antes de "Ver más"
const VISIBLES = 3;
const MAX_CARACTERES = 500;

// Valores iniciales del formulario
const formularioVacio = { nombre: "", apellido: "", valoracion: 0, comentario: "", foto: "" };

const claseCampo =
  "w-full bg-slate-50 dark:bg-brand-navy-dark border border-slate-200 dark:border-brand-blue/40 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-gold text-sm transition-all duration-300";
const claseEtiqueta =
  "block text-[11px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors duration-300";

const rutaEstrella =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z";

// Estrella dorada (llena) o gris (vacía)
function StarIcon({ filled, className = "w-5 h-5" }) {
  return (
    <svg
      className={`${className} ${filled ? "text-brand-gold" : "text-slate-300 dark:text-gray-700"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d={rutaEstrella} />
    </svg>
  );
}

// Selector de 1 a 5 estrellas
function SelectorEstrellas({ valor, onChange }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Valoración" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={valor === n}
          aria-label={`${n} ${n === 1 ? "estrella" : "estrellas"}`}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          className="p-0.5 cursor-pointer hover:scale-110 transition-transform"
        >
          <StarIcon filled={n <= (hover || valor)} className="w-8 h-8" />
        </button>
      ))}
    </div>
  );
}

// Foto del autor, o sus iniciales si no subió foto
function Avatar({ testimonio, className = "w-12 h-12" }) {
  if (testimonio.foto) {
    return (
      <img
        src={testimonio.foto}
        alt={`${testimonio.nombre} ${testimonio.apellido}`}
        className={`${className} rounded-full object-cover ring-2 ring-brand-gold/20`}
      />
    );
  }
  return (
    <span
      className={`${className} rounded-full bg-brand-gold/15 text-brand-gold font-bold flex items-center justify-center ring-2 ring-brand-gold/20`}
      aria-hidden="true"
    >
      {(testimonio.nombre[0] || "") + (testimonio.apellido[0] || "")}
    </span>
  );
}

// Convierte una fecha ISO en texto como "octubre de 2026"
function fechaLegible(iso) {
  return new Date(iso).toLocaleDateString("es-VE", { month: "long", year: "numeric" });
}

/**
 * Formulario para publicar un testimonio (nombre, valoración, texto y foto opcional).
 * @param {Function} onGuardado Se llama con el testimonio guardado
 * @param {Function} onCancelar Se llama al tocar "Cancelar"
 */
function Formulario({ onGuardado, onCancelar }) {
  const [datos, setDatos] = useState(formularioVacio);
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const cambiar = (campo) => (e) => setDatos({ ...datos, [campo]: e.target.value });

  const elegirFoto = async (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;
    if (!archivo.type.startsWith("image/")) {
      setError("El archivo debe ser una imagen (JPG o PNG).");
      return;
    }
    try {
      setDatos({ ...datos, foto: await reducirFoto(archivo) });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const enviar = async (e) => {
    e.preventDefault();
    if (!datos.valoracion) {
      setError("Elige una valoración de 1 a 5 estrellas.");
      return;
    }
    setEnviando(true);
    try {
      const nuevo = await guardarTestimonio({
        nombre: datos.nombre.trim(),
        apellido: datos.apellido.trim(),
        valoracion: datos.valoracion,
        comentario: datos.comentario.trim(),
        foto: datos.foto,
      });
      onGuardado(nuevo);
    } catch (err) {
      setError(err.message);
      setEnviando(false);
    }
  };

  return (
    <form
      onSubmit={enviar}
      className="max-w-2xl mx-auto mb-14 bg-white dark:bg-brand-blue/15 border border-brand-gold/40 rounded-2xl p-6 sm:p-8 shadow-lg space-y-5 transition-colors duration-300"
    >
      <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Comparte tu testimonio</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="t-nombre" className={claseEtiqueta}>Nombre</label>
          <input id="t-nombre" required maxLength={40} value={datos.nombre} onChange={cambiar("nombre")} placeholder="Ej. Juan" className={claseCampo} />
        </div>
        <div>
          <label htmlFor="t-apellido" className={claseEtiqueta}>Apellido</label>
          <input id="t-apellido" required maxLength={40} value={datos.apellido} onChange={cambiar("apellido")} placeholder="Ej. Pérez" className={claseCampo} />
        </div>
      </div>

      <div>
        <span className={claseEtiqueta}>Valoración</span>
        <SelectorEstrellas valor={datos.valoracion} onChange={(n) => setDatos({ ...datos, valoracion: n })} />
      </div>

      <div>
        <label htmlFor="t-comentario" className={claseEtiqueta}>Tu testimonio</label>
        <textarea
          id="t-comentario"
          required
          rows={4}
          maxLength={MAX_CARACTERES}
          value={datos.comentario}
          onChange={cambiar("comentario")}
          placeholder="Cuéntanos lo que Dios ha hecho en tu vida…"
          className={`${claseCampo} resize-none`}
        />
        <p className="mt-1 text-right text-xs text-slate-400 dark:text-gray-500">
          {datos.comentario.length}/{MAX_CARACTERES}
        </p>
      </div>

      <div>
        <span className={claseEtiqueta}>Foto</span>
        <div className="flex items-center gap-4">
          {datos.foto ? (
            <img src={datos.foto} alt="Vista previa de tu foto" className="w-16 h-16 rounded-full object-cover ring-2 ring-brand-gold/40" />
          ) : (
            <span className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 dark:border-brand-blue/50 flex items-center justify-center text-slate-400 dark:text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
          )}
          <label className="cursor-pointer border border-slate-300 dark:border-brand-blue text-slate-700 dark:text-white hover:border-brand-gold hover:text-brand-gold font-semibold px-5 py-2.5 rounded-full text-sm transition-colors duration-300">
            {datos.foto ? "Cambiar foto" : "Subir foto"}
            <input type="file" accept="image/*" onChange={elegirFoto} className="sr-only" />
          </label>
        </div>
      </div>

      {error && <p className="text-sm font-semibold text-red-600 dark:text-red-400" role="alert">{error}</p>}

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancelar}
          className="px-6 py-3 rounded-full text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={enviando}
          className="bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 disabled:opacity-60 text-brand-navy-dark font-bold px-8 py-3 rounded-full shadow-md transition-all duration-300 text-sm cursor-pointer"
        >
          {enviando ? "Publicando…" : "Publicar testimonio"}
        </button>
      </div>
    </form>
  );
}

/**
 * Sección de testimonios: botón para compartir, formulario y tarjetas con "Ver más".
 * Los testimonios se guardan con src/services/testimonios.js.
 */
export default function TestimoniosSection() {
  const [testimonios, setTestimonios] = useState([]);
  const [verTodos, setVerTodos] = useState(false);
  const [formAbierto, setFormAbierto] = useState(false);
  const [gracias, setGracias] = useState(false);

  useEffect(() => {
    obtenerTestimonios().then(setTestimonios);
  }, []);

  const visibles = verTodos ? testimonios : testimonios.slice(0, VISIBLES);

  const alGuardar = (nuevo) => {
    setTestimonios([nuevo, ...testimonios]);
    setFormAbierto(false);
    setGracias(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brand-navy-dark border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Testimonios</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
            Una comunidad{" "}
            <span className="texto-dorado">unida en fe</span>
          </h2>
        </div>

        {/* Botón para compartir / mensaje de gracias */}
        {!formAbierto && (
          <div className="text-center mb-12">
            {gracias && (
              <p className="mb-4 texto-dorado font-semibold" role="status">¡Gracias por compartir tu testimonio! Dios te bendiga.</p>
            )}
            <button
              type="button"
              onClick={() => {
                setFormAbierto(true);
                setGracias(false);
              }}
              className="bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm cursor-pointer"
            >
              Comparte tu testimonio
            </button>
          </div>
        )}

        {formAbierto && <Formulario onGuardado={alGuardar} onCancelar={() => setFormAbierto(false)} />}

        {/* Tarjetas */}
        {testimonios.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-gray-400 transition-colors duration-300">
            Aún no hay testimonios. ¡Sé el primero en compartir lo que Dios ha hecho en tu vida!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibles.map((t) => (
              <article
                key={t.id}
                className="bg-slate-50 dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-8 flex flex-col gap-6 hover:border-brand-gold/40 transition-colors duration-300"
              >
                <div className="flex gap-1" aria-label={`${t.valoracion} de 5 estrellas`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < t.valoracion} />
                  ))}
                </div>

                <p className="text-slate-700 dark:text-gray-200 text-lg leading-relaxed flex-1 whitespace-pre-line break-words transition-colors duration-300">
                  “{t.comentario}”
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-brand-gold/10">
                  <Avatar testimonio={t} />
                  <div>
                    <p className="text-slate-800 dark:text-white font-semibold transition-colors duration-300">
                      {t.nombre} {t.apellido}
                    </p>
                    <p className="text-sm texto-dorado capitalize">{fechaLegible(t.fecha)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Ver más / ver menos */}
        {testimonios.length > VISIBLES && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVerTodos(!verTodos)}
              className="inline-flex items-center gap-2 border border-brand-gold/60 text-brand-gold hover:bg-linear-to-r hover:from-logo-gold-claro hover:to-logo-gold-oscuro hover:text-brand-navy-dark font-semibold px-6 py-3 rounded-full transition-colors duration-300 text-sm cursor-pointer"
            >
              {verTodos ? "Ver menos" : `Ver más testimonios (${testimonios.length - VISIBLES})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
