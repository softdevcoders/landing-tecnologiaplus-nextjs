import TechnicalSheet from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";
import CalificadorRelatedProducts from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/RelatedProducts/CalificadorRelatedProducts";
import CalificadorClientsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/ClientsSection/CalificadorClientsSection";

export async function generateMetadata() {
  const { 'calificador-de-servicio-al-cliente-opinamaster': { 'calificador-de-servicio': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasOpinaMaster() {
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