import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/ProductGallery/ProductGallerySelected";
import ControlsOptions from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ControlsOptions/ControlsOptions";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { 'turnero-t3-modulo-turno': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasPantallaT3() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <ControlsOptions options={[]} onOptionSelect={() => {}} />
      <HowItWorks steps={[]} />
      <LogosSection logos={[]} />
      <TurnoExpressRelatedProducts titleClassName={style.customTitle} products={[]} />
    </>
  );
}