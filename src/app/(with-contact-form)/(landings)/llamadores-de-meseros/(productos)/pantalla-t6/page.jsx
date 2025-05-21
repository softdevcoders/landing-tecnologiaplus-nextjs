// Importación de secciones y componentes necesarios
import LogosSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection";
import TechnicalSheet from "@/sections/llamadores-de-meseros/pantalla-t6/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "@/sections/llamadores-de-meseros/pantalla-t6/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/pantalla-t6/components/ProductGallery/ProductGallerySelected";

// Componente principal de la página
export default function VerMasMeserosPantalla6Llamados() {
  return (
    <>
      {/* Galería de productos seleccionados */}
      {/* Parámetros esperados: (si aplica, especificar props como imágenes, títulos, etc.) */}
      <ProductGallerySelected />

      {/* Ficha técnica del producto */}
      {/* Parámetros esperados: (si aplica, especificar props como especificaciones técnicas, detalles, etc.) */}
      <TechnicalSheet />

      {/* Sección de cómo funciona */}
      {/* Parámetros esperados: (si aplica, especificar props como pasos, imágenes, descripciones, etc.) */}
      <HowItWorks />

      {/* Sección de logos de clientes */}
      {/* Parámetros esperados: (si aplica, especificar props como lista de logos, enlaces, etc.) */}
      <LogosSection />

      {/* Productos relacionados */}
      {/* Parámetros esperados: (si aplica, especificar props como lista de productos, enlaces, etc.) */}
      <LlamadorMeserosRelatedProducts />
    </>
  );
}