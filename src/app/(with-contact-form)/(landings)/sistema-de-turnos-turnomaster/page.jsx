import getMetadata from "@/request/server/metadata/get-metadata";
import TurnoMasterBenefitsSection from "@/sections/sistema-de-turnos-turnomaster/components/BenefitsSection/TurnoMasterBenefitsSection";
import TurnoMasterClientsSection from "@/sections/sistema-de-turnos-turnomaster/components/ClientsSection/TurnoMasterClientsSection";
import TurnoMasterHeroSection from "@/sections/sistema-de-turnos-turnomaster/components/HeroSection/TurnoMasterHeroSection";
import TurnoMasterIndustriesSection from "@/sections/sistema-de-turnos-turnomaster/components/IndustriesSection/TurnoMasterIndustriesSection";
import TurnoMasterProductsSection from "@/sections/sistema-de-turnos-turnomaster/components/ProductsSection/TurnoMasterProductsSection";
import TurnoMasterRelatedProducts from "@/sections/sistema-de-turnos-turnomaster/components/RelatedProducts/TurnoMasterRelatedProducts";
import SecondaryTurnoMasterProductsSection from "@/sections/sistema-de-turnos-turnomaster/components/SecondaryProductsSection/SecondaryTurnoMasterProductsSection";

export async function generateMetadata() {
  const { 'sistema-de-turnos-turnomaster': { root: metadata } } = getMetadata('landings');
  return metadata;
}

// Componente principal de la página
export default function TurnoMasterLanding() {
  return (
    <>
      {/* Sección de héroe: espera parámetros como título, subtítulo e imagen */}
      <TurnoMasterHeroSection />

      {/* Sección de clientes: espera una lista de clientes o testimonios */}
      <TurnoMasterClientsSection />

      {/* Sección de productos principales: espera una lista de productos destacados */}
      <TurnoMasterProductsSection />

      {/* Sección de beneficios: espera una lista de beneficios o características */}
      <TurnoMasterBenefitsSection />

      {/* Sección de productos secundarios: espera una lista de productos adicionales */}
      <SecondaryTurnoMasterProductsSection />

      {/* Sección de industrias: espera una lista de industrias o sectores */}
      <TurnoMasterIndustriesSection />

      {/* Sección de productos relacionados: espera una lista de productos relacionados */}
      <TurnoMasterRelatedProducts />
    </>
  );
}