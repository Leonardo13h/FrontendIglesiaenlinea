import FotoPendiente from "../../components/common/FotoPendiente";

// Organigrama del sistema celular, de arriba hacia abajo.
// Cada nivel es una fila: arriba los que guían, abajo los más numerosos.
// PENDIENTE: reemplazar "Nombre" por los nombres reales y agregar o quitar personas.
// "foto": ruta dentro de /public (ej. "/equipo/nombre.jpg"). Déjala en null mientras no haya foto.
const niveles = [
  {
    nivel: "Pastor",
    descripcion: "Guía y cubre a toda la iglesia.",
    personas: [{ nombre: "Rvdo. Isrrael Tesorero", cargo: "Pastor", foto: null }],
  },
  {
    nivel: "Ancianos",
    descripcion: "Apoyan al pastor en el cuidado y la dirección de la iglesia.",
    personas: [
      { nombre: "Nombre", cargo: "Anciano", foto: null },
      { nombre: "Nombre", cargo: "Anciano", foto: null },
    ],
  },
  {
    nivel: "Ministros de zona",
    descripcion: "Cada uno supervisa una zona formada por varios rediles.",
    personas: [
      { nombre: "Nombre", cargo: "Ministro de zona", foto: null },
      { nombre: "Nombre", cargo: "Ministro de zona", foto: null },
      { nombre: "Nombre", cargo: "Ministro de zona", foto: null },
    ],
  },
  {
    nivel: "Ministros de redil",
    descripcion: "Cada uno acompaña a un grupo de células.",
    personas: [
      { nombre: "Nombre", cargo: "Ministro de redil", foto: null },
      { nombre: "Nombre", cargo: "Ministro de redil", foto: null },
      { nombre: "Nombre", cargo: "Ministro de redil", foto: null },
      { nombre: "Nombre", cargo: "Ministro de redil", foto: null },
    ],
  },
  {
    nivel: "Ministros de célula",
    descripcion: "El corazón del sistema: reúnen a la iglesia en las casas.",
    personas: [
      { nombre: "Nombre", cargo: "Ministro de célula", foto: null },
      { nombre: "Nombre", cargo: "Ministro de célula", foto: null },
      { nombre: "Nombre", cargo: "Ministro de célula", foto: null },
      { nombre: "Nombre", cargo: "Ministro de célula", foto: null },
      { nombre: "Nombre", cargo: "Ministro de célula", foto: null },
      { nombre: "Nombre", cargo: "Ministro de célula", foto: null },
    ],
  },
];

/**
 * Organigrama del sistema celular: una fila por nivel, del pastor a los ministros de célula.
 */
export default function EstructuraIglesia() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brand-navy-dark border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Sistema celular</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
            Estructura de{" "}
            <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">la iglesia</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-gray-400 transition-colors duration-300">
            Una iglesia que se reúne en el templo y se multiplica en las casas. Mientras más cerca de la base,
            más ministros y más familias alcanzadas.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {niveles.map((fila, i) => (
            <div key={fila.nivel} className="w-full flex flex-col items-center">
              {/* Conector entre niveles */}
              {i > 0 && <div className="w-px h-10 bg-brand-gold/40" />}

              <p className="text-xs font-bold uppercase tracking-wider texto-dorado">{fila.nivel}</p>
              <p className="mt-1 mb-4 text-xs text-slate-500 dark:text-gray-400 text-center transition-colors duration-300">{fila.descripcion}</p>

              <div className="flex flex-wrap justify-center gap-4">
                {fila.personas.map((persona, j) => (
                  <div
                    key={j}
                    className="w-36 sm:w-40 bg-slate-50 dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-4 flex flex-col items-center text-center transition-colors duration-300"
                  >
                    <FotoPendiente
                      src={persona.foto}
                      alt={persona.nombre}
                      texto=""
                      className="w-16 h-16 rounded-full ring-2 ring-brand-gold/30 mb-3"
                    />
                    <p className="text-sm font-bold text-slate-800 dark:text-white transition-colors duration-300">{persona.nombre}</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">{persona.cargo}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
