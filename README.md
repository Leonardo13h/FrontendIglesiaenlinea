# Visión Sin Límites — Página web pública

Sitio web de la Iglesia Apostólica Visión Sin Límites (IPUV San Diego, Carabobo, Venezuela).

**Tecnologías:** React 19 · Vite 8 · Tailwind CSS 4 · React Router 7 · Oxlint

## Puesta en marcha

Requiere Node.js 20.19 o superior (lo exige Vite 8).

```bash
npm install          # instala las dependencias
cp .env.example .env # crea el archivo de configuración y complétalo
npm run dev          # servidor de desarrollo en http://localhost:5173
```

| Comando           | Qué hace                                                     |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo con recarga automática                |
| `npm run build`   | Genera la versión de producción en `dist/`                   |
| `npm run preview` | Sirve `dist/` localmente para revisarla antes de publicar    |
| `npm run lint`    | Revisa el código con Oxlint                                  |
| `npm run deploy`  | Sube `dist/` al hosting por FTP (correr `build` antes)       |

### Variables de entorno (`.env`)

| Variable             | Uso                                                              |
| -------------------- | ---------------------------------------------------------------- |
| `VITE_DASHBOARD_URL` | Dirección del sistema administrativo (botón "Entrar" del menú)  |
| `FTP_HOST`, `FTP_PORT`, `FTP_USER`, `FTP_PASSWORD` | Acceso FTP del hosting               |
| `FTP_REMOTE_ROOT`    | Carpeta del servidor donde se publica (ej. `/public_html`)      |

## Publicación

1. `npm run build`
2. `npm run deploy`, o subir manualmente el contenido de `dist/` al hosting.

El sitio es una SPA (una sola página con rutas en el navegador). El archivo
`public/.htaccess` redirige todas las rutas a `index.html` en servidores Apache.
En otro tipo de servidor (Nginx, etc.) hay que configurar esa misma regla.

## Estructura del proyecto

```
Frontend/
├── public/                   Archivos que se publican tal cual (se usan con rutas "/...")
│   ├── .htaccess             Redirección de rutas para Apache
│   ├── celula/               PDF e imagen de la enseñanza semanal de célula
│   └── imagesConferencia/    Afiches de las conferencias anteriores
├── recursos/originales/      Diseños originales y fotos sin uso (NO se publican)
├── src/
│   ├── main.jsx              Punto de entrada: monta la app con el router y el tema
│   ├── App.jsx               Estructura general y lista de rutas (páginas)
│   ├── index.css             Tailwind, colores de la marca, tipografías y utilidades
│   │
│   ├── assets/               Imágenes que se importan desde el código
│   │   ├── banderas/         Banderas de los países (flag-icons, licencia MIT)
│   │   ├── images/
│   │   │   ├── banner/       Fotos del carrusel del Inicio
│   │   │   ├── conferencia/  Fondo de la conferencia y fotos de los conferencistas
│   │   │   └── nosotros/     Letras "Sin Límites" de la portada de Nosotros
│   │   ├── logos/            Logo de la iglesia (versión azul y blanca)
│   │   └── metodos-pago/     Logos de los métodos de ofrenda
│   │
│   ├── components/
│   │   ├── layout/           Lo que aparece en todas las páginas
│   │   │   ├── TopNavbar.jsx         Franja superior (correo, teléfono, redes)
│   │   │   ├── Navbar.jsx            Menú principal y cambio de tema
│   │   │   ├── Footer.jsx            Pie de página
│   │   │   ├── WhatsAppFlotante.jsx  Botón flotante de WhatsApp
│   │   │   └── ScrollToTop.jsx       Sube al inicio al cambiar de página
│   │   └── common/           Piezas reutilizables
│   │       ├── Carrusel.jsx
│   │       ├── FotoPendiente.jsx     Recuadro mientras no hay foto
│   │       └── UbicacionSatelital.jsx
│   │
│   ├── context/              Tema claro/oscuro (ThemeContext + ThemeProvider)
│   ├── hooks/                useTheme(): lee y cambia el tema
│   ├── services/             testimonios.js: guardado de testimonios
│   ├── data/                 Contenido editable compartido entre páginas
│   │   ├── contacto.js       WhatsApp, correo, dirección, redes, enlace al sistema
│   │   ├── conferencia.js    Próxima conferencia: datos, programa y conferencistas
│   │   ├── rediles.js        Zonas, rediles y células
│   │   └── llavesDelReino.js Lecciones del estudio "Las llaves del Reino"
│   │
│   └── pages/                Una carpeta por página (en el orden del menú)
│       ├── Inicio/
│       │   ├── Inicio.jsx    Ordena las secciones del Inicio
│       │   └── sections/     Banner, Servicios, Familia Pastoral, Conferencia,
│       │                     Conferencias anteriores, Predicaciones, Testimonios
│       ├── Nosotros/         Nosotros.jsx + EstructuraIglesia.jsx (organigrama)
│       ├── Misiones/         Misiones.jsx (célula semanal) + RedilesCelulas.jsx
│       ├── Formacion/        Formacion.jsx (cursos) + LlavesDelReino.jsx (estudio)
│       ├── Eventos/          Eventos.jsx
│       ├── Contacto/         Contacto.jsx
│       └── Ofrenda/          Ofrenda.jsx
├── .env.example              Plantilla de variables de entorno
├── deploy.js                 Script de publicación por FTP
└── vite.config.js            Configuración de Vite (React + Tailwind)
```

### Rutas

| Ruta                             | Página                       |
| -------------------------------- | ---------------------------- |
| `/`                              | Inicio                       |
| `/nosotros`                      | Nosotros                     |
| `/misiones`                      | Misiones (`#celulas` baja a los rediles) |
| `/formacion`                     | Formación Ministerial        |
| `/formacion/las-llaves-del-reino`| Estudio (`?leccion=2` abre una lección) |
| `/eventos`                       | Eventos                      |
| `/contacto`                      | Contacto                     |
| `/ofrenda`                       | Ofrenda                      |
| `/mision`, `/grupos`             | Direcciones antiguas (redirigen) |

## Dónde se edita cada contenido

| Contenido                                  | Archivo                                              |
| ------------------------------------------ | ---------------------------------------------------- |
| Teléfono, WhatsApp, correo, redes sociales | `src/data/contacto.js`                               |
| Próxima conferencia y cuenta regresiva     | `src/data/conferencia.js`                            |
| Zonas, rediles y células                   | `src/data/rediles.js`                                |
| Enseñanza semanal de célula (y su PDF)     | `src/pages/Misiones/Misiones.jsx` + `public/celula/` |
| Predicaciones (videos de YouTube)          | `src/pages/Inicio/sections/PredicacionesSection.jsx` |
| Conferencias anteriores                    | `src/pages/Inicio/sections/HistorialConferenciasSection.jsx` + `public/imagesConferencia/` |
| Foto y datos de la familia pastoral        | `src/pages/Inicio/sections/FamiliaPastoralSection.jsx` |
| Organigrama de la iglesia                  | `src/pages/Nosotros/EstructuraIglesia.jsx`           |
| Cursos de formación                        | `src/pages/Formacion/Formacion.jsx`                  |
| Métodos de ofrenda / aviso "en construcción" | `src/pages/Ofrenda/Ofrenda.jsx` (`EN_CONSTRUCCION`) |
| Mostrar u ocultar testimonios              | `src/pages/Inicio/Inicio.jsx` (`MOSTRAR_TESTIMONIOS`) |
| Colores de la marca y tipografías          | `src/index.css`                                      |

## Convenciones

- **Componentes:** un componente por archivo, en PascalCase y con el mismo nombre que el archivo.
  Cada componente y función tiene un comentario que explica qué hace.
- **Estilos:** solo clases de Tailwind. Los colores de la marca (`brand-blue`, `brand-gold`,
  `logo-gold-claro`, etc.) y la utilidad `texto-dorado` están definidos en `src/index.css`.
- **Modo oscuro:** con la variante `dark:` de Tailwind. Se activa con la clase `dark` en `<html>`
  (ver `src/context/ThemeProvider.jsx`).
- **Datos:** el contenido que se cambia seguido va en una constante al inicio del archivo
  o en `src/data/`, separado del diseño.

## Pendientes conocidos

- **Formulario de Contacto:** el envío es simulado. Falta conectarlo a un servicio de correo o a un servidor.
- **Testimonios:** se guardan en el navegador de cada visitante (`localStorage`). Para que todos vean
  los mismos hay que reemplazar las funciones de `src/services/testimonios.js` por llamadas a un servidor.
- **Rediles:** las zonas 2 a 5 aún no tienen el detalle de sus rediles.
- **Ofrenda:** faltan los datos de Zelle, Binance y Zinli. La página está en modo "en construcción".
