// Estudio bíblico "Las llaves del Reino de los Cielos" (Nivel básico).
// Transcrito del PDF oficial. Cada lección es una lista de bloques que la página
// dibuja en orden. Tipos de bloque:
//   titulo      → subtítulo de sección
//   subtitulo   → subtítulo menor (en dorado)
//   p           → párrafo
//   cita        → pasaje bíblico: { ref, texto } o { ref, versos: [[número, texto], ...] }
//   lista       → { marcador: 'numero' | 'letra' | 'punto', items: [texto | { texto, sub: [...] }] }
//   destacado   → frase centrada y resaltada
//   etiquetas   → fila de palabras clave
//   llaves      → las cuatro llaves (Hechos 2:38 y Mateo 24:13)
//   cambio      → "Cambio mi forma de… / Y a partir de hoy voy a…"
//   nombre      → Padre, Hijo y Espíritu Santo → JESÚS
//   tabla       → { titulo, columnas, filas }
//   definicion  → { termino, texto }
//   columnas    → [{ titulo, items }]
//   cierre      → "¡Es maravilloso! Jesucristo te ama"
// Dentro de cualquier texto, **así** se muestra en negrita.

export const estudio = {
  slug: 'las-llaves-del-reino',
  titulo: 'Las llaves del Reino de los Cielos',
  nivel: 'Nivel básico',
  lema: '…¡Ay de mí si no anunciare el evangelio!',
  lemaRef: '1 Corintios 9:16',
  // Copia el PDF en public/formacion/ y escribe aquí su ruta. Déjalo vacío si aún no está.
  pdf: '',
}

export const llaves = [
  { numero: '1.ª', nombre: 'Arrepentimiento', ref: 'Hechos 2:38', leccion: 1 },
  { numero: '2.ª', nombre: 'Bautícese cada uno en el nombre de Jesucristo', ref: 'Hechos 2:38', leccion: 2 },
  { numero: '3.ª', nombre: 'Y recibe el Espíritu Santo', ref: 'Hechos 2:38', leccion: 4 },
  { numero: '4.ª', nombre: 'Perseverar hasta el fin', ref: 'Mateo 24:13', leccion: 5 },
]

export const lecciones = [
  {
    etiqueta: 'Introducción',
    titulo: 'Las llaves del Reino',
    bloques: [
      { tipo: 'titulo', texto: 'Introducción' },
      { tipo: 'p', texto: 'El presente estudio bíblico tiene la finalidad de resaltar los pasos fundamentales que debe dar todo ser humano que quiere entrar al reino de los cielos, y que todos los creyentes puedan sentir la inquietud de dar a conocer cuáles son estos pasos fundamentales, ejemplificados por nuestro Señor Jesucristo como:' },
      { tipo: 'destacado', texto: '“Las llaves del reino de los cielos”' },
      { tipo: 'p', texto: 'El propósito esencial de nuestro Dios por el cual se manifestó en carne es proveer a la raza humana estas llaves para redimirla y salvarla de la condenación eterna, puesto que el reino de los cielos fue cerrado por causa de nuestros pecados; realmente a nosotros no nos quedaba esperanza de entrar al reino de los cielos por dos razones:' },
      {
        tipo: 'lista',
        marcador: 'punto',
        items: [
          'Por el pecado (como mencionamos anteriormente).',
          'Por el conocimiento de cuáles eran las llaves para entrar al reino de los cielos.',
        ],
      },
      { tipo: 'p', texto: 'Por este motivo, los apóstoles, a través de todo su ministerio, lo primero que hacían era dar a conocer las llaves para entrar al reino de los cielos, y la Biblia nos aconseja que debemos edificar sobre el fundamento de los apóstoles; es decir, que debemos imitar lo que ellos enseñaron y lo que ellos predicaron. Nosotros, como la constitución de la iglesia primitiva, debemos seguir estos pasos fielmente y de forma perseverante.' },

      { tipo: 'titulo', texto: 'Las llaves' },
      {
        tipo: 'cita',
        ref: 'Mateo 16:13-19',
        versos: [
          [13, 'Viniendo Jesús a la región de Cesarea de Filipo, preguntó a sus discípulos, diciendo: **¿Quién dicen los hombres que es el Hijo del Hombre?**'],
          [14, 'Ellos dijeron: Unos, Juan el Bautista; otros, Elías; y otros, Jeremías, o alguno de los profetas.'],
          [15, 'Él les dijo: **Y vosotros, ¿quién decís que soy yo?**'],
          [16, 'Respondiendo Simón Pedro, dijo: Tú eres el Cristo, el Hijo del Dios viviente.'],
          [17, 'Entonces le respondió Jesús: **Bienaventurado eres, Simón, hijo de Jonás, porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos.**'],
          [18, 'Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella.'],
          [19, '**Y a ti te daré las llaves del reino de los cielos; y todo lo que atares en la tierra será atado en los cielos; y todo lo que desatares en la tierra será desatado en los cielos.**'],
        ],
      },
      { tipo: 'subtitulo', texto: 'Veamos 5 puntos importantes del versículo 19:' },
      {
        tipo: 'lista',
        marcador: 'numero',
        items: [
          '**A TI:** ¿A quién se refería Jesús? Evidentemente aquí el Señor se dirigió al apóstol Pedro.',
          '**TE DARÉ:** ¿A qué tiempo se refería el Salvador: pasado, presente o futuro? Efectivamente es futuro; en ese momento no se las dio, solo se las ofreció.',
          '**LAS:** ¿Esta expresión es singular o plural? Efectivamente es plural, es decir, que se habla de dos o más cosas.',
          {
            texto: '**LLAVES:** ¿Para qué sirven?',
            sub: [
              'Sirven para abrir o cerrar.',
              'Las llaves deben ser originales y no imitaciones.',
              'Las llaves deben ser exactamente iguales y no parecidas.',
              'La palabra llaves confirma aún más lo dicho anteriormente: que está hablando en plural.',
            ],
          },
          '**EL CIELO ESTABA CERRADO:** Esto quiere decir que no teníamos esperanzas de entrar al reino de Dios; por esta razón dice en:',
        ],
      },
      { tipo: 'cita', ref: 'Romanos 3:23', texto: 'Por cuanto todos pecaron, y están destituidos de la gloria de Dios.' },
      { tipo: 'p', texto: 'Pero la incógnita sigue: **¿Cuáles son las llaves?** En la siguiente escritura podemos notar que el Señor Jesús da a conocer dos de esas llaves:' },
      {
        tipo: 'cita',
        ref: 'Juan 3:1-5',
        versos: [
          [1, 'Había un hombre de los fariseos que se llamaba Nicodemo, un principal entre los judíos.'],
          [2, 'Este vino a Jesús de noche, y le dijo: Rabí, sabemos que has venido de Dios como maestro; porque nadie puede hacer estas señales que tú haces, si no está Dios con él.'],
          [3, 'Respondió Jesús y le dijo: **De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios.**'],
          [4, 'Nicodemo le dijo: ¿Cómo puede un hombre nacer siendo viejo? ¿Puede acaso entrar por segunda vez en el vientre de su madre, y nacer?'],
          [5, 'Respondió Jesús: **De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.**'],
        ],
      },
      { tipo: 'p', texto: 'En este versículo Jesús da a conocer dos llaves para entrar al Reino de los Cielos.' },
      { tipo: 'subtitulo', texto: 'A) ¿Qué es nacer de nuevo?' },
      { tipo: 'p', texto: 'Jesús nos revela dos llaves para entrar al reino de los cielos:' },
      { tipo: 'lista', marcador: 'punto', items: ['Nacer del agua.', 'Nacer del Espíritu.'] },
      { tipo: 'subtitulo', texto: 'B) ¿Qué es nacer del agua?' },
      { tipo: 'lista', marcador: 'punto', items: ['Ser bautizado.'] },
      { tipo: 'subtitulo', texto: 'C) ¿Qué es nacer del Espíritu?' },
      { tipo: 'lista', marcador: 'punto', items: ['Recibir el Espíritu Santo. (Hay una señal de esto, que es hablar en otras lenguas).'] },
      { tipo: 'cita', ref: 'Hechos 19:6', texto: 'Y habiéndoles impuesto Pablo las manos, vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban.' },
      { tipo: 'p', texto: 'Otro punto importante es: **“NO PUEDE ENTRAR”**. ¿Sabe usted qué significa la palabra **“NO”**?' },
      { tipo: 'destacado', texto: 'NO es NO, en cualquier idioma.' },
      {
        tipo: 'cita',
        ref: 'Marcos 16:14-16',
        versos: [
          [14, 'Finalmente se apareció a los once mismos, estando ellos sentados a la mesa, y les reprochó su incredulidad y dureza de corazón, porque no habían creído a los que le habían visto resucitado.'],
          [15, 'Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura.'],
          [16, '**El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado.**'],
        ],
      },
      { tipo: 'p', texto: 'Consideremos cuatro puntos importantes en esta escritura:' },
      {
        tipo: 'lista',
        marcador: 'punto',
        items: [
          '**El evangelio a toda criatura.** Esto quiere decir que el evangelio es para todos: niños, jóvenes, ancianos, cualquier raza o etnia, etc.',
          '**El que creyere.** Creer es sinónimo de arrepentimiento; este no es un creer pasivo sino activo. Este verso no se refiere solo a creer en la existencia de Dios, sino en la obediencia a su palabra y al evangelio.',
          '**Fuere bautizado.** Una vez que nos bauticemos, tenemos como efecto el cuarto punto.',
          '**Será salvo.** Y esto es el efecto de la obediencia de la palabra de Dios.',
        ],
      },
      { tipo: 'p', texto: '¿Ahora, salvo de qué? De 2 cosas:' },
      { tipo: 'lista', marcador: 'numero', items: ['De la condenación.', 'Del infierno.'] },
      {
        tipo: 'cita',
        ref: 'Hechos 2:1-4',
        versos: [
          [1, 'Cuando llegó el día de Pentecostés, estaban todos unánimes juntos.'],
          [2, 'Y de repente vino del cielo un estruendo como de un viento recio que soplaba, el cual llenó toda la casa donde estaban sentados;'],
          [3, 'y se les aparecieron lenguas repartidas, como de fuego, asentándose sobre cada uno de ellos.'],
          [4, 'Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.'],
        ],
      },
      { tipo: 'cita', ref: 'Hechos 2:38', texto: 'Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para el perdón de los pecados; y recibiréis el don del Espíritu Santo.' },
      { tipo: 'titulo', texto: '¿Por qué Pedro?' },
      { tipo: 'p', texto: 'Porque a Pedro fue que el Señor le prometió las llaves del reino de los cielos, y en este momento fue que se las entregó a través del Espíritu Santo.' },
      { tipo: 'llaves' },
      { tipo: 'p', texto: 'Como lo dice **Mateo 24:13**:' },
      { tipo: 'cita', ref: 'Mateo 24:13', texto: 'Mas el que persevere hasta el fin, este será salvo.' },
      { tipo: 'p', texto: 'En este capítulo por primera vez se abren las puertas del reino de los cielos a la raza humana, a través del apóstol Pedro, a quien el Señor Jesús se las prometió y se las entregó por medio del Espíritu Santo.' },
    ],
  },

  {
    etiqueta: 'Primera llave',
    titulo: 'Importancia del arrepentimiento',
    bloques: [
      { tipo: 'subtitulo', texto: '¿Sabe usted qué significa la palabra arrepentimiento?' },
      { tipo: 'p', texto: 'La palabra arrepentimiento significa:' },
      { tipo: 'etiquetas', items: ['Cambio de mente', 'Cambio de actitud', 'Cambio de vida'] },
      { tipo: 'p', texto: 'En el Nuevo Testamento el tema principal se centra en el arrepentimiento de nuestros pecados, y este cambio de parecer involucra tanto un apartarse del pecado como acercarse a Dios cumpliendo su voluntad.' },
      { tipo: 'p', texto: 'Es decir que cuando una persona se arrepiente, lo que está diciendo es:' },
      {
        tipo: 'cambio',
        filas: [
          ['Cambio mi forma de pensar', 'Pensar como tú piensas, Jesús'],
          ['Cambio mi forma de vivir', 'Vivir como quieres que yo viva, mi Señor'],
          ['Cambio mi forma de actuar', 'Actuar como quieres que yo actúe, Dios'],
        ],
      },
      { tipo: 'p', texto: '**Así que si Dios** cambia mi forma de pensar, cambiará mi forma de vivir y mi forma de actuar…' },
      {
        tipo: 'cita',
        ref: 'Hechos 9:1-6',
        versos: [
          [1, 'Saulo, respirando aún amenazas y muerte contra los discípulos del Señor, vino al sumo sacerdote,'],
          [2, 'y él le pidió carta para la sinagoga de Damasco, a fin de que hallase algunos hombres o mujeres de este Camino, los trajese presos a Jerusalén.'],
          [3, 'Mas yendo por el camino, aconteció que al llegar cerca de Damasco, repentinamente le rodeó un resplandor de la luz del cielo;'],
          [4, 'y cayendo en tierra, oyó una voz que le decía: **Saulo, Saulo, ¿por qué me persigues?**'],
          [5, 'Él dijo: ¿Quién eres, Señor? Y él le dijo: **Yo soy Jesús, a quien tú persigues; dura cosa te es dar coces contra el aguijón.**'],
          [6, 'Él, temblando y temeroso, dijo: ¿Qué quieres que yo haga? Y el Señor le dijo: **Levántate y entra a la ciudad, y se te dirá lo que debes hacer.**'],
        ],
      },
      { tipo: 'p', texto: 'Veamos en esta escritura que Saulo, quien era un asesino porque seguía a los cristianos para matarlos, al tener un encuentro con nuestro Señor Jesucristo experimentó un sincero arrepentimiento.' },
      { tipo: 'p', texto: 'Esto significa un total rendimiento a Dios de cómo hemos pensado, actuado y vivido, que ha sido totalmente diferente a como Dios nos ha enseñado a través de su palabra.' },
      { tipo: 'p', texto: 'Ahora, hay una gran diferencia entre **remordimiento** y **arrepentimiento**.' },

      { tipo: 'titulo', texto: 'Características de una persona con remordimientos' },
      {
        tipo: 'cita',
        ref: 'Ejemplo de Judas: Mateo 27:3-5',
        versos: [
          [3, 'Entonces Judas, el que le había entregado, viendo que era condenado, devolvió arrepentido las treinta piezas de plata a los principales sacerdotes y a los ancianos,'],
          [4, 'diciendo: Yo he pecado entregando sangre inocente. Mas ellos dijeron: ¿Qué nos importa a nosotros? ¡Allá tú!'],
          [5, 'Y arrojando las piezas de plata en el templo, salió, y fue y se ahorcó.'],
        ],
      },
      { tipo: 'p', texto: 'Judas en esos momentos estaba:' },
      {
        tipo: 'lista',
        marcador: 'numero',
        items: ['Atormentado.', 'Triste y sin consuelo.', 'Decepcionado de sí mismo.', 'Quiere cambiar, pero no lo hace.', 'Siente deseos de suicidarse.'],
      },

      { tipo: 'titulo', texto: 'Características de una persona arrepentida' },
      {
        tipo: 'cita',
        ref: 'Ejemplo de Pedro: Mateo 26:69-75',
        versos: [
          [69, 'Pedro estaba sentado fuera en el patio; y se le acercó una criada, diciendo: Tú también estabas con Jesús el galileo.'],
          [70, 'Mas él negó delante de todos, diciendo: No sé lo que dices.'],
          [71, 'Saliendo él a la puerta, le vio otra, y dijo a los que estaban allí: También este estaba con Jesús el nazareno.'],
          [72, 'Pero él negó otra vez con juramento: No conozco al hombre.'],
          [73, 'Un poco después, acercándose los que por allí estaban, dijeron a Pedro: Verdaderamente también tú eres de ellos, porque aun tu manera de hablar te descubre.'],
          [74, 'Entonces él comenzó a maldecir, y a jurar: No conozco al hombre. Y en seguida cantó el gallo.'],
          [75, 'Entonces Pedro se acordó de las palabras de Jesús, que le había dicho: Antes que cante el gallo, me negarás tres veces. Y saliendo fuera, lloró amargamente.'],
        ],
      },
      { tipo: 'p', texto: '**Pedro estaba:**' },
      {
        tipo: 'lista',
        marcador: 'numero',
        items: ['Dolido, pero con esperanza.', 'Triste, pero con consuelo.', 'Reconoce su error y da paso para cambiar.', 'Quiere cambiar y lo hace.', 'Desea rectificarse y vivir para Dios.'],
      },

      { tipo: 'titulo', texto: 'Arrepentíos y creed en el evangelio' },
      { tipo: 'cita', ref: 'Marcos 1:15', texto: 'Diciendo: El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.' },
      { tipo: 'p', texto: 'Para ser salvos hay que cambiar y aceptar el evangelio.' },
      {
        tipo: 'cita',
        ref: 'Lucas 13:1-3',
        versos: [
          [1, 'En este mismo tiempo estaban allí algunos que le contaban acerca de los galileos cuya sangre Pilato había mezclado con los sacrificios de ellos.'],
          [2, 'Respondiendo Jesús, les dijo: **¿Pensáis que estos galileos, porque padecieron tales cosas, eran más pecadores que todos los galileos?**'],
          [3, '**Os digo: No; antes si no os arrepentís, todos pereceréis igualmente.**'],
        ],
      },
      { tipo: 'p', texto: 'Veamos en esta escritura que si no nos arrepentimos, perecemos como cualquier pecador.' },

      { tipo: 'titulo', texto: 'Arrepentidos y convertidos' },
      { tipo: 'p', texto: 'La palabra **convertidos** significa trasladarse de un lugar a otro.' },
      { tipo: 'cita', ref: 'Hechos 3:19', texto: 'Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados; para que vengan de la presencia del Señor tiempos de refrigerio.' },
      { tipo: 'p', texto: 'En este verso encontramos la importancia de cambiar, de hacer un traslado de vida, de nuestra vieja manera de vivir a una nueva manera de vivir según Cristo.' },
      { tipo: 'cita', ref: '2 Corintios 5:17', texto: 'De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.' },
      { tipo: 'p', texto: '¿Cuántas veces hemos pensado que si naciéramos de nuevo no haríamos las cosas malas que hemos hecho, corregiríamos nuestros errores, haríamos el bien y alcanzaríamos nuestra felicidad? Jesucristo te brinda esa oportunidad a través de esta maravillosa llave.' },
      { tipo: 'cierre' },
    ],
  },

  {
    etiqueta: 'Segunda llave · I parte',
    titulo: 'La importancia del bautismo',
    bloques: [
      { tipo: 'p', texto: 'En nuestros días muchas personas dicen que el bautismo es una muestra de fe, o simplemente para hacerse miembro de una iglesia, y que no tiene gran importancia. Permítame decirle que todo lo que el Señor Jesucristo ordenó es importante; debemos cumplirlo porque es la voluntad de Dios.' },
      { tipo: 'lista', marcador: 'numero', items: ['¿Cree usted que es importante el bautismo?', '¿Sabe usted para qué es el bautismo?'] },
      { tipo: 'p', texto: 'Primeramente, la palabra bautismo viene del original griego **“baptisma”**, que literalmente quiere decir sumergir; esto claramente indica la necesidad de que el bautismo sea por inmersión. Es decir, sumergiendo al candidato, por ejemplo, en las aguas.' },
      { tipo: 'p', texto: 'La idea de **“bautizar”** echando agua sobre la cabeza o persona es contradictoria al significado de la palabra.' },
      { tipo: 'p', texto: 'La Biblia nos enseña que el bautismo es identificación con la muerte y sepultura de nuestro Señor Jesucristo.' },
      { tipo: 'cita', ref: 'Romanos 6:3', texto: '¿O no sabéis que todos los que hemos sido bautizados en Cristo Jesús, hemos sido bautizados en su muerte?' },
      { tipo: 'p', texto: 'Y a él no le pusieron tierra sobre su cabeza, sino que quedó totalmente sepultado bajo tierra. Pablo dijo: sepultados con él por medio del bautismo.' },
      { tipo: 'cita', ref: 'Colosenses 2:12', texto: 'Sepultados con él en el bautismo, en el cual fuisteis también resucitados con él, mediante la fe en el poder de Dios que le levantó de los muertos.' },

      { tipo: 'titulo', texto: '¿Para qué es el bautismo?' },
      { tipo: 'subtitulo', texto: '1) Para perdón de los pecados' },
      { tipo: 'cita', ref: 'Hechos 2:38', texto: 'Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo.' },
      { tipo: 'subtitulo', texto: '2) Para entrar en el reino de los cielos' },
      { tipo: 'cita', ref: 'Juan 3:5', texto: 'Respondió Jesús: De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.' },
      { tipo: 'subtitulo', texto: '3) Para salvación' },
      { tipo: 'cita', ref: 'Marcos 16:16', texto: 'El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado.' },
      { tipo: 'subtitulo', texto: '4) Crea en nosotros buena conciencia para Dios' },
      { tipo: 'cita', ref: '1 Pedro 3:21', texto: 'El bautismo que corresponde a esto ahora nos salva (no quitando las inmundicias de la carne, sino como la aspiración de una buena conciencia hacia Dios) por la resurrección de Jesucristo.' },
      { tipo: 'subtitulo', texto: '5) Para cumplir toda justicia' },
      { tipo: 'cita', ref: 'Mateo 3:13-15', texto: 'Entonces Jesús vino de Galilea a Juan al Jordán, para ser bautizado por él. Mas Juan se le oponía, diciendo: Yo necesito ser bautizado por ti, ¿y tú vienes a mí? Pero Jesús le respondió: **Deja ahora, porque así conviene que cumplamos toda justicia.** Entonces le dejó.' },
      { tipo: 'subtitulo', texto: '6) Somos sepultados juntamente con Cristo' },
      { tipo: 'cita', ref: 'Romanos 6:4', texto: 'Porque somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva.' },
      { tipo: 'subtitulo', texto: '7) Para andar en vida nueva' },
      { tipo: 'p', texto: '**Romanos 6:4** (el mismo pasaje anterior).' },
      { tipo: 'subtitulo', texto: '8) Para ser hecho hijo de Dios' },
      {
        tipo: 'cita',
        ref: 'Juan 1:11-12',
        versos: [
          [11, 'A lo suyo vino, y los suyos no le recibieron.'],
          [12, 'Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios.'],
        ],
      },

      { tipo: 'titulo', texto: '¿Cuándo pueden bautizarme?' },
      { tipo: 'p', texto: 'A partir del momento en que uno se arrepienta y entienda la importancia del bautismo.' },
      {
        tipo: 'cita',
        ref: 'Hechos 8:26-39',
        versos: [
          [26, 'Un ángel del Señor habló a Felipe, diciendo: Levántate y ve hacia el sur, por el camino que desciende de Jerusalén a Gaza, el cual es desierto.'],
          [27, 'Entonces él se levantó y fue. Y sucedió que un etíope, eunuco, funcionario de Candace reina de los etíopes, el cual estaba sobre todos sus tesoros, y había venido a Jerusalén para adorar,'],
          [28, 'volvía sentado en su carro, y leyendo al profeta Isaías.'],
          [29, 'Y el Espíritu dijo a Felipe: Acércate y júntate a ese carro.'],
          [30, 'Acudiendo Felipe, le oyó que leía al profeta Isaías, y dijo: Pero ¿entiendes lo que lees?'],
          [31, 'Él dijo: ¿Y cómo podré, si alguno no me enseñare? Y rogó a Felipe que subiese y se sentara con él.'],
          [32, 'El pasaje de la Escritura que leía era este: Como oveja a la muerte fue llevado; y como cordero mudo delante del que lo trasquila, así no abrió su boca.'],
          [33, 'En su humillación no se le hizo justicia; mas su generación, ¿quién la contará? Porque fue quitada de la tierra su vida.'],
          [34, 'Respondiendo el eunuco, dijo a Felipe: Te ruego que me digas: ¿de quién dice el profeta esto; de sí mismo, o de algún otro?'],
          [35, 'Entonces Felipe, abriendo su boca, y comenzando desde esta escritura, le anunció el evangelio de Jesús.'],
          [36, 'Y yendo por el camino, llegaron a cierta agua, y dijo el eunuco: Aquí hay agua; ¿qué impide que yo sea bautizado?'],
          [37, 'Felipe dijo: Si crees de todo corazón, bien puedes. Y respondiendo, dijo: Creo que Jesucristo es el Hijo de Dios.'],
          [38, 'Y mandó parar el carro; y descendieron ambos al agua, Felipe y el eunuco, y le bautizó.'],
          [39, 'Cuando subieron del agua, el Espíritu del Señor arrebató a Felipe; y el eunuco no le vio más, y siguió gozoso su camino.'],
        ],
      },
      { tipo: 'p', texto: 'Cuando tenemos un encuentro con la verdad y tenemos una vida nueva, es importante dejar manifestar el gozo que esto representa, y desde ese momento el gozo nos embarga y nos acompaña en todo nuestro camino, a toda hora.' },
    ],
  },

  {
    etiqueta: 'Segunda llave · II parte',
    titulo: '¿Cómo es el bautismo?',
    bloques: [
      { tipo: 'p', texto: 'Tenemos que partir de la idea de que hay un solo bautismo aprobado por Dios; esto lo comprobamos en **Efesios 4:5**, que dice:' },
      { tipo: 'destacado', texto: '“Un Señor, una fe, un bautismo”' },
      { tipo: 'p', texto: 'Evidentemente hay un solo Señor, una fe y un bautismo; en la actualidad hay dos formas de bautizar:' },
      { tipo: 'subtitulo', texto: '1) Los que bautizan en el nombre del Padre, del Hijo y del Espíritu Santo, como dice en:' },
      { tipo: 'cita', ref: 'Mateo 28:19', texto: 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;' },
      { tipo: 'subtitulo', texto: '2) Los que bautizan en el nombre del Señor Jesucristo, como lo dice en:' },
      { tipo: 'cita', ref: 'Hechos 2:38', texto: 'Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo.' },
      { tipo: 'p', texto: 'Se presenta una interrogante: ¿Cree usted que se contradice la Biblia? Por supuesto que **“NO”**. Dice la Biblia que sus dichos son **“SÍ”** y **“AMÉN”**, y también nos enseña que toda la Escritura es inspirada por Dios. Es decir, que Dios no puede contradecirse a sí mismo.' },
      { tipo: 'cita', ref: 'Números 23:19', texto: 'Dios no es hombre, para que mienta, ni hijo de hombre para que se arrepienta. Él dijo, ¿y no hará? Habló, ¿y no lo ejecutará?' },
      { tipo: 'p', texto: 'Ahora bien, ¿por qué esas dos diferencias se encuentran en la Biblia?' },
      { tipo: 'p', texto: '¿No obedecieron los apóstoles el mandato del Señor? Y si no obedecieron, ¿por qué en todo el transcurso de su vida el Señor Jesús nunca les corrigió ese error?' },
      { tipo: 'p', texto: 'Ahora estudiemos con detalle el primer verso leído:' },
      { tipo: 'cita', ref: 'Mateo 28:19', texto: 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;' },

      { tipo: 'titulo', texto: 'Resaltan 3 puntos fundamentales en este verso' },
      { tipo: 'subtitulo', texto: '1) En el…' },
      { tipo: 'p', texto: '¿Esta expresión es plural o singular? **Es singular.** ¿Por qué dice “en el” y no “en los”, que es la forma plural? Esto quiere decir que Dios estaba dando un mandamiento de forma singular.' },
      { tipo: 'subtitulo', texto: '2) Nombre…' },
      { tipo: 'p', texto: 'El mandamiento singular iba seguido del nombre. Fijémonos cómo incluso la expresión **“nombre”** está en forma singular y no plural, porque dice **“nombre”** y no **“nombres”**.' },
      { tipo: 'subtitulo', texto: '3) Padre, Hijo y Espíritu Santo' },
      { tipo: 'p', texto: '¿Padre es **nombre**? ¿Hijo es **nombre**? ¿Espíritu Santo es **nombre**? Por supuesto que **“NO”**.' },
      { tipo: 'p', texto: 'El mandato es bautizar en el nombre del Padre, del Hijo y del Espíritu Santo; no repetir estas palabras cuando se va a bautizar a una persona.' },
      { tipo: 'p', texto: '**Ahora bien**, la forma correcta y oportuna de preguntar es: ¿Cuál es el nombre del Padre?, ¿cuál es el nombre del Hijo? y ¿cuál es el nombre del Espíritu Santo?' },

      { tipo: 'titulo', texto: '¿Cuál es el nombre del Padre?' },
      { tipo: 'p', texto: 'Analicemos lo que dijo Jesús en:' },
      { tipo: 'cita', ref: 'Juan 5:43', texto: 'Yo he venido en nombre de mi Padre, y no me recibís; si otro viniere en su propio nombre, a ese recibiréis.' },
      { tipo: 'p', texto: 'Él se está refiriendo a su nombre en particular, y no solo al hecho de que venía **comisionado, autorizado o encomendado** por el Padre; se ve por la segunda parte de ese mismo versículo, que dice: “si otro viniere en su propio nombre, a ese recibiréis”.' },
      { tipo: 'p', texto: 'En efecto, él está diciendo que no viene con su “nombre” propio o diferente al del Padre, como algún otro podría venir trayendo su propio nombre.' },
      { tipo: 'p', texto: 'También en la oración que hallamos registrada en **Juan 17, versos 6, 12 y 26**:' },
      {
        tipo: 'cita',
        ref: 'Juan 17:6, 12, 26',
        versos: [
          [6, '**He manifestado tu nombre a los hombres que del mundo me diste;…**'],
          [12, '**Cuando estaba con ellos en el mundo, yo los guardaba en tu nombre;…**'],
          [26, '**Y les he dado a conocer tu nombre, y lo daré a conocer aún;…**'],
        ],
      },
      { tipo: 'p', texto: 'Ahora, ¿qué **nombre** había manifestado Jesús al mundo? ¿Qué **nombre** dio a conocer? Y ¿qué **nombre** daría a conocer aún? ¿Se seguiría conociendo a través de la dispensación de la iglesia?' },
      { tipo: 'destacado', texto: '¡El único nombre divino en el Nuevo Testamento es JESÚS!' },
      { tipo: 'p', texto: 'No hay otro nombre **mencionado, revelado o manifestado**, dado a conocer, que el **nombre del Señor Jesucristo**. Esto quiere decir que el nombre que él llevaba es el mismo del Padre.' },
      { tipo: 'p', texto: 'Por esta razón él mismo se da a conocer como Padre en **Juan 14:8-9**:' },
      { tipo: 'cita', ref: 'Juan 14:8-9', texto: 'Felipe le dijo: Señor, muéstranos el Padre, y nos basta. Jesús le dijo: **¿Tanto tiempo hace que estoy con vosotros, y no me has conocido, Felipe? El que me ha visto a mí, ha visto al Padre; ¿cómo, pues, dices tú: Muéstranos el Padre?**' },
      { tipo: 'p', texto: 'Se puede concluir que el nombre del Padre es **Jesús**.' },

      { tipo: 'titulo', texto: '¿Cuál es el nombre del Hijo?' },
      { tipo: 'p', texto: 'Encontramos claramente el nombre del Hijo cuando un ángel se lo revela en sueños a José, y lo podemos afirmar en **Mateo 1:21**:' },
      { tipo: 'cita', ref: 'Mateo 1:21', texto: 'Y dará a luz un hijo, y llamarás su nombre **JESÚS**, porque él salvará a su pueblo de sus pecados.' },
      { tipo: 'p', texto: 'Así que, sin duda alguna, el nombre del Hijo es: **Jesús**.' },

      { tipo: 'titulo', texto: '¿Cuál es el nombre del Espíritu Santo?' },
      { tipo: 'p', texto: 'Veamos lo que dice en **Juan 14:17**:' },
      { tipo: 'cita', ref: 'Juan 14:17', texto: 'El Espíritu de verdad, al cual el mundo no puede recibir, porque no le ve, ni le conoce; pero vosotros le conocéis, porque mora con vosotros, y estará en vosotros.' },
      { tipo: 'p', texto: 'En este verso el Señor Jesús deja ver claramente que él es el Espíritu Santo. Cabe destacar que existen dos cosas para reflexionar:' },
      {
        tipo: 'lista',
        marcador: 'numero',
        items: [
          'El Espíritu no se puede ver, y',
          'Todavía el Espíritu Santo no había sido derramado en el pueblo, y Jesús dijo: **pero vosotros le conocéis, porque mora con vosotros…**',
        ],
      },
      { tipo: 'p', texto: '**¿Cómo era que ellos conocían al Espíritu Santo, y cómo era que le podían ver?**' },
      { tipo: 'p', texto: 'Precisamente lo podían ver y conocer porque Jesús es el Espíritu Santo, y es por eso que dice que mora en vosotros, al final del verso antes citado. Esto lo afirmamos en **Juan 1:29-33**:' },
      {
        tipo: 'cita',
        ref: 'Juan 1:29-33',
        versos: [
          [29, 'El siguiente día vio Juan a Jesús que venía a él, y dijo: He aquí el Cordero de Dios, que quita el pecado del mundo.'],
          [30, 'Este es aquel de quien yo dije: Después de mí viene un varón, el cual es antes de mí; porque era primero que yo.'],
          [31, 'Y yo no le conocía; mas para que fuese manifestado a Israel, por esto vine yo bautizando con agua.'],
          [32, 'También dio Juan testimonio, diciendo: Vi al Espíritu que descendía del cielo como paloma, y permaneció sobre él.'],
          [33, 'Y yo no le conocía; pero el que me envió a bautizar con agua, aquel me dijo: Sobre quien veas descender el Espíritu y que permanece sobre él, ese es el que bautiza con el Espíritu Santo.'],
        ],
      },
      { tipo: 'p', texto: 'De manera que podemos concluir diciendo que el nombre del Espíritu Santo es **Jesús**.' },
      { tipo: 'nombre' },
      { tipo: 'p', texto: 'Definitivamente debemos bautizarnos en el nombre de Jesús. Veamos varios ejemplos de bautismos en el nombre de Jesús que encontramos en la Biblia:' },
      { tipo: 'cita', ref: 'Hechos 19:5', texto: 'Cuando oyeron esto, fueron bautizados en el nombre del Señor Jesús.' },
      { tipo: 'destacado', texto: 'En la Biblia no vamos a encontrar un bautismo que no sea en su nombre.' },
      {
        tipo: 'tabla',
        titulo: 'Cuadro de bautismos en el nombre de Jesús',
        columnas: ['Texto bíblico', 'Lugar', 'Responsable de bautizar', 'Personas bautizadas', 'Nombre invocado'],
        filas: [
          ['Hch. 2:37-42', 'Jerusalén', 'Los apóstoles', 'Como 3.000 personas', 'El nombre de Jesucristo'],
          ['Hch. 8:12-17', 'Samaria', 'Felipe', 'Hombres y mujeres', 'El nombre de Jesucristo'],
          ['Hch. 8:26-39', 'Camino de Jerusalén a Gaza', 'Felipe', 'Un etíope, eunuco', 'El nombre de Jesucristo'],
          ['Hch. 10:30-48', 'Cesarea', 'Pedro', 'Cornelio, parientes y amigos', 'El nombre de Jesucristo'],
          ['Hch. 16:11-16', 'Filipos (Macedonia)', 'Pablo y Silas', 'Lidia y su familia', 'El nombre de Jesucristo'],
          ['Hch. 16:25-34', 'Filipos', 'Pablo y Silas', 'El carcelero de Filipos y toda su familia', 'El nombre de Jesucristo'],
          ['Hch. 18:8; 1 Co. 1:10-18', 'Corinto', 'Pablo', 'Crispo, Gayo, Estéfanas y su familia', 'El nombre del Señor Jesucristo'],
          ['Hch. 19:1-7', 'Éfeso', 'Pablo', 'Unos 12 hombres', 'El nombre del Señor Jesús'],
          ['Hch. 22:6-16', 'Damasco', 'Ananías', 'Pablo', 'Invocando su nombre'],
        ],
      },
    ],
  },

  {
    etiqueta: 'Tercera llave',
    titulo: 'Importancia de recibir el Espíritu Santo',
    bloques: [
      { tipo: 'cita', ref: 'Hechos 2:38', texto: 'Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo.' },
      { tipo: 'titulo', texto: '¿Sabe usted qué es el Espíritu Santo?' },
      { tipo: 'p', texto: 'El Espíritu Santo es el pedazo de Dios derramado sobre sus hijos. De manera que cuando hablamos del Espíritu Santo, hablamos de la esencia de Dios, porque él es el **Espíritu** y es **Santo**, quien cumple un ministerio de consolación en este tiempo.' },

      { tipo: 'titulo', texto: 'Títulos que se dan al Espíritu Santo' },
      {
        tipo: 'lista',
        marcador: 'letra',
        items: [
          {
            texto: '**El Espíritu de Dios.** Joel 2:28: “Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones.”',
            sub: ['**Hechos 2:16:** “Mas esto es lo dicho por el profeta Joel.”'],
          },
          '**El Espíritu de Cristo.** Romanos 8:9: “Mas vosotros no vivís según la carne, sino según el Espíritu, si es que el Espíritu de Dios mora en vosotros. Y si alguno no tiene el Espíritu de Cristo, no es de él.”',
          '**El Espíritu de verdad.** Juan 14:17: “El Espíritu de verdad, al cual el mundo no puede recibir, porque no le ve, ni le conoce; pero vosotros le conocéis, porque mora con vosotros, y estará en vosotros.”',
          '**Consolador.** Juan 14:26: “Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho.”',
          '**El Espíritu del Señor.** Hechos 5:9: “Y Pedro le dijo: ¿Por qué convinisteis en tentar al Espíritu del Señor? He aquí a la puerta los pies de los que han sepultado a tu marido, y te sacarán a ti.”',
          '**El Espíritu.** Hechos 8:29: “Y el Espíritu dijo a Felipe: Acércate y júntate a ese carro.”',
          '**El Espíritu de santidad.** Romanos 1:4: “que fue declarado Hijo de Dios con poder, según el Espíritu de santidad, por la resurrección de entre los muertos.”',
        ],
      },

      { tipo: 'titulo', texto: '¿Cómo saber que se ha recibido el Espíritu Santo?' },
      { tipo: 'p', texto: 'Existe una señal visible, la cual es **hablar en otras lenguas**.' },
      {
        tipo: 'cita',
        ref: 'Hechos 2:1-4',
        versos: [
          [1, 'Cuando llegó el día de Pentecostés, estaban todos unánimes juntos.'],
          [2, 'Y de repente vino del cielo un estruendo como de un viento recio que soplaba, el cual llenó toda la casa donde estaban sentados;'],
          [3, 'y se les aparecieron lenguas repartidas, como de fuego, asentándose sobre cada uno de ellos.'],
          [4, '**Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.**'],
        ],
      },
      { tipo: 'cita', ref: '2 Corintios 1:22', texto: 'El cual también nos ha sellado, y nos ha dado las arras del Espíritu en nuestros corazones.' },
      { tipo: 'p', texto: 'El Espíritu Santo es el que da las **arras** para poder entrar al Reino de los Cielos.' },
      { tipo: 'definicion', termino: 'Arras', texto: 'Señal o cantidad que se da como garantía en algunos contratos de compra y venta; podría asegurar su ejecución.' },
      { tipo: 'p', texto: 'Es decir, es la donación que Dios nos hace del Espíritu Santo, aquí y ahora; es un plazo o entrega, una garantía, un goce anticipado de la vida que el cristiano vivirá, algún día, junto a él.' },

      { tipo: 'titulo', texto: '¿Qué representa recibir el Espíritu Santo?' },
      {
        tipo: 'lista',
        marcador: 'numero',
        items: [
          '**Que estamos aprobados delante de Dios para entrar al Reino de los Cielos.**',
          '**Hay tres cosas que Dios nos da cuando recibimos su Espíritu Santo.** 2 Timoteo 1:7: “Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.”',
        ],
      },
      {
        tipo: 'columnas',
        items: [
          { titulo: 'Poder', items: ['Para vencer al enemigo', 'Sobre todas las enfermedades', 'Sobre toda obra del maligno'] },
          { titulo: 'Amor', items: ['Para amar a Dios', 'Amar a nuestra familia', 'Y amar a nuestro prójimo'] },
          { titulo: 'Dominio propio', items: ['Para dominar las circunstancias', 'Nuestro impulso', 'Y nuestro carácter'] },
        ],
      },

      { tipo: 'titulo', texto: 'Frutos del Espíritu Santo' },
      { tipo: 'cita', ref: 'Gálatas 5:22-23', texto: 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley.' },
      { tipo: 'etiquetas', items: ['Amor', 'Gozo', 'Paz', 'Paciencia', 'Benignidad', 'Bondad', 'Fe', 'Mansedumbre', 'Templanza'] },
      { tipo: 'p', texto: 'A través del Espíritu Santo recibimos una semilla de cada uno de estos frutos antes mencionados, los cuales tenemos que cultivar en nuestra vida…' },
    ],
  },

  {
    etiqueta: 'Cuarta llave',
    titulo: 'Importancia de perseverar',
    bloques: [
      { tipo: 'p', texto: '**Perseverar** significa persistir, mantenerse firme en una actitud, opinión, etc. Esta es la cuarta llave para poder entrar al cielo; sin ella no sería posible ser salvo obteniendo las otras tres, y sin ella las otras tres perderían su efecto en nuestras vidas.' },
      { tipo: 'p', texto: 'Dios aborrece la cobardía y la inconstancia; en el transcurso de todas las generaciones, Dios condenó a naciones, pueblos y personas por su inconstancia y falta de perseverancia.' },
      { tipo: 'p', texto: 'Por esta razón, la Biblia dice en:' },
      { tipo: 'cita', ref: 'Apocalipsis 21:8', texto: 'Pero los cobardes e incrédulos, los abominables y homicidas, los fornicarios y hechiceros, los idólatras y todos los mentirosos tendrán su parte en el lago que arde con fuego y azufre, que es la muerte segunda.' },
      { tipo: 'cita', ref: 'Mateo 24:45-50', texto: '¿Quién es, pues, el siervo fiel y prudente, al cual puso su señor sobre su casa para que les dé el alimento a tiempo? Bienaventurado aquel siervo al cual, cuando su señor venga, le halle haciendo así. De cierto os digo que sobre todos sus bienes le pondrá. Pero si aquel siervo malo dijere en su corazón: Mi señor tarda en venir; y comenzare a golpear a sus consiervos, y aun a comer y a beber con los borrachos, vendrá el señor de aquel siervo en día que este no espera, y a la hora que no sabe.' },

      { tipo: 'titulo', texto: 'Hay bendición cuando somos perseverantes' },
      { tipo: 'p', texto: '**Hechos 2:42 y 46:** La Biblia enseña que debemos perseverar en la doctrina de los apóstoles…' },
      {
        tipo: 'cita',
        ref: 'Hechos 2:42, 46',
        versos: [
          [42, 'Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.'],
          [46, 'Y perseverando unánimes cada día en el templo, y partiendo el pan en las casas, comían juntos con alegría y sencillez de corazón.'],
        ],
      },
      { tipo: 'subtitulo', texto: 'Hay cinco áreas en las que debemos perseverar:' },
      {
        tipo: 'lista',
        marcador: 'numero',
        items: ['En la doctrina de los apóstoles.', 'En la comunión los unos con los otros.', 'En el partimiento del pan.', 'En las oraciones.', 'En el templo.'],
      },
      { tipo: 'p', texto: '**Lucas 21:17-19:** El ingrediente esencial para perseverar es tener paciencia…' },
      { tipo: 'cita', ref: 'Lucas 21:17-19', texto: 'Y seréis aborrecidos de todos por causa de mi nombre. Pero ni un cabello de vuestra cabeza perecerá. Con vuestra paciencia ganaréis vuestras almas.' },
      { tipo: 'p', texto: 'Pero así como obtenemos bendición cuando perseveramos, también hay condenación para los que no perseveran.' },

      { tipo: 'titulo', texto: 'Hay condenación cuando no perseveramos' },
      {
        tipo: 'lista',
        marcador: 'numero',
        items: [
          '**No le agrada a Dios…** Hebreos 10:38: “Mas el justo vivirá por fe; y si retrocediere, no agradará a mi alma.”',
          '**Volvemos a nuestra mala manera de vivir…** Proverbios 26:11: “Como perro que vuelve a su vómito, así es el necio que repite su necedad.”',
          '**Su recompensa, el infierno…** Apocalipsis 21:8: “Pero los cobardes e incrédulos, los abominables y homicidas, los fornicarios y hechiceros, los idólatras y todos los mentirosos tendrán su parte en el lago que arde con fuego y azufre, que es la muerte segunda.”',
          '**No está apto para entrar en el Reino de los Cielos…**',
        ],
      },
      { tipo: 'cita', ref: 'Lucas 9:62', texto: 'Y Jesús le dijo: Ninguno que poniendo su mano en el arado mira hacia atrás, es apto para el reino de Dios.' },
      { tipo: 'cita', ref: 'Hebreos 12:3', texto: 'Considerad a aquel que sufrió tal contradicción de pecadores contra sí mismo, para que vuestro ánimo no se canse hasta desmayar.' },
      { tipo: 'cita', ref: 'Gálatas 6:9', texto: 'No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.' },
      { tipo: 'cita', ref: 'Filipenses 3:13-14', texto: 'Hermanos, yo mismo no pretendo haberlo ya alcanzado; pero una cosa hago: olvidando ciertamente lo que queda atrás, y extendiéndome a lo que está delante, prosigo a la meta, al premio del supremo llamamiento de Dios en Cristo Jesús.' },
      { tipo: 'cierre' },
    ],
  },
]
