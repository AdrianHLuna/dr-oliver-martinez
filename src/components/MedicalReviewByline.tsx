import { doctor } from "@/data";

interface MedicalReviewBylineProps {
  lastReviewed?: string;
}

/** AISO v3.1 §3.1 — obligatorio bajo el Hero de páginas de enfermedad/servicio/síntoma. */
export default function MedicalReviewByline({ lastReviewed }: MedicalReviewBylineProps) {
  const fecha = lastReviewed
    ? new Date(`${lastReviewed}T00:00:00`).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <p className="text-sm text-[var(--color-slate)] border-l-4 border-[var(--color-sky)] pl-4 py-1.5 bg-[var(--color-cloud)] rounded-r-lg">
      Revisado médicamente por {doctor.title} {doctor.name} — Cédula Profesional {doctor.cedula}.
      {fecha ? ` Última revisión: ${fecha}.` : ""}
    </p>
  );
}
