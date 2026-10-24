import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

/**
 * Devuelve el tema actual y la función para cambiarlo.
 * @returns {{ theme: 'light' | 'dark', toggleTheme: () => void }}
 */
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un <ThemeProvider>')
  }
  return context
}
