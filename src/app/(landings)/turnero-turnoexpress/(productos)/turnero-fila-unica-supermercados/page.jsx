import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import getMetadata from "@/request/server/metadata/get-metadata";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/ProductGallery/ProductGallerySelected";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { 'turnero-fila-unica-supermercados': metadata } } = getMetadata('landings');
  return metadata;
}
// Main component for the page
export default function VerMasTurnosFilaUnica() {
  return (
    <>
      {/* ProductGallerySelected: Displays a gallery of selected products */}
      <ProductGallerySelected />

      {/* TechnicalSheet: Displays the technical specifications of the product */}
      <TechnicalSheet />

      {/* HowItWorks: Explains how the product works */}
      <HowItWorks />

      {/* LogosSection: Displays a section with partner or client logos */}
      <LogosSection />

      {/* TurnoExpressRelatedProducts: Displays related products */}
      {/* Expects a `titleClassName` prop for custom styling of the title */}
      <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}