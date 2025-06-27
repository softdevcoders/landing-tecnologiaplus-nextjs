import TechnicalSheet from "@/sections/llamadores-de-meseros/hablador-de-mesa/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/hablador-de-mesa/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/hablador-de-mesa/components/ClientsSection/LlamadorMeserosClientsSection";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/hablador-de-mesa/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'hablador-de-mesa': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasMeserosHabladorParaMesa() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <LlamadorMeserosClientsSection />
      <LlamadorMeserosRelatedProducts />
    </>
  );
}