"use client";

import { useEffect } from "react";

interface DoctoraliaWidgetProps {
  className?: string;
}

/**
 * Componente cliente para integrar el widget oficial de reserva de citas de Doctoralia.
 */
export default function DoctoraliaWidget({ className = "" }: DoctoraliaWidgetProps) {
  useEffect(() => {
    const scriptId = "zl-widget-s";
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.src = "//platform.docplanner.com/js/widget.js";
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(scriptEl, firstScript);
      } else {
        document.head.appendChild(scriptEl);
      }
    }
  }, []);

  return (
    <div className={`doctoralia-widget-wrapper overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-4 sm:p-6 shadow-[var(--shadow-soft)] ${className}`}>
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.com.mx/perfil/oliver-martinez-gonzalez"
        rel="nofollow"
        data-zlw-doctor="oliver-martinez-gonzalez"
        data-zlw-type="big"
        data-zlw-opinion="true"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
        data-zlw-a11y-title="Widget de reserva de citas médicas"
      >
        Reserve una cita
      </a>
    </div>
  );
}
