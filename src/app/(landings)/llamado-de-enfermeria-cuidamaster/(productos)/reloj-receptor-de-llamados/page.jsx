import EnfermeriaClientsSection from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/ClientsSection/EnfermeriaClientsSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria-cuidamaster': { 'reloj-receptor-de-llamados': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasEnfermeriaRelojReceptor() {
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