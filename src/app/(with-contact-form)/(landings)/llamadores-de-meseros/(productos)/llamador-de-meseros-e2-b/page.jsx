import LogosSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts";
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
      {/* ProductGallerySelected: Displays a gallery of selected product images */}
      <ProductGallerySelected />

      {/* TechnicalSheet: Displays the technical specifications of the product */}
      <TechnicalSheet />

      {/* HowItWorks: Explains how the product works */}
      <HowItWorks />

      {/* LogosSection: Displays a section with partner or brand logos */}
      <LogosSection />

      {/* LlamadorMeserosRelatedProducts: Displays related products */}
      {/* Props:
        - titleClassName (string): Custom CSS class for the title styling
      */}
      <LlamadorMeserosRelatedProducts />
    </>
  );
}