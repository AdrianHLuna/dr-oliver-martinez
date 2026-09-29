import Link from "next/link";
import { ArrowUpRight, GraduationCap, Award, ShieldCheck, Stethoscope, Phone, MessageCircle } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import { generateHomeSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import MasonryGrid from "@/components/MasonryGrid";

export default function HomePage() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`
  )}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero centrado y simétrico — a sangre completa, min-h-screen, muy
          distinto al bento/split/diagonal/editorial de los otros 4 sitios. */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-navy)] via-[#1c3565] to-[var(--color-steel)] text-white">
        {/* Ambientación "pulmonar" abstracta: círculos que respiran (pulso lento) */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="breathe absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="breathe breathe-delay absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-sky-pale)]/25" />
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-sky)]/20 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[var(--color-teal)]/20 blur-3xl" />
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--color-sky)]/15 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-sky-pale)] backdrop-blur-xs">
            {doctor.specialty} · {doctor.city}, {doctor.state}
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            {doctor.title} {doctor.name}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {doctor.specialistTitle} en el Hospital San José de Hermosillo. Diagnóstico y tratamiento
            integral de enfermedades del sistema respiratorio, desde el asma hasta estudios especializados
            de función pulmonar y del sueño.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="bounce-hover inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-sky)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-lift)]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Agendar cita por WhatsApp</span>
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="bounce-hover inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Llamar al consultorio</span>
            </a>
          </div>

          <div className="glass-panel mt-6 flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[var(--color-navy)]">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--color-sky)]" aria-hidden="true" />
            <span>{formatCredentials(doctor)}</span>
          </div>
        </div>
      </section>

      {/* Sobre el especialista */}
      <section id="sobre-mi" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
          Sobre el especialista
        </span>
        <h2 className="mt-2 text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
          {doctor.title} {doctor.name}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-slate)] sm:text-lg">
          {doctor.bio}
        </p>
        <p className="mx-auto mt-5 max-w-xl italic text-[var(--color-navy)]/80">&ldquo;{doctor.philosophy}&rdquo;</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cloud)] px-4 py-2 text-xs font-semibold text-[var(--color-navy)]">
            <GraduationCap className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />
            Céd Prof: {doctor.cedula} ({doctor.cedulaInstitucion})
          </span>
          {doctor.cedulaEspecialidad && (
            <span className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cloud)] px-4 py-2 text-xs font-semibold text-[var(--color-navy)]">
              <Award className="h-4 w-4 text-[var(--color-sky)]" aria-hidden="true" />
              Céd Esp: {doctor.cedulaEspecialidad} ({doctor.cedulaEspecialidadInstitucion})
            </span>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-xl text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
            Formación académica
          </p>
          <ul className="mt-3 space-y-2">
            {doctor.education.map((item) => (
              <li
                key={item.degree}
                className="flex flex-col gap-1 rounded-2xl border border-[var(--color-line)] bg-white p-4 text-sm shadow-[var(--shadow-soft)] sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="flex items-center gap-2 font-semibold text-[var(--color-navy)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sky)]" />
                  {item.degree}
                </span>
                <span className="text-xs text-[var(--color-slate)] sm:text-sm">{item.institution}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enfermedades — masonry de tamaños mixtos */}
      <section id="enfermedades" className="border-t border-[var(--color-line)] bg-[var(--color-cloud)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--color-line)] pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
                Catálogo clínico
              </span>
              <h2 className="mt-1 text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
                Enfermedades respiratorias frecuentes
              </h2>
            </div>
            <Link
              href="/enfermedades"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-sky)]"
            >
              <span>Ver las {diseases.length} enfermedades</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-10">
            <MasonryGrid items={diseases.slice(0, 6)} basePath="/enfermedades" badge="Neumología" />
          </div>
        </div>
      </section>

      {/* Servicios — masonry de tamaños mixtos */}
      <section id="servicios" className="border-t border-[var(--color-line)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--color-line)] pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
                Estudios y procedimientos
              </span>
              <h2 className="mt-1 text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
                Servicios de diagnóstico y tratamiento
              </h2>
            </div>
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-sky)]"
            >
              <span>Ver los {services.length} servicios</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-10">
            <MasonryGrid items={services.slice(0, 6)} basePath="/servicios" badge="Estudio" startIndex={1} />
          </div>
        </div>
      </section>

      {/* Síntomas — masonry de tamaños mixtos */}
      <section id="sintomas" className="border-t border-[var(--color-line)] bg-[var(--color-cloud)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--color-line)] pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
                Orientación al paciente
              </span>
              <h2 className="mt-1 text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
                Síntomas respiratorios que evaluamos
              </h2>
            </div>
            <Link
              href="/sintomas"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-sky)]"
            >
              <span>Ver los {symptoms.length} síntomas</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-10">
            <MasonryGrid items={symptoms.slice(0, 6)} basePath="/sintomas" badge="Síntoma" startIndex={2} />
          </div>
        </div>
      </section>

      {/* Honorarios y seguros — sin precio numérico (pendiente de confirmar
          con el doctor), transparente sobre que no se manejan seguros. */}
      <section className="border-t border-[var(--color-line)] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 text-center shadow-[var(--shadow-soft)] sm:p-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
              Honorarios y forma de atención
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
              Contáctanos para conocer el costo de tu consulta
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-slate)] sm:text-base">
              El costo de la consulta se confirma directamente por WhatsApp o teléfono antes de tu cita.
            </p>
            {doctor.insurances && doctor.insurances.length > 0 && (
              <div className="mx-auto mt-6 flex max-w-lg items-start gap-2.5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cloud)] p-4 text-left text-sm text-[var(--color-slate)]">
                <ShieldCheck className="h-4 w-4 mt-0.5 shrink-0 text-[var(--color-sky)]" aria-hidden="true" />
                <span>{doctor.insurances[0]}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-[var(--color-line)] bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-steel)] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <Stethoscope className="mx-auto h-10 w-10 text-[var(--color-sky-pale)]" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Agenda tu valoración respiratoria en Hermosillo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Atención en el Hospital San José, 4to piso, módulo O, consultorio 409. Horarios de lunes a
            sábado.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="bounce-hover inline-flex items-center gap-2 rounded-2xl bg-[var(--color-sky)] px-8 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-lift)]"
            >
              <span>Escribir por WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/contacto"
              className="bounce-hover inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-xs"
            >
              <span>Ver ubicación y horarios</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
