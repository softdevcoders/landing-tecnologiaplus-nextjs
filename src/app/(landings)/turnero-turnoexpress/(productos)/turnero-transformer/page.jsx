import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/ProductGallery/ProductGallerySelected";
import ControlsOptions from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ControlsOptions/ControlsOptions";

export const metadata = {
  title: "Turnero Transformer: Personalización Total en la Gestión de Turnos",
  description:
    "Turnero adaptable a cada producto o servicio. Ideal para autoservicio y oficinas con múltiples filas. Mejora la atención sin alterar procesos. ¡Conócelos!",
  keywords: ["Turnero"],
  openGraph: {
    title: "Turnero Transformer: Personalización Total en la Gestión de Turnos",
    description:
      "Turnero adaptable a cada producto o servicio. Ideal para autoservicio y oficinas con múltiples filas. Mejora la atención sin alterar procesos. ¡Conócelos!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-transformer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnero Transformer: Personalización Total en la Gestión de Turnos",
    description:
      "Turnero adaptable a cada producto o servicio. Ideal para autoservicio y oficinas con múltiples filas. Mejora la atención sin alterar procesos. ¡Conócelos!",
  },
};

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