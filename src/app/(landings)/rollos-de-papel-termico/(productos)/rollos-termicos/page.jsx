import TechnicalSheet from "@/sections/rollos-de-papel-termico/rollos-termicos/components/TechnicalSheet/TechnicalSheet";
import LogosSection from "@/sections/rollos-de-papel-termico/rollos-termicos/components/LogosSection/LogosSection";
import RelatedProducts from "@/sections/rollos-de-papel-termico/landing/components/RelatedProducts/RelatedProducts";
import ProductGallerySelected from "@/sections/rollos-de-papel-termico/rollos-termicos/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'rollos-de-papel-termico': { 'rollos-termicos': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasTermicos() {
  return (
    <>
      {/* ProductGallerySelected: No recibe props, muestra una galería de productos seleccionados */}
      <ProductGallerySelected />

      {/* TechnicalSheet: No recibe props, muestra la ficha técnica del producto */}
      <TechnicalSheet />

      {/* LogosSection: No recibe props, muestra una sección con logos relacionados */}
      <LogosSection />

      {/* RelatedProducts: Recibe un prop `titleClassName` para personalizar el estilo del título */}
      <RelatedProducts />
    </>
  );
}