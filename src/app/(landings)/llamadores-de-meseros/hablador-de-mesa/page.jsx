// Importing styles for the related products section
import style from "@/sections/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";

// Importing specific components for the "Hablador de Mesa" section
import TechnicalSheet from "@/sections/llamadores-de-meseros/hablador-de-mesa/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LogosSection from "@/sections/llamadores-de-meseros/components/ClientsSection/LlamadorMeserosClientsSection";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/hablador-de-mesa/components/ProductGallery/ProductGallerySelected";

// Main component for the "Hablador de Mesa" page
export default function VerMasMeserosHabladorParaMesa() {
  return (
    <>
      {/* ProductGallerySelected: Displays a gallery of selected products */}
      <ProductGallerySelected />

      {/* TechnicalSheet: Displays the technical specifications of the product */}
      <TechnicalSheet />

      {/* LogosSection: Displays a section with logos (e.g., partner or brand logos) */}
      <LogosSection />

      {/* LlamadorMeserosRelatedProducts: Displays related products */}
      {/* Props:
        - titleClassName: Custom CSS class for styling the title */}
      <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}