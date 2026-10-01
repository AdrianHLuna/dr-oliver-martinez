"use client";

import { Phone, Calendar } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

interface FloatingButtonsProps {
  /** Contexto opcional de la página */
  context?: string;
}

const FloatingButtons = ({ context }: FloatingButtonsProps) => {
  const doctoraliaLink = doctor.doctoraliaUrl || "https://www.doctoralia.com.mx/perfil/oliver-martinez-gonzalez";
  const phoneLink = `tel:${doctor.phone}`;

  const buttonBaseClass =
    "bounce-pop w-[52px] h-[52px] rounded-full text-white flex justify-center items-center shadow-[var(--shadow-lift)] relative z-50";
  const pulseClass =
    "absolute inline-flex h-full w-full rounded-full opacity-75 motion-safe:animate-ping -z-10";

  return (
    <div className="fixed right-5 bottom-5 hidden md:flex flex-col gap-4 z-50">
      <a
        target="_blank"
        href={doctoraliaLink}
        rel="noreferrer"
        aria-label="Reservar cita en Doctoralia"
        className={`${buttonBaseClass} bg-[#00b2a9]`}
        onClick={() => trackEvent("clic_doctoralia", { source: "floating" })}
      >
        <span className={`${pulseClass} bg-[#00b2a9]`} />
        <Calendar size={24} />
      </a>

      <a
        href={phoneLink}
        aria-label="Llamar al doctor"
        className={`${buttonBaseClass} bg-[var(--color-navy)]`}
        onClick={() => trackEvent("clic_llamar", { source: "floating" })}
      >
        <span className={`${pulseClass} bg-[var(--color-navy)]`} />
        <Phone size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;
