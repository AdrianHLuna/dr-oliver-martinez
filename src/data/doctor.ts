import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake (2026-09-24). PENDIENTE: correo, folio COFEPRIS,
// URL de Facebook (solo se dio el nombre de la página, no el link), precio
// de consulta y métodos de pago ("preguntar" en el intake — nunca se
// inventan). El precio se deja con un valor técnico no significativo (1)
// que NUNCA debe mostrarse en pantalla ni en JSON-LD — ver instrucciones en
// src/lib/schemas.ts (baseGraph) y en cada page.tsx que muestra precio.
export const doctor: DoctorProfile = {
  name: "Oliver Martínez González",
  title: "Dr.",
  specialty: "Neumología",
  specialistTitle: "Neumólogo",
  cedula: "09653606",
  cedulaInstitucion: "UNISON",
  cedulaEspecialidad: "12146161",
  cedulaEspecialidadInstitucion: "UDG",
  phone: "+526621090580",
  whatsapp: "+526622985448",
  // PENDIENTE: no se dio correo en el intake.
  email: "contacto@dr-oliver-martinez.com",
  address: "Boulevard José María Morelos #340, Hospital San José, 4to piso, módulo O, Consultorio 409",
  city: "Hermosillo",
  state: "Sonora",
  country: "México",
  // PENDIENTE: reemplazar por el enlace real de Google Business Profile
  // ("Dr. Oliver Martínez González, Neumólogo" según el intake) cuando se confirme.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Boulevard+Jose+Maria+Morelos+340+Hospital+San+Jose+Hermosillo+Sonora",
  // PENDIENTE CRÍTICO: el doctor no dio precio ("Sin información preguntar").
  // Este "1" es un valor técnico para satisfacer el esquema (positive()) —
  // NUNCA renderizarlo en UI ni incluirlo en JSON-LD (ver instrucciones en
  // src/lib/schemas.ts y src/app/page.tsx).
  consultationPrice: 1,
  paymentMethods: [],
  // El intake dice explícitamente "Seguros: No" — sí es un dato real, no una omisión.
  insurances: ["No se manejan seguros de gastos médicos mayores; consulta particular."],
  schedule: "Lunes a viernes de 8:00 a 21:00, sábados de 8:00 a 13:00",
  openingHours: ["Mo-Fr 08:00-21:00", "Sa 08:00-13:00"],
  acceptingNewPatients: true,
  // PENDIENTE: no se encontró carpeta de fotos reales en el repo.
  photo: "/doctor-placeholder.jpg",
  bio: "El Dr. Oliver Martínez González es médico especialista en Neumología, con formación como Médico Cirujano por la Universidad de Sonora (UNISON) y especialidad en Neumología por la Universidad de Guadalajara (UDG). Atiende en el Hospital San José de Hermosillo, Sonora, donde ofrece valoración, diagnóstico y seguimiento de enfermedades del sistema respiratorio, desde padecimientos frecuentes como el asma y la bronquitis hasta condiciones que requieren estudios especializados de función pulmonar y del sueño.",
  philosophy:
    "Mi compromiso es ofrecer una atención respiratoria clara y basada en evidencia, explicando cada diagnóstico y estudio en un lenguaje que el paciente pueda entender, para que tome decisiones informadas sobre su propia salud.",
  experience: [],
  certifications: [],
  education: [
    { degree: "Médico Cirujano", institution: "Universidad de Sonora (UNISON)" },
    { degree: "Especialidad en Neumología", institution: "Universidad de Guadalajara (UDG)" },
  ],
  sameAs: ["https://www.instagram.com/neumologodr.olivermartinez/"],
};
