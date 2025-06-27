import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/RelatedProducts/TurnoExpressRelatedProducts";
import TurnoExpressClientsSection from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/ClientsSection/TurnoExpressClientsSection";
import getMetadata from "@/request/server/metadata/get-metadata";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/ProductGallery/ProductGallerySelected";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { 'turnero-fila-unica-supermercados': metadata } } = getMetadata('landings');
  return metadata;
}

export default function VerMasTurnosFilaUnica() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <TurnoExpressClientsSection />
      <TurnoExpressRelatedProducts />
    </>
  );
}