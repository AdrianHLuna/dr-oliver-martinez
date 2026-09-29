import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck, Stethoscope, ArrowUpRight, HelpCircle } from "lucide-react";
import { doctor, services, diseases } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHero from "@/components/EntityHero";
import { Accordion, AccordionItem } from "@/components/Accordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/servicios/${service.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));

  const typeLabel =
    service.type === "ambulatorio" ? "Ambulatorio" : service.type === "hospitalario" ? "Hospitalario" : "Consultorio";

  const specs: Array<[string, string]> = [
    ["Tipo", typeLabel],
    ...(service.duration ? ([["Duración", service.duration]] as Array<[string, string]>) : []),
    ...(service.recoveryTime ? ([["Recuperación", service.recoveryTime]] as Array<[string, string]>) : []),
    ["Doloroso", service.isPainful ? "Sí" : "No"],
  ];

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />
      <EntityHero src={service.image} alt={service.name} eyebrow="Estudio o procedimiento" />

      <article className="mx-auto max-w-3xl px-4 pb-20 pt-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/servicios" },
            { label: service.name },
          ]}
        />

        <header className="mt-2 mb-8">
          <p className="text-base leading-relaxed text-[var(--color-navy)]/85">{service.description}</p>
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={service.lastReviewed} />
          </div>
        </header>

        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] shadow-[var(--shadow-soft)] sm:grid-cols-4">
          {specs.map(([label, value]) => (
            <div key={label} className="bg-white p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">{label}</p>
              <p className="mt-1 text-base font-bold text-[var(--color-navy)]">{value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[var(--color-navy)]">En qué consiste</h2>
          <p className="mt-3 text-[var(--color-navy)]/85 leading-relaxed">{service.longDescription}</p>
        </section>

        <Accordion>
          <AccordionItem title="Beneficios clínicos" icon={<CheckCircle2 className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />} defaultOpen>
            <ul className="space-y-2.5">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-[var(--color-cloud)] p-3.5 text-sm text-[var(--color-navy)]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[var(--color-sky)]" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>

          {service.postOpRecommendations.length > 0 && (
            <AccordionItem title="Recomendaciones" icon={<ShieldCheck className="h-4 w-4 text-[var(--color-teal)]" aria-hidden="true" />}>
              <ul className="space-y-2.5">
                {service.postOpRecommendations.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-white p-3.5 text-sm text-[var(--color-navy)] shadow-sm">
                    <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-[var(--color-teal)]" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          )}

          {service.faqs && service.faqs.length > 0 && (
            <AccordionItem title="Preguntas frecuentes" icon={<HelpCircle className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />}>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
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
              Enfermedades relacionadas
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
            {doctor.title} {doctor.name} realiza {service.name.toLowerCase()}.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
            Agenda una valoración previa en Hermosillo para confirmar si este estudio es adecuado para tu
            caso.
          </p>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="bounce-hover mt-6 inline-flex items-center gap-2 rounded-2xl bg-[var(--color-sky)] px-8 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)]"
          >
            <span>Agendar valoración</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>
      </article>

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}
