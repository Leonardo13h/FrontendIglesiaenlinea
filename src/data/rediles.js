// Zonas, rediles y células. Los usa la sección "Rediles y Células" de Misiones.
// Fuente: sistema administrativo (adm.tuiglesiaenlinea.com), copiado a mano el 22/10/2026.
// PENDIENTE: más adelante estos datos vendrán directo de la base de datos.
//
// Solo van datos públicos: nada de reportes, asistencia ni miembros.
// "resumen" son los totales que muestra el sistema; "rediles" es el detalle que ya tenemos cargado.
// En los rediles, "comprende" (sectores que abarca) es opcional.
// En las células, "lugar" y "horario" son opcionales: si están vacíos no se muestran.
export const zonas = [
  {
    id: 1,
    nombre: 'Zona 1',
    tipo: 'Zona Territorial',
    descripcion: 'Comprende los Rediles 1, 2 y 3',
    ministro: 'Darsy Sánchez',
    resumen: { rediles: 3, celulas: 12 },
    rediles: [
      {
        id: 1,
        nombre: 'Redil 1',
        ministro: 'Leidy Gomez',
        comprende: 'San Diego - Magallanes, Valencey, La Esmeralda, Los Jarales',
        celulas: [
          { nombre: 'Más que Vencedores', lider: 'Eluz Perez', lugar: 'Magallanes parte alta', horario: '' },
          { nombre: 'Ganadores de Multitudes', lider: 'Vanessa Rodríguez', lugar: 'Valencey', horario: '' },
          { nombre: 'Célula Evangelística', lider: 'Silena Carabalis', lugar: 'Magallanes Calle B', horario: '' },
        ],
      },
      {
        id: 2,
        nombre: 'Redil 2',
        ministro: 'Noel Chacón',
        celulas: [
          { nombre: 'Elohim', lider: 'Felipe Molina', lugar: 'Los Parques', horario: '' },
          { nombre: 'Los Escogidos por Dios', lider: 'Fidelfy Ospino', lugar: 'Bocaina', horario: '' },
          { nombre: 'La Torre Fuerte', lider: 'Noel Chacón', lugar: 'Fundación Mendoza', horario: '' },
          { nombre: 'Célula Plaza de Toro', lider: 'Noel Chacón', lugar: 'Barrio El Carmen', horario: '' },
          { nombre: 'Célula Ricardo Urriera', lider: 'Noel Chacón', lugar: 'Ricardo Urriera', horario: '' },
        ],
      },
      {
        id: 3,
        nombre: 'Redil 3',
        ministro: 'Leonardo Jose Hernández Manganiello',
        celulas: [
          { nombre: 'Célula Familiar', lider: 'Lesbia Gomez', lugar: 'San Blas', horario: '' },
          { nombre: 'Llamados a Conquistar', lider: 'Leonardo Jose Hernández Manganiello', lugar: 'Casco Central', horario: '' },
          { nombre: 'Los Apasionados', lider: 'Carmen Ramirez', lugar: 'Centro/Norte', horario: '' },
          { nombre: 'Los Reedificadores', lider: 'Leonardo Jose Hernández Manganiello', lugar: 'Agua Blanca', horario: '' },
        ],
      },
    ],
  },
  {
    id: 2,
    nombre: 'Zona 2',
    tipo: 'Zona Territorial',
    descripcion: 'Comprende los Rediles 4, 5 y 6',
    ministro: 'José Petit',
    resumen: { rediles: 3, celulas: 14 },
    rediles: [], // PENDIENTE
  },
  {
    id: 3,
    nombre: 'Zona 3',
    tipo: 'Zona Territorial',
    descripcion: 'Comprende los Rediles 7, 8 y 9',
    ministro: 'Edgar Quintero',
    resumen: { rediles: 3, celulas: 13 },
    rediles: [], // PENDIENTE
  },
  {
    id: 4,
    nombre: 'Zona 4',
    tipo: 'Zona Territorial',
    descripcion: 'Comprende los Rediles 10, 11, 12 y 13',
    ministro: 'Octavio Silva',
    resumen: { rediles: 4, celulas: 12 },
    rediles: [], // PENDIENTE
  },
  {
    id: 5,
    nombre: 'Zona misionera Guayabo',
    tipo: 'Zona Territorial',
    descripcion: '',
    ministro: 'Marlon Seijas',
    resumen: { rediles: 3, celulas: 2 },
    rediles: [], // PENDIENTE
  },
]
