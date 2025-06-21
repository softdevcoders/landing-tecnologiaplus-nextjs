// Component imports
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/ProductGallery/ProductGallerySelected";
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria-cuidamaster': { 'alarma-de-luz': metadata } } = getMetadata('landings');
  return metadata;
}

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