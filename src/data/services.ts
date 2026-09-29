import type { MedicalService } from "@/types/schema";

// Catálogo real de servicios/estudios de Neumología para el Dr. Oliver
// Martínez González. Precios no confirmados por el doctor: se omiten
// (priceRange queda sin definir) en vez de inventarse.
export const services: MedicalService[] = [
  {
    id: "s-espirometria",
    slug: "espirometria",
    name: "Espirometría",
    description:
      "Estudio de función pulmonar que mide cuánto aire pueden mover los pulmones y qué tan rápido, la base para diagnosticar y clasificar enfermedades respiratorias como el asma y la Enfermedad Pulmonar Obstructiva Crónica.",
    longDescription:
      "La espirometría es un estudio no invasivo en el que el paciente respira a través de una boquilla conectada a un equipo que mide el volumen y la velocidad del aire que entra y sale de los pulmones. Es la prueba de referencia para confirmar y clasificar la severidad de enfermedades como el asma, la Enfermedad Pulmonar Obstructiva Crónica, la bronquitis crónica y el enfisema pulmonar. En algunos casos se realiza una segunda medición después de administrar un broncodilatador para evaluar si la obstrucción de la vía aérea es reversible, lo que ayuda a diferenciar entre distintas enfermedades respiratorias.",
    type: "consultorio",
    duration: "20 a 30 minutos",
    recoveryTime: "No aplica, el paciente se retira caminando",
    isPainful: false,
    benefits: [
      "Confirma y clasifica el grado de obstrucción o restricción pulmonar",
      "Permite diferenciar entre asma y Enfermedad Pulmonar Obstructiva Crónica",
      "Es la base para dar seguimiento objetivo a la evolución del paciente",
      "No requiere ayuno ni preparación invasiva",
    ],
    postOpRecommendations: [
      "Evitar comidas abundantes justo antes del estudio",
      "No fumar ni usar broncodilatadores en las horas previas indicadas por el médico",
      "Usar ropa cómoda que no restrinja la respiración",
    ],
    technicalSpecs: {
      Tipo: "Consultorio, no invasivo",
      Duración: "20 a 30 minutos",
      Doloroso: "No",
      Preparación: "Indicaciones específicas antes del estudio, según cada caso",
    },
    faqs: [
      {
        question: "¿La espirometría duele?",
        answer:
          "No. La espirometría no es dolorosa; consiste en respirar con fuerza a través de una boquilla siguiendo instrucciones del personal, aunque puede requerir varios intentos para obtener una medición técnicamente adecuada.",
      },
      {
        question: "¿Necesito alguna preparación antes del estudio?",
        answer:
          "En algunos casos se pide suspender temporalmente ciertos inhaladores broncodilatadores antes del estudio, según lo que se busque evaluar; el consultorio indicará las instrucciones específicas antes de la cita.",
      },
      {
        question: "¿Cada cuánto debo repetir una espirometría?",
        answer:
          "La frecuencia depende del diagnóstico y de la estabilidad de los síntomas; en enfermedades crónicas como el asma o la Enfermedad Pulmonar Obstructiva Crónica, el neumólogo indica la periodicidad adecuada para dar seguimiento a la función pulmonar.",
      },
    ],
    relatedConditions: [
      "d-asma",
      "d-epoc",
      "d-bronquitis-cronica",
      "d-enfisema",
    ],
    lastReviewed: "2026-09-24",
    image: "/servicios/espirometria.jpg",
    seo: {
      title: "Espirometría en Hermosillo | Dr. Oliver Martínez",
      description:
        "Estudio de función pulmonar para diagnosticar asma, EPOC y otras enfermedades respiratorias. Espirometría con el Dr. Oliver Martínez.",
      keywords: [
        "espirometría en Hermosillo",
        "estudio de función pulmonar Sonora",
        "espirometría neumólogo",
      ],
    },
  },
  {
    id: "s-broncoscopia",
    slug: "broncoscopia",
    name: "Broncoscopía",
    description:
      "Procedimiento que permite observar directamente el interior de la tráquea y los bronquios con una cámara flexible, y obtener muestras cuando es necesario para llegar a un diagnóstico preciso.",
    longDescription:
      "La broncoscopía es un procedimiento en el que se introduce un tubo flexible con una cámara en su extremo, llamado broncoscopio, a través de la nariz o la boca hasta las vías respiratorias, permitiendo observar directamente la tráquea y los bronquios. Durante el procedimiento se pueden tomar muestras de tejido, líquido o secreciones para análisis, lo que lo convierte en una herramienta clave para el estudio de tos persistente inexplicada, tos con sangre, hallazgos anormales en estudios de imagen o sospecha de tuberculosis pulmonar y cáncer de pulmón. Se realiza bajo sedación para mayor comodidad del paciente.",
    type: "ambulatorio",
    anesthesiaType: "Sedación y anestesia local de la vía aérea",
    duration: "30 a 60 minutos",
    recoveryTime: "Algunas horas de observación el mismo día",
    isPainful: false,
    benefits: [
      "Permite observar directamente el interior de la vía respiratoria",
      "Posibilita tomar muestras de tejido o secreciones en el mismo procedimiento",
      "Ayuda a confirmar diagnósticos que no son concluyentes solo con estudios de imagen",
      "Se realiza de forma ambulatoria en la mayoría de los casos",
    ],
    postOpRecommendations: [
      "Permanecer en ayuno las horas indicadas antes del procedimiento",
      "No conducir el mismo día por efecto de la sedación",
      "Evitar comer o beber hasta que el efecto anestésico de la garganta desaparezca por completo",
      "Reportar al consultorio cualquier tos con sangre abundante o dificultad para respirar tras el procedimiento",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio, con sedación",
      Duración: "30 a 60 minutos",
      Doloroso: "No, se realiza con sedación",
      Recuperación: "Observación de algunas horas el mismo día",
    },
    faqs: [
      {
        question: "¿La broncoscopía es dolorosa?",
        answer:
          "No debería doler, ya que se realiza bajo sedación y con anestesia local en la vía aérea; algunos pacientes refieren una sensación de presión o de tos leve durante el procedimiento, pero no dolor significativo.",
      },
      {
        question: "¿Necesito acompañante para la broncoscopía?",
        answer:
          "Sí, debido a la sedación utilizada durante el procedimiento se recomienda acudir acompañado y no conducir el resto del día, hasta que el efecto haya desaparecido por completo.",
      },
      {
        question: "¿Para qué enfermedades se usa la broncoscopía?",
        answer:
          "La broncoscopía se utiliza en el estudio de tos con sangre, tos persistente sin causa clara, hallazgos anormales en radiografías o tomografías, y en la sospecha de tuberculosis pulmonar o cáncer de pulmón, entre otras condiciones respiratorias.",
      },
    ],
    relatedConditions: ["d-neumonia", "d-tuberculosis", "d-cancer-pulmon"],
    lastReviewed: "2026-09-24",
    image: "/servicios/broncoscopia.jpg",
    seo: {
      title: "Broncoscopía en Hermosillo | Dr. Oliver Martínez",
      description:
        "Estudio directo de la vía respiratoria para diagnóstico de tos con sangre, tuberculosis y cáncer de pulmón. Broncoscopía en Hermosillo.",
      keywords: [
        "broncoscopía en Hermosillo",
        "estudio de vía respiratoria Sonora",
        "broncoscopía neumólogo",
      ],
    },
  },
  {
    id: "s-polisomnografia",
    slug: "polisomnografia-estudio-del-sueno",
    name: "Polisomnografía (Estudio del Sueño)",
    description:
      "Estudio que registra la respiración, el oxígeno en sangre y otros parámetros durante toda una noche de sueño, y que confirma el diagnóstico de apnea obstructiva del sueño y su gravedad.",
    longDescription:
      "La polisomnografía, conocida comúnmente como estudio del sueño, registra de forma simultánea la respiración, el nivel de oxígeno en sangre, el ronquido, los movimientos corporales y la actividad cerebral durante una noche completa de sueño. Es el estudio de referencia para confirmar el diagnóstico de apnea obstructiva del sueño, cuantificar el número de pausas respiratorias por hora y determinar la gravedad del trastorno, información indispensable para decidir si el paciente requiere adaptación de un equipo de presión positiva (CPAP o BiPAP) y con qué parámetros.",
    type: "ambulatorio",
    duration: "Una noche completa de registro",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Confirma el diagnóstico de apnea obstructiva del sueño de forma objetiva",
      "Cuantifica la gravedad del trastorno respiratorio del sueño",
      "Permite definir si se requiere un equipo de presión positiva y con qué ajustes",
      "Detecta otros trastornos del sueño que pueden confundirse con apnea",
    ],
    postOpRecommendations: [
      "Evitar café, alcohol y siestas prolongadas el día del estudio",
      "Llevar ropa cómoda para dormir",
      "Seguir la rutina habitual de sueño en la medida de lo posible",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio, registro nocturno",
      Duración: "Una noche completa",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Puedo dormir con normalidad durante el estudio del sueño?",
        answer:
          "El equipo de sensores puede sentirse distinto a lo habitual la primera noche, pero está diseñado para permitir un sueño lo más natural posible; el registro obtenido, aunque el sueño no sea idéntico al de casa, suele ser suficiente para el diagnóstico.",
      },
      {
        question: "¿La polisomnografía se puede hacer en casa?",
        answer:
          "Existen estudios de sueño simplificados para realizar en el domicilio en casos seleccionados, pero la polisomnografía completa ofrece información más detallada y es la recomendada cuando se requiere un diagnóstico preciso o hay otras condiciones médicas asociadas; el neumólogo indica cuál es la opción adecuada para cada paciente.",
      },
      {
        question: "¿Qué pasa después de obtener los resultados?",
        answer:
          "Con los resultados de la polisomnografía, el neumólogo determina si existe apnea obstructiva del sueño, su gravedad, y si es necesario iniciar la adaptación de un equipo de presión positiva (CPAP o BiPAP) para su control.",
      },
    ],
    relatedConditions: ["d-apnea-sueno"],
    lastReviewed: "2026-09-24",
    image: "/servicios/polisomnografia-estudio-del-sueno.jpg",
    seo: {
      title: "Estudio del Sueño (Polisomnografía) en Hermosillo",
      description:
        "Diagnóstico de apnea obstructiva del sueño con polisomnografía. Estudio del sueño con el Dr. Oliver Martínez en Hermosillo, Sonora.",
      keywords: [
        "estudio del sueño en Hermosillo",
        "polisomnografía Sonora",
        "diagnóstico de apnea del sueño",
      ],
    },
  },
  {
    id: "s-gasometria",
    slug: "gasometria-arterial",
    name: "Gasometría Arterial",
    description:
      "Análisis de una muestra de sangre arterial que mide el oxígeno, el dióxido de carbono y el equilibrio ácido-base, esencial para evaluar la gravedad de enfermedades respiratorias.",
    longDescription:
      "La gasometría arterial es un estudio de laboratorio que analiza una pequeña muestra de sangre obtenida de una arteria, generalmente en la muñeca, para medir con precisión el nivel de oxígeno, el dióxido de carbono y el equilibrio ácido-base de la sangre. A diferencia de un oxímetro de dedo, ofrece información más completa y precisa sobre el intercambio de gases en el pulmón, por lo que es especialmente útil para evaluar la gravedad de la neumonía, la fibrosis pulmonar, el derrame pleural y otras condiciones respiratorias, así como para decidir si un paciente requiere oxigenoterapia.",
    type: "consultorio",
    duration: "5 a 10 minutos para la toma de muestra",
    recoveryTime: "No aplica, puede haber leve molestia en el sitio de punción",
    isPainful: true,
    benefits: [
      "Mide con precisión el oxígeno y el dióxido de carbono en sangre",
      "Ayuda a definir la necesidad de oxigenoterapia",
      "Es clave para evaluar la gravedad de una enfermedad respiratoria aguda o crónica",
      "Resultado disponible en poco tiempo",
    ],
    postOpRecommendations: [
      "Presionar el sitio de punción unos minutos para evitar moretones",
      "Informar al personal si se toman medicamentos que afectan la coagulación",
    ],
    technicalSpecs: {
      Tipo: "Consultorio, toma de muestra arterial",
      Duración: "5 a 10 minutos",
      Doloroso: "Molestia breve en el sitio de punción",
    },
    faqs: [
      {
        question: "¿La gasometría arterial duele más que un análisis de sangre normal?",
        answer:
          "Puede generar una molestia algo mayor que una toma de sangre venosa habitual, ya que se obtiene de una arteria, pero es un procedimiento breve y la molestia suele ser pasajera, limitada al momento de la punción.",
      },
      {
        question: "¿En qué se diferencia de la saturación de oxígeno con un oxímetro?",
        answer:
          "El oxímetro de dedo estima de forma indirecta y rápida el porcentaje de oxígeno en sangre, mientras que la gasometría arterial mide directamente el oxígeno, el dióxido de carbono y el equilibrio ácido-base, ofreciendo información más completa para decisiones clínicas importantes.",
      },
      {
        question: "¿Para qué enfermedades se solicita este estudio?",
        answer:
          "Se solicita con frecuencia en neumonía, fibrosis pulmonar, derrame pleural, Enfermedad Pulmonar Obstructiva Crónica en exacerbación y cualquier condición en la que sea necesario confirmar con precisión el nivel de oxigenación del paciente.",
      },
    ],
    relatedConditions: ["d-neumonia", "d-fibrosis-pulmonar", "d-derrame-pleural"],
    lastReviewed: "2026-09-24",
    image: "/servicios/gasometria-arterial.jpg",
    seo: {
      title: "Gasometría Arterial en Hermosillo | Dr. Oliver Martínez",
      description:
        "Medición precisa de oxígeno y dióxido de carbono en sangre. Gasometría arterial con el Dr. Oliver Martínez, neumólogo en Hermosillo.",
      keywords: [
        "gasometría arterial en Hermosillo",
        "estudio de oxígeno en sangre Sonora",
        "gasometría neumólogo",
      ],
    },
  },
  {
    id: "s-caminata-6min",
    slug: "prueba-de-caminata-de-6-minutos",
    name: "Prueba de Caminata de 6 Minutos",
    description:
      "Estudio funcional que mide la distancia que una persona puede caminar en 6 minutos y su oxigenación durante el esfuerzo, útil para evaluar enfermedades pulmonares crónicas.",
    longDescription:
      "La prueba de caminata de 6 minutos es un estudio sencillo y objetivo en el que el paciente camina a su propio ritmo por un pasillo durante 6 minutos, mientras se mide la distancia recorrida y, en la mayoría de los casos, el nivel de oxígeno en sangre y la frecuencia cardíaca durante el esfuerzo. Es especialmente útil en enfermedades pulmonares crónicas como la Enfermedad Pulmonar Obstructiva Crónica y la fibrosis pulmonar, ya que permite evaluar la tolerancia real al esfuerzo físico, detectar si el oxígeno cae durante la actividad y dar seguimiento objetivo a la evolución del paciente a lo largo del tiempo.",
    type: "consultorio",
    duration: "15 a 20 minutos, incluyendo preparación",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Evalúa la tolerancia real al esfuerzo físico en enfermedades pulmonares crónicas",
      "Detecta caídas del oxígeno en sangre durante la actividad",
      "Permite dar seguimiento objetivo a la evolución del paciente",
      "Ayuda a definir la necesidad de oxígeno durante el ejercicio",
    ],
    postOpRecommendations: [
      "Usar ropa y calzado cómodos para caminar",
      "Evitar ejercicio intenso en las horas previas al estudio",
      "Informar al personal cualquier molestia durante la caminata",
    ],
    technicalSpecs: {
      Tipo: "Consultorio, prueba funcional",
      Duración: "15 a 20 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Qué mide exactamente la prueba de caminata de 6 minutos?",
        answer:
          "Mide principalmente la distancia que la persona logra caminar en 6 minutos a su propio ritmo, junto con el comportamiento del oxígeno en sangre y la frecuencia cardíaca durante el esfuerzo, lo que refleja la capacidad funcional real del paciente.",
      },
      {
        question: "¿Es una prueba de esfuerzo exigente?",
        answer:
          "No busca llevar al paciente al límite; se realiza al ritmo que cada persona pueda tolerar, y el objetivo es medir el desempeño habitual durante una actividad cotidiana como caminar, no una prueba de esfuerzo máximo.",
      },
      {
        question: "¿Con qué frecuencia se repite este estudio?",
        answer:
          "La frecuencia depende de la enfermedad y de la estabilidad del paciente; en condiciones crónicas como la fibrosis pulmonar o la Enfermedad Pulmonar Obstructiva Crónica, el neumólogo puede repetirla periódicamente para dar seguimiento a la evolución.",
      },
    ],
    relatedConditions: ["d-epoc", "d-fibrosis-pulmonar"],
    lastReviewed: "2026-09-24",
    image: "/servicios/prueba-de-caminata-de-6-minutos.jpg",
    seo: {
      title: "Prueba de Caminata de 6 Minutos en Hermosillo",
      description:
        "Evaluación de la capacidad funcional y oxigenación durante el esfuerzo. Prueba de caminata de 6 minutos con el Dr. Oliver Martínez.",
      keywords: [
        "prueba de caminata de 6 minutos Hermosillo",
        "evaluación funcional pulmonar Sonora",
        "prueba de esfuerzo neumólogo",
      ],
    },
  },
  {
    id: "s-oxigenoterapia",
    slug: "oxigenoterapia",
    name: "Oxigenoterapia",
    description:
      "Administración controlada de oxígeno suplementario para pacientes con niveles bajos de oxígeno en sangre, con seguimiento médico para ajustar el equipo y el flujo adecuado.",
    longDescription:
      "La oxigenoterapia consiste en la administración de oxígeno adicional al que respira el paciente de forma natural, indicada cuando estudios como la gasometría arterial o la prueba de caminata de 6 minutos confirman niveles de oxígeno por debajo de lo adecuado. Puede indicarse de forma continua, solo durante el esfuerzo o solo durante el sueño, dependiendo de la enfermedad de base, siendo frecuente en pacientes con Enfermedad Pulmonar Obstructiva Crónica, fibrosis pulmonar, enfisema pulmonar o secuelas de neumonía. El seguimiento médico regular permite ajustar el flujo de oxígeno según la evolución de cada paciente.",
    type: "ambulatorio",
    duration: "Variable según indicación (continua, nocturna o durante esfuerzo)",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Mejora la oxigenación en pacientes con niveles bajos de oxígeno en sangre",
      "Reduce la sobrecarga del corazón asociada a la baja oxigenación crónica",
      "Permite mayor tolerancia a la actividad física en enfermedades pulmonares crónicas",
      "Se ajusta de forma individualizada según los estudios de cada paciente",
    ],
    postOpRecommendations: [
      "Utilizar el oxígeno exactamente en el flujo y horario indicados por el médico",
      "No suspender ni ajustar el flujo por cuenta propia",
      "Acudir a las revisiones periódicas para reevaluar la necesidad y el ajuste del equipo",
      "Evitar fuentes de calor o flama cerca del equipo de oxígeno",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio o domiciliario, según indicación",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Cómo se decide si necesito oxígeno en casa?",
        answer:
          "La necesidad de oxigenoterapia domiciliaria se define con estudios objetivos, como la gasometría arterial o la prueba de caminata de 6 minutos, que muestran si el nivel de oxígeno en sangre está por debajo de lo adecuado en reposo, durante el esfuerzo o durante el sueño.",
      },
      {
        question: "¿Usar oxígeno crea dependencia?",
        answer:
          "El oxígeno suplementario no genera dependencia en el sentido de una adicción; se indica porque el cuerpo lo necesita para mantener una oxigenación adecuada, y su uso, ajuste o eventual suspensión siempre deben decidirse con base en estudios médicos, no por sensación personal.",
      },
      {
        question: "¿Puedo salir de casa si uso oxígeno suplementario?",
        answer:
          "Sí, existen equipos portátiles de oxígeno que permiten mantener actividades fuera de casa; el neumólogo puede orientar sobre el tipo de equipo más adecuado según el flujo de oxígeno que cada paciente requiera.",
      },
    ],
    relatedConditions: ["d-epoc", "d-neumonia", "d-fibrosis-pulmonar", "d-enfisema"],
    lastReviewed: "2026-09-24",
    image: "/servicios/oxigenoterapia.jpg",
    seo: {
      title: "Oxigenoterapia en Hermosillo | Dr. Oliver Martínez",
      description:
        "Administración y seguimiento de oxígeno suplementario para EPOC, fibrosis pulmonar y otras enfermedades. Oxigenoterapia en Hermosillo.",
      keywords: [
        "oxigenoterapia en Hermosillo",
        "oxígeno suplementario Sonora",
        "oxigenoterapia domiciliaria neumólogo",
      ],
    },
  },
  {
    id: "s-rehabilitacion-pulmonar",
    slug: "rehabilitacion-pulmonar",
    name: "Rehabilitación Pulmonar",
    description:
      "Programa supervisado de ejercicio y educación para mejorar la capacidad respiratoria y la calidad de vida de pacientes con enfermedades pulmonares crónicas como asma, EPOC y enfisema.",
    longDescription:
      "La rehabilitación pulmonar es un programa estructurado que combina ejercicio físico supervisado, técnicas de respiración y educación sobre la enfermedad, diseñado para mejorar la capacidad de esfuerzo, reducir la sensación de falta de aire y aumentar la calidad de vida de personas con enfermedades pulmonares crónicas. Está especialmente indicada en pacientes con Enfermedad Pulmonar Obstructiva Crónica, enfisema pulmonar y asma con limitación funcional persistente, ya que el acondicionamiento físico adecuado ayuda a que el cuerpo utilice mejor el oxígeno disponible, incluso cuando la función pulmonar no puede recuperarse por completo.",
    type: "ambulatorio",
    duration: "Programa de varias semanas con sesiones periódicas",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Mejora la tolerancia al ejercicio y la fuerza muscular",
      "Reduce la sensación de falta de aire en las actividades cotidianas",
      "Disminuye la ansiedad asociada a la dificultad para respirar",
      "Favorece una mejor calidad de vida en enfermedades pulmonares crónicas",
    ],
    postOpRecommendations: [
      "Asistir de forma constante a las sesiones programadas",
      "Reportar cualquier síntoma nuevo o que empeore durante el ejercicio",
      "Mantener la actividad física aprendida también en casa",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio, programa supervisado",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿La rehabilitación pulmonar es solo ejercicio?",
        answer:
          "No únicamente; además del ejercicio físico supervisado, el programa incluye educación sobre la enfermedad, técnicas de respiración y estrategias para manejar la falta de aire en las actividades cotidianas, con un enfoque integral.",
      },
      {
        question: "¿Es segura para personas con Enfermedad Pulmonar Obstructiva Crónica avanzada?",
        answer:
          "Sí, la rehabilitación pulmonar se adapta al nivel funcional de cada paciente y se realiza bajo supervisión, lo que permite ejercitarse de forma segura incluso en etapas avanzadas de la enfermedad, siempre con una valoración previa que defina el plan adecuado.",
      },
      {
        question: "¿Cuánto tiempo se necesita para ver mejoría?",
        answer:
          "La mejoría en la tolerancia al esfuerzo y en la sensación de falta de aire suele notarse tras varias semanas de asistencia constante al programa, aunque el tiempo exacto varía según la enfermedad de base y la condición física inicial de cada paciente.",
      },
    ],
    relatedConditions: ["d-asma", "d-epoc", "d-enfisema"],
    lastReviewed: "2026-09-24",
    image: "/servicios/rehabilitacion-pulmonar.jpg",
    seo: {
      title: "Rehabilitación Pulmonar en Hermosillo | Dr. Oliver Martínez",
      description:
        "Programa de ejercicio y educación para mejorar la capacidad respiratoria en EPOC, enfisema y asma. Rehabilitación pulmonar en Hermosillo.",
      keywords: [
        "rehabilitación pulmonar en Hermosillo",
        "programa de ejercicio para EPOC Sonora",
        "rehabilitación respiratoria",
      ],
    },
  },
  {
    id: "s-toracocentesis",
    slug: "toracocentesis",
    name: "Toracocentesis",
    description:
      "Procedimiento en el que se extrae líquido acumulado en el espacio pleural con una aguja fina, tanto para aliviar la dificultad respiratoria como para analizar la causa del derrame.",
    longDescription:
      "La toracocentesis es un procedimiento ambulatorio en el que, bajo anestesia local y con frecuencia guiado por ultrasonido, se introduce una aguja fina en el espacio pleural para extraer el líquido acumulado en casos de derrame pleural. Tiene un doble propósito: por un lado, alivia de forma inmediata la dificultad para respirar al reducir la compresión sobre el pulmón; por otro, permite analizar el líquido obtenido en laboratorio para identificar la causa del derrame, ya sea una infección, un problema cardíaco, un proceso tumoral u otra condición.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local en el sitio de punción",
    duration: "20 a 30 minutos",
    recoveryTime: "Observación breve el mismo día",
    isPainful: true,
    benefits: [
      "Alivia de forma inmediata la dificultad para respirar por compresión pulmonar",
      "Permite identificar la causa del derrame pleural mediante análisis del líquido",
      "Procedimiento ambulatorio guiado por ultrasonido para mayor seguridad",
    ],
    postOpRecommendations: [
      "Permanecer en observación las horas indicadas tras el procedimiento",
      "Reportar dificultad para respirar que empeore o dolor torácico intenso posterior",
      "Evitar esfuerzos físicos intensos el resto del día",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio, guiado por ultrasonido",
      Duración: "20 a 30 minutos",
      Doloroso: "Molestia local durante la punción, con anestesia local",
    },
    faqs: [
      {
        question: "¿La toracocentesis es riesgosa?",
        answer:
          "Es un procedimiento generalmente seguro cuando se realiza con guía de ultrasonido y por personal capacitado; como cualquier procedimiento invasivo tiene riesgos posibles, que el neumólogo explica antes de realizarlo, y se vigila al paciente en las horas posteriores.",
      },
      {
        question: "¿Cuánto líquido se extrae en una toracocentesis?",
        answer:
          "La cantidad de líquido extraído depende del volumen del derrame y del objetivo del procedimiento, que puede ser principalmente diagnóstico, con una muestra pequeña, o también terapéutico, para aliviar la dificultad respiratoria con una extracción mayor.",
      },
    ],
    relatedConditions: ["d-derrame-pleural"],
    lastReviewed: "2026-09-24",
    image: "/servicios/toracocentesis.jpg",
    seo: {
      title: "Toracocentesis en Hermosillo | Dr. Oliver Martínez",
      description:
        "Extracción y análisis de líquido pleural para diagnóstico y alivio del derrame pleural. Toracocentesis con el Dr. Oliver Martínez.",
      keywords: [
        "toracocentesis en Hermosillo",
        "extracción de líquido pleural Sonora",
        "toracocentesis neumólogo",
      ],
    },
  },
  {
    id: "s-biopsia-pulmonar",
    slug: "biopsia-pulmonar",
    name: "Biopsia Pulmonar",
    description:
      "Obtención de una muestra de tejido pulmonar para su análisis en laboratorio, indispensable para confirmar el diagnóstico en hallazgos pulmonares que requieren estudio de tejido.",
    longDescription:
      "La biopsia pulmonar consiste en obtener una pequeña muestra de tejido del pulmón para analizarla bajo el microscopio y llegar a un diagnóstico certero. Puede realizarse por distintas vías según la localización y las características del hallazgo, incluyendo durante una broncoscopía o guiada por estudios de imagen, y es especialmente relevante en el estudio de nódulos o masas pulmonares detectadas en radiografías o tomografías, así como en la confirmación de tuberculosis pulmonar o cáncer de pulmón cuando otros estudios no son concluyentes.",
    type: "hospitalario",
    anesthesiaType: "Local o sedación, según la vía de abordaje",
    duration: "Variable según la técnica utilizada",
    recoveryTime: "Observación el mismo día o una noche, según el caso",
    isPainful: true,
    benefits: [
      "Confirma el diagnóstico definitivo mediante análisis del tejido",
      "Es determinante para diferenciar entre procesos infecciosos, inflamatorios y tumorales",
      "Guía las decisiones de manejo posteriores según el resultado",
    ],
    postOpRecommendations: [
      "Seguir las indicaciones de reposo relativo tras el procedimiento",
      "Reportar de inmediato dificultad para respirar significativa, dolor torácico intenso o sangrado abundante",
      "Acudir a la cita de seguimiento para revisar el resultado del análisis de tejido",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario o ambulatorio, según la técnica",
      Doloroso: "Sí, con anestesia local o sedación según el abordaje",
    },
    faqs: [
      {
        question: "¿Qué tipos de biopsia pulmonar existen?",
        answer:
          "Existen distintas técnicas, entre ellas la biopsia obtenida durante una broncoscopía o la biopsia guiada por estudios de imagen a través de la piel; el neumólogo elige la técnica más adecuada según la localización exacta del hallazgo y las características de cada paciente.",
      },
      {
        question: "¿Cuánto tiempo tarda el resultado de la biopsia?",
        answer:
          "El tiempo varía según el tipo de análisis requerido, pero en general el resultado del estudio de tejido tarda algunos días en estar disponible, tiempo durante el cual el consultorio da seguimiento al paciente.",
      },
      {
        question: "¿La biopsia pulmonar siempre significa que hay cáncer?",
        answer:
          "No. La biopsia pulmonar se realiza para estudiar cualquier hallazgo pulmonar que requiera análisis de tejido para su diagnóstico, y puede confirmar procesos benignos, infecciosos como la tuberculosis, o en algunos casos procesos tumorales; el objetivo es precisamente aclarar la causa antes de asumir un diagnóstico.",
      },
    ],
    relatedConditions: ["d-tuberculosis", "d-cancer-pulmon"],
    lastReviewed: "2026-09-24",
    image: "/servicios/biopsia-pulmonar.jpg",
    seo: {
      title: "Biopsia Pulmonar en Hermosillo | Dr. Oliver Martínez",
      description:
        "Estudio de tejido pulmonar para confirmar diagnóstico ante nódulos, tuberculosis o cáncer de pulmón. Biopsia pulmonar en Hermosillo.",
      keywords: [
        "biopsia pulmonar en Hermosillo",
        "estudio de nódulo pulmonar Sonora",
        "biopsia de pulmón neumólogo",
      ],
    },
  },
  {
    id: "s-cpap-bipap",
    slug: "adaptacion-de-ventilacion-no-invasiva-cpap-bipap",
    name: "Adaptación de Ventilación No Invasiva (CPAP/BiPAP)",
    description:
      "Proceso de ajuste y seguimiento de equipos de presión positiva en la vía aérea (CPAP o BiPAP), el tratamiento principal para la apnea obstructiva del sueño y otras condiciones respiratorias.",
    longDescription:
      "La adaptación de ventilación no invasiva consiste en definir, ajustar y dar seguimiento al uso de un equipo de presión positiva en la vía aérea, conocido como CPAP o BiPAP según el tipo de presión que administra, indicado principalmente en pacientes con apnea obstructiva del sueño confirmada por polisomnografía. El equipo mantiene la vía aérea abierta durante el sueño mediante un flujo de aire a presión, evitando las pausas respiratorias y sus consecuencias. La adaptación incluye la elección de la mascarilla adecuada, el ajuste de la presión según los resultados del estudio del sueño y el seguimiento periódico para verificar la respuesta y la tolerancia del paciente.",
    type: "ambulatorio",
    duration: "Proceso de ajuste inicial con seguimiento posterior",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Elimina las pausas respiratorias del sueño en la apnea obstructiva",
      "Reduce el riesgo cardiovascular asociado a la apnea del sueño no tratada",
      "Mejora la calidad del sueño y la somnolencia diurna",
      "Se ajusta de forma individualizada según los resultados de la polisomnografía",
    ],
    postOpRecommendations: [
      "Usar el equipo todas las noches según lo indicado para obtener el máximo beneficio",
      "Mantener la mascarilla y el equipo limpios conforme a las instrucciones",
      "Acudir a las revisiones de seguimiento para ajustar la presión si es necesario",
      "Reportar molestias con la mascarilla para valorar cambios de modelo o ajuste",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio, uso domiciliario nocturno",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Cuál es la diferencia entre CPAP y BiPAP?",
        answer:
          "El CPAP administra una presión de aire constante durante toda la respiración, mientras que el BiPAP utiliza dos niveles de presión distintos, uno para inhalar y otro para exhalar; el neumólogo decide cuál es el más adecuado según los resultados del estudio del sueño y las características de cada paciente.",
      },
      {
        question: "¿Es incómodo dormir con la mascarilla?",
        answer:
          "Puede sentirse distinto al inicio, pero la mayoría de los pacientes se adaptan en las primeras semanas; existen distintos modelos de mascarilla y el seguimiento con el consultorio ayuda a encontrar la opción más cómoda para cada persona.",
      },
      {
        question: "¿Qué pasa si dejo de usar el equipo?",
        answer:
          "Si se suspende el uso del equipo de presión positiva, las pausas respiratorias durante el sueño y sus síntomas asociados, como el ronquido y la somnolencia diurna, suelen reaparecer, ya que el equipo controla el trastorno mientras se utiliza, sin curarlo de forma definitiva.",
      },
    ],
    relatedConditions: ["d-apnea-sueno"],
    lastReviewed: "2026-09-24",
    image: "/servicios/adaptacion-de-ventilacion-no-invasiva-cpap-bipap.jpg",
    seo: {
      title: "Adaptación de CPAP y BiPAP en Hermosillo",
      description:
        "Ajuste y seguimiento de equipos de presión positiva para apnea del sueño. Adaptación de CPAP/BiPAP con el Dr. Oliver Martínez.",
      keywords: [
        "adaptación de CPAP en Hermosillo",
        "BiPAP para apnea del sueño Sonora",
        "ventilación no invasiva neumólogo",
      ],
    },
  },
];
