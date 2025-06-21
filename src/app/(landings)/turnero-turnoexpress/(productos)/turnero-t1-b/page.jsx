
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

export default function VerMasPantallaT1B() {
  return (
    <>
      <ProductGallerySelected />

      <TechnicalSheet />

      <HowItWorks />

      <LogosSection />

      <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}