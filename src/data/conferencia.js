// Datos de la próxima conferencia. Los usan la sección del Inicio y la página de Eventos.
// Fuente: cronograma en Canva (cronogramaUrl).
export const conferencia = {
  tag: "Próxima conferencia",
  titulo: "Conferencia Sin Límites 2026",
  lema: "Haz que suceda",
  descripcion:
    "Días de adoración, palabra y comunión para toda la familia. Prepárate para un tiempo especial en la presencia de Dios.",
  descripcionLarga:
    "4 días llenos de la gloria, presencia y palabra de Dios, unidos con enseñanzas que impulsarán tu vida y ministerio. Durante estos días tendremos la participación de diferentes pastores y maestros, y en las noches te gozarás con espacios de alabanza y palabra.",
  // Formato: AAAA-MM-DDTHH:MM:SS (hora local). Es la apertura del primer servicio.
  inicio: "2026-10-29T17:30:00",
  fechaTexto: "29 de octubre al 01 de noviembre",
  horaTexto: "Cronograma",
  cronogramaUrl:
    "https://propuesta-francell-bedoya.my.canva.site/cronograma-evento",
  lugar: "Sede de la Iglesia Visión Sin Límites, IPUV San Diego",
  direccion: "Maco Maco, San Diego, Carabobo, Venezuela",
};

// Cómo está organizada la conferencia
export const enfoques = [
  {
    titulo: "Seminario ministerial",
    horario: "Viernes y sábado · 8:30 AM a 3:00 PM",
    descripcion:
      "Enseñanzas dirigidas al fortalecimiento de tu ministerio, impartidas por pastores y maestros invitados.",
  },
  {
    titulo: "Noches evangelísticas",
    horario: "Jueves a domingo · en la noche",
    descripcion:
      "Servicios de alabanza y predicación de la Palabra para toda la familia. ¡Invita a quien necesita conocer a Dios!",
  },
];

// Resumen por día. El detalle hora por hora está en el cronograma de Canva.
export const dias = [
  {
    dia: "Jueves",
    fecha: "29 de octubre",
    titulo: "Noche de apertura",
    horario: "5:30 PM a 8:35 PM",
    predicadores: ["Rv. Miguel Quintero", "Rv. Daniel Borges"],
  },
  {
    dia: "Viernes",
    fecha: "30 de octubre",
    titulo: "Seminario y noche",
    horario: "Seminario 8:30 AM · Noche 5:30 PM",
    tema: "“La ciencia de ganar almas”",
    predicadores: ["Rv. Santos Sosa", "Rv. Ignacio Herrera"],
  },
  {
    dia: "Sábado",
    fecha: "31 de octubre",
    titulo: "Tercer gran día",
    horario: "Seminario 8:30 AM · Tarde 4:30 PM",
    tema: "“La ciencia de formar ministros” y “La ciencia de pastorear la iglesia”",
    predicadores: ["Rv. René Sira", "Rv. Ariel Piorno", "Rv. Jeanpiero Mas y Rubí"],
  },
  {
    dia: "Domingo",
    fecha: "01 de noviembre",
    titulo: "Última noche · Gran cierre",
    horario: "3:30 PM a 7:30 PM",
    predicadores: ["Rv. Miguel Quintero", "Rv. Ignacio Herrera", "Rv. Daniel Borges"],
  },
];

// Fotos tomadas del cronograma en Canva (versión a color, recortadas a 3:4)
import fotoSosa from "../assets/images/conferencia/conferencistas/santos-sosa.jpg";
import fotoBorges from "../assets/images/conferencia/conferencistas/daniel-borges.jpg";
import fotoSira from "../assets/images/conferencia/conferencistas/rene-sira.jpg";
import fotoPiorno from "../assets/images/conferencia/conferencistas/ariel-piorno.jpg";
import fotoQuintero from "../assets/images/conferencia/conferencistas/miguel-quintero.jpg";
import fotoHerrera from "../assets/images/conferencia/conferencistas/ignacio-herrera.jpg";
import fotoMasYRubi from "../assets/images/conferencia/conferencistas/jeanpiero-mas-y-rubi.jpg";
import fotoMotta from "../assets/images/conferencia/conferencistas/josue-motta.jpg";
import fotoTesorero from "../assets/images/conferencia/conferencistas/isrrael-tesorero.jpg";
import fotoTovar from "../assets/images/conferencia/conferencistas/jehu-tovar.jpg";

// Banderas (flag-icons, licencia MIT). El país de cada invitado sale del cronograma en Canva.
import banderaEstadosUnidos from "../assets/banderas/estados-unidos.svg";
import banderaBrasil from "../assets/banderas/brasil.svg";
import banderaVenezuela from "../assets/banderas/venezuela.svg";
import banderaArgentina from "../assets/banderas/argentina.svg";
import banderaPanama from "../assets/banderas/panama.svg";

const paises = {
  estadosUnidos: { nombre: "Estados Unidos", bandera: banderaEstadosUnidos },
  brasil: { nombre: "Brasil", bandera: banderaBrasil },
  venezuela: { nombre: "Venezuela", bandera: banderaVenezuela },
  argentina: { nombre: "Argentina", bandera: banderaArgentina },
  panama: { nombre: "Panamá", bandera: banderaPanama },
};

// "rol" es opcional: se muestra bajo el nombre (ej. Traductor). Si no hay, dice "Conferencista".
export const conferencistas = [
  { nombre: "Rv. Santos Sosa", foto: fotoSosa, pais: paises.estadosUnidos },
  { nombre: "Rv. Daniel Borges", foto: fotoBorges, pais: paises.brasil },
  { nombre: "Rv. René Sira", foto: fotoSira, pais: paises.venezuela },
  { nombre: "Rv. Ariel Piorno", foto: fotoPiorno, pais: paises.argentina },
  { nombre: "Rv. Miguel Quintero", foto: fotoQuintero, pais: paises.estadosUnidos },
  { nombre: "Rv. Ignacio Herrera", foto: fotoHerrera, pais: paises.panama },
  { nombre: "Rv. Jeanpiero Mas y Rubí", foto: fotoMasYRubi, pais: paises.venezuela },
  { nombre: "Rv. Josué Motta", foto: fotoMotta, pais: paises.venezuela },
  { nombre: "Rv. Isrrael Tesorero", foto: fotoTesorero, pais: paises.venezuela },
  { nombre: "Rv. Jehú Tovar", rol: "Traductor", foto: fotoTovar, pais: paises.brasil },
];
