import LogosSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection";
import TechnicalSheet from "@/sections/llamadores-de-meseros/pantalla-t1-b/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamadores-de-meseros/pantalla-t1-b/components/HowItWorks/HowItWorks";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/pantalla-t1-b/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'pantalla-t1-b': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasPantallaT1B() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <LogosSection />
      <LlamadorMeserosRelatedProducts />
    </>
  )
}