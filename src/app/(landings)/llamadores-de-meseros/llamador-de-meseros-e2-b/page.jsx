import style from "@/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";
import LogosSection from "../control-numerico/components/LogosSection/LogosSection";
import LlamadorMeserosRelatedProducts from "@/app/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

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
      <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}