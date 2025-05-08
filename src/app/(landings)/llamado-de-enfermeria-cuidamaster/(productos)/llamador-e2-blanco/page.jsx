// Importing components for specific sections of the page
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e2-blanco/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e2-blanco/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e2-blanco/components/ProductGallery/ProductGallerySelected";

// Metadata for the page
export const metadata = {
  title: "Llamador de Enfermería E2 Blanco: Atención Inmediata",
  description:
    "Mejora la experiencia de pacientes en clínicas y hospitales con el llamador inalámbrico E2. Ágil, cómodo y fácil de usar. ¡Solicita asesoría hoy!",
  keywords: ["Llamado de enfermería inhalambrico"],
  openGraph: {
    title: "Llamador de Enfermería E2 Blanco: Atención Inmediata",
    description:
      "Mejora la experiencia de pacientes en clínicas y hospitales con el llamador inalámbrico E2. Ágil, cómodo y fácil de usar. ¡Solicita asesoría hoy!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/llamador-e2-blanco",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Llamador de Enfermería E2 Blanco: Atención Inmediata",
    description:
      "Mejora la experiencia de pacientes en clínicas y hospitales con el llamador inalámbrico E2. Ágil, cómodo y fácil de usar. ¡Solicita asesoría hoy!",
  },
};

// Main component for the page
export default function VerMasEnfermeriaLlamadorV2b() {
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