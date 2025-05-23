import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/ProductGallery/ProductGallerySelected";
import ControlsOptions from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ControlsOptions/ControlsOptions";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { 'turnero-transformer': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasPantallaSegunProducto() {
  return (
    <>
      {/* ProductGallerySelected: Displays a gallery of selected products. No props required. */}
      <ProductGallerySelected />

      {/* ControlsOptions: Displays control options for the product. No props required. */}
      <ControlsOptions />

      {/* TechnicalSheet: Displays the technical sheet of the product. No props required. */}
      <TechnicalSheet />

      {/* HowItWorks: Explains how the product works. No props required. */}
      <HowItWorks />

      {/* LogosSection: Displays a section with client logos. No props required. */}
      <LogosSection />

      {/* TurnoExpressRelatedProducts: Displays related products. 
        Props:
        - titleClassName (string): Custom CSS class for the title. */}
      <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}