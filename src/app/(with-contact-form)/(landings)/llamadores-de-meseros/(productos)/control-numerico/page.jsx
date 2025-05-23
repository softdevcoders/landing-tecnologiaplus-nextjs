// Importing specific components for the "Hablador de Mesa" section
import TechnicalSheet from "@/sections/llamadores-de-meseros/control-numerico/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LogosSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection";
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
      {/* ProductGallerySelected: Displays a gallery of selected products */}
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