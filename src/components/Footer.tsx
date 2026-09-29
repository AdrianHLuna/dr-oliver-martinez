import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { doctor, diseases, services, symptoms } from "@/data";
import { formatCredentials } from "@/lib/credentials";

const MAX_LINKS = 6;

/**
 * Footer oscuro (navy) con el logo real del doctor. Como el set de marca
 * (LOGO-01 a LOGO-15) no incluye una variante blanca/invertida para fondo
 * oscuro, el logo se aloja sobre una placa blanca redondeada — mantiene la
 * legibilidad total exigida por AGENTS.md §6 sin fabricar un asset nuevo.
 * Sitemap de navegación por categoría (máx. 6 + "Ver todos"), disclaimer
 * médico global.
 */
export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex justify-center">
          <div className="flex h-28 w-full max-w-[420px] items-center justify-center rounded-2xl bg-white px-8 py-5 shadow-[var(--shadow-lift)] sm:h-32">
            <Image
              src="/logo-stacked.png"
              alt={`${doctor.title} ${doctor.name} — ${doctor.specialistTitle}`}
              width={1164}
              height={422}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">
            {doctor.title} {doctor.name}
          </p>
          <p className="mt-1 text-sm text-[var(--color-sky-pale)]">{doctor.specialty}</p>
          <p className="mt-3 text-xs text-white/70">{formatCredentials(doctor)}</p>
          <address className="mt-4 not-italic text-sm text-white/80">
            {doctor.address}, {doctor.city}, {doctor.state}
            <br />
            {doctor.schedule}
            <br />
            Tel: {doctor.phone}
          </address>
        </div>

        {/* Sitemap de navegación por categoría. */}
        <nav aria-label="Mapa del sitio" className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="text-sm font-semibold uppercase tracking-wide text-[var(--color-sky-pale)] hover:text-white">
                {col.title}
              </Link>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="hover:text-white hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="underline hover:text-white">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <p className="mt-10 max-w-2xl text-xs text-white/55">
          El contenido de este sitio es informativo y educativo; no sustituye una consulta médica
          profesional. Ante una urgencia respiratoria, acude de inmediato al servicio de urgencias más
          cercano.
        </p>
      </div>
    </footer>
  );
}
