import { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

// Clave con la que se recuerda el tema elegido en el navegador
const CLAVE_TEMA = 'vsl-theme'

/**
 * Provee el tema (claro u oscuro) a toda la aplicación.
 * Agrega o quita la clase "dark" en <html>, que es la que usa Tailwind para el modo oscuro,
 * y guarda la elección en localStorage para la próxima visita.
 */
export const ThemeProvider = ({ children }) => {
  // Al cargar, usa el tema guardado o el claro por defecto
  const [theme, setTheme] = useState(() => localStorage.getItem(CLAVE_TEMA) || 'light')

  // Cada vez que cambia el tema, lo aplica a la página y lo guarda
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(CLAVE_TEMA, theme)
  }, [theme])

  // Cambia entre claro y oscuro
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
