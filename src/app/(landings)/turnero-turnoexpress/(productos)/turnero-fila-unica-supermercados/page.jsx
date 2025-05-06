import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";

import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-fila-unica-supermercados/components/ProductGallery/ProductGallerySelected";

// Metadata for the page
export const metadata = {
  title: "Turnero Fila Única: Agiliza la Atención en Supermercados",
  description:
    "Organiza a todos en una sola fila y muestra la caja libre. Reduce confusión y mejora el servicio en supermercados y lugares concurridos. ¡Solicita demo!",
  keywords: ["TURNERO FILA ÚNICA"],
  openGraph: {
    title: "Turnero Fila Única: Agiliza la Atención en Supermercados",
    description:
      "Organiza a todos en una sola fila y muestra la caja libre. Reduce confusión y mejora el servicio en supermercados y lugares concurridos. ¡Solicita demo!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-fila-unica-supermercados",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnero Fila Única: Agiliza la Atención en Supermercados",
    description:
      "Organiza a todos en una sola fila y muestra la caja libre. Reduce confusión y mejora el servicio en supermercados y lugares concurridos. ¡Solicita demo!",
  },
};

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