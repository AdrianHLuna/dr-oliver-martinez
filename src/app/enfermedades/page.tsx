import type { Metadata } from "next";
import { doctor, diseases } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MasonryGrid from "@/components/MasonryGrid";

export const metadata: Metadata = {
  title: "Enfermedades Respiratorias que Atendemos",
  description: `Catálogo de enfermedades respiratorias atendidas por ${doctor.title} ${doctor.name}, ${doctor.specialistTitle} en ${doctor.city}, Sonora.`,
  alternates: { canonical: "/enfermedades" },
};

export default function EnfermedadesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <header className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
            Neumología en Hermosillo
          </span>
          <h1 className="mt-2 text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
            Enfermedades Respiratorias que Atendemos
          </h1>
          <p className="mt-3 text-[var(--color-slate)]">
            {doctor.title} {doctor.name} diagnostica y da seguimiento a las {diseases.length} enfermedades
            respiratorias más frecuentes, desde el asma hasta el cáncer de pulmón.
          </p>
        </header>

        <MasonryGrid items={diseases} basePath="/enfermedades" badge="Neumología" />
      </div>
    </main>
  );
}
