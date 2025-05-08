// Importing page-specific components
import TechnicalSheet from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/HowItWorks/HowItWorks";
import LogosSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/ClientsSection/CalificadorClientsSection";
import ProductGallerySelected from "@/sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/ProductGallery/ProductGallerySelected";

// Importing related products component
import CalificadorRelatedProducts from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/RelatedProducts/CalificadorRelatedProducts";

export const metadata = {
  title: "Aviso de Pared para Calificar Servicio: Opiniones Sin Contacto",
  description:
    "Recoge opiniones fácilmente en baños, áreas comunes y coworking. Calificador práctico y discreto para espacios sin contacto humano. ¡Mejora tu servicio!",
  keywords: ["AVISO DE PARED"],
  openGraph: {
    title: "Aviso de Pared para Calificar Servicio: Opiniones Sin Contacto",
    description:
      "Recoge opiniones fácilmente en baños, áreas comunes y coworking. Calificador práctico y discreto para espacios sin contacto humano. ¡Mejora tu servicio!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviso de Pared para Calificar Servicio: Opiniones Sin Contacto",
    description:
      "Recoge opiniones fácilmente en baños, áreas comunes y coworking. Calificador práctico y discreto para espacios sin contacto humano. ¡Mejora tu servicio!",
  },
};

export default function VerMasAvisoDePared() {
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