import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda tu cita con ${doctor.title} ${doctor.name} en ${doctor.city}, Sonora. Dirección, horario y mapa del consultorio.`,
  alternates: { canonical: "/contacto" },
};

// Command center de 2 columnas, tamaño moderado (ni el mapa secundario en
// recuadro fijo de Gustavo, ni el mapa full-width dominante de otros
// sitios): dirección + horario a un lado, mapa al otro, estático y simple.
export default function ContactoPage() {
  const fullAddress = `${doctor.address}, ${doctor.city}, ${doctor.state}`;

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
                Contacto directo
              </h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bounce-pop flex items-center gap-3.5 rounded-xl border border-emerald-100 bg-emerald-50 p-3.5 text-sm font-semibold text-emerald-900"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[11px] uppercase tracking-wider opacity-70">WhatsApp</span>
                      <span>{doctor.whatsapp}</span>
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
                {/* Correo omitido a propósito: doctor.email es un placeholder
                    PENDIENTE (el intake no dio uno real) — mostrarlo aquí
                    invitaría a escribir a una dirección no monitoreada. Solo
                    se usa internamente para JSON-LD/esquema, nunca en UI. */}
              </ul>
            </div>
          </div>

          <div>
            <MapFacade address={fullAddress} whatsapp={doctor.whatsapp} />
            <p className="mt-3 text-center text-xs text-[var(--color-slate)]">
              Hospital San José, 4to piso, módulo O, consultorio 409.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
