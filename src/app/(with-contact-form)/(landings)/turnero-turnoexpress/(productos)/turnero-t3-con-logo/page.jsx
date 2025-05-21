import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-t3-modulo-turno/components/ProductGallery/ProductGallerySelected";
import ControlsOptions from "@/sections/turnero-turnoexpress/turnero-t1-n/components/ControlsOptions/ControlsOptions";

export const metadata = {
  title: "Turnero T3: Llama Turnos y Resalta tu Marca Profesionalmente",
  description:
    "Turnero digital con espacio para logo. Llama turnos en orden y muestra ventanillas libres. Eleva la imagen y eficiencia de tu empresa. ¡Solicita demo!",
  keywords: ["Turnero digital"],
  openGraph: {
    title: "Turnero T3: Llama Turnos y Resalta tu Marca Profesionalmente",
    description:
      "Turnero digital con espacio para logo. Llama turnos en orden y muestra ventanillas libres. Eleva la imagen y eficiencia de tu empresa. ¡Solicita demo!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-t3-modulo-turno",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnero T3: Llama Turnos y Resalta tu Marca Profesionalmente",
    description:
      "Turnero digital con espacio para logo. Llama turnos en orden y muestra ventanillas libres. Eleva la imagen y eficiencia de tu empresa. ¡Solicita demo!",
  },
};

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