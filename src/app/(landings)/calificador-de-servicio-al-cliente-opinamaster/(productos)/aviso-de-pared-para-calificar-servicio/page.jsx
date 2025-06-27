import TechnicalSheet from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/HowItWorks/HowItWorks";
import CalificadorClientsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/ClientsSection/CalificadorClientsSection";
import ProductGallerySelected from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";
import CalificadorRelatedProducts from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/RelatedProducts/CalificadorRelatedProducts";

export async function generateMetadata() {
  const { 'calificador-de-servicio-al-cliente-opinamaster': { 'aviso-de-pared-para-calificar-servicio': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasAvisoDePared() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <CalificadorClientsSection />
      <CalificadorRelatedProducts />
    </>
  );
}