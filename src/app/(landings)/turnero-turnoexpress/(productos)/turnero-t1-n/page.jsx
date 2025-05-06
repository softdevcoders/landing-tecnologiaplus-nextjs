import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t1-n/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t1-n/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ProductGallery/ProductGallerySelected";
import ControlsOptions from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ControlsOptions/ControlsOptions";

// Metadata for the page
export const metadata = {
  title: "Turnero T1-N: Organización y Marca en la Gestión de Turnos",
  description:
    "Pantalla personalizable que proyecta tu imagen mientras gestiona turnos. Uso frecuente en salud, gastronomía y oficinas. ¡Solicita asesoría personalizada!",
  keywords: ["Turnero digital"],
  openGraph: {
    title: "Turnero T1-N: Organización y Marca en la Gestión de Turnos",
    description:
      "Pantalla personalizable que proyecta tu imagen mientras gestiona turnos. Uso frecuente en salud, gastronomía y oficinas. ¡Solicita asesoría personalizada!",
    url: "https://landing-tecnologiaplus-nextjs.vercel.app/turnero-turnoexpress/turnero-t1-n",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnero T1-N: Organización y Marca en la Gestión de Turnos",
    description:
      "Pantalla personalizable que proyecta tu imagen mientras gestiona turnos. Uso frecuente en salud, gastronomía y oficinas. ¡Solicita asesoría personalizada!",
  },
};

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