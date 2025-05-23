import TechnicalSheet from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/HowItWorks/HowItWorks";
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts"; // Componente para mostrar productos relacionados
import LogosSection from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/LogosSection/LogosSection"; // Sección de logos de marcas o clientes
import ProductGallerySelected from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { 'localizadores-rec-v3': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasLocalizadoresRecV3() {
  return (
    <>
      {/* ProductGallerySelected: Displays a gallery of selected products. No props required. */}
      <ProductGallerySelected />

      {/* TechnicalSheet: Displays the technical sheet of the product. No props required. */}
      <TechnicalSheet />

      {/* HowItWorks: Explains how the product works. No props required. */}
      <HowItWorks />

      {/* LogosSection: Displays a section with logos. No props required. */}
      <LogosSection />

      {/* LocalizadoresRelatedProducts: Displays related products. 
        Props:
        - titleClassName (string): Custom CSS class for the title. */}
      <LocalizadoresRelatedProducts />
    </>
  );
}