import type { Metadata } from "next";
import { doctor, symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MasonryGrid from "@/components/MasonryGrid";

export const metadata: Metadata = {
  title: "Síntomas Respiratorios: Guía de Orientación",
  description: `Tos crónica, dificultad para respirar, ronquido y más síntomas respiratorios explicados por ${doctor.title} ${doctor.name}, neumólogo en ${doctor.city}.`,
  alternates: { canonical: "/sintomas" },
};

export default function SintomasPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <header className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
            Orientación al paciente
          </span>
          <h1 className="mt-2 text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
            Síntomas Respiratorios: Guía de Orientación
          </h1>
          <p className="mt-3 text-[var(--color-slate)]">
            Identifica cuándo un síntoma respiratorio amerita valoración con {doctor.title} {doctor.name} y
            cuándo debes acudir directamente a urgencias.
          </p>
        </header>

        <MasonryGrid items={symptoms} basePath="/sintomas" badge="Síntoma" startIndex={2} />
      </div>
    </main>
  );
}
