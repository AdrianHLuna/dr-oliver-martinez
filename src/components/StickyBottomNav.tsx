"use client";

import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/** Sticky Bottom Nav móvil — AISO v3.1 §3.1. Solo visible en móvil (md:hidden). */
export default function StickyBottomNav() {
  const doctoraliaLink = doctor.doctoraliaUrl || "https://www.doctoralia.com.mx/perfil/oliver-martinez-gonzalez";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${doctor.phone}`}
        onClick={() => trackEvent("clic_agendar_cita", { source: "sticky_nav" })}
        className="relative flex w-[60%] min-h-[44px] items-center justify-center gap-2 bg-[var(--color-navy)] py-3 text-sm font-semibold text-white"
      >
        <span className="absolute inset-0 motion-safe:animate-ping bg-[var(--color-navy)]/50 -z-10" aria-hidden="true" />
        Llamar al consultorio
      </a>
      <a
        href={doctoraliaLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("clic_doctoralia", { source: "sticky_nav" })}
        className="flex w-[40%] min-h-[44px] items-center justify-center bg-[#00b2a9] py-3 text-sm font-semibold text-white"
      >
        Doctoralia
      </a>
    </div>
  );
}
