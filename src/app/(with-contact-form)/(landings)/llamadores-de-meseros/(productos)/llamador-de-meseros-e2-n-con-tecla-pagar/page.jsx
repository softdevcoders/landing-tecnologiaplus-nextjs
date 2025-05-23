import LogosSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection";
import TechnicalSheet from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-n-con-tecla-pagar': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasMeserosLlamadorV2n() {
  return (
    <>
      {/* ProductGallerySelected: Muestra una galería de productos seleccionados. No recibe props. */}
      <ProductGallerySelected />

      {/* TechnicalSheet: Renderiza la ficha técnica del producto. No recibe props. */}
      <TechnicalSheet />

      {/* HowItWorks: Explica cómo funciona el producto. No recibe props. */}
      <HowItWorks />

      {/* LogosSection: Muestra una sección con logotipos. No recibe props. */}
      <LogosSection />

      {/* LlamadorMeserosRelatedProducts: Muestra productos relacionados. 
        Props:
        - titleClassName (string): Clase CSS personalizada para el título. */}
      <LlamadorMeserosRelatedProducts />
    </>
  );
}