interface MapFacadeProps {
  address: string;
  whatsapp: string;
}

/**
 * Mapa de Google real e interactivo desde la primera carga — decisión
 * explícita del usuario 2026-09-24 (AGENTS.md §7): nunca pedir clic para
 * "ver el mapa".
 *
 * Sin `loading="lazy"`: causaba que el iframe se quedara en blanco de forma
 * permanente (cero peticiones de red) cuando el chequeo de intersección del
 * navegador corría antes de que el layout terminara de asentarse en la
 * hidratación — confirmado con DevTools 2026-09-24 en `dr-gregorio-arcos` y
 * reproducido aquí. Sin un scroll que lo re-dispare, nunca cargaba.
 */
export default function MapFacade({ address }: MapFacadeProps) {
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-cloud)] shadow-[var(--shadow-soft)]">
      <iframe
        src={mapsEmbedUrl}
        className="h-full w-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del consultorio"
      />
    </div>
  );
}
