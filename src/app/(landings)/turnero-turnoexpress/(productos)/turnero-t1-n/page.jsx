import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t1-n/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t1-n/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
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
      {/* ProductGallerySelected: Displays the selected product gallery */}
      <ProductGallerySelected />

      {/* TechnicalSheet: Displays the technical specifications of the product */}
      <TechnicalSheet />

      {/* ControlsOptions: Displays control options for the product (parameters not specified) */}
      <ControlsOptions />

      {/* HowItWorks: Explains how the product works */}
      <HowItWorks />

      {/* LogosSection: Displays logos of clients or partners */}
      <LogosSection />

      {/* TurnoExpressRelatedProducts: Displays related products */}
      {/* Expects a `titleClassName` prop for custom styling */}
      <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}