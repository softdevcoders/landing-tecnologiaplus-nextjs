import style from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts.module.scss"; // Estilos específicos para productos relacionados
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts"; // Componente para mostrar productos relacionados
import LogosSection from "./components/LogosSection/LogosSection"; // Sección de logos de marcas o clientes
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
  title: "Localizadores para Restaurantes REC-V3: Experiencia Sin Espera",
  description:
    "Tus clientes esperan su pedido sin perder el turno. Avisador vibra y alumbra cuando el pedido está listo. Ideal para autoservicio y plazoletas de comida.",
  keywords: ["localizadores para restaurantes"],
  openGraph: {
    title: "Localizadores para Restaurantes REC-V3: Experiencia Sin Espera",
    description:
      "Tus clientes esperan su pedido sin perder el turno. Avisador vibra y alumbra cuando el pedido está listo. Ideal para autoservicio y plazoletas de comida.",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/localizadores-para-restaurantes/localizadores-rec-v3",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Localizadores para Restaurantes REC-V3: Experiencia Sin Espera",
    description:
      "Tus clientes esperan su pedido sin perder el turno. Avisador vibra y alumbra cuando el pedido está listo. Ideal para autoservicio y plazoletas de comida.",
  },
};

export default function VerMasLocalizadoresRecV3() {
  return (
    <>
      {/* ProductGallerySelected: Displays a gallery of selected products. No props required. */}
      <ProductGallerySelected />

      {/* TechnicalSheet: Displays the technical sheet of the product. No props required. */}
      <TechnicalSheet />

      {/* HowItWorks: Explains how the product works. No props required. */}
      <HowItWorks />

      {/* LogosSection: Displays a section with logos. No props required. */}
      <LogosSection />

      {/* LocalizadoresRelatedProducts: Displays related products. 
        Props:
        - titleClassName (string): Custom CSS class for the title. */}
      <LocalizadoresRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}