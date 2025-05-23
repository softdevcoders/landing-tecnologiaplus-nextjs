import TechnicalSheet from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/TechnicalSheet/TechnicalSheet"; // Componente para mostrar la ficha técnica del producto
import HowItWorks from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/HowItWorks/HowItWorks"; // Componente que explica cómo funciona el producto
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts"; // Componente para mostrar productos relacionados
import LogosSection from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/LogosSection/LogosSection"; // Sección de logos de marcas o clientes
import ProductGallerySelected from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/ProductGallery/ProductGallerySelected"; // Galería de imágenes del producto seleccionado
import getMetadata from "@/request/server/metadata/get-metadata";
  
export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { 'localizadores-cir-c2': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasLocalizadoresCirC2() {
  return (
    <>
      {/* Galería de imágenes del producto seleccionado */}
      <ProductGallerySelected />

      {/* Ficha técnica del producto */}
      <TechnicalSheet />

      {/* Explicación de cómo funciona el producto */}
      <HowItWorks />

      {/* Sección de logos */}
      <LogosSection />

      {/* Productos relacionados con un título personalizado */}
      <LocalizadoresRelatedProducts />
    </>
  );
}