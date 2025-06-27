import TechnicalSheet from "@/sections/llamadores-de-meseros/control-numerico/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/control-numerico/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/control-numerico/components/ClientsSection/LlamadorMeserosClientsSection";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/control-numerico/components/ProductGallery/ProductGallerySelected";
import HowItWorks from "@/sections/llamadores-de-meseros/control-numerico/components/HowItWorks/HowItWorks";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'control-numerico': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasMeserosControlNumerico() {
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