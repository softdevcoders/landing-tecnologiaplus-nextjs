// Importación de componentes específicos para la página
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t6/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t6/components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/pantalla-t6/components/ProductGallery/ProductGallerySelected";

// Metadatos de la página para SEO y redes sociales
export const metadata = {
  title: "Pantalla T6 para Enfermería: Monitorea 6 Llamados Simultáneos",
  description:
    "Visualiza fácilmente los llamados de habitaciones o áreas. Pantalla alfanumérica compatible con sistemas de timbre para enfermería. ¡Optimiza tu servicio!",
  keywords: ["Pantalla alfanumérica"],
  openGraph: {
    title: "Pantalla T6 para Enfermería: Monitorea 6 Llamados Simultáneos",
    description:
      "Visualiza fácilmente los llamados de habitaciones o áreas. Pantalla alfanumérica compatible con sistemas de timbre para enfermería. ¡Optimiza tu servicio!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/pantalla-t6",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantalla T6 para Enfermería: Monitorea 6 Llamados Simultáneos",
    description:
      "Visualiza fácilmente los llamados de habitaciones o áreas. Pantalla alfanumérica compatible con sistemas de timbre para enfermería. ¡Optimiza tu servicio!",
  },
};

// Componente principal de la página
export default function VerMasMeserosPantalla6Llamados() {
  return (
    <>
      {/* Galería de productos seleccionados */}
      <ProductGallerySelected />
      
      {/* Ficha técnica del producto */}
      <TechnicalSheet />
      
      {/* Sección de cómo funciona */}
      <HowItWorks />
      
      {/* Sección de logos */}
      <LogosSection />
      
      {/* Productos relacionados */}
      <EnfermeriaRelatedProducts />
    </>
  );
}