import { createContext } from 'react'

// Contexto del tema (claro u oscuro). Lo llena <ThemeProvider> y se lee con el hook useTheme().
export const ThemeContext = createContext(null)
