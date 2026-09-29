import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-[var(--color-navy)]">404</h1>
      <p className="mt-4 text-[var(--color-slate)]">
        No encontramos la página que buscas. Puede que el enlace esté roto o la página se haya movido.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="bounce-hover rounded-2xl bg-[var(--color-navy)] px-6 py-3 text-white">
          Ir al inicio
        </Link>
        <Link href="/servicios" className="bounce-hover rounded-2xl border border-[var(--color-line)] px-6 py-3 text-[var(--color-navy)]">
          Ver servicios
        </Link>
      </div>
    </main>
  );
}
