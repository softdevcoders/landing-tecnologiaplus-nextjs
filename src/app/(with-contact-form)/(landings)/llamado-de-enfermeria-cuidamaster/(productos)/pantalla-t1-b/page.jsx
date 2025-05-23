// Importing components for specific sections of the page
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t1-b/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t1-b/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t1-b/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria-cuidamaster': { 'pantalla-t1-b': metadata } } = getMetadata('landings');
  return metadata;
}


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