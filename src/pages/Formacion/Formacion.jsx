import { Link } from 'react-router-dom'
import { contacto } from '../../data/contacto'

/**
 * Página de Formación Ministerial: aviso del Aula Virtual y tarjetas de los cursos.
 * Los cursos con "ruta" tienen botón para comenzar; los demás se muestran bloqueados.
 */
const Formacion = () => {
  const courses = [
    {
      id: 1,
      title: 'Las llaves para entrar al Reino de los cielos',
      category: 'Doctrina',
      duration: '6 Lecciones',
      description: 'Los pasos fundamentales que debe dar todo ser humano que quiere entrar al reino de los cielos: arrepentimiento, bautismo en el nombre de Jesucristo, recibir el Espíritu Santo y perseverar hasta el fin.',
      status: 'Libre acceso',
      ruta: '/formacion/las-llaves-del-reino',
    },
    {
      id: 2,
      title: 'Mis primeros pasos',
      category: 'Discipulado',
      duration: '10 Lecciones',
      description: 'Principios prácticos y bíblicos para edificar y consolidar familias sólidas frente a los desafíos modernos.',
      status: 'Requiere suscripción',
    },
    {
      id: 3,
      title: 'La Casa de mi Padre',
      category: 'Vida Cristiana',
      duration: '12 Lecciones',
      description: 'Capacitación integral para nuevos líderes de células y rediles, enfocada en la visitación y el discipulado.',
      status: 'Requiere suscripción',
    },
  ]

  return (
    <div className="bg-slate-50 dark:bg-brand-navy-dark min-h-screen py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold texto-dorado uppercase tracking-wider">Capacitación</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Formación Ministerial VSL</p>
          <p className="mt-4 text-slate-600 dark:text-gray-200 max-w-2xl mx-auto text-sm sm:text-base font-light transition-colors duration-300">
            Prepárate para servir con excelencia. Nuestro instituto teológico provee cursos diseñados para desarrollar un carácter ministerial sólido, listos para predicar el evangelio en cualquier rincón del mundo.
          </p>
          <div className="h-1 w-20 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Info Banner About Future Platform */}
        <div className="bg-white dark:bg-brand-blue/40 border border-slate-200 dark:border-brand-gold/30 rounded-2xl p-6 sm:p-8 mb-16 max-w-4xl mx-auto shadow-sm dark:shadow-none backdrop-blur-sm transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-brand-gold/15 rounded-full flex items-center justify-center shrink-0 text-brand-gold">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-300">Próximamente: Aula Virtual VSL</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-200 leading-relaxed font-light transition-colors duration-300">
                Estamos construyendo una sección restringida con membresía mensual. Los miembros podrán acceder a todas las lecciones completas y guías de enseñanza en videos cortos de 5 a 10 minutos. Podrás ver los primeros dos videos de cada curso de forma gratuita para conocer nuestra metodología.
              </p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 hover:border-brand-gold/40 dark:hover:border-brand-gold/40 rounded-2xl p-6 flex flex-col justify-between shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Header tags */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded">
                    {course.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                    {course.duration}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-300">{course.title}</h4>
                <p className="text-xs text-slate-600 dark:text-gray-300 mb-6 font-light leading-relaxed transition-colors duration-300">{course.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-brand-blue/20 flex items-center justify-between transition-colors duration-300">
                <span className="text-[11px] font-semibold texto-dorado">
                  {course.status}
                </span>
                
                {course.ruta ? (
                  <Link
                    to={course.ruta}
                    className="inline-flex items-center gap-1.5 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-4 py-2 rounded-full shadow-sm transition-all duration-300 text-xs"
                  >
                    Comenzar estudio
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <svg className="w-5 h-5 text-slate-400 dark:text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Contenido bloqueado">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Academy CTA info */}
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs text-slate-600 dark:text-gray-400 mb-4 transition-colors duration-300">¿Deseas registrarte para el pre-lanzamiento o recibir guías impresas?</p>
          <a
            href={`mailto:${contacto.correo}?subject=Pre-Registro%20Formacion%20Ministerial`}
            className="inline-block bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-300 text-sm"
          >
            Solicitar Información
          </a>
        </div>


      </div>
    </div>
  )
}

export default Formacion

