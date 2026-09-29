"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  items: { label: string; href: Route }[];
}

/**
 * Menú hamburguesa móvil. Botón de 44px para cumplir el mínimo táctil de
 * accesibilidad (§5.3).
 */
export default function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="bounce-pop flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line)] text-[var(--color-navy)]"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          aria-label="Principal (móvil)"
          className="absolute inset-x-0 top-full border-t border-[var(--color-line)] bg-white shadow-lg rise-in"
        >
          <ul className="divide-y divide-[var(--color-line)]">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center px-4 text-[var(--color-navy)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
