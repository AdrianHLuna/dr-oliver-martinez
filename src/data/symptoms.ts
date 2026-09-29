import type { Symptom } from "@/types/schema";

// 10 síntomas respiratorios reales para el catálogo del Dr. Oliver Martínez
// González. alarmSigns siempre dirige a urgencias, nunca a WhatsApp.
export const symptoms: Symptom[] = [
  {
    id: "sy-tos-cronica",
    slug: "tos-cronica",
    name: "Tos Crónica",
    colloquialNames: ["tos que no se quita", "tos de meses"],
    description:
      "La tos crónica es aquella que persiste por más de ocho semanas en adultos y que no se explica por un resfriado reciente. Puede tener múltiples causas respiratorias, desde asma y bronquitis crónica hasta Enfermedad Pulmonar Obstructiva Crónica, fibrosis pulmonar o, en casos menos frecuentes, tuberculosis pulmonar o cáncer de pulmón, por lo que una tos que se prolonga durante semanas amerita valoración con un neumólogo en lugar de asumir que se resolverá sola.",
    causes: [
      "Asma no diagnosticada o mal controlada",
      "Bronquitis crónica o Enfermedad Pulmonar Obstructiva Crónica",
      "Fibrosis pulmonar",
      "Tuberculosis pulmonar",
      "Cáncer de pulmón, en casos menos frecuentes",
    ],
    alarmSigns: [
      "Tos con sangre abundante",
      "Dificultad para respirar en reposo",
      "Dolor torácico intenso asociado a la tos",
      "Pérdida de peso marcada acompañando a la tos persistente",
      "Fiebre alta que no cede junto con la tos prolongada",
    ],
    whyConsult:
      "Una tos que persiste por más de ocho semanas puede ser la única señal visible de enfermedades pulmonares crónicas como el asma, la Enfermedad Pulmonar Obstructiva Crónica o la fibrosis pulmonar, y en casos menos frecuentes de tuberculosis o cáncer de pulmón, por lo que su estudio con un neumólogo, apoyado en espirometría y estudios de imagen, permite un diagnóstico oportuno.",
    faqs: [
      {
        question: "¿Cuándo una tos se considera crónica?",
        answer:
          "En adultos, una tos se considera crónica cuando persiste por más de ocho semanas y no se explica por un resfriado o infección respiratoria reciente, lo que amerita una valoración médica más detallada con estudios de función pulmonar e imagen.",
      },
      {
        question: "¿La tos crónica siempre indica una enfermedad grave?",
        answer:
          "No necesariamente; muchas causas de tos crónica son enfermedades manejables como el asma o la bronquitis crónica, pero identificar la causa exacta con un neumólogo es importante para descartar condiciones que requieren atención más específica.",
      },
    ],
    relatedConditions: [
      "d-asma",
      "d-epoc",
      "d-bronquitis-cronica",
      "d-fibrosis-pulmonar",
      "d-tuberculosis",
      "d-cancer-pulmon",
    ],
    lastReviewed: "2026-09-24",
    image: "/sintomas/tos-cronica.jpg",
    seo: {
      title: "Tos Crónica | Neumólogo en Hermosillo, Sonora",
      description:
        "Tos de más de 8 semanas puede indicar asma, EPOC o fibrosis pulmonar. Valoración con el Dr. Oliver Martínez, neumólogo en Hermosillo.",
      keywords: [
        "tos crónica en Hermosillo",
        "tos persistente Sonora",
        "neumólogo para tos crónica",
      ],
    },
  },
  {
    id: "sy-disnea",
    slug: "dificultad-para-respirar-disnea",
    name: "Dificultad para Respirar (Disnea)",
    colloquialNames: ["falta de aire", "ahogo al respirar", "no me llega el aire"],
    description:
      "La disnea es la sensación subjetiva de falta de aire o de esfuerzo aumentado para respirar. Puede presentarse solo con el ejercicio o incluso en reposo, y sus causas respiratorias más frecuentes incluyen el asma, la Enfermedad Pulmonar Obstructiva Crónica, la neumonía, la fibrosis pulmonar, el enfisema pulmonar y el derrame pleural, por lo que su evaluación por un neumólogo, apoyada en espirometría y otros estudios de función pulmonar, ayuda a identificar la causa específica.",
    causes: [
      "Asma o Enfermedad Pulmonar Obstructiva Crónica no controladas",
      "Neumonía u otra infección respiratoria",
      "Fibrosis pulmonar",
      "Enfisema pulmonar",
      "Derrame pleural",
    ],
    alarmSigns: [
      "Dificultad para respirar en reposo o que empeora rápidamente",
      "Coloración azulada de labios o dedos",
      "Dificultad para hablar frases completas por falta de aire",
      "Dolor torácico intenso asociado",
      "Confusión o somnolencia excesiva junto con la falta de aire",
    ],
    whyConsult:
      "La dificultad para respirar que aparece o empeora de forma progresiva, incluso con esfuerzos que antes se toleraban bien, puede ser señal de enfermedades pulmonares crónicas como la Enfermedad Pulmonar Obstructiva Crónica, la fibrosis pulmonar o el enfisema, cuya identificación oportuna con un neumólogo permite iniciar un manejo adecuado antes de que la limitación funcional avance.",
    faqs: [
      {
        question: "¿La falta de aire siempre es de origen pulmonar?",
        answer:
          "No siempre; la dificultad para respirar también puede tener origen cardíaco o de otro tipo, por lo que la valoración médica, incluyendo estudios de función pulmonar como la espirometría, ayuda a determinar si el origen es respiratorio o requiere otra especialidad.",
      },
      {
        question: "¿Qué estudios ayudan a encontrar la causa de la falta de aire?",
        answer:
          "La espirometría, la gasometría arterial y, en algunos casos, la prueba de caminata de 6 minutos son estudios frecuentes para evaluar la función pulmonar y la oxigenación de una persona con dificultad para respirar de origen respiratorio.",
      },
    ],
    relatedConditions: [
      "d-asma",
      "d-epoc",
      "d-neumonia",
      "d-fibrosis-pulmonar",
      "d-enfisema",
      "d-derrame-pleural",
    ],
    lastReviewed: "2026-09-24",
    image: "/sintomas/dificultad-para-respirar-disnea.jpg",
    seo: {
      title: "Dificultad para Respirar (Disnea) | Neumólogo en Hermosillo",
      description:
        "La falta de aire puede indicar asma, EPOC, fibrosis pulmonar o derrame pleural. Valoración con el Dr. Oliver Martínez en Hermosillo.",
      keywords: [
        "dificultad para respirar Hermosillo",
        "falta de aire Sonora",
        "neumólogo para disnea",
      ],
    },
  },
  {
    id: "sy-sibilancias",
    slug: "sibilancias-silbido-al-respirar",
    name: "Sibilancias (Silbido al Respirar)",
    colloquialNames: ["silbido en el pecho", "chiflido al respirar"],
    description:
      "Las sibilancias son un sonido agudo, similar a un silbido, que se produce cuando el aire pasa por vías respiratorias estrechadas o inflamadas. Es uno de los síntomas más característicos del asma, aunque también puede presentarse en otras condiciones respiratorias, y su presencia frecuente amerita una valoración con espirometría para confirmar si existe obstrucción de la vía aérea.",
    causes: [
      "Asma no diagnosticada o no controlada",
      "Inflamación de la vía aérea por una infección respiratoria",
      "Exposición a alérgenos o irritantes ambientales",
      "Estrechamiento crónico de la vía aérea en Enfermedad Pulmonar Obstructiva Crónica",
    ],
    alarmSigns: [
      "Silbido que se presenta junto con dificultad importante para respirar",
      "Dificultad para hablar o completar frases por falta de aire",
      "Coloración azulada de labios o dedos",
      "Silbido que no mejora con las medidas indicadas previamente por el médico",
    ],
    whyConsult:
      "Las sibilancias frecuentes o que se presentan de forma recurrente son uno de los signos más característicos del asma, y su valoración con un neumólogo mediante espirometría permite confirmar el diagnóstico y establecer un plan de control adecuado para evitar crisis más graves.",
    faqs: [
      {
        question: "¿Las sibilancias siempre significan que tengo asma?",
        answer:
          "No siempre, pero son uno de los síntomas más característicos del asma; también pueden presentarse durante infecciones respiratorias o por exposición a irritantes, por lo que su evaluación con un neumólogo ayuda a precisar la causa.",
      },
      {
        question: "¿Se pueden escuchar las sibilancias sin un estetoscopio?",
        answer:
          "En ocasiones, cuando son intensas, las sibilancias pueden percibirse como un silbido audible sin necesidad de instrumentos, aunque el médico las evalúa con más precisión durante la exploración física con estetoscopio.",
      },
    ],
    relatedConditions: ["d-asma"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/sibilancias-silbido-al-respirar.jpg",
    seo: {
      title: "Sibilancias o Silbido al Respirar | Neumólogo en Hermosillo",
      description:
        "El silbido al respirar puede ser señal de asma. Diagnóstico con espirometría con el Dr. Oliver Martínez, neumólogo en Hermosillo.",
      keywords: [
        "sibilancias en Hermosillo",
        "silbido al respirar Sonora",
        "neumólogo para asma y sibilancias",
      ],
    },
  },
  {
    id: "sy-dolor-toracico",
    slug: "dolor-toracico-al-respirar",
    name: "Dolor Torácico al Respirar",
    colloquialNames: ["dolor al respirar", "punzada en el pecho al respirar"],
    description:
      "El dolor torácico que empeora al respirar profundo, toser o cambiar de posición, conocido como dolor pleurítico, suele originarse en la pleura, la membrana que recubre los pulmones. Es un síntoma frecuente en la neumonía y en el derrame pleural, y su evaluación es importante para descartar causas respiratorias que requieren manejo específico.",
    causes: [
      "Neumonía con afectación de la pleura",
      "Derrame pleural",
      "Inflamación de la pleura de otras causas",
      "Traumatismo previo en la caja torácica",
    ],
    alarmSigns: [
      "Dolor torácico intenso y súbito",
      "Dolor torácico acompañado de dificultad para respirar marcada",
      "Dolor que se extiende al brazo, cuello o mandíbula",
      "Sudoración fría, palidez o sensación de desmayo junto con el dolor",
    ],
    whyConsult:
      "El dolor torácico que empeora al respirar profundo o toser puede ser señal de neumonía con afectación pleural o de un derrame pleural, ambas condiciones que un neumólogo puede confirmar con estudios de imagen del tórax y, si es necesario, con una toracocentesis.",
    faqs: [
      {
        question: "¿Todo dolor de pecho al respirar es de origen pulmonar?",
        answer:
          "No siempre; el dolor torácico puede tener origen cardíaco, muscular o de otro tipo, por lo que ante un dolor de pecho intenso o súbito siempre se recomienda una valoración médica urgente para descartar primero causas cardíacas graves.",
      },
      {
        question: "¿Qué estudio confirma si el dolor es por derrame pleural?",
        answer:
          "Los estudios de imagen del tórax permiten identificar un derrame pleural como causa del dolor, y en caso de confirmarse, una toracocentesis permite analizar el líquido acumulado para precisar su origen.",
      },
    ],
    relatedConditions: ["d-neumonia", "d-derrame-pleural"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/dolor-toracico-al-respirar.jpg",
    seo: {
      title: "Dolor Torácico al Respirar | Neumólogo en Hermosillo",
      description:
        "El dolor de pecho al respirar profundo puede indicar neumonía o derrame pleural. Valoración con el Dr. Oliver Martínez en Hermosillo.",
      keywords: [
        "dolor torácico al respirar Hermosillo",
        "dolor de pecho al respirar Sonora",
        "neumólogo para dolor pleurítico",
      ],
    },
  },
  {
    id: "sy-hemoptisis",
    slug: "tos-con-sangre-hemoptisis",
    name: "Tos con Sangre (Hemoptisis)",
    colloquialNames: ["escupir sangre", "sangre al toser"],
    description:
      "La hemoptisis es la expulsión de sangre proveniente de las vías respiratorias al toser. Puede variar desde pequeñas estrías de sangre en el esputo hasta sangrados más abundantes, y sus causas incluyen infecciones como la tuberculosis pulmonar, así como el cáncer de pulmón, por lo que este síntoma siempre requiere valoración médica sin demora.",
    causes: [
      "Tuberculosis pulmonar",
      "Cáncer de pulmón",
      "Infecciones respiratorias intensas",
      "Bronquitis con irritación importante de la vía aérea",
    ],
    alarmSigns: [
      "Sangrado abundante al toser",
      "Sangrado que no se detiene o que se repite en poco tiempo",
      "Dificultad para respirar asociada al sangrado",
      "Mareo, palidez intensa o sensación de desmayo junto con el sangrado",
    ],
    whyConsult:
      "La tos con sangre, incluso en cantidades pequeñas, es un síntoma que un neumólogo debe evaluar sin demora, ya que puede ser la primera señal visible de tuberculosis pulmonar o de cáncer de pulmón, condiciones en las que el diagnóstico oportuno mediante estudios de imagen, broncoscopía o biopsia cambia de forma importante el pronóstico.",
    faqs: [
      {
        question: "¿Cualquier cantidad de sangre al toser es motivo de consulta?",
        answer:
          "Sí. Incluso pequeñas estrías de sangre en el esputo ameritan valoración con un neumólogo, ya que este síntoma puede tener causas que requieren estudio con imagen del tórax y, en algunos casos, broncoscopía para identificar el origen exacto del sangrado.",
      },
      {
        question: "¿La tos con sangre siempre significa cáncer de pulmón?",
        answer:
          "No siempre; la tuberculosis pulmonar y otras infecciones respiratorias también pueden causar tos con sangre, pero dado que el cáncer de pulmón es una de las causas posibles, este síntoma siempre debe estudiarse con la debida prontitud.",
      },
    ],
    relatedConditions: ["d-tuberculosis", "d-cancer-pulmon"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/tos-con-sangre-hemoptisis.jpg",
    seo: {
      title: "Tos con Sangre (Hemoptisis) | Neumólogo en Hermosillo",
      description:
        "Toser con sangre requiere valoración inmediata para descartar tuberculosis o cáncer de pulmón. Consulta con el Dr. Oliver Martínez.",
      keywords: [
        "tos con sangre en Hermosillo",
        "hemoptisis Sonora",
        "neumólogo para tos con sangre",
      ],
    },
  },
  {
    id: "sy-ronquido",
    slug: "ronquido-fuerte-y-pausas-respiratorias-al-dormir",
    name: "Ronquido Fuerte y Pausas Respiratorias al Dormir",
    colloquialNames: ["ronquidos", "dejar de respirar dormido"],
    description:
      "El ronquido fuerte y frecuente, especialmente cuando se acompaña de pausas respiratorias observadas por otra persona, es el síntoma principal de la apnea obstructiva del sueño. Aunque el ronquido aislado puede ser inofensivo, su combinación con pausas respiratorias, somnolencia diurna y cansancio al despertar amerita un estudio del sueño para descartar apnea obstructiva.",
    causes: [
      "Apnea obstructiva del sueño",
      "Sobrepeso u obesidad con exceso de tejido en la vía aérea superior",
      "Anatomía particular de la vía aérea, mandíbula o amígdalas",
      "Consumo de alcohol antes de dormir",
    ],
    alarmSigns: [
      "Pausas respiratorias observadas por otra persona que duran varios segundos",
      "Sensación de ahogo o asfixia que despierta a la persona por la noche",
      "Somnolencia extrema durante el día que interfiere con actividades como conducir",
      "Episodios de confusión al despertar junto con dificultad para respirar",
    ],
    whyConsult:
      "El ronquido fuerte acompañado de pausas respiratorias observadas durante el sueño es el signo más característico de la apnea obstructiva del sueño, una condición que aumenta el riesgo cardiovascular si no se diagnostica y controla, por lo que un estudio del sueño con un neumólogo permite confirmarla y definir el manejo adecuado.",
    faqs: [
      {
        question: "¿Todo ronquido significa apnea del sueño?",
        answer:
          "No, el ronquido aislado sin pausas respiratorias ni somnolencia diurna significativa puede no representar apnea del sueño, pero cuando se combina con pausas observadas por otra persona o cansancio excesivo durante el día, conviene una valoración con estudio del sueño.",
      },
      {
        question: "¿Quién suele notar primero las pausas respiratorias?",
        answer:
          "Con frecuencia es la pareja o algún familiar quien primero nota las pausas respiratorias durante el sueño, ya que la persona que las presenta rara vez es consciente de ellas al despertar, por lo que este dato es muy valioso para el neumólogo al momento de la valoración.",
      },
    ],
    relatedConditions: ["d-apnea-sueno"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/ronquido-fuerte-y-pausas-respiratorias-al-dormir.jpg",
    seo: {
      title: "Ronquido Fuerte y Pausas al Dormir | Neumólogo en Hermosillo",
      description:
        "Roncar fuerte con pausas al dormir puede ser apnea del sueño. Estudio del sueño con el Dr. Oliver Martínez en Hermosillo, Sonora.",
      keywords: [
        "ronquido fuerte Hermosillo",
        "pausas respiratorias al dormir Sonora",
        "neumólogo para apnea del sueño",
      ],
    },
  },
  {
    id: "sy-fatiga",
    slug: "fatiga-y-cansancio-excesivo",
    name: "Fatiga y Cansancio Excesivo",
    colloquialNames: ["cansancio todo el tiempo", "no tener energía"],
    description:
      "La fatiga y el cansancio excesivo que no mejoran con el descanso habitual pueden estar relacionados con enfermedades respiratorias crónicas que reducen la oxigenación del cuerpo, como la Enfermedad Pulmonar Obstructiva Crónica, la fibrosis pulmonar, la apnea obstructiva del sueño o infecciones como la neumonía y la tuberculosis pulmonar, por lo que su evaluación por un neumólogo puede ayudar a identificar una causa respiratoria de fondo.",
    causes: [
      "Enfermedad Pulmonar Obstructiva Crónica o fibrosis pulmonar",
      "Apnea obstructiva del sueño con descanso nocturno interrumpido",
      "Neumonía u otras infecciones respiratorias",
      "Tuberculosis pulmonar",
    ],
    alarmSigns: [
      "Fatiga acompañada de dificultad para respirar en reposo",
      "Fatiga con dolor en el pecho",
      "Pérdida de peso marcada sin causa aparente junto con la fatiga",
      "Confusión o dificultad para mantenerse despierto durante el día",
    ],
    whyConsult:
      "La fatiga persistente que no mejora con el descanso puede ser la manifestación de una enfermedad pulmonar crónica que reduce la oxigenación del cuerpo, o de un sueño interrumpido por apnea obstructiva del sueño, por lo que su evaluación con un neumólogo ayuda a identificar y tratar la causa de fondo en lugar de solo el cansancio.",
    faqs: [
      {
        question: "¿Cómo sé si mi cansancio es por un problema pulmonar?",
        answer:
          "Cuando la fatiga se acompaña de otros síntomas respiratorios como dificultad para respirar, tos persistente o ronquido fuerte con pausas al dormir, es más probable que exista una relación con una enfermedad pulmonar, por lo que la valoración con un neumólogo ayuda a establecer si ese es el origen.",
      },
      {
        question: "¿La apnea del sueño puede causar cansancio de día?",
        answer:
          "Sí, las pausas respiratorias repetidas durante la noche interrumpen el sueño profundo, aunque la persona no lo recuerde, lo que provoca cansancio y somnolencia excesiva durante el día, un motivo frecuente de consulta que se confirma con un estudio del sueño.",
      },
    ],
    relatedConditions: [
      "d-epoc",
      "d-neumonia",
      "d-apnea-sueno",
      "d-fibrosis-pulmonar",
      "d-tuberculosis",
    ],
    lastReviewed: "2026-09-24",
    image: "/sintomas/fatiga-y-cansancio-excesivo.jpg",
    seo: {
      title: "Fatiga y Cansancio Excesivo | Neumólogo en Hermosillo",
      description:
        "El cansancio persistente puede tener causa pulmonar: EPOC, apnea del sueño o fibrosis pulmonar. Consulta con el Dr. Oliver Martínez.",
      keywords: [
        "fatiga crónica en Hermosillo",
        "cansancio excesivo Sonora",
        "neumólogo para fatiga y cansancio",
      ],
    },
  },
  {
    id: "sy-opresion-pecho",
    slug: "opresion-en-el-pecho",
    name: "Opresión en el Pecho",
    colloquialNames: ["pecho apretado", "presión en el pecho"],
    description:
      "La opresión en el pecho es una sensación de presión, tirantez o peso en la zona torácica que, en el contexto respiratorio, se asocia frecuentemente al asma y al enfisema pulmonar. Es distinta del dolor torácico agudo y suele acompañarse de otros síntomas como sibilancias o dificultad para respirar, por lo que su evaluación con un neumólogo ayuda a definir si el origen es respiratorio.",
    causes: [
      "Asma no controlada",
      "Enfisema pulmonar",
      "Inflamación de la vía aérea durante una crisis respiratoria",
      "Ansiedad, que puede coexistir o confundirse con síntomas respiratorios",
    ],
    alarmSigns: [
      "Opresión en el pecho acompañada de dificultad importante para respirar",
      "Opresión que se extiende al brazo, cuello o mandíbula",
      "Sudoración fría o sensación de desmayo junto con la opresión",
      "Opresión que no mejora con las medidas habituales indicadas por el médico",
    ],
    whyConsult:
      "La opresión en el pecho de origen respiratorio, especialmente cuando se acompaña de sibilancias o dificultad para respirar, puede ser señal de asma no controlada o de enfisema pulmonar, y su evaluación con un neumólogo mediante espirometría ayuda a definir un plan de control adecuado.",
    faqs: [
      {
        question: "¿Cómo distinguir la opresión de pecho respiratoria de un problema cardíaco?",
        answer:
          "Ante cualquier opresión en el pecho, especialmente si es intensa o de inicio súbito, siempre se recomienda descartar primero un origen cardíaco de forma urgente; una vez descartado, si la opresión se acompaña de sibilancias, tos o antecedente de asma, un neumólogo puede evaluar el origen respiratorio.",
      },
      {
        question: "¿La opresión en el pecho por asma se puede prevenir?",
        answer:
          "Sí, con un plan de control adecuado del asma, incluyendo la identificación de desencadenantes y el seguimiento con espirometría, es posible reducir la frecuencia e intensidad de la opresión torácica asociada a esta enfermedad.",
      },
    ],
    relatedConditions: ["d-asma", "d-enfisema"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/opresion-en-el-pecho.jpg",
    seo: {
      title: "Opresión en el Pecho | Neumólogo en Hermosillo, Sonora",
      description:
        "La opresión torácica puede ser señal de asma o enfisema pulmonar. Valoración respiratoria con el Dr. Oliver Martínez en Hermosillo.",
      keywords: [
        "opresión en el pecho Hermosillo",
        "presión en el pecho Sonora",
        "neumólogo para opresión torácica",
      ],
    },
  },
  {
    id: "sy-flema",
    slug: "produccion-excesiva-de-flema",
    name: "Producción Excesiva de Flema",
    colloquialNames: ["mucosidad en el pecho", "flemas todos los días"],
    description:
      "La producción excesiva de flema, especialmente cuando se presenta la mayoría de los días durante meses, es característica de la bronquitis crónica y de la Enfermedad Pulmonar Obstructiva Crónica, y también puede acompañar a infecciones respiratorias como la neumonía. Su evaluación por un neumólogo permite identificar si existe una enfermedad de base que requiera manejo específico.",
    causes: [
      "Bronquitis crónica",
      "Enfermedad Pulmonar Obstructiva Crónica",
      "Neumonía u otras infecciones respiratorias",
      "Exposición prolongada a irritantes como el humo de tabaco",
    ],
    alarmSigns: [
      "Flema con sangre",
      "Flema abundante acompañada de fiebre alta y dificultad para respirar",
      "Cambio brusco en el color o la cantidad de la flema junto con malestar general intenso",
    ],
    whyConsult:
      "La producción de flema que se presenta de forma diaria durante varios meses puede ser señal de bronquitis crónica o de Enfermedad Pulmonar Obstructiva Crónica, condiciones que un neumólogo puede evaluar con espirometría para definir el grado de afectación y el manejo adecuado.",
    faqs: [
      {
        question: "¿Cuándo la flema diaria es motivo de consulta con un neumólogo?",
        answer:
          "Cuando la producción de flema se presenta la mayoría de los días durante tres meses o más, especialmente si hay antecedente de tabaquismo, es momento de una valoración con un neumólogo para descartar bronquitis crónica o Enfermedad Pulmonar Obstructiva Crónica.",
      },
      {
        question: "¿El color de la flema indica algo importante?",
        answer:
          "El color de la flema puede orientar sobre la presencia de una infección agregada, pero no es suficiente para un diagnóstico por sí solo; la valoración médica junto con estudios complementarios es lo que permite determinar la causa exacta.",
      },
    ],
    relatedConditions: ["d-epoc", "d-neumonia", "d-bronquitis-cronica"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/produccion-excesiva-de-flema.jpg",
    seo: {
      title: "Producción Excesiva de Flema | Neumólogo en Hermosillo",
      description:
        "Flema diaria por meses puede indicar bronquitis crónica o EPOC. Valoración respiratoria con el Dr. Oliver Martínez en Hermosillo.",
      keywords: [
        "exceso de flema Hermosillo",
        "mucosidad en el pecho Sonora",
        "neumólogo para producción de flema",
      ],
    },
  },
  {
    id: "sy-perdida-peso",
    slug: "perdida-de-peso-inexplicable-con-sintomas-respiratorios",
    name: "Pérdida de Peso Inexplicable con Síntomas Respiratorios",
    colloquialNames: ["adelgazar sin motivo", "bajar de peso sin explicación"],
    description:
      "La pérdida de peso sin causa aparente, cuando se combina con síntomas respiratorios como tos persistente, fatiga o sudoración nocturna, es un signo que requiere valoración médica prioritaria, ya que puede asociarse a enfermedades como la tuberculosis pulmonar o el cáncer de pulmón. Un neumólogo evalúa este conjunto de síntomas de forma integral, apoyado en estudios de imagen y de laboratorio.",
    causes: [
      "Tuberculosis pulmonar",
      "Cáncer de pulmón",
      "Enfermedad pulmonar crónica avanzada con aumento del esfuerzo respiratorio",
      "Infecciones respiratorias prolongadas",
    ],
    alarmSigns: [
      "Pérdida de peso marcada en poco tiempo sin cambios en la dieta",
      "Pérdida de peso junto con tos con sangre",
      "Sudoración nocturna intensa y fiebre persistente",
      "Debilidad progresiva importante que limita las actividades diarias",
    ],
    whyConsult:
      "La combinación de pérdida de peso sin causa aparente con síntomas respiratorios como tos persistente o sudoración nocturna es un patrón que un neumólogo debe evaluar de forma prioritaria, ya que puede corresponder a tuberculosis pulmonar o a cáncer de pulmón, condiciones en las que el diagnóstico oportuno cambia de forma importante el pronóstico.",
    faqs: [
      {
        question: "¿Qué tan rápida debe ser la pérdida de peso para preocupar?",
        answer:
          "En general, perder una cantidad significativa de peso corporal en pocos meses sin cambios intencionados en la dieta o el ejercicio es motivo de valoración médica, especialmente si se acompaña de síntomas respiratorios como tos persistente o sudoración nocturna.",
      },
      {
        question: "¿Qué estudios se realizan ante pérdida de peso y síntomas respiratorios?",
        answer:
          "El neumólogo suele solicitar estudios de imagen del tórax y de laboratorio, y según los hallazgos, puede requerirse una broncoscopía o una biopsia pulmonar para llegar a un diagnóstico preciso de la causa de fondo.",
      },
    ],
    relatedConditions: ["d-tuberculosis", "d-cancer-pulmon"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/perdida-de-peso-inexplicable-con-sintomas-respiratorios.jpg",
    seo: {
      title: "Pérdida de Peso con Síntomas Respiratorios | Hermosillo",
      description:
        "Bajar de peso sin explicación junto con tos o fatiga puede requerir descartar tuberculosis o cáncer de pulmón. Dr. Oliver Martínez.",
      keywords: [
        "pérdida de peso inexplicable Hermosillo",
        "bajar de peso sin motivo Sonora",
        "neumólogo para pérdida de peso y tos",
      ],
    },
  },
];
