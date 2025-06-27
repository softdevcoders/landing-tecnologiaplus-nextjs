import TechnicalSheet from "@/sections/rollos-de-papel-termico/rollos-termicos/components/TechnicalSheet/TechnicalSheet";
import ClientsSection from "@/sections/rollos-de-papel-termico/rollos-termicos/components/ClientsSection/ClientsSection";
import RelatedProducts from "@/sections/rollos-de-papel-termico/rollos-termicos/components/RelatedProducts/RelatedProducts";
import ProductGallerySelected from "@/sections/rollos-de-papel-termico/rollos-termicos/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'rollos-de-papel-termico': { 'rollos-termicos': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasTermicos() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <ClientsSection />
      <RelatedProducts />
    </>
  );
}