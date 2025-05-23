// Component imports from the same section
import TechnicalSheet from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/HowItWorks/HowItWorks";
import LogosSection from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/LogosSection/LogosSection";
import ProductGallerySelected from "@/sections/dispensador-de-tickets/dispensador-de-tickets-caracol/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";
// Component import from a different section
import LlamadorMeserosRelatedProducts from "@/sections/dispensador-de-tickets/landing/components/RelatedProducts/DispensadorTiquetesRelatedProducts";

export async function generateMetadata() {
  const { 'dispensador-de-tickets': { 'dispensador-de-tickets-caracol': metadata } } = getMetadata('landings');
  return metadata;
}
export default function DispensadorDeTiquetesPage() {
  return (
    <>
      {/* Product gallery section */}
      <ProductGallerySelected />
      {/* Technical sheet section */}
      <TechnicalSheet />
      {/* How it works section */}
      <HowItWorks />
      {/* Logos section */}
      <LogosSection />
      {/* Related products section */}
      <LlamadorMeserosRelatedProducts />
    </>
  );
}