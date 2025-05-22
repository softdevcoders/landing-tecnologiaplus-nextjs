// Importación de las secciones del landing page
import getMetadata from "@/request/server/metadata/get-metadata";
import TurnoExpressBenefitsSection from "@/sections/turnero-turnoexpress/root/components/BenefitsSection/TurnoExpressBenefitsSection"; // Props: Ninguna
import TurnoExpressClientsSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection"; // Props: Ninguna
import TurnoExpressHeroSection from "@/sections/turnero-turnoexpress/root/components/HeroSection/TurnoExpressHeroSection"; // Props: Ninguna
import TurnoExpressIndustriesSection from "@/sections/turnero-turnoexpress/root/components/IndustriesSection/TurnoExpressIndustriesSection"; // Props: Ninguna
import TurnoExpressProductsSection from "@/sections/turnero-turnoexpress/root/components/ProductsSection/TurnoExpressProductsSection"; // Props: Ninguna
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts"; // Props: Ninguna
import SecondaryTurnoExpressProductsSection from "@/sections/turnero-turnoexpress/root/components/SecondaryProductsSection/SecondaryTurnoExpressProductsSection"; // Props: Ninguna

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { root: metadata } } = getMetadata('landings');
  return metadata;
}

// Componente principal del landing page
export default function TurnoExpressLanding() {
  return (
    <>
      {/* Sección del héroe principal */}
      <TurnoExpressHeroSection />
      
      {/* Sección de clientes destacados */}
      <TurnoExpressClientsSection />
      
      {/* Sección de productos principales */}
      <TurnoExpressProductsSection />
      
      {/* Sección de beneficios del producto */}
      <TurnoExpressBenefitsSection />
      
      {/* Sección de productos secundarios */}
      <SecondaryTurnoExpressProductsSection />
      
      {/* Sección de industrias relacionadas */}
      <TurnoExpressIndustriesSection />
      
      {/* Sección de productos relacionados */}
      <TurnoExpressRelatedProducts />
    </>
  );
}