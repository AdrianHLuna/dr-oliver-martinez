import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, Stethoscope, ArrowUpRight, HelpCircle, Activity, ShieldAlert, ListChecks, Microscope } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHero from "@/components/EntityHero";
import { Accordion, AccordionItem } from "@/components/Accordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: {
      title: disease.seo.title,
      description: disease.seo.description,
      url: `/enfermedades/${disease.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />
      <EntityHero src={disease.image} alt={disease.name} eyebrow="Enfermedad respiratoria" />

      <article className="mx-auto max-w-3xl px-4 pb-20 pt-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Enfermedades", href: "/enfermedades" },
            { label: disease.name },
          ]}
        />

        <header className="mt-2 mb-8">
          {disease.colloquialNames && disease.colloquialNames.length > 0 && (
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-sky)]">
              También conocida como: {disease.colloquialNames.join(", ")}
            </p>
          )}
          <h2 className="sr-only">¿Qué es {disease.name.toLowerCase()}?</h2>
          <p className="mt-2 text-base leading-relaxed text-[var(--color-navy)]/85">{disease.description}</p>
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={disease.lastReviewed} />
          </div>
        </header>

        <section className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-xl font-bold text-[var(--color-navy)]">Síntomas frecuentes</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {disease.symptoms.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 rounded-xl bg-[var(--color-cloud)] p-3 text-sm text-[var(--color-navy)]">
                <Activity className="h-4 w-4 shrink-0 mt-0.5 text-[var(--color-sky)]" aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <Accordion>
          <AccordionItem title="Causas" icon={<Activity className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />} defaultOpen>
            <ul className="space-y-2 text-[var(--color-slate)]">
              {disease.causes.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sky)]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Factores de riesgo" icon={<ListChecks className="h-4 w-4 text-[var(--color-steel)]" aria-hidden="true" />}>
            <ul className="space-y-2 text-[var(--color-slate)]">
              {disease.riskFactors.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-steel)]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>

          {disease.mexicoStats && (
            <AccordionItem title="Estadísticas en México" icon={<Microscope className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />}>
              <p className="text-[var(--color-slate)]">{disease.mexicoStats}</p>
            </AccordionItem>
          )}

          <AccordionItem
            title="Posibles complicaciones"
            icon={<ShieldAlert className="h-4 w-4 text-amber-600" aria-hidden="true" />}
          >
            <ul className="space-y-2 text-sm text-amber-900">
              {disease.complications.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Diagnóstico y manejo" icon={<Stethoscope className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />}>
            <ul className="space-y-2.5">
              {disease.treatments.map((t, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-white p-3.5 text-sm text-[var(--color-navy)] shadow-sm">
                  <Stethoscope className="h-4 w-4 shrink-0 mt-0.5 text-[var(--color-sky)]" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Preguntas frecuentes" icon={<HelpCircle className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />}>
            <div className="space-y-3">
              {disease.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-cloud)] p-4">
                  <h3 className="font-semibold text-[var(--color-navy)]">{faq.question}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-slate)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>

        {(relatedServices.length > 0 || relatedSymptoms.length > 0) && (
          <section className="mt-10 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cloud)] p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">Relacionados</span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/servicios/${s.slug}` as Route}
                  className="bounce-pop inline-flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-white px-4 py-2 text-xs font-semibold text-[var(--color-navy)] shadow-sm"
                >
                  <Stethoscope className="h-3.5 w-3.5 text-[var(--color-sky)]" aria-hidden="true" />
                  {s.name}
                </Link>
              ))}
              {relatedSymptoms.map((s) => (
                <Link
                  key={s.id}
                  href={`/sintomas/${s.slug}` as Route}
                  className="bounce-pop inline-flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-white px-4 py-2 text-xs font-semibold text-[var(--color-navy)] shadow-sm"
                >
                  <AlertCircle className="h-3.5 w-3.5 text-[var(--color-sky)]" aria-hidden="true" />
                  {s.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {disease.sources && disease.sources.length > 0 && (
          <section className="mt-8 text-sm text-[var(--color-slate)]">
            <h2 className="font-semibold text-[var(--color-navy)]">Fuentes</h2>
            <ul className="mt-1 list-inside list-disc">
              {disease.sources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 rounded-[1.75rem] bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-steel)] p-8 text-center text-white shadow-[var(--shadow-lift)]">
          <p className="text-xl font-bold sm:text-2xl">
            {doctor.title} {doctor.name} atiende {disease.name.toLowerCase()}.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
            Agenda una valoración en Hermosillo para un diagnóstico preciso y un plan de manejo adecuado.
          </p>
          <a
            href={doctor.doctoraliaUrl || "https://www.doctoralia.com.mx/perfil/oliver-martinez-gonzalez"}
            target="_blank"
            rel="noreferrer"
            className="bounce-hover mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#00b2a9] hover:bg-[#009b93] px-8 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)]"
          >
            <span>Reserve una cita en Doctoralia</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>
      </article>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}
