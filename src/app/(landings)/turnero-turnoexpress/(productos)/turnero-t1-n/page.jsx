import TurnoExpressClientsSection from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t1-n/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t1-n/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/turnero-t1-n/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ProductGallery/ProductGallerySelected";
import ControlsOptions from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ControlsOptions/ControlsOptions";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { 'turnero-t1-n': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasPantallaT1N() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <ControlsOptions />
      <HowItWorks />
      <TurnoExpressClientsSection />
      <TurnoExpressRelatedProducts />
    </>
  );
}