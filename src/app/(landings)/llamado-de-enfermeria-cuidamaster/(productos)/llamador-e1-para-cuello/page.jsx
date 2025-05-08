// Component imports
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello/components/ProductGallery/ProductGallerySelected";
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";

// Metadata for SEO
export const metadata = {
  title: "Llamador de Enfermería E1 para Cuello: Autonomía Total",
  description:
    "Brinda libertad a tus pacientes con el botón portátil E1. Resistente al agua y fácil de usar. Perfecto para adultos mayores. ¡Conoce sus ventajas!",
  keywords: ["Botón de enfermería"],
  openGraph: {
    title: "Llamador de Enfermería E1 para Cuello: Autonomía Total",
    description:
      "Brinda libertad a tus pacientes con el botón portátil E1. Resistente al agua y fácil de usar. Perfecto para adultos mayores. ¡Conoce sus ventajas!",
    url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Llamador de Enfermería E1 para Cuello: Autonomía Total",
    description:
      "Brinda libertad a tus pacientes con el botón portátil E1. Resistente al agua y fácil de usar. Perfecto para adultos mayores. ¡Conoce sus ventajas!",
  },
};

// Main component
export default function VerMasEnfermeriaBotonE1() {
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