import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/HowItWorks/HowItWorks";
import TechnicalSheet from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/TechnicalSheet/TechnicalSheet";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-b': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasMeserosLlamadorV2b() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <LlamadorMeserosClientsSection />
      <LlamadorMeserosRelatedProducts />
    </>
  );
}