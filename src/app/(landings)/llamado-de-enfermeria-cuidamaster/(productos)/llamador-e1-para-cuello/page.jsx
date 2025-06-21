// Component imports
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello/components/ProductGallery/ProductGallerySelected";
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import getMetadata from "@/request/server/metadata/get-metadata";
  
export async function generateMetadata() {
  const { 'llamado-de-enfermeria-cuidamaster': { 'llamador-e1-para-cuello': metadata } } = getMetadata('landings');
  return metadata;
}


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