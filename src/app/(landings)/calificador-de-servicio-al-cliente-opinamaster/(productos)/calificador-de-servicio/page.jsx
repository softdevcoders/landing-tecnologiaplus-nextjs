// Component imports from relative paths
import TechnicalSheet from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";
// Component imports using absolute paths
import CalificadorRelatedProducts from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/RelatedProducts/CalificadorRelatedProducts";
import LogosSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/ClientsSection/CalificadorClientsSection";

export async function generateMetadata() {
  const { 'calificador-de-servicio-al-cliente-opinamaster': { 'calificador-de-servicio': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasOpinaMaster() {
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