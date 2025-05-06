// Importing styles for the related products section
import style from "@/sections/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";

// Importing specific components for the "Hablador de Mesa" section
import TechnicalSheet from "@/sections/llamadores-de-meseros/control-numerico/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LogosSection from "@/sections/llamadores-de-meseros/components/ClientsSection/LlamadorMeserosClientsSection";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/control-numerico/components/ProductGallery/ProductGallerySelected";
import HowItWorks from "@/sections/llamadores-de-meseros/control-numerico/components/HowItWorks/HowItWorks";

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
      <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}