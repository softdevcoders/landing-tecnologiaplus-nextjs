import TechnicalSheet from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/HowItWorks/HowItWorks";
import LogosSection from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/LogosSection/LogosSection";
import ProductGallerySelected from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";
import DispensadorTiquetesRelatedProducts from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/RelatedProducts/DispensadorTiquetesRelatedProducts";

export async function generateMetadata() {
  const { 'dispensador-de-tickets': { 'dispensador-de-tickets-caracol': metadata } } = getMetadata('landings');
  return metadata;
}
export default function DispensadorDeTiquetesPage() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <LogosSection />
      <DispensadorTiquetesRelatedProducts />
    </>
  );
}