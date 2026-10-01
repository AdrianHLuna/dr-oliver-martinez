import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, Stethoscope, ArrowUpRight, HelpCircle, Activity } from "lucide-react";
import { doctor, symptoms, diseases } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHero from "@/components/EntityHero";
import { Accordion, AccordionItem } from "@/components/Accordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions?.includes(d.id));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <EntityHero src={symptom.image} alt={symptom.name} eyebrow="Orientación al paciente" />

      <article className="mx-auto max-w-3xl px-4 pb-20 pt-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Síntomas", href: "/sintomas" },
            { label: symptom.name },
          ]}
        />

        <header className="mt-2 mb-6">
          {symptom.colloquialNames && symptom.colloquialNames.length > 0 && (
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-sky)]">
              También se describe como: {symptom.colloquialNames.join(", ")}
            </p>
          )}
          <p className="mt-2 text-base leading-relaxed text-[var(--color-navy)]/85">{symptom.description}</p>
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={symptom.lastReviewed} />
          </div>
        </header>

        <AlarmSignsSection signs={symptom.alarmSigns} />

        <Accordion>
          <AccordionItem title="Causas posibles" icon={<Activity className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />} defaultOpen>
            <ul className="space-y-2.5">
              {symptom.causes.map((c, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-white p-3.5 text-sm text-[var(--color-navy)] shadow-sm">
                  <Activity className="h-4 w-4 shrink-0 mt-0.5 text-[var(--color-sky)]" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem
            title="¿Por qué consultar a un neumólogo?"
            icon={<Stethoscope className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />}
          >
            <p className="text-[var(--color-navy)]/85 leading-relaxed">{symptom.whyConsult}</p>
          </AccordionItem>

          {symptom.faqs && symptom.faqs.length > 0 && (
            <AccordionItem title="Preguntas frecuentes" icon={<HelpCircle className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />}>
              <div className="space-y-3">
                {symptom.faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-cloud)] p-4">
                    <h3 className="font-semibold text-[var(--color-navy)]">{faq.question}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-slate)]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>
          )}
        </Accordion>

        {relatedConditions.length > 0 && (
          <section className="mt-10 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cloud)] p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
              Condiciones relacionadas
            </span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {relatedConditions.map((d) => (
                <Link
                  key={d.id}
                  href={`/enfermedades/${d.slug}` as Route}
                  className="bounce-pop inline-flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-white px-4 py-2 text-xs font-semibold text-[var(--color-navy)] shadow-sm"
                >
                  <Stethoscope className="h-3.5 w-3.5 text-[var(--color-sky)]" aria-hidden="true" />
                  {d.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-[1.75rem] bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-steel)] p-8 text-center text-white shadow-[var(--shadow-lift)]">
          <p className="text-xl font-bold sm:text-2xl">
            {doctor.title} {doctor.name} puede ayudarte con {symptom.name.toLowerCase()}.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
            No ignores los síntomas respiratorios persistentes. Una valoración a tiempo permite un
            diagnóstico y manejo más eficaz.
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

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}
