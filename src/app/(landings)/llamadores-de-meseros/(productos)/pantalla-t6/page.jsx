import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/pantalla-t6/components/ClientsSection/LlamadorMeserosClientsSection";
import TechnicalSheet from "@/sections/llamadores-de-meseros/pantalla-t6/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/pantalla-t6/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "@/sections/llamadores-de-meseros/pantalla-t6/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/pantalla-t6/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'pantalla-t6': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasMeserosPantalla6Llamados() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <LlamadorMeserosClientsSection />
      <LlamadorMeserosRelatedProducts />
    </>
  );
}