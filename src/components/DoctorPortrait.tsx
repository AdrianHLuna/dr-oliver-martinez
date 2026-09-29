"use client";

import { useState } from "react";
import Image from "next/image";
import { UserCheck, Stethoscope, Building2, ShieldCheck } from "lucide-react";
import { doctor } from "@/data";

interface DoctorPortraitProps {
  className?: string;
  src?: string;
  variant?: "hero" | "about";
}

export default function DoctorPortrait({ className = "", src, variant = "hero" }: DoctorPortraitProps) {
  const imageSrc = src || (variant === "about" ? (doctor.aboutPhoto || doctor.photo) : doctor.photo);
  const [failed, setFailed] = useState(!imageSrc || imageSrc === "/doctor-placeholder.jpg");

  const isPlaceholder = failed || !imageSrc || imageSrc === "/doctor-placeholder.jpg";

  if (variant === "about") {
    return (
      <div className={`relative mx-auto w-full max-w-sm lg:max-w-md ${className}`}>
        {/* Resplandor suave de fondo */}
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[var(--color-sky)]/15 via-[var(--color-teal)]/10 to-transparent blur-xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white p-3 shadow-[var(--shadow-lift)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-[var(--color-cloud)] via-white to-slate-100">
            {!isPlaceholder ? (
              <Image
                src={imageSrc}
                alt={`${doctor.title} ${doctor.name}`}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
                onError={() => setFailed(true)}
              />
            ) : (
              /* Tarjeta / Marco para la foto en la sección Sobre El Especialista */
              <div className="flex h-full w-full flex-col justify-between p-6 text-center text-[var(--color-navy)]">
                <div className="flex items-center justify-between text-xs font-semibold text-[var(--color-slate)]">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-[11px] shadow-xs">
                    <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-sky)]" aria-hidden="true" />
                    Fotografía Especialista
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-sky)] animate-pulse" title="Neumólogo" />
                </div>

                <div className="my-auto flex flex-col items-center py-6">
                  <div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)]">
                    <Stethoscope className="h-12 w-12 text-[var(--color-sky)]" aria-hidden="true" />
                    <div className="absolute -bottom-1 -right-1 rounded-full bg-[var(--color-navy)] p-1 text-white shadow-xs">
                      <UserCheck className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-navy)]">
                    {doctor.title} {doctor.name}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-slate)] font-medium">
                    {doctor.specialistTitle} en Neumología
                  </p>
                  <div className="mt-3 rounded-full border border-[var(--color-line)] bg-[var(--color-cloud)] px-3.5 py-1 text-[11px] text-[var(--color-slate)] font-medium">
                    Espacio reservado para foto del especialista
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-cloud)] p-3 text-xs text-[var(--color-navy)] font-medium shadow-xs">
                  <div className="flex items-center justify-center gap-2">
                    <Building2 className="h-3.5 w-3.5 text-[var(--color-sky)] shrink-0" aria-hidden="true" />
                    <span className="truncate">Hospital San José de Hermosillo</span>
                  </div>
                </div>
              </div>
            )}

            {!isPlaceholder && (
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/80 bg-white/90 p-3.5 text-xs text-[var(--color-navy)] backdrop-blur-md shadow-md flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white shadow-xs">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold leading-tight truncate">{doctor.title} {doctor.name}</p>
                  <p className="text-[11px] text-[var(--color-slate)] truncate">{doctor.specialistTitle} · Hermosillo</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Hero variant (Dark theme)
  return (
    <div className={`relative mx-auto w-full max-w-sm lg:max-w-md ${className}`}>
      {/* Resplandor ambiental de fondo */}
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[var(--color-sky)]/30 via-[var(--color-teal)]/20 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-md">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-[var(--color-navy)]/95">
          {!isPlaceholder ? (
            <Image
              src={imageSrc}
              alt={`${doctor.title} ${doctor.name}`}
              fill
              priority
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 450px"
              onError={() => setFailed(true)}
            />
          ) : (
            /* Tarjeta / Marco preparado para cuando se añada la foto recortada del doctor */
            <div className="flex h-full w-full flex-col justify-between p-6 text-center text-white">
              <div className="flex items-center justify-between text-xs font-medium text-white/70">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] backdrop-blur-xs">
                  <UserCheck className="h-3.5 w-3.5 text-[var(--color-sky-pale)]" aria-hidden="true" />
                  Especialista en Neumología
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" title="Disponible para consulta" />
              </div>

              <div className="my-auto flex flex-col items-center py-6">
                <div className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-gradient-to-b from-white/20 to-white/5 shadow-inner backdrop-blur-sm">
                  <Stethoscope className="h-12 w-12 text-[var(--color-sky-pale)]" aria-hidden="true" />
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-[var(--color-sky)] p-1 text-white shadow-md">
                    <UserCheck className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-wide">
                  {doctor.title} {doctor.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--color-sky-pale)] font-medium">
                  {doctor.specialistTitle} · Hospital San José
                </p>
                <div className="mt-3 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] text-white/75 backdrop-blur-xs">
                  Espacio reservado para foto del especialista
                </div>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-3 text-xs text-white/90 backdrop-blur-xs shadow-sm">
                <div className="flex items-center justify-center gap-2 font-medium">
                  <Building2 className="h-3.5 w-3.5 text-[var(--color-sky-pale)] shrink-0" aria-hidden="true" />
                  <span className="truncate">Hospital San José · Consultorio 409</span>
                </div>
              </div>
            </div>
          )}

          {/* Insignia flotante cuando la foto está presente */}
          {!isPlaceholder && (
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[var(--color-navy)]/85 p-3.5 text-xs text-white backdrop-blur-md shadow-lg flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-sky)] text-white shadow-sm">
                <Stethoscope className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="overflow-hidden">
                <p className="font-bold leading-tight truncate">{doctor.title} {doctor.name}</p>
                <p className="text-[11px] text-[var(--color-sky-pale)] truncate">{doctor.specialistTitle} · Hermosillo</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
