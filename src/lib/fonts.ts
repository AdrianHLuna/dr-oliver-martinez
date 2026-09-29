import { Roboto } from "next/font/google";

// Tipografía única de este sitio ("Respiración"): Roboto para encabezados y
// cuerpo (gratuita vía next/font/google, coincide con la fuente sugerida en
// la paleta oficial de marca — PALETA DE COLORES DR OLIVER M_compressed.pdf).
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});
