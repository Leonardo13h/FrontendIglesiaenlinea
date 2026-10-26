// Zonas, rediles y células. Los usa la sección "Rediles y Células" de Misiones.
// Fuente: sistema administrativo (adm.tuiglesiaenlinea.com), copiado a mano el 22/10/2026.
// PENDIENTE: más adelante estos datos vendrán directo de la base de datos.
//
// Solo van datos públicos: nada de reportes, asistencia ni miembros.
// "resumen" son los totales que muestra el sistema; "rediles" es el detalle que ya tenemos cargado.
// En los rediles, "territorio" es el nombre corto del sector (sale en el menú "Buscar mi grupo" del Inicio)
// y "comprende" (sectores que abarca) es opcional.
// En las células, "lugar" y "horario" son opcionales: si están vacíos no se muestran.
// "genero": 'F' muestra "Ministra", 'M' muestra "Ministro" (vacío muestra "Ministro(a)").
export const zonas = [
  {
    id: 1,
    nombre: 'Zona 1',
    tipo: 'Zona Territorial',
    descripcion: 'Comprende el Redil 1 (Magallanes), el Redil 2 (Fundación Mendoza) y el Redil 3 (Centro de Valencia).',
    ministro: 'Darsy Sánchez',
    genero: '',
    resumen: { rediles: 3, celulas: 12 },
    rediles: [
      {
        id: 1,
        nombre: 'Redil 1',
        territorio: 'Magallanes',
        ministro: 'Leidy Gómez',
        genero: '',
        comprende: 'San Diego: Magallanes, Valencey, La Esmeralda, Los Jarales',
        celulas: [
          { nombre: 'Más que Vencedores', ministro: 'Eluz Pérez', genero: '', lugar: 'Magallanes (parte alta)', horario: '' },
          { nombre: 'Ganadores de Multitudes', ministro: 'Vanessa Rodríguez', genero: '', lugar: 'Valencey', horario: '' },
          { nombre: 'Célula Evangelística', ministro: 'Silena Carabalis', genero: '', lugar: 'Magallanes, Calle B', horario: '' },
        ],
      },
      {
        id: 2,
        nombre: 'Redil 2',
        territorio: 'Fundación Mendoza',
        ministro: 'Noel Chacón',
        genero: '',
        celulas: [
          { nombre: 'Elohim', ministro: 'Felipe Molina', genero: '', lugar: 'Los Parques', horario: '' },
          { nombre: 'Los Escogidos por Dios', ministro: 'Fidelfy Ospino', genero: '', lugar: 'Bocaina', horario: '' },
          { nombre: 'La Torre Fuerte', ministro: 'Noel Chacón', genero: '', lugar: 'Fundación Mendoza', horario: '' },
          { nombre: 'Célula Plaza de Toro', ministro: 'Noel Chacón', genero: '', lugar: 'Barrio El Carmen', horario: '' },
          { nombre: 'Célula Ricardo Urriera', ministro: 'Noel Chacón', genero: '', lugar: 'Ricardo Urriera', horario: '' },
        ],
      },
      {
        id: 3,
        nombre: 'Redil 3',
        territorio: 'Centro de Valencia',
        ministro: 'Leonardo José Hernández Manganiello',
        genero: '',
        celulas: [
          { nombre: 'Célula Familiar', ministro: 'Lesbia Gómez', genero: '', lugar: 'San Blas', horario: '' },
          { nombre: 'Llamados a Conquistar', ministro: 'Leonardo José Hernández Manganiello', genero: '', lugar: 'Casco Central', horario: '' },
          { nombre: 'Los Apasionados', ministro: 'Carmen Ramírez', genero: '', lugar: 'Centro y Norte', horario: '' },
          { nombre: 'Los Reedificadores', ministro: 'Leonardo José Hernández Manganiello', genero: '', lugar: 'Agua Blanca', horario: '' },
        ],
      },
    ],
  },
  {
    id: 2,
    nombre: 'Zona 2',
    tipo: 'Zona Territorial',
    descripcion: 'Comprende el Redil 4 (Ciudadela, El Paraíso), el Redil 5 (Campo Solo) y el Redil 6 (Los Guayos).',
    ministro: 'José Petit',
    genero: '',
    resumen: { rediles: 3, celulas: 14 },
    // PENDIENTE: ministro a cargo de cada redil
    rediles: [
      {
        id: 4,
        nombre: 'Redil 4',
        territorio: 'Ciudadela, El Paraíso',
        ministro: '',
        genero: '',
        celulas: [
          { nombre: 'El Reencuentro', ministro: 'Aliu Colina', genero: '', lugar: 'Altos del Paraíso, Calle A, Naiwata', horario: '' },
          { nombre: 'El Gran Yo Soy', ministro: 'David Urbina', genero: '', lugar: 'Valles de Colina', horario: '' },
          { nombre: 'Haciendo Discípulos', ministro: 'Luis Alberto Contreras Castañeda', genero: '', lugar: 'Ciudadela y Campo Solo', horario: '' },
          { nombre: 'Portadores de Gloria', ministro: 'Luis Alberto Contreras Castañeda', genero: '', lugar: '', horario: '' },
        ],
      },
      {
        id: 5,
        nombre: 'Redil 5',
        territorio: 'Campo Solo',
        ministro: '',
        genero: '',
        celulas: [
          { nombre: 'Semillas de Vida', ministro: 'Gabriela Escudero', genero: '', lugar: 'Campo Solo 1', horario: '' },
          { nombre: 'Estableciendo el Reino', ministro: 'José Sánchez', genero: '', lugar: 'Campo Solo 4', horario: '' },
          { nombre: 'León de Judá', ministro: 'Yurilbet', genero: '', lugar: 'Campo Solo 3', horario: '' },
          { nombre: 'Más que Vencedores', ministro: 'Yohanina Salazar', genero: '', lugar: 'Campo Solo 2', horario: '' },
          { nombre: 'Jesús en mi Hogar', ministro: 'Ana de Pacheco', genero: '', lugar: 'Campo Solo 4', horario: '' },
          { nombre: 'La Bondad de Dios en mi Familia', ministro: 'Yerys Ranier Pacheco Páez', genero: '', lugar: 'Campo Solo 6', horario: '' },
          { nombre: 'Jóvenes de Impacto', ministro: 'Yohanina Salazar', genero: '', lugar: 'Campo Solo (parte baja)', horario: '' },
        ],
      },
      {
        id: 6,
        nombre: 'Redil 6',
        territorio: 'Los Guayos',
        ministro: '',
        genero: '',
        celulas: [
          { nombre: 'Célula Paraparal', ministro: 'José Petit', genero: '', lugar: 'Guayos Puente', horario: '' },
          { nombre: 'Guayos Plaza', ministro: 'Mariana Matute', genero: '', lugar: 'Guayos Plaza', horario: '' },
          { nombre: 'Guayos Plaza II', ministro: 'José Petit', genero: '', lugar: 'Los Guayos', horario: '' },
        ],
      },
    ],
  },
  {
    id: 3,
    nombre: 'Zona 3',
    tipo: 'Zona Territorial',
    descripcion: 'Comprende el Redil 7 (Monte Sinaí), el Redil 8 (Maco Maco) y el Redil 9 (Pueblo de San Diego).',
    ministro: 'Edgar Quintero',
    genero: '',
    resumen: { rediles: 3, celulas: 13 },
    // PENDIENTE: ministro a cargo de cada redil y las células del Redil 9
    rediles: [
      {
        id: 7,
        nombre: 'Redil 7',
        territorio: 'Monte Sinaí',
        ministro: '',
        genero: '',
        celulas: [
          { nombre: 'Establecidos en la Roca (Juvenil)', ministro: 'Ángel Colina', genero: '', lugar: 'Monte Sinaí 3', horario: '' },
          { nombre: 'Ríos de Agua Viva', ministro: 'Reina Carrasco', genero: '', lugar: 'Monte Sinaí 2', horario: '' },
          { nombre: 'Tiempo de Más', ministro: 'Norelys del Valle Tigrera Suárez', genero: '', lugar: 'Monte Mayor', horario: '' },
          { nombre: 'Emmanuel', ministro: 'Ángel Colina', genero: '', lugar: 'Monte Sinaí 1', horario: '' },
          { nombre: 'Renovación', ministro: 'Marilyn Contreras', genero: '', lugar: 'Monte Sinaí 4', horario: '' },
        ],
      },
      {
        id: 8,
        nombre: 'Redil 8',
        territorio: 'Maco Maco',
        ministro: '',
        genero: '',
        celulas: [
          { nombre: 'Conquistando Territorio', ministro: 'Alexander Tigrero', genero: '', lugar: 'Maco Maco (parte alta)', horario: '' },
          { nombre: 'Derribando Gigantes', ministro: 'Jacquelin Pérez', genero: '', lugar: 'Majaguyal 1', horario: '' },
          { nombre: 'Expandiendo la Visión', ministro: 'Francisca Tigrera', genero: '', lugar: 'Maco Maco (parte baja)', horario: '' },
          { nombre: 'Llamados para Impactar', ministro: 'Jacquelin Pérez', genero: '', lugar: 'Majaguyal 2', horario: '' },
        ],
      },
      { id: 9, nombre: 'Redil 9', territorio: 'Pueblo de San Diego', ministro: '', genero: '', celulas: [] },
    ],
  },
  {
    id: 4,
    nombre: 'Zona 4',
    tipo: 'Zona Territorial',
    descripcion: 'Comprende el Redil 10 (La Cumaca), el Redil 11 (Lomas de la Hacienda), el Redil 12 (Naguanagua) y el Redil 13 (Naguanagua II).',
    ministro: 'Octavio Silva',
    genero: '',
    resumen: { rediles: 4, celulas: 12 },
    // PENDIENTE: ministro a cargo de cada redil
    rediles: [
      {
        id: 10,
        nombre: 'Redil 10',
        territorio: 'La Cumaca',
        ministro: '',
        genero: '',
        celulas: [
          { nombre: 'Bendecida', ministro: 'Elizabeth Yupanqui', genero: '', lugar: 'Calles Los Contadores y La Josefina', horario: '' },
          { nombre: 'Jehová Nissi', ministro: 'Francis Hernández', genero: '', lugar: 'Calles Lambedero y El Sanchero', horario: '' },
        ],
      },
      {
        id: 11,
        nombre: 'Redil 11',
        territorio: 'Lomas de la Hacienda',
        ministro: '',
        genero: '',
        celulas: [
          { nombre: 'Hermanos en Cristo', ministro: 'Melina Camejo', genero: '', lugar: 'Condominio Pinar 7', horario: '' },
          { nombre: 'Ríos de Agua Viva', ministro: 'Yohelia Urbina de Seijas', genero: '', lugar: 'Condominio Araguaney 5', horario: '' },
          { nombre: 'Jóvenes Apostólicos', ministro: 'Esteban Sergio Pérez Álvarez', genero: '', lugar: 'Condominio Araguaney 10', horario: '' },
        ],
      },
      {
        id: 12,
        nombre: 'Redil 12',
        territorio: 'Naguanagua',
        ministro: '',
        genero: '',
        // Lugar solo por sector: las direcciones completas de las casas no se publican
        celulas: [
          { nombre: 'Amistad en la Roca', ministro: 'Juan Mendoza', genero: '', lugar: 'Vía La Entrada, diagonal a Tequeños de Jojoto', horario: '' },
          { nombre: 'Heme Aquí', ministro: 'Xavier Herrera', genero: '', lugar: 'Sector Los Mangos 1, Calle de Navidad', horario: '' },
          { nombre: 'Lazos de Amistad', ministro: 'Ismael Guevara', genero: '', lugar: 'Calle Las Marías, Comunidad Simón Rodríguez', horario: '' },
          { nombre: 'Amistad con Visión', ministro: 'Gerelys Carreño', genero: '', lugar: 'Vivienda Rural de Bárbula, Comunidad Simón Bolívar', horario: '' },
          { nombre: 'Lazos de Amistad II', ministro: 'Milagros Martínez', genero: '', lugar: 'Naguanagua', horario: '' },
        ],
      },
      {
        id: 13,
        nombre: 'Redil 13',
        territorio: 'Naguanagua II',
        ministro: '',
        genero: '',
        celulas: [
          { nombre: 'Visión Jabes', ministro: 'Johan Bracho', genero: '', lugar: 'Caprenco', horario: '' },
          { nombre: 'Renovados', ministro: 'Johan Bracho', genero: '', lugar: 'Casco Central de Naguanagua', horario: '' },
        ],
      },
    ],
  },
  {
    id: 5,
    nombre: 'Zona Misionera Guayabo',
    tipo: 'Zona Territorial',
    descripcion: '',
    ministro: 'Marlon Seijas',
    genero: '',
    resumen: { rediles: 3, celulas: 2 },
    rediles: [], // PENDIENTE
  },
]
