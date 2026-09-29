"use client";

import Image from "next/image";
import { useState } from "react";
import { Wind } from "lucide-react";

interface EntityImageProps {
  src?: string;
  alt: string;
  className?: string;
  iconClassName?: string;
  sizes?: string;
}

/**
 * Contenedor de imagen obligatorio (AGENTS.md §2) — el `className` del
 * padre define la altura/aspect ratio real (siempre grande, nunca una
 * miniatura), este componente solo resuelve la imagen real vs. el fallback
 * clínico de degradado azul cielo + línea de acento.
 */
export default function EntityImage({ src, alt, className = "", iconClassName = "h-9 w-9", sizes }: EntityImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    return (
      <div className={`image-fallback flex items-center justify-center ${className}`} role="img" aria-label={alt}>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm backdrop-blur-xs">
          <Wind className={`${iconClassName} text-[var(--color-navy)]`} aria-hidden="true" />
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[var(--color-cloud)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
        sizes={sizes ?? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
