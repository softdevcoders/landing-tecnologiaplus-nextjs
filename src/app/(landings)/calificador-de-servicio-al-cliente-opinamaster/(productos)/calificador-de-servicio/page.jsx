// Component imports from relative paths
import TechnicalSheet from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio/components/ProductGallery/ProductGallerySelected";

// Component imports using absolute paths
import CalificadorRelatedProducts from "@/app/calificador-de-servicio-al-cliente/opinamaster/components/RelatedProducts/CalificadorRelatedProducts";
import LogosSection from "@/app/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/LogosSection/LogosSection";

export const metadata = {
  title: "Calificador de Servicio al Cliente: Opinión en Tiempo Real",
  description:
    "Captura la percepción real de tus clientes en segundos. Recibe alertas de calificaciones negativas y mejora tu servicio. ¡Solicita asesoría personalizada!",
  keywords: ["Calificador de servicio"],
  openGraph: {
    title: "Calificador de Servicio al Cliente: Opinión en Tiempo Real",
    description:
      "Captura la percepción real de tus clientes en segundos. Recibe alertas de calificaciones negativas y mejora tu servicio. ¡Solicita asesoría personalizada!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calificador de Servicio al Cliente: Opinión en Tiempo Real",
    description:
      "Captura la percepción real de tus clientes en segundos. Recibe alertas de calificaciones negativas y mejora tu servicio. ¡Solicita asesoría personalizada!",
  },
};

export default function VerMasOpinaMaster() {
  return (
    <>
      {/* Product gallery section */}
      <ProductGallerySelected />
      
      {/* Technical sheet section */}
      <TechnicalSheet />
      
      {/* How it works section */}
      <HowItWorks />
      
      {/* Logos section */}
      <LogosSection />
      
      {/* Related products section */}
      <CalificadorRelatedProducts />
    </>
  );
}