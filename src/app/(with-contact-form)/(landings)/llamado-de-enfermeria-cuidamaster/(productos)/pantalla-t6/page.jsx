// Importación de componentes específicos para la página
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t6/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t6/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t6/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria-cuidamaster': { 'pantalla-t6': metadata } } = getMetadata('landings');
  return metadata;
}


// Componente principal de la página
export default function VerMasMeserosPantalla6Llamados() {
  return (
    <>
      {/* Galería de productos seleccionados */}
      <ProductGallerySelected />
      
      {/* Ficha técnica del producto */}
      <TechnicalSheet />
      
      {/* Sección de cómo funciona */}
      <HowItWorks />
      
      {/* Sección de logos */}
      <LogosSection />
      
      {/* Productos relacionados */}
      <EnfermeriaRelatedProducts />
    </>
  );
}