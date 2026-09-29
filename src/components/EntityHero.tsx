"use client";

import { useState } from "react";
import Image from "next/image";
import { Wind, ShieldCheck } from "lucide-react";

interface EntityHeroProps {
  src?: string;
  alt: string;
  eyebrow: string;
}

/**
 * Banner de foto grande para vistas de detalle — más grande que la tarjeta
 * que enlazó ahí (AGENTS.md §2/§5). Mantiene el fondo claro dominante del
 * sitio con un overlay degradado navy solo para legibilidad del texto.
 */
export default function EntityHero({ src, alt, eyebrow }: EntityHeroProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="relative mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <div className="relative h-64 w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] sm:h-80 md:h-96">
        {failed || !src ? (
          <div className="image-fallback flex h-full w-full items-center justify-center" role="img" aria-label={alt}>
            <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/70 shadow-sm backdrop-blur-xs">
              <Wind className="h-10 w-10 text-[var(--color-navy)]" aria-hidden="true" />
            </span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1152px"
            onError={() => setFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/85 via-[var(--color-navy)]/15 to-transparent" />

        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[var(--color-navy)] shadow-sm backdrop-blur-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-sky)]" aria-hidden="true" />
            Revisión Médica Especializada
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-8 sm:right-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sky-pale)]">{eyebrow}</span>
          <h1 className="mt-1 text-2xl font-bold text-white drop-shadow-sm sm:text-3xl md:text-4xl">{alt}</h1>
        </div>
      </div>
    </div>
  );
}
