import style from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts.module.scss"; // Estilos específicos para productos relacionados
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet"; // Componente para mostrar la ficha técnica del producto
import HowItWorks from "./components/HowItWorks/HowItWorks"; // Componente que explica cómo funciona el producto
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts"; // Componente para mostrar productos relacionados
import LogosSection from "./components/LogosSection/LogosSection"; // Sección de logos de marcas o clientes
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected"; // Galería de imágenes del producto seleccionado

export const metadata = {
  title: "Localizadores CIR-C2: Solución para Autoservicio Eficiente",
  description:
    "Mantén el orden y mejora la entrega de pedidos con localizadores CIR-C2. Control separado y máxima eficiencia en restaurantes de autoservicio. ¡Solicita demo!",
  keywords: ["localizadores para restaurantes"],
  openGraph: {
    title: "Localizadores CIR-C2: Solución para Autoservicio Eficiente",
    description:
      "Mantén el orden y mejora la entrega de pedidos con localizadores CIR-C2. Control separado y máxima eficiencia en restaurantes de autoservicio. ¡Solicita demo!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/localizadores-para-restaurantes/localizadores-cir-c2",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Localizadores CIR-C2: Solución para Autoservicio Eficiente",
    description:
      "Mantén el orden y mejora la entrega de pedidos con localizadores CIR-C2. Control separado y máxima eficiencia en restaurantes de autoservicio. ¡Solicita demo!",
  },
};

export default function VerMasLocalizadoresCirC2() {
  return (
    <>
      {/* Galería de imágenes del producto seleccionado */}
      <ProductGallerySelected />

      {/* Ficha técnica del producto */}
      <TechnicalSheet />

      {/* Explicación de cómo funciona el producto */}
      <HowItWorks />

      {/* Sección de logos */}
      <LogosSection />

      {/* Productos relacionados con un título personalizado */}
      <LocalizadoresRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}