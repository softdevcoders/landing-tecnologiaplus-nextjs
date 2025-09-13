import TechnicalSheet from "@/sections/llamado-de-enfermeria/llamador-e1-para-cuello/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria/llamador-e1-para-cuello/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria/llamador-e1-para-cuello/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria/llamador-e1-para-cuello/components/ProductGallery/ProductGallerySelected";
import EnfermeriaClientsSection from "@/sections/llamado-de-enfermeria/llamador-e1-para-cuello/components/ClientsSection/EnfermeriaClientsSection";
import getMetadata from "@/request/server/metadata/get-metadata";
  
export async function generateMetadata() {
  const { 'llamado-de-enfermeria': { 'llamador-e1-para-cuello': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasEnfermeriaBotonE1() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <EnfermeriaClientsSection />
      <EnfermeriaRelatedProducts />
    </>
  );
}