// Component imports
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-ex1/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-ex1/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-ex1/components/ProductGallery/ProductGallerySelected";

// Metadata for the page
export const metadata = {
  title: "Llamador de Enfermería EX1: Cable Extensor y Accesibilidad",
  description:
    "Facilita el llamado de ayuda con el EX1, diseñado para máxima accesibilidad en camas hospitalarias y hogares geriátricos. ¡Solicita información!",
  keywords: ["Sistema de timbres para habitaciones"],
  openGraph: {
    title: "Llamador de Enfermería EX1: Cable Extensor y Accesibilidad",
    description:
      "Facilita el llamado de ayuda con el EX1, diseñado para máxima accesibilidad en camas hospitalarias y hogares geriátricos. ¡Solicita información!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/llamador-ex1",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Llamador de Enfermería EX1: Cable Extensor y Accesibilidad",
    description:
      "Facilita el llamado de ayuda con el EX1, diseñado para máxima accesibilidad en camas hospitalarias y hogares geriátricos. ¡Solicita información!",
  },
};

// Main component for the page
export default function VerMasEnfermeriaLlamadorConExtensor() {
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
      <EnfermeriaRelatedProducts />
    </>
  );
}