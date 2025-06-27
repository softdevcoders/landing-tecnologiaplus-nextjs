import TechnicalSheet from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/HowItWorks/HowItWorks";
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/RelatedProducts/LocalizadoresRelatedProducts"; 
import LogosSection from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/LogosSection/LogosSection";
import ProductGallerySelected from "@/sections/localizadores-para-restaurantes/localizadores-rec-v3/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { 'localizadores-rec-v3': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasLocalizadoresRecV3() {
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