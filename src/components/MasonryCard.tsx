"use client";

import Link from "next/link";
import type { Route } from "next";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import EntityImage from "./EntityImage";

export type CardSize = "sm" | "md" | "lg";

interface MasonryCardProps {
  title: string;
  description: string;
  href: Route;
  image?: string;
  badge?: string;
  index?: number;
  size?: CardSize;
}

const imageHeightClass: Record<CardSize, string> = {
  sm: "h-48",
  md: "h-56",
  lg: "h-72",
};

/**
 * Tarjeta del grid masonry ("Respiración"): tamaño de imagen mixto según
 * `size` (AGENTS.md §2 — siempre ≥192px de lado mayor, nunca miniatura),
 * animación de entrada + hover con spring corto y rebote marcado en vez de
 * fades lentos, distinta del "recuadro imagen-arriba" fijo y del "índice
 * numerado" ya usados por otros doctores del registro.
 */
export default function MasonryCard({ title, description, href, image, badge, index, size = "md" }: MasonryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: (index ?? 0) % 4 * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group mb-6 break-inside-avoid"
    >
      <Link
        href={href}
        className="block overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)] transition-shadow duration-200 hover:shadow-[var(--shadow-lift)]"
      >
        <div className="relative">
          <EntityImage src={image} alt={title} className={`w-full ${imageHeightClass[size]}`} />
          {(index !== undefined || badge) && (
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
              {index !== undefined && (
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 text-xs font-bold text-[var(--color-navy)] shadow-sm backdrop-blur-xs">
                  {String(index).padStart(2, "0")}
                </span>
              )}
              {badge && (
                <span className="ml-auto rounded-full bg-[var(--color-navy)]/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                  {badge}
                </span>
              )}
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="flex items-start justify-between gap-2 text-lg font-bold text-[var(--color-navy)]">
            <span>{title}</span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 translate-y-1 text-[var(--color-sky)] opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
              aria-hidden="true"
            />
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)] line-clamp-3">{description}</p>
          <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-sky)]">
            <span>Ver ficha completa</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
