import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];
const leftNav = navItems.slice(1, 3);
const rightNav = navItems.slice(3);

/**
 * Header "logo al centro" — deliberadamente distinto del esqueleto
 * logo-izquierda/nav-centro/botón-derecha de `dr-gustavo-alvarez` y del
 * logo-grande-asimétrico de `dr-gregorio-arcos` (hallazgo real 2026-09-24:
 * los 3 headers se veían iguales solo repintados). Una sola fila: nav
 * izquierda — LOGO grande centrado — nav derecha + WhatsApp. Credenciales
 * como placa debajo del logo, no como barra superior de ancho completo.
 * Logo real recortado a su caja de contenido real (antes el PNG traía ~80%
 * de relleno transparente y se veía diminuto pese al alto del contenedor).
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <nav aria-label="Principal" className="hidden flex-1 md:flex items-center gap-6">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-[var(--color-navy)]/80 transition-colors hover:text-[var(--color-sky)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${doctor.title} ${doctor.name}`}>
            <Image
              src="/logo-horizontal.png"
              alt={`${doctor.title} ${doctor.name} — ${doctor.specialistTitle}`}
              width={1182}
              height={290}
              priority
              className="h-14 w-auto sm:h-16 md:h-20 object-contain"
            />
          </Link>
          <span className="mt-0.5 hidden text-[10px] tracking-wide text-[var(--color-slate)] md:block">
            {formatCredentials(doctor)}
          </span>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
          <nav aria-label="Secundaria" className="flex items-center gap-6">
            {rightNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-[var(--color-navy)]/80 transition-colors hover:text-[var(--color-sky)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="bounce-pop whitespace-nowrap shrink-0 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-soft)]"
          >
            WhatsApp
          </a>
        </div>

        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
