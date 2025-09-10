import TechnicalSheet from "@/sections/llamado-de-enfermeria/alarma-de-luz/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria/alarma-de-luz/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria/alarma-de-luz/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria/alarma-de-luz/components/ProductGallery/ProductGallerySelected";
import EnfermeriaClientsSection from "@/sections/llamado-de-enfermeria/alarma-de-luz/components/ClientsSection/EnfermeriaClientsSection";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria': { 'alarma-de-luz': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasEnfermeriaAlarmaDeLuz() {
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