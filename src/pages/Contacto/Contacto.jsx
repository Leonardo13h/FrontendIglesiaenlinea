import { useState } from 'react'
import UbicacionSatelital from '../../components/common/UbicacionSatelital'
import { contacto } from '../../data/contacto'

/**
 * Página de Contacto: datos de la iglesia, formulario de mensaje y ubicación.
 * Nota: el envío del formulario es simulado (muestra el mensaje de "recibido" pero no lo envía a ningún lado).
 */
const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated contact form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 4000)
  }

  return (
    <div className="bg-slate-50 dark:bg-brand-navy-dark min-h-screen py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold texto-dorado uppercase tracking-wider">Contacto</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Comunícate con Nosotros</p>
          <div className="h-1 w-20 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Box 1: Info */}
            <div className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-6 sm:p-8 shadow-md transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center space-x-2 transition-colors duration-300">
                <span className="w-1.5 h-6 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro rounded-full"></span>
                <span>Datos de Contacto</span>
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 dark:text-gray-400 transition-colors duration-300">Teléfono / WhatsApp</h4>
                    <a href={contacto.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-white hover:text-brand-gold text-base font-semibold transition-colors duration-300">
                      {contacto.telefonoTexto}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 dark:text-gray-400 transition-colors duration-300">Correo Electrónico</h4>
                    <a href={`mailto:${contacto.correo}`} className="text-slate-800 dark:text-white hover:text-brand-gold text-sm font-semibold transition-colors break-all duration-300">
                      {contacto.correo}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 dark:text-gray-400 transition-colors duration-300">Dirección del Templo</h4>
                    <p className="text-slate-700 dark:text-white text-sm font-medium leading-relaxed transition-colors duration-300">
                      {contacto.direccion}.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Meeting Times */}
            <div className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-6 sm:p-8 shadow-md transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2 transition-colors duration-300">
                <span className="w-1.5 h-6 bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro rounded-full"></span>
                <span>Horario de Cultos</span>
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-xs mb-4 transition-colors duration-300">Te esperamos los domingos para celebrar juntos en la presencia de Dios:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-brand-blue/10 border border-slate-100 dark:border-brand-blue/20 rounded-xl p-3 text-center transition-colors duration-300">
                  <span className="text-[10px] text-slate-400 dark:text-gray-500 font-semibold block uppercase transition-colors duration-300">Culto de Mañana</span>
                  <span className="text-lg font-bold texto-dorado mt-1 block">9:40 AM</span>
                </div>
                <div className="bg-slate-50 dark:bg-brand-blue/10 border border-slate-100 dark:border-brand-blue/20 rounded-xl p-3 text-center transition-colors duration-300">
                  <span className="text-[10px] text-slate-400 dark:text-gray-500 font-semibold block uppercase transition-colors duration-300">Culto de Tarde</span>
                  <span className="text-lg font-bold texto-dorado mt-1 block">5:40 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-3xl p-8 shadow-lg relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl"></div>
            
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 flex items-center space-x-2 relative z-10 transition-colors duration-300">
              <span>¿Necesitas oración o tienes dudas?</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mb-6 font-light transition-colors duration-300">Escríbenos tu petición o consulta y nuestro equipo ministerial se pondrá en contacto contigo.</p>

            {submitted ? (
              <div className="bg-brand-gold/15 border border-brand-gold/30 rounded-2xl p-8 text-center animate-fade-in py-16">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-300">Mensaje Recibido</h4>
                <p className="text-xs text-slate-600 dark:text-gray-300 max-w-sm mx-auto font-light leading-relaxed transition-colors duration-300">
                  Gracias por escribirnos. Tu mensaje ha sido enviado exitosamente. Dios te bendiga grandemente.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors duration-300">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-slate-50 dark:bg-brand-navy-dark border border-slate-200 dark:border-brand-blue/40 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-gold text-xs transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors duration-300">WhatsApp / Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. +58 412-1234567"
                      className="w-full bg-slate-50 dark:bg-brand-navy-dark border border-slate-200 dark:border-brand-blue/40 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-gold text-xs transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors duration-300">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ej. juan@correo.com"
                    className="w-full bg-slate-50 dark:bg-brand-navy-dark border border-slate-200 dark:border-brand-blue/40 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-gold text-xs transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors duration-300">Tu Petición o Mensaje</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe aquí tu petición de oración o consulta..."
                    className="w-full bg-slate-50 dark:bg-brand-navy-dark border border-slate-200 dark:border-brand-blue/40 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-gold text-xs transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold py-3.5 px-6 rounded-xl shadow-md transition-all duration-300 text-sm hover:-translate-y-0.5 cursor-pointer"
                >
                  Enviar Mensaje / Petición
                </button>
              </form>
            )}

          </div>

        </div>

        {/* GPS Google Maps Section */}
        <div className="mt-16">
          <UbicacionSatelital />
        </div>

      </div>
    </div>
  )
}

export default Contacto
