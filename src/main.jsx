// Punto de entrada de la aplicación: monta <App /> dentro de #root (ver index.html)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Navegación entre páginas sin recargar */}
    <BrowserRouter>
      {/* Tema claro / oscuro disponible en toda la app */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
