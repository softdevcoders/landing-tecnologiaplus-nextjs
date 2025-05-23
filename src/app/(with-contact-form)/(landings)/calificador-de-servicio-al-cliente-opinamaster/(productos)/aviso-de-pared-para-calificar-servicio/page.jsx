// Importing page-specific components
import TechnicalSheet from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/HowItWorks/HowItWorks";
import LogosSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/ClientsSection/CalificadorClientsSection";
import ProductGallerySelected from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";
  
// Importing related products component
import CalificadorRelatedProducts from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/RelatedProducts/CalificadorRelatedProducts";

export async function generateMetadata() {
  const { 'calificador-de-servicio-al-cliente-opinamaster': { 'aviso-de-pared-para-calificar-servicio': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasAvisoDePared() {
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
      <CalificadorRelatedProducts />
    </>
  );
}