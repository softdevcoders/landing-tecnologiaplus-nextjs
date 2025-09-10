import EnfermeriaClientsSection from "@/sections/llamado-de-enfermeria/pantalla-t1-b/components/ClientsSection/EnfermeriaClientsSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria/pantalla-t1-b/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria/pantalla-t1-b/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria/pantalla-t1-b/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria/pantalla-t1-b/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria': { 'pantalla-t1-b': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasPantallaT1B() {
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