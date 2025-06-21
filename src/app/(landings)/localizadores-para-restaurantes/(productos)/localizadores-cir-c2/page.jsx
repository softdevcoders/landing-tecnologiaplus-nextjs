import TechnicalSheet from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/HowItWorks/HowItWorks";
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts";
import LogosSection from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/LogosSection/LogosSection";
import ProductGallerySelected from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";
  
export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { 'localizadores-cir-c2': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasLocalizadoresCirC2() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <LogosSection />
      <LocalizadoresRelatedProducts />
    </>
  );
}