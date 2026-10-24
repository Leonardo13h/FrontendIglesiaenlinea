import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Al cambiar de página, sube al inicio de la nueva página.
 * Si la dirección trae una sección (ej. /misiones#celulas), baja directamente hasta ella.
 * No dibuja nada en pantalla.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const destino = hash && document.getElementById(hash.slice(1))
    if (destino) destino.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
