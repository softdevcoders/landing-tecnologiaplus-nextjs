import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheetTurneroTransformer from "@/sections/turnero-turnoexpress/turnero-transformer/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-transformer/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-transformer/components/ProductGallery/ProductGallerySelected";
import ControlsOptions from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ControlsOptions/ControlsOptions";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { 'turnero-transformer': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function TurneroTransformerPage() {
  return (
    <>
      <ProductGallerySelected />
      <ControlsOptions />
      <TechnicalSheetTurneroTransformer  />
      <HowItWorks />
      <LogosSection />
      <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}