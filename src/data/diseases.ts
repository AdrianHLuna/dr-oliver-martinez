import type { MedicalCondition } from "@/types/schema";

// Catálogo clínico real de Neumología para el Dr. Oliver Martínez González.
// 10 enfermedades, contenido redactado con conocimiento médico general
// verificable (guías de práctica clínica), sin cifras ni testimonios
// inventados. lastReviewed fijo al 2026-09-24 (fecha del intake).
export const diseases: MedicalCondition[] = [
  {
    id: "d-asma",
    slug: "asma",
    name: "Asma",
    technicalName: "Asma Bronquial",
    colloquialNames: ["bronquios cerrados", "ataque de asma", "pecho apretado"],
    description:
      "El asma es una enfermedad crónica de las vías respiratorias en la que los bronquios se inflaman y se estrechan de forma reversible, dificultando el paso del aire. Se presenta en episodios o crisis que pueden ser desencadenados por alérgenos, infecciones respiratorias, ejercicio o cambios de clima. Con un diagnóstico confirmado por espirometría y un plan de control adecuado, la gran mayoría de las personas con asma llevan una vida normal y activa.",
    symptoms: [
      "Silbido al respirar (sibilancias)",
      "Dificultad para respirar, especialmente en la noche o de madrugada",
      "Opresión o presión en el pecho",
      "Tos seca persistente, sobre todo nocturna",
      "Síntomas que empeoran con el ejercicio o el aire frío",
    ],
    causes: [
      "Inflamación crónica de las vías respiratorias de origen alérgico o no alérgico",
      "Predisposición genética y antecedentes familiares de asma o alergias",
      "Exposición a alérgenos como ácaros, polen, humo o polvo",
      "Infecciones respiratorias virales en la infancia",
      "Exposición a contaminantes ambientales o humo de tabaco",
    ],
    riskFactors: [
      "Antecedentes familiares de asma, rinitis alérgica o eccema",
      "Exposición frecuente a humo de tabaco, incluido el humo de segunda mano",
      "Vivir o trabajar en ambientes con alta contaminación del aire",
      "Antecedente de infecciones respiratorias frecuentes en la infancia",
      "Obesidad",
    ],
    mexicoStats:
      "El asma es una de las enfermedades respiratorias crónicas más frecuentes en la población mexicana, con mayor prevalencia en niños y adultos jóvenes, y una proporción importante de los casos permanece sin diagnóstico confirmado por espirometría durante años.",
    complications: [
      "Crisis asmáticas graves que requieren atención de urgencia",
      "Limitación progresiva de la actividad física si no se controla",
      "Alteración del sueño por síntomas nocturnos",
      "Remodelación de la vía aérea por inflamación crónica no tratada",
    ],
    treatments: [
      "Confirmación diagnóstica mediante espirometría con prueba de reversibilidad",
      "Plan de control personalizado según la frecuencia e intensidad de los síntomas",
      "Identificación y evitación de los desencadenantes específicos de cada paciente",
      "Rehabilitación pulmonar en casos con limitación funcional persistente",
      "Seguimiento periódico con espirometrías de control",
    ],
    faqs: [
      {
        question: "¿El asma tiene cura definitiva?",
        answer:
          "El asma es una enfermedad crónica que no tiene una cura definitiva, pero con un diagnóstico correcto y un plan de control adecuado la mayoría de las personas mantiene los síntomas bien controlados y lleva una vida completamente normal, incluida la actividad física regular.",
      },
      {
        question: "¿Cómo se confirma el diagnóstico de asma?",
        answer:
          "El diagnóstico de asma se confirma principalmente con una espirometría, un estudio de función pulmonar que mide cuánto aire mueven los pulmones y qué tan rápido, y que permite además evaluar si esa función mejora tras una prueba de reversibilidad.",
      },
      {
        question: "¿El asma es lo mismo en niños que en adultos?",
        answer:
          "El mecanismo de inflamación de las vías respiratorias es similar, pero los desencadenantes y la forma de presentación pueden variar entre niños y adultos, por lo que el plan de valoración y seguimiento se individualiza según la edad y los antecedentes de cada paciente.",
      },
      {
        question: "¿Puedo hacer ejercicio si tengo asma?",
        answer:
          "Sí. Con el asma correctamente valorada y controlada, la actividad física es recomendable y segura; de hecho, la rehabilitación pulmonar y el ejercicio regular ayudan a mejorar la capacidad respiratoria y la calidad de vida general.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento del asma"],
    relatedServices: ["s-espirometria", "s-rehabilitacion-pulmonar"],
    relatedSymptoms: ["sy-sibilancias", "sy-disnea", "sy-opresion-pecho", "sy-tos-cronica"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/asma.jpg",
    seo: {
      title: "Asma | Neumólogo en Hermosillo, Sonora",
      description:
        "¿Tienes silbido al respirar o tos nocturna? El Dr. Oliver Martínez, neumólogo en Hermosillo, diagnostica y controla el asma con espirometría.",
      keywords: [
        "asma en Hermosillo",
        "neumólogo para asma en Sonora",
        "espirometría para diagnóstico de asma",
      ],
    },
  },
  {
    id: "d-epoc",
    slug: "enfermedad-pulmonar-obstructiva-cronica-epoc",
    name: "Enfermedad Pulmonar Obstructiva Crónica (EPOC)",
    technicalName: "Enfermedad Pulmonar Obstructiva Crónica",
    colloquialNames: ["pulmones obstruidos", "enfisema y bronquitis del fumador"],
    description:
      "La Enfermedad Pulmonar Obstructiva Crónica, conocida por sus siglas como EPOC, es una condición progresiva en la que el flujo de aire hacia y desde los pulmones se obstruye de forma persistente, principalmente por daño en las vías respiratorias y en los sacos pulmonares. Es una enfermedad prevenible en gran medida, y su causa más común es la exposición prolongada a humo de tabaco. Con diagnóstico oportuno mediante espirometría, el avance de la enfermedad puede frenarse de forma importante.",
    symptoms: [
      "Tos crónica, con o sin producción de flema",
      "Dificultad para respirar que empeora con la actividad física",
      "Producción excesiva de flema, especialmente por la mañana",
      "Sibilancias o silbido al respirar",
      "Fatiga y disminución de la tolerancia al ejercicio",
    ],
    causes: [
      "Exposición prolongada al humo de tabaco, la causa más frecuente",
      "Exposición ocupacional a polvo, gases o humos químicos",
      "Contaminación del aire en interiores por combustión de leña o carbón",
      "Deficiencia genética de una proteína protectora del pulmón (alfa-1 antitripsina), en casos menos frecuentes",
    ],
    riskFactors: [
      "Tabaquismo activo o exposición prolongada a humo de tabaco",
      "Edad mayor a 40 años",
      "Exposición ocupacional a polvos o químicos inhalados",
      "Antecedente de infecciones respiratorias frecuentes",
      "Exposición doméstica al humo de leña para cocinar",
    ],
    mexicoStats:
      "La Enfermedad Pulmonar Obstructiva Crónica es una de las principales causas de consulta respiratoria y de mortalidad en adultos mayores en México, y una proporción considerable de los casos se diagnostica en etapas avanzadas por falta de una espirometría oportuna.",
    complications: [
      "Insuficiencia respiratoria que puede requerir oxigenoterapia",
      "Exacerbaciones o crisis respiratorias que requieren atención de urgencia",
      "Sobrecarga del corazón derecho por la enfermedad pulmonar avanzada",
      "Pérdida progresiva de la capacidad para realizar actividades cotidianas",
    ],
    treatments: [
      "Confirmación diagnóstica y clasificación de severidad mediante espirometría",
      "Suspensión completa del tabaquismo, la medida más eficaz para frenar la progresión",
      "Oxigenoterapia en pacientes con niveles bajos de oxígeno en sangre",
      "Rehabilitación pulmonar para mejorar la capacidad de esfuerzo y la calidad de vida",
      "Vigilancia periódica con pruebas de función pulmonar y de esfuerzo",
    ],
    faqs: [
      {
        question: "¿La Enfermedad Pulmonar Obstructiva Crónica se puede revertir?",
        answer:
          "El daño pulmonar ya establecido en la Enfermedad Pulmonar Obstructiva Crónica no es reversible, pero suspender el tabaquismo y seguir un plan de control adecuado, incluyendo rehabilitación pulmonar, frena de forma significativa la progresión y mejora la calidad de vida.",
      },
      {
        question: "¿Solo las personas fumadoras desarrollan esta enfermedad?",
        answer:
          "El tabaquismo es la causa más frecuente, pero la exposición prolongada a humo de leña, polvos o químicos en el trabajo también puede provocar Enfermedad Pulmonar Obstructiva Crónica, incluso en personas que nunca han fumado.",
      },
      {
        question: "¿Qué estudio confirma el diagnóstico?",
        answer:
          "La espirometría es el estudio que confirma el diagnóstico y permite clasificar la severidad de la obstrucción del flujo de aire, siendo indispensable antes de definir cualquier plan de manejo.",
      },
      {
        question: "¿Necesitaré oxígeno en casa?",
        answer:
          "No todos los pacientes lo requieren. La necesidad de oxigenoterapia domiciliaria depende del nivel de oxígeno en sangre medido con gasometría arterial y de la etapa de la enfermedad, y se indica únicamente cuando el estudio lo justifica.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la Enfermedad Pulmonar Obstructiva Crónica"],
    relatedServices: [
      "s-espirometria",
      "s-oxigenoterapia",
      "s-rehabilitacion-pulmonar",
      "s-caminata-6min",
    ],
    relatedSymptoms: ["sy-tos-cronica", "sy-disnea", "sy-flema", "sy-fatiga"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/epoc.jpg",
    seo: {
      title: "EPOC | Enfermedad Pulmonar Obstructiva Crónica en Hermosillo",
      description:
        "Diagnóstico y control de la Enfermedad Pulmonar Obstructiva Crónica (EPOC) con el Dr. Oliver Martínez, neumólogo en Hermosillo, Sonora.",
      keywords: [
        "EPOC en Hermosillo",
        "enfermedad pulmonar obstructiva crónica Sonora",
        "neumólogo para EPOC",
      ],
    },
  },
  {
    id: "d-neumonia",
    slug: "neumonia",
    name: "Neumonía",
    technicalName: "Neumonía Adquirida en la Comunidad",
    colloquialNames: ["pulmonía", "infección en el pulmón"],
    description:
      "La neumonía es una infección aguda que inflama los sacos de aire de uno o ambos pulmones, los cuales pueden llenarse de líquido, dificultando la respiración y el intercambio de oxígeno. Puede originarse por diferentes microorganismos y su gravedad varía desde cuadros leves manejables de forma ambulatoria hasta casos que requieren hospitalización, especialmente en personas mayores o con otras enfermedades. La valoración médica oportuna, apoyada en estudios de imagen y de laboratorio, es clave para definir la gravedad y el manejo adecuado.",
    symptoms: [
      "Tos que puede producir flema",
      "Fiebre, escalofríos y sudoración",
      "Dificultad para respirar",
      "Dolor torácico que empeora al respirar profundo o toser",
      "Fatiga intensa y malestar general",
    ],
    causes: [
      "Infección por microorganismos que llegan a los sacos de aire del pulmón",
      "Complicación de una infección respiratoria viral previa",
      "Aspiración de contenido de la vía digestiva hacia el pulmón",
      "Debilidad del sistema de defensa por edad avanzada u otras enfermedades",
    ],
    riskFactors: [
      "Edad mayor a 65 años o menor a 5 años",
      "Enfermedades pulmonares crónicas previas como EPOC o asma",
      "Tabaquismo",
      "Sistema inmunológico debilitado",
      "Hospitalización reciente o estancia prolongada en cama",
    ],
    mexicoStats:
      "La neumonía continúa siendo una causa relevante de hospitalización y de complicaciones respiratorias graves en adultos mayores en México, por lo que la valoración médica oportuna ante fiebre y dificultad respiratoria es fundamental.",
    complications: [
      "Derrame pleural asociado a la infección",
      "Insuficiencia respiratoria que requiere apoyo con oxígeno",
      "Diseminación de la infección a otras partes del cuerpo",
      "Abscesos pulmonares en casos no tratados a tiempo",
    ],
    treatments: [
      "Valoración clínica y estudios de imagen del tórax para confirmar el diagnóstico",
      "Gasometría arterial para evaluar el nivel de oxigenación cuando es necesario",
      "Manejo médico dirigido según la gravedad y el microorganismo probable",
      "Oxigenoterapia en casos con niveles bajos de oxígeno en sangre",
      "Seguimiento clínico hasta la resolución completa del cuadro",
    ],
    faqs: [
      {
        question: "¿La neumonía siempre requiere hospitalización?",
        answer:
          "No. Muchos casos de neumonía se manejan de forma ambulatoria con seguimiento médico cercano; la hospitalización se reserva para casos con criterios de gravedad, como niveles bajos de oxígeno en sangre, edad avanzada o enfermedades adicionales.",
      },
      {
        question: "¿Cómo se diferencia la neumonía de un resfriado común?",
        answer:
          "La neumonía suele presentar fiebre más alta, dificultad para respirar y dolor torácico al respirar, síntomas que no son típicos de un resfriado común; ante estos signos es importante una valoración médica con estudios de imagen del tórax.",
      },
      {
        question: "¿Qué estudios se necesitan para confirmar una neumonía?",
        answer:
          "El diagnóstico se apoya en la exploración física, estudios de imagen del tórax y, cuando es necesario evaluar la gravedad, una gasometría arterial que mide el nivel de oxígeno y dióxido de carbono en la sangre.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la neumonía adquirida en la comunidad"],
    relatedServices: ["s-broncoscopia", "s-gasometria", "s-oxigenoterapia"],
    relatedSymptoms: ["sy-disnea", "sy-dolor-toracico", "sy-flema", "sy-fatiga"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/neumonia.jpg",
    seo: {
      title: "Neumonía | Neumólogo en Hermosillo, Sonora",
      description:
        "Fiebre, tos y dificultad para respirar pueden ser neumonía. El Dr. Oliver Martínez, neumólogo en Hermosillo, valora y da seguimiento.",
      keywords: [
        "neumonía en Hermosillo",
        "pulmonía tratamiento Sonora",
        "neumólogo para neumonía",
      ],
    },
  },
  {
    id: "d-bronquitis-cronica",
    slug: "bronquitis-cronica",
    name: "Bronquitis Crónica",
    technicalName: "Bronquitis Crónica",
    colloquialNames: ["tos del fumador", "flemas todo el año"],
    description:
      "La bronquitis crónica es la inflamación persistente de los bronquios que provoca tos con producción de flema durante al menos tres meses al año, en dos años consecutivos. Es una de las formas clínicas dentro del espectro de la Enfermedad Pulmonar Obstructiva Crónica y su causa más frecuente es la exposición prolongada al humo de tabaco. El diagnóstico se apoya en la historia clínica y en estudios de función pulmonar que descartan otras causas de tos persistente.",
    symptoms: [
      "Tos persistente con flema durante meses",
      "Sibilancias o silbido al respirar",
      "Fatiga",
      "Dificultad para respirar con el esfuerzo",
      "Infecciones respiratorias frecuentes",
    ],
    causes: [
      "Exposición prolongada al humo de tabaco",
      "Exposición ocupacional a polvo o químicos irritantes",
      "Contaminación ambiental sostenida",
      "Infecciones respiratorias recurrentes que perpetúan la inflamación bronquial",
    ],
    riskFactors: [
      "Tabaquismo activo o pasivo prolongado",
      "Exposición laboral a irritantes respiratorios",
      "Edad mayor a 45 años",
      "Antecedente de infecciones respiratorias recurrentes",
    ],
    mexicoStats:
      "La bronquitis crónica forma parte del espectro de enfermedades respiratorias obstructivas más frecuentes en adultos mexicanos con antecedente de tabaquismo prolongado, y con frecuencia se subestima hasta que la producción de flema se vuelve diaria.",
    complications: [
      "Progresión hacia Enfermedad Pulmonar Obstructiva Crónica establecida",
      "Infecciones respiratorias recurrentes",
      "Disminución progresiva de la función pulmonar",
      "Limitación de la actividad física en etapas avanzadas",
    ],
    treatments: [
      "Suspensión del tabaquismo como medida prioritaria",
      "Espirometría para evaluar el grado de obstrucción de la vía aérea",
      "Manejo de las infecciones respiratorias agregadas cuando se presentan",
      "Rehabilitación pulmonar en casos con limitación funcional",
    ],
    faqs: [
      {
        question: "¿Cuándo la tos con flema se considera bronquitis crónica?",
        answer:
          "Se considera bronquitis crónica cuando la tos con producción de flema se presenta la mayoría de los días durante al menos tres meses al año, en dos años consecutivos, y no se explica por otra causa identificada en la valoración médica.",
      },
      {
        question: "¿La bronquitis crónica es lo mismo que la Enfermedad Pulmonar Obstructiva Crónica?",
        answer:
          "La bronquitis crónica es una de las formas clínicas dentro del espectro de la Enfermedad Pulmonar Obstructiva Crónica; no toda persona con bronquitis crónica tiene obstrucción confirmada por espirometría, pero ambas comparten el tabaquismo como principal causa.",
      },
      {
        question: "¿Dejar de fumar mejora los síntomas?",
        answer:
          "Sí, suspender el tabaquismo es la medida individual más eficaz para reducir la inflamación bronquial, disminuir la producción de flema y frenar la progresión del daño pulmonar a largo plazo.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la Enfermedad Pulmonar Obstructiva Crónica"],
    relatedServices: ["s-espirometria"],
    relatedSymptoms: ["sy-tos-cronica", "sy-flema"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/bronquitis-cronica.jpg",
    seo: {
      title: "Bronquitis Crónica | Neumólogo en Hermosillo",
      description:
        "Tos con flema persistente durante meses puede ser bronquitis crónica. Valoración con el Dr. Oliver Martínez, neumólogo en Hermosillo.",
      keywords: [
        "bronquitis crónica Hermosillo",
        "tos con flema persistente Sonora",
        "neumólogo para bronquitis crónica",
      ],
    },
  },
  {
    id: "d-apnea-sueno",
    slug: "apnea-obstructiva-del-sueno",
    name: "Apnea Obstructiva del Sueño",
    technicalName: "Síndrome de Apnea-Hipopnea Obstructiva del Sueño",
    colloquialNames: ["apnea del sueño", "dejar de respirar al dormir"],
    description:
      "La apnea obstructiva del sueño es un trastorno respiratorio en el que la vía aérea superior se colapsa de forma repetida durante el sueño, provocando pausas respiratorias breves que interrumpen el descanso, aunque la persona rara vez lo recuerda al despertar. Se manifiesta típicamente con ronquido fuerte, pausas respiratorias observadas por la pareja y somnolencia durante el día. El diagnóstico se confirma con un estudio del sueño, y su control adecuado reduce de forma importante el riesgo cardiovascular asociado.",
    symptoms: [
      "Ronquido fuerte y frecuente",
      "Pausas respiratorias durante el sueño observadas por otra persona",
      "Somnolencia excesiva durante el día",
      "Cansancio al despertar a pesar de dormir suficientes horas",
      "Dolor de cabeza matutino",
    ],
    causes: [
      "Colapso repetido de los tejidos blandos de la garganta durante el sueño",
      "Exceso de tejido en la vía aérea superior, frecuentemente asociado a sobrepeso",
      "Anatomía particular de la vía aérea, mandíbula o amígdalas",
      "Relajación muscular de la vía aérea superior durante el sueño profundo",
    ],
    riskFactors: [
      "Sobrepeso u obesidad",
      "Circunferencia de cuello aumentada",
      "Sexo masculino",
      "Edad media y avanzada",
      "Consumo de alcohol antes de dormir",
    ],
    mexicoStats:
      "La apnea obstructiva del sueño es un trastorno frecuente y subdiagnosticado en la población adulta mexicana, en gran parte porque sus síntomas principales, el ronquido y la somnolencia diurna, suelen normalizarse en lugar de valorarse médicamente.",
    complications: [
      "Aumento del riesgo de hipertensión arterial y enfermedad cardiovascular",
      "Somnolencia diurna que incrementa el riesgo de accidentes",
      "Alteraciones del ánimo y de la concentración",
      "Deterioro de la calidad de vida y de las relaciones por el ronquido y el cansancio",
    ],
    treatments: [
      "Confirmación diagnóstica mediante polisomnografía o estudio del sueño",
      "Adaptación de ventilación no invasiva con presión positiva (CPAP o BiPAP)",
      "Medidas generales como pérdida de peso y evitar el alcohol antes de dormir",
      "Seguimiento periódico para ajustar el equipo de presión positiva",
    ],
    faqs: [
      {
        question: "¿Roncar siempre significa que tengo apnea del sueño?",
        answer:
          "No necesariamente, pero el ronquido fuerte y frecuente, especialmente si se acompaña de pausas respiratorias observadas por otra persona o de somnolencia durante el día, es motivo suficiente para una valoración con estudio del sueño.",
      },
      {
        question: "¿Qué es la polisomnografía?",
        answer:
          "La polisomnografía es un estudio del sueño que registra la respiración, el oxígeno en sangre, la actividad cerebral y otros parámetros durante la noche, y es el método que confirma el diagnóstico de apnea obstructiva del sueño y su gravedad.",
      },
      {
        question: "¿Es necesario usar CPAP toda la vida?",
        answer:
          "El uso de CPAP o BiPAP se indica mientras persistan los factores que causan el colapso de la vía aérea; en algunos casos, cambios como la pérdida de peso pueden modificar la necesidad del equipo, siempre bajo reevaluación médica y nunca por decisión propia.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento del síndrome de apnea-hipopnea obstructiva del sueño"],
    relatedServices: ["s-polisomnografia", "s-cpap-bipap"],
    relatedSymptoms: ["sy-ronquido", "sy-fatiga"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/apnea-obstructiva-del-sueno.jpg",
    seo: {
      title: "Apnea del Sueño | Neumólogo en Hermosillo, Sonora",
      description:
        "Ronquido fuerte y cansancio de día pueden ser apnea del sueño. Estudio del sueño con el Dr. Oliver Martínez, neumólogo en Hermosillo.",
      keywords: [
        "apnea del sueño Hermosillo",
        "estudio del sueño Sonora",
        "neumólogo para ronquido y apnea",
      ],
    },
  },
  {
    id: "d-fibrosis-pulmonar",
    slug: "fibrosis-pulmonar",
    name: "Fibrosis Pulmonar",
    technicalName: "Fibrosis Pulmonar",
    colloquialNames: ["pulmones endurecidos", "cicatrización del pulmón"],
    description:
      "La fibrosis pulmonar es una enfermedad en la que el tejido pulmonar se cicatriza y engrosa de forma progresiva, lo que hace que los pulmones pierdan elasticidad y dificulta el paso del oxígeno hacia la sangre. Es una condición crónica que suele avanzar lentamente y cuya causa exacta no siempre se identifica, aunque en algunos casos se asocia a exposiciones ambientales u ocupacionales previas. El diagnóstico y seguimiento se apoyan en estudios de función pulmonar y de oxigenación.",
    symptoms: [
      "Dificultad para respirar progresiva, inicialmente con el esfuerzo",
      "Tos seca persistente",
      "Fatiga",
      "Pérdida de peso involuntaria en etapas avanzadas",
      "Molestia torácica",
    ],
    causes: [
      "Cicatrización progresiva del tejido pulmonar de causa no siempre identificada",
      "Exposición ocupacional prolongada a polvos minerales u orgánicos",
      "Antecedente de enfermedades autoinmunes",
      "Exposición prolongada al humo de tabaco",
    ],
    riskFactors: [
      "Edad mayor a 50 años",
      "Antecedente de tabaquismo",
      "Exposición ocupacional a polvos o químicos inhalados",
      "Antecedentes familiares de enfermedad pulmonar fibrosante",
    ],
    mexicoStats:
      "La fibrosis pulmonar es una enfermedad pulmonar crónica progresiva que afecta principalmente a adultos mayores de 50 años, y su diagnóstico suele retrasarse porque los síntomas iniciales, como la dificultad para respirar leve, se confunden con el envejecimiento normal.",
    complications: [
      "Insuficiencia respiratoria progresiva",
      "Necesidad de oxigenoterapia continua en etapas avanzadas",
      "Hipertensión pulmonar asociada",
      "Disminución marcada de la tolerancia al esfuerzo físico",
    ],
    treatments: [
      "Evaluación de la función pulmonar y del intercambio de gases mediante gasometría arterial",
      "Oxigenoterapia cuando los niveles de oxígeno en sangre lo justifican",
      "Rehabilitación pulmonar para mantener la capacidad funcional",
      "Prueba de caminata de 6 minutos para evaluar la tolerancia al esfuerzo y guiar el seguimiento",
      "Vigilancia periódica de la progresión de la enfermedad",
    ],
    faqs: [
      {
        question: "¿La fibrosis pulmonar tiene cura?",
        answer:
          "La cicatrización del tejido pulmonar ya establecida en la fibrosis pulmonar no es reversible, pero existen estrategias de manejo y seguimiento que buscan enlentecer la progresión, mantener la oxigenación y preservar la calidad de vida del paciente.",
      },
      {
        question: "¿Por qué se pide una prueba de caminata de 6 minutos?",
        answer:
          "La prueba de caminata de 6 minutos mide qué tan lejos puede caminar una persona en ese tiempo y cómo se comporta su oxigenación durante el esfuerzo, lo que ayuda a evaluar el impacto funcional de la fibrosis pulmonar y a decidir si requiere oxígeno durante la actividad física.",
      },
      {
        question: "¿Todos los pacientes con fibrosis pulmonar necesitan oxígeno?",
        answer:
          "No todos, pero es frecuente que en etapas más avanzadas el nivel de oxígeno en sangre disminuya, especialmente durante el esfuerzo, por lo que la necesidad de oxigenoterapia se define con estudios objetivos como la gasometría arterial y la prueba de caminata.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Abordaje diagnóstico de las enfermedades pulmonares intersticiales"],
    relatedServices: ["s-gasometria", "s-oxigenoterapia", "s-caminata-6min"],
    relatedSymptoms: ["sy-disnea", "sy-fatiga", "sy-tos-cronica"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/fibrosis-pulmonar.jpg",
    seo: {
      title: "Fibrosis Pulmonar | Neumólogo en Hermosillo, Sonora",
      description:
        "Dificultad para respirar progresiva y tos seca pueden indicar fibrosis pulmonar. Valoración con el Dr. Oliver Martínez en Hermosillo.",
      keywords: [
        "fibrosis pulmonar Hermosillo",
        "neumólogo para fibrosis pulmonar Sonora",
        "cicatrización del pulmón tratamiento",
      ],
    },
  },
  {
    id: "d-tuberculosis",
    slug: "tuberculosis-pulmonar",
    name: "Tuberculosis Pulmonar",
    technicalName: "Tuberculosis Pulmonar",
    colloquialNames: ["tisis", "tuberculosis"],
    description:
      "La tuberculosis pulmonar es una infección causada por una bacteria que afecta principalmente a los pulmones y se transmite por vía aérea, a través de gotas expulsadas al toser o hablar. Su presentación clásica incluye tos prolongada, pérdida de peso y fatiga, aunque puede manifestarse de formas variadas. El diagnóstico oportuno mediante estudios de imagen, laboratorio y en ocasiones broncoscopía es esencial, ya que se trata de una enfermedad tratable y de reporte obligatorio a las autoridades de salud.",
    symptoms: [
      "Tos que persiste por más de dos semanas",
      "Tos con sangre en esputo en algunos casos",
      "Pérdida de peso sin causa aparente",
      "Fiebre y sudoración nocturna",
      "Fatiga persistente",
    ],
    causes: [
      "Infección por la bacteria que causa la tuberculosis, transmitida por vía aérea",
      "Contacto cercano y prolongado con una persona con tuberculosis activa no tratada",
      "Reactivación de una infección latente adquirida previamente",
    ],
    riskFactors: [
      "Contacto cercano con una persona con tuberculosis activa",
      "Sistema inmunológico debilitado",
      "Desnutrición",
      "Hacinamiento y condiciones de vivienda con poca ventilación",
      "Diabetes no controlada",
    ],
    mexicoStats:
      "La tuberculosis pulmonar sigue siendo una enfermedad de notificación obligatoria en México, con mayor incidencia en zonas con condiciones de hacinamiento y en personas con enfermedades que debilitan el sistema inmunológico, como la diabetes no controlada.",
    complications: [
      "Daño pulmonar permanente si no se trata a tiempo",
      "Diseminación de la infección a otros órganos",
      "Hemoptisis o sangrado pulmonar en casos avanzados",
      "Transmisión a personas del entorno cercano si no se aísla y trata oportunamente",
    ],
    treatments: [
      "Confirmación diagnóstica con estudios de imagen y de laboratorio específicos",
      "Broncoscopía en casos donde se requiere obtener muestra directa de la vía respiratoria",
      "Biopsia pulmonar cuando la presentación es atípica y requiere estudio de tejido",
      "Seguimiento médico estrecho durante todo el esquema de manejo, conforme a los protocolos de salud pública",
      "Notificación y estudio de contactos cercanos, conforme a la normativa sanitaria vigente",
    ],
    faqs: [
      {
        question: "¿La tuberculosis pulmonar se cura?",
        answer:
          "Sí, la tuberculosis pulmonar es una enfermedad curable cuando se diagnostica a tiempo y se sigue de manera completa el esquema de manejo indicado por el médico, conforme a los protocolos de salud pública establecidos para esta infección.",
      },
      {
        question: "¿Cómo se transmite la tuberculosis pulmonar?",
        answer:
          "Se transmite por vía aérea, a través de las gotas que expulsa al toser, hablar o estornudar una persona con tuberculosis pulmonar activa, por lo que el contacto cercano y prolongado sin ventilación adecuada aumenta el riesgo de contagio.",
      },
      {
        question: "¿Toda tos con sangre significa tuberculosis?",
        answer:
          "No, la tos con sangre (hemoptisis) tiene múltiples causas posibles, pero es un síntoma que siempre amerita valoración médica con estudios de imagen del tórax para descartar tuberculosis y otras causas, incluyendo el cáncer de pulmón.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la tuberculosis pulmonar"],
    relatedServices: ["s-broncoscopia", "s-biopsia-pulmonar"],
    relatedSymptoms: ["sy-hemoptisis", "sy-perdida-peso", "sy-fatiga", "sy-tos-cronica"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/tuberculosis-pulmonar.jpg",
    seo: {
      title: "Tuberculosis Pulmonar | Neumólogo en Hermosillo",
      description:
        "Tos de más de dos semanas, fiebre y pérdida de peso pueden indicar tuberculosis pulmonar. Valoración con el Dr. Oliver Martínez.",
      keywords: [
        "tuberculosis pulmonar Hermosillo",
        "neumólogo para tuberculosis Sonora",
        "tos con sangre diagnóstico",
      ],
    },
  },
  {
    id: "d-enfisema",
    slug: "enfisema-pulmonar",
    name: "Enfisema Pulmonar",
    technicalName: "Enfisema Pulmonar",
    colloquialNames: ["pulmones inflados", "aire atrapado en el pulmón"],
    description:
      "El enfisema pulmonar es una enfermedad en la que las paredes de los sacos de aire de los pulmones se dañan y pierden su capacidad de recuperar su forma original, lo que provoca que el aire quede atrapado y el intercambio de oxígeno se vuelva menos eficiente. Es una de las formas clínicas dentro del espectro de la Enfermedad Pulmonar Obstructiva Crónica, y su causa más frecuente es el tabaquismo prolongado. El diagnóstico se confirma con espirometría y estudios de imagen del tórax.",
    symptoms: [
      "Dificultad para respirar progresiva",
      "Opresión en el pecho",
      "Fatiga con esfuerzos que antes eran tolerados sin dificultad",
      "Pérdida de peso en etapas avanzadas",
      "Tos ocasional",
    ],
    causes: [
      "Exposición prolongada al humo de tabaco, la causa más común",
      "Exposición ocupacional a polvos o químicos inhalados",
      "Deficiencia genética de una proteína protectora del pulmón, en casos menos frecuentes",
      "Contaminación ambiental sostenida",
    ],
    riskFactors: [
      "Tabaquismo activo o prolongado",
      "Edad mayor a 45 años",
      "Exposición laboral a sustancias irritantes para el pulmón",
      "Antecedente familiar de enfermedad pulmonar obstructiva",
    ],
    mexicoStats:
      "El enfisema pulmonar, como parte del espectro de la Enfermedad Pulmonar Obstructiva Crónica, representa una causa importante de limitación respiratoria crónica en adultos con antecedente de tabaquismo en México.",
    complications: [
      "Insuficiencia respiratoria en etapas avanzadas",
      "Necesidad de oxigenoterapia continua",
      "Neumotórax, por ruptura de zonas de pulmón dañado",
      "Limitación progresiva de la actividad física",
    ],
    treatments: [
      "Espirometría para confirmar y clasificar el grado de obstrucción",
      "Suspensión completa del tabaquismo",
      "Oxigenoterapia cuando el nivel de oxígeno en sangre lo requiere",
      "Rehabilitación pulmonar para mejorar la capacidad de esfuerzo",
    ],
    faqs: [
      {
        question: "¿El enfisema pulmonar es lo mismo que la Enfermedad Pulmonar Obstructiva Crónica?",
        answer:
          "El enfisema pulmonar es una de las formas clínicas dentro del espectro de la Enfermedad Pulmonar Obstructiva Crónica; muchos pacientes presentan una combinación de enfisema y bronquitis crónica en distintos grados, identificable con estudios de función pulmonar e imagen.",
      },
      {
        question: "¿Se puede recuperar el tejido pulmonar dañado por enfisema?",
        answer:
          "El tejido pulmonar dañado por el enfisema no se regenera, por lo que el manejo se enfoca en detener la progresión, principalmente suspendiendo el tabaquismo, y en mejorar la capacidad funcional mediante rehabilitación pulmonar y oxigenoterapia cuando se requiere.",
      },
      {
        question: "¿Qué tan pronto debo buscar valoración si fumo y me falta el aire?",
        answer:
          "Si eres o fuiste fumador y notas que te falta el aire con esfuerzos que antes tolerabas bien, conviene una valoración con espirometría lo antes posible, ya que un diagnóstico temprano permite frenar la progresión del daño pulmonar de forma más efectiva.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la Enfermedad Pulmonar Obstructiva Crónica"],
    relatedServices: ["s-espirometria", "s-oxigenoterapia", "s-rehabilitacion-pulmonar"],
    relatedSymptoms: ["sy-disnea", "sy-opresion-pecho"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/enfisema-pulmonar.jpg",
    seo: {
      title: "Enfisema Pulmonar | Neumólogo en Hermosillo, Sonora",
      description:
        "Dificultad para respirar y fatiga progresiva pueden indicar enfisema pulmonar. Diagnóstico con el Dr. Oliver Martínez en Hermosillo.",
      keywords: [
        "enfisema pulmonar Hermosillo",
        "neumólogo para enfisema Sonora",
        "aire atrapado en el pulmón",
      ],
    },
  },
  {
    id: "d-derrame-pleural",
    slug: "derrame-pleural",
    name: "Derrame Pleural",
    technicalName: "Derrame Pleural",
    colloquialNames: ["agua en el pulmón", "líquido en el pulmón"],
    description:
      "El derrame pleural es la acumulación anormal de líquido en el espacio que rodea a los pulmones, llamado espacio pleural, lo que puede comprimir el tejido pulmonar y dificultar la respiración. Puede originarse por múltiples causas, desde infecciones y enfermedades del corazón hasta procesos tumorales, por lo que su estudio requiere identificar el origen del líquido acumulado. El diagnóstico se apoya en estudios de imagen y, cuando es necesario, en la extracción y análisis del líquido mediante toracocentesis.",
    symptoms: [
      "Dificultad para respirar, especialmente al recostarse",
      "Dolor torácico que empeora al respirar profundo",
      "Tos seca",
      "Sensación de opresión en el pecho",
    ],
    causes: [
      "Infecciones pulmonares que se extienden al espacio pleural",
      "Insuficiencia cardíaca",
      "Enfermedades tumorales que afectan la pleura o el pulmón",
      "Enfermedades inflamatorias o autoinmunes",
    ],
    riskFactors: [
      "Antecedente de neumonía reciente",
      "Enfermedad cardíaca conocida",
      "Antecedente de cáncer, pulmonar o de otro origen",
      "Enfermedades autoinmunes o inflamatorias crónicas",
    ],
    mexicoStats:
      "El derrame pleural es un hallazgo frecuente en la práctica de neumología, ya que puede acompañar a múltiples enfermedades comunes en la población mexicana, desde infecciones respiratorias hasta enfermedades cardíacas y oncológicas, lo que hace indispensable identificar su causa específica.",
    complications: [
      "Compresión pulmonar que limita la respiración",
      "Infección del líquido pleural acumulado",
      "Formación de tejido cicatricial en la pleura si no se resuelve a tiempo",
      "Progresión de la enfermedad de base no diagnosticada",
    ],
    treatments: [
      "Estudios de imagen del tórax para confirmar y cuantificar el derrame",
      "Toracocentesis para extraer y analizar el líquido pleural y definir su causa",
      "Gasometría arterial para evaluar el impacto en la oxigenación",
      "Manejo dirigido a la enfermedad de origen una vez identificada",
    ],
    faqs: [
      {
        question: "¿El derrame pleural es una enfermedad en sí misma?",
        answer:
          "No exactamente; el derrame pleural es la manifestación de una enfermedad de fondo, como una infección, un problema cardíaco o un proceso tumoral, por lo que el estudio del líquido acumulado busca identificar esa causa específica para dirigir el manejo adecuado.",
      },
      {
        question: "¿Es dolorosa la toracocentesis?",
        answer:
          "La toracocentesis se realiza con anestesia local en el sitio de punción, por lo que la molestia suele ser mínima; es un procedimiento ambulatorio breve que permite tanto aliviar la dificultad para respirar como analizar el líquido para encontrar su causa.",
      },
      {
        question: "¿El líquido pleural vuelve a acumularse después del procedimiento?",
        answer:
          "Puede volver a acumularse si la enfermedad que lo originó no se controla, por lo que el seguimiento médico y el manejo de la causa de fondo son tan importantes como la extracción inicial del líquido.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Abordaje diagnóstico del derrame pleural"],
    relatedServices: ["s-toracocentesis", "s-gasometria"],
    relatedSymptoms: ["sy-dolor-toracico", "sy-disnea"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/derrame-pleural.jpg",
    seo: {
      title: "Derrame Pleural | Neumólogo en Hermosillo, Sonora",
      description:
        "Líquido alrededor del pulmón que dificulta la respiración. Diagnóstico y toracocentesis con el Dr. Oliver Martínez en Hermosillo.",
      keywords: [
        "derrame pleural Hermosillo",
        "agua en el pulmón tratamiento",
        "neumólogo para derrame pleural Sonora",
      ],
    },
  },
  {
    id: "d-cancer-pulmon",
    slug: "cancer-de-pulmon",
    name: "Cáncer de Pulmón",
    technicalName: "Carcinoma Broncogénico",
    colloquialNames: ["cáncer pulmonar", "tumor en el pulmón"],
    description:
      "El cáncer de pulmón es el crecimiento anormal de células en el tejido pulmonar que puede originarse en las vías respiratorias o en el tejido del pulmón. Su principal factor de riesgo es el tabaquismo, aunque también puede presentarse en personas no fumadoras. El diagnóstico oportuno es determinante en el pronóstico, por lo que síntomas como tos persistente, tos con sangre o pérdida de peso inexplicable ameritan una valoración especializada con estudios de imagen y, cuando es necesario, broncoscopía o biopsia.",
    symptoms: [
      "Tos persistente que no mejora o que cambia de características",
      "Tos con sangre",
      "Dificultad para respirar",
      "Dolor torácico",
      "Pérdida de peso sin causa aparente",
      "Fatiga persistente",
    ],
    causes: [
      "Tabaquismo activo o prolongado, el factor de riesgo más importante",
      "Exposición a humo de tabaco ajeno de forma prolongada",
      "Exposición ocupacional a sustancias cancerígenas inhaladas",
      "Antecedentes familiares de cáncer de pulmón",
    ],
    riskFactors: [
      "Tabaquismo, activo o previo",
      "Exposición prolongada a humo de tabaco ajeno",
      "Exposición ocupacional a asbesto u otras sustancias inhaladas",
      "Antecedente familiar de cáncer de pulmón",
      "Edad mayor a 50 años",
    ],
    mexicoStats:
      "El cáncer de pulmón es una de las neoplasias con mayor mortalidad en México, en gran parte porque suele diagnosticarse en etapas avanzadas debido a que los síntomas iniciales, como la tos persistente, se confunden con otras afecciones respiratorias comunes.",
    complications: [
      "Diseminación del tumor a otros órganos",
      "Derrame pleural asociado",
      "Obstrucción de la vía aérea por crecimiento tumoral",
      "Deterioro progresivo del estado general y nutricional",
    ],
    treatments: [
      "Estudios de imagen del tórax para localizar y caracterizar el tumor",
      "Broncoscopía para visualizar la vía aérea y obtener muestras cuando es posible",
      "Biopsia pulmonar para confirmar el diagnóstico mediante estudio de tejido",
      "Canalización oportuna a manejo oncológico especializado según el resultado de los estudios",
    ],
    faqs: [
      {
        question: "¿Toda tos persistente es señal de cáncer de pulmón?",
        answer:
          "No, la mayoría de las tos persistentes tienen otras causas, como bronquitis crónica o asma no controlada; sin embargo, una tos que no mejora en varias semanas, que cambia de características o que se acompaña de sangre, pérdida de peso o dolor torácico, amerita valoración con estudios de imagen para descartar cáncer de pulmón.",
      },
      {
        question: "¿Qué diferencia hay entre broncoscopía y biopsia pulmonar?",
        answer:
          "La broncoscopía permite observar directamente el interior de la vía respiratoria y, en muchos casos, tomar una muestra durante el mismo procedimiento; la biopsia pulmonar es la obtención de una muestra de tejido para su análisis, que puede realizarse por diferentes vías según la localización del hallazgo, incluida la broncoscopía.",
      },
      {
        question: "¿Las personas no fumadoras pueden desarrollar cáncer de pulmón?",
        answer:
          "Sí, aunque el tabaquismo es el factor de riesgo más importante, el cáncer de pulmón también puede presentarse en personas no fumadoras, asociado a exposición ambiental, ocupacional o a factores genéticos, por lo que los síntomas de alarma deben valorarse independientemente del antecedente de tabaquismo.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento del cáncer de pulmón"],
    relatedServices: ["s-broncoscopia", "s-biopsia-pulmonar"],
    relatedSymptoms: ["sy-hemoptisis", "sy-perdida-peso", "sy-tos-cronica"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/cancer-de-pulmon.jpg",
    seo: {
      title: "Cáncer de Pulmón | Neumólogo en Hermosillo, Sonora",
      description:
        "Tos persistente, tos con sangre o pérdida de peso pueden requerir descartar cáncer de pulmón. Valoración con el Dr. Oliver Martínez.",
      keywords: [
        "cáncer de pulmón Hermosillo",
        "neumólogo oncológico Sonora",
        "biopsia pulmonar diagnóstico",
      ],
    },
  },
];
