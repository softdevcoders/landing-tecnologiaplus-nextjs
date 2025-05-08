// Component imports from the same section
import TechnicalSheet from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/HowItWorks/HowItWorks";
import LogosSection from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/LogosSection/LogosSection";
import ProductGallerySelected from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/ProductGallery/ProductGallerySelected";

// Component import from a different section
import LlamadorMeserosRelatedProducts from "@/sections/dispensador-de-tickets/landing/components/RelatedProducts/DispensadorTiquetesRelatedProducts";

export const metadata = {
  title: "Dispensador de Tickets Caracol: Ordena y Optimiza Filas",
  description:
    "Organiza filas fácilmente con nuestro dispensador tipo caracol. Ideal para salas de espera y servicios. Instalación sencilla. ¡Cotiza y mejora tu atención!",
  keywords: ["DISPENSADOR DE TICKETS"],
  openGraph: {
    title: "Dispensador de Tickets Caracol: Ordena y Optimiza Filas",
    description:
      "Organiza filas fácilmente con nuestro dispensador tipo caracol. Ideal para salas de espera y servicios. Instalación sencilla. ¡Cotiza y mejora tu atención!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets/dispensador-de-tickets-caracol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dispensador de Tickets Caracol: Ordena y Optimiza Filas",
    description:
      "Organiza filas fácilmente con nuestro dispensador tipo caracol. Ideal para salas de espera y servicios. Instalación sencilla. ¡Cotiza y mejora tu atención!",
  },
};

export default function DispensadorDeTiquetesPage() {
  return (
    <>
      {/* Product gallery section */}
      <ProductGallerySelected />
      {/* Technical sheet section */}
      <TechnicalSheet />
      {/* How it works section */}
      <HowItWorks />
      {/* Logos section */}
      <LogosSection />
      {/* Related products section */}
      <LlamadorMeserosRelatedProducts />
    </>
  );
}