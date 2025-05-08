// Component imports
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/ProductGallery/ProductGallerySelected";
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/LogosSection/LogosSection";

// Metadata for the page
export const metadata = {
  title: "Alarma de Luz para Enfermería: Atención Visual y Sonora",
  description:
    "Facilita la comunicación en hospitales con nuestra alarma de luz y sonido. Ideal para áreas amplias y entornos ruidosos. ¡Solicita tu cotización!",
  keywords: ["Alarma visual y sonora"],
  openGraph: {
    title: "Alarma de Luz para Enfermería: Atención Visual y Sonora",
    description:
      "Facilita la comunicación en hospitales con nuestra alarma de luz y sonido. Ideal para áreas amplias y entornos ruidosos. ¡Solicita tu cotización!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/alarma-de-luz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alarma de Luz para Enfermería: Atención Visual y Sonora",
    description:
      "Facilita la comunicación en hospitales con nuestra alarma de luz y sonido. Ideal para áreas amplias y entornos ruidosos. ¡Solicita tu cotización!",
  },
};

// Main component for the page
export default function VerMasEnfermeriaAlarmaDeLuz() {
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