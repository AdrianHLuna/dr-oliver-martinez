import type { Metadata } from "next";
import { doctor, services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MasonryGrid from "@/components/MasonryGrid";

export const metadata: Metadata = {
  title: "Servicios y Estudios de Neumología",
  description: `Espirometría, broncoscopía, estudio del sueño y más estudios de función pulmonar con ${doctor.title} ${doctor.name} en ${doctor.city}.`,
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <header className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
            Estudios y procedimientos
          </span>
          <h1 className="mt-2 text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
            Servicios y Estudios de Neumología
          </h1>
          <p className="mt-3 text-[var(--color-slate)]">
            Desde estudios de función pulmonar hasta procedimientos especializados, {doctor.title}{" "}
            {doctor.name} ofrece los {services.length} servicios clave para el diagnóstico y tratamiento
            respiratorio.
          </p>
        </header>

        <MasonryGrid items={services} basePath="/servicios" badge="Estudio" startIndex={1} />
      </div>
    </main>
  );
}
