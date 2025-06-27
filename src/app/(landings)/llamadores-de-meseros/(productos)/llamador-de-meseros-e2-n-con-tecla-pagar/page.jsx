import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/ClientsSection/LlamadorMeserosClientsSection";
import TechnicalSheet from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-n-con-tecla-pagar': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasMeserosLlamadorV2n() {
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