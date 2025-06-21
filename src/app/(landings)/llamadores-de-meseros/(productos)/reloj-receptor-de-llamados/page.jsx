// Importación de componentes
import LogosSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection"; // Componente para mostrar logos de marcas o empresas
import TechnicalSheet from "@/sections/llamadores-de-meseros/reloj-receptor-de-llamados/components/TechnicalSheet/TechnicalSheet"; // Componente para mostrar la ficha técnica del producto
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts"; // Componente para mostrar productos relacionados
import HowItWorks from "@/sections/llamadores-de-meseros/reloj-receptor-de-llamados/components/HowItWorks/HowItWorks"; // Componente para explicar cómo funciona el producto
import ProductGallerySelected from "@/sections/llamadores-de-meseros/reloj-receptor-de-llamados/components/ProductGallery/ProductGallerySelected"; // Componente para mostrar la galería de imágenes del producto
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'reloj-receptor-de-llamados': metadata } } = getMetadata('landings');
  return metadata;
} 

// Componente principal de la página
export default function VerMasMeserosRelojReceptor() {
  return (
    <>
      {/* Galería de imágenes del producto seleccionado */}
      <ProductGallerySelected 
          // Props esperados: (Ejemplo: images: array de URLs de imágenes)
      />

      {/* Ficha técnica del producto */}
      <TechnicalSheet 
          // Props esperados: (Ejemplo: specs: objeto con especificaciones técnicas)
      />

      {/* Sección de cómo funciona el producto */}
      <HowItWorks 
          // Props esperados: (Ejemplo: steps: array de pasos para usar el producto)
      />

      {/* Sección de logos */}
      <LogosSection 
          // Props esperados: (Ejemplo: logos: array de URLs de logos)
      />

      {/* Productos relacionados */}
      <LlamadorMeserosRelatedProducts 
          // Props esperados: (Ejemplo: relatedProducts: array de productos relacionados)
      />
    </>
  );
}