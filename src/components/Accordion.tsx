import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  icon?: ReactNode;
  /** Abierto en la carga inicial — usar solo en el primer ítem de la lista. */
  defaultOpen?: boolean;
  children: ReactNode;
}

/**
 * Sección plegable con <details>/<summary> nativos: cero JS, cero hidratación,
 * sin problemas de límite Server/Client Component. Reemplaza el patrón de
 * "todo el artículo siempre abierto en una sola columna" que dr-gustavo-alvarez
 * y dr-oliver-martinez compartían casi sin variación (hallazgo del usuario
 * 2026-09-24) — aquí solo el resumen y las señales de alarma quedan siempre
 * visibles; el resto se explora bajo demanda.
 */
export function AccordionItem({ title, icon, defaultOpen = false, children }: AccordionItemProps) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-2xl border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2.5 text-base font-bold text-[var(--color-navy)]">
          {icon}
          {title}
        </span>
        <ChevronDown
          className="h-4 w-4 shrink-0 text-[var(--color-sky)] transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="px-5 pb-5 pt-1">{children}</div>
    </details>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="mt-8 space-y-3">{children}</div>;
}
