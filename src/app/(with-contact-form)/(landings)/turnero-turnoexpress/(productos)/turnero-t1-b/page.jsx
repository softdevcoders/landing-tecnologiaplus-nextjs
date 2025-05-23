// Importación de estilos y componentes necesarios
import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t1-b/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t1-b/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-t1-b/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { 'turnero-t1-b': metadata } } = getMetadata('landings');
  return metadata;
} 

// Componente principal de la página
export default function VerMasPantallaT1B() {
  return (
    <>
      {/* Galería de productos seleccionados */}
      {/* No recibe parámetros */}
      <ProductGallerySelected />

      {/* Ficha técnica del producto */}
      {/* No recibe parámetros */}
      <TechnicalSheet />

      {/* Sección de cómo funciona */}
      {/* No recibe parámetros */}
      <HowItWorks />

      {/* Sección de logos de clientes */}
      {/* No recibe parámetros */}
      <LogosSection />

      {/* Productos relacionados */}
      {/* Props:
        - titleClassName: Clase CSS personalizada para el título
      */}
      <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}