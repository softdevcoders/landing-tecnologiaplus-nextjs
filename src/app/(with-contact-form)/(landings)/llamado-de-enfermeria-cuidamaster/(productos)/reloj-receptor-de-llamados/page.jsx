// Importing components for the page
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection"; // Logos section component
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/TechnicalSheet/TechnicalSheet"; // Technical sheet component
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/HowItWorks/HowItWorks"; // How it works section component
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts"; // Related products section component
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/ProductGallery/ProductGallerySelected"; // Product gallery component
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria-cuidamaster': { 'reloj-receptor-de-llamados': metadata } } = getMetadata('landings');
  return metadata;
}


// Main component for the page
export default function VerMasEnfermeriaRelojReceptor() {
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