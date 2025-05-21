// Importación de estilos y componentes necesarios
import style from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TechnicalSheet from "@/sections/turnero-turnoexpress/turnero-t1-b/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/turnero-turnoexpress/turnero-t1-b/components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "@/sections/turnero-turnoexpress/turnero-t1-b/components/ProductGallery/ProductGallerySelected";

// Metadatos para SEO y redes sociales
export const metadata = {
  title: "Turnero T1-B: Solución Compacta en Salas de Espera",
  description:
    "Turnero inalámbrico de bajo costo, ideal para zonas de espera pequeñas. Llama turnos en orden y aleatorios. Fácil instalación y uso. ¡Cotiza ahora!",
  keywords: ["Turnero"],
  openGraph: {
    title: "Turnero T1-B: Solución Compacta en Salas de Espera",
    description:
      "Turnero inalámbrico de bajo costo, ideal para zonas de espera pequeñas. Llama turnos en orden y aleatorios. Fácil instalación y uso. ¡Cotiza ahora!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-t1-b",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnero T1-B: Solución Compacta en Salas de Espera",
    description:
      "Turnero inalámbrico de bajo costo, ideal para zonas de espera pequeñas. Llama turnos en orden y aleatorios. Fácil instalación y uso. ¡Cotiza ahora!",
  },
};

// Componente principal de la página
export default function VerMasPantallaT1B() {
  return (
    <>
      {/* Galería de productos seleccionados */}
      {/* No recibe parámetros */}
      <ProductGallerySelected />

      {/* Ficha técnica del producto */}
      {/* No recibe parámetros */}
      <TechnicalSheet />

      {/* Sección de cómo funciona */}
      {/* No recibe parámetros */}
      <HowItWorks />

      {/* Sección de logos de clientes */}
      {/* No recibe parámetros */}
      <LogosSection />

      {/* Productos relacionados */}
      {/* Props:
        - titleClassName: Clase CSS personalizada para el título
      */}
      <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
    </>
  );
}