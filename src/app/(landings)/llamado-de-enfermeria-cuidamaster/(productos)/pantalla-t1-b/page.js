// Importing components for specific sections of the page
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/LogosSection/LogosSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t1-b/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t1-b/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t1-b/components/ProductGallery/ProductGallerySelected";

// Metadata for the page
export const metadata = {
  title: "Pantalla T1-B para Enfermería: Visualiza Llamados en Tiempo Real",
  description:
    "Gestiona hasta 15 llamados en pantalla. Solución ideal para hospitales y hogares geriátricos. Mejora la atención y la coordinación del personal.",
  keywords: ["Pantalla para Timbre Hospitalario"],
  openGraph: {
    title: "Pantalla T1-B para Enfermería: Visualiza Llamados en Tiempo Real",
    description:
      "Gestiona hasta 15 llamados en pantalla. Solución ideal para hospitales y hogares geriátricos. Mejora la atención y la coordinación del personal.",
    url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/pantalla-t1-b",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantalla T1-B para Enfermería: Visualiza Llamados en Tiempo Real",
    description:
      "Gestiona hasta 15 llamados en pantalla. Solución ideal para hospitales y hogares geriátricos. Mejora la atención y la coordinación del personal.",
  },
};

// Main component for the page
export default function VerMasPantallaT1B() {
  return (
    <>
      {/* Section: Product Gallery */}
      <ProductGallerySelected />
      
      {/* Section: Technical Sheet */}
      <TechnicalSheet />
      
      {/* Section: How It Works */}
      <HowItWorks />
      
      {/* Section: Logos */}
      <LogosSection />
      
      {/* Section: Related Products */}
      <EnfermeriaRelatedProducts />
    </>
  );
}