import { useState } from "react";

// Video de testimonios que se reproduce en el banner al tocar "Ver video". Lleva UNO de estos dos campos:
//   "youtubeId": código del video en YouTube (en https://www.youtube.com/watch?v=ABC123 es "ABC123").
//   "archivo":   video guardado en la carpeta public/testimonios, por ejemplo "/testimonios/testimonios.mp4".
// "titulo": se muestra debajo del botón "Ver video" (opcional).
// "fondo": imagen del banner (si se deja vacío y el video es de YouTube, se usa su miniatura).
const video = {
  youtubeId: "QQiSrijiLS4",
  archivo: "",
  titulo: "Dios cambió mi historia · Testimonio de Sofía Bracho",
  fondo: "/testimonios/sofia-bracho.jpg",
};

const hayVideo = Boolean(video.youtubeId || video.archivo);
// "hqdefault" existe en todos los videos de YouTube (la versión "maxresdefault" no siempre)
const fondo = video.fondo || (video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` : "");

// Reproductor dentro del banner (empieza solo, porque la persona ya tocó "Ver video")
function Reproductor() {
  if (video.youtubeId) {
    return (
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
        title={video.titulo || "Testimonios"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <video className="w-full h-full rounded-xl bg-black" src={video.archivo} controls autoPlay>
      Tu navegador no puede reproducir este video.
    </video>
  );
}

// Botón de reproducir: círculo con ondas doradas que laten y crece al pasar el mouse
function BotonReproducir({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="group mt-10 inline-flex items-center gap-5 cursor-pointer">
      <span className="relative flex w-20 h-20 items-center justify-center">
        {/* Ondas que laten */}
        <span className="absolute inset-0 rounded-full bg-brand-gold/40 animate-ping" aria-hidden="true" />
        <span className="absolute -inset-2 rounded-full border-2 border-brand-gold/40 animate-pulse" aria-hidden="true" />
        {/* Círculo */}
        <span className="relative w-20 h-20 rounded-full border-4 border-white bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-black/30 group-hover:scale-110 group-hover:border-brand-gold group-hover:bg-brand-gold group-active:scale-95 transition-all duration-300">
          <svg className="w-9 h-9 ml-1 text-white group-hover:text-brand-navy-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="text-lg tracking-widest uppercase group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300">Ver video</span>
    </button>
  );
}

/**
 * Banner de testimonios: imagen oscura de fondo y botón "Ver video". Al tocarlo, los textos se ocultan
 * y el video se reproduce ahí mismo, dentro del banner.
 */
export default function TestimoniosSection() {
  const [reproduciendo, setReproduciendo] = useState(false);

  return (
    <section className="relative overflow-hidden bg-brand-navy-dark border-t border-slate-200 dark:border-brand-blue/20">
      {/* Fondo desenfocado: la imagen es pequeña y así no se nota pixelada al estirarse */}
      {fondo && <img src={fondo} alt="" className="absolute inset-0 w-full h-full object-cover object-[center_30%] blur-[6px] scale-110" loading="lazy" />}
      <div className={`absolute inset-0 transition-colors duration-500 ${reproduciendo ? "bg-black/85" : "bg-black/70"}`} aria-hidden="true" />

      {reproduciendo ? (
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="aspect-video shadow-2xl">
            <Reproductor />
          </div>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setReproduciendo(false)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cerrar video
            </button>
          </div>
        </div>
      ) : (
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-white">
          <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Testimonios</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Sanidades y{" "}
            <span className="texto-dorado">vidas transformadas</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80 font-light">
            Hombres y mujeres de nuestra iglesia cuentan cómo Dios los sanó, con evidencias médicas, y cómo Jesús cambió sus vidas.
          </p>

          {hayVideo ? (
            <>
              <BotonReproducir onClick={() => setReproduciendo(true)} />
              {video.titulo && <p className="mt-4 text-sm text-white/70 italic">{video.titulo}</p>}
            </>
          ) : (
            <p className="mt-10 text-sm font-semibold tracking-widest uppercase text-white/60">Video próximamente</p>
          )}
        </div>
      )}
    </section>
  );
}
