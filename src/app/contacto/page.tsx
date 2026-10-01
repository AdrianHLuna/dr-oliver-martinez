import type { Metadata } from "next";
import { Phone, Calendar, MapPin, Clock } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda tu cita con ${doctor.title} ${doctor.name} en ${doctor.city}, Sonora. Dirección, horario y mapa del consultorio.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const fullAddress = `${doctor.address}, ${doctor.city}, ${doctor.state}`;
  const doctoraliaLink = doctor.doctoraliaUrl || "https://www.doctoralia.com.mx/perfil/oliver-martinez-gonzalez";

  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />

      <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <header className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
            Consultorio en Hermosillo
          </span>
          <h1 className="mt-2 text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
            Agenda tu Valoración Respiratoria
          </h1>
          <p className="mt-3 text-[var(--color-slate)]">
            {doctor.title} {doctor.name} atiende en el Hospital San José, Hermosillo, Sonora.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Dirección
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-navy)]">{doctor.address}</p>
              <p className="mt-1 text-sm text-[var(--color-slate)]">
                {doctor.city}, {doctor.state}, {doctor.country}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Horario de atención
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-navy)]">{doctor.schedule}</p>
            </div>

            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky)]">
                Reserva de citas
              </h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={doctoraliaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bounce-pop flex items-center gap-3.5 rounded-xl border border-teal-100 bg-teal-50 p-3.5 text-sm font-semibold text-teal-900"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00b2a9] text-white">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[11px] uppercase tracking-wider opacity-70">Doctoralia</span>
                      <span>Reserve una cita en línea</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${doctor.phone}`}
                    className="bounce-pop flex items-center gap-3.5 rounded-xl border border-[var(--color-line)] bg-[var(--color-cloud)] p-3.5 text-sm font-semibold text-[var(--color-navy)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[11px] uppercase tracking-wider opacity-70">Teléfono</span>
                      <span>{doctor.phone}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <MapFacade address={fullAddress} />
            <p className="mt-3 text-center text-xs text-[var(--color-slate)]">
              Hospital San José, 4to piso, módulo O, consultorio 409.
            </p>
          </div>
        </div>

        {/* Embedded Doctoralia Widget section on Contact page */}
        <section className="mt-12 border-t border-[var(--color-line)] pt-10">
          <h2 className="mb-4 text-xl font-bold text-[var(--color-navy)] text-center">
            Calendario de Citas Doctoralia
          </h2>
          <div className="flex justify-center">
            <DoctoraliaWidget className="w-full max-w-2xl text-left" />
          </div>
        </section>
      </div>
    </main>
  );
}
