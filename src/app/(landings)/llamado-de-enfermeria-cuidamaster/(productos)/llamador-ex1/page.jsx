import EnfermeriaClientsSection from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-ex1/components/ClientsSection/EnfermeriaClientsSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-ex1/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-ex1/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-ex1/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/llamador-ex1/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria-cuidamaster': { 'llamador-ex1': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasEnfermeriaLlamadorConExtensor() {
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