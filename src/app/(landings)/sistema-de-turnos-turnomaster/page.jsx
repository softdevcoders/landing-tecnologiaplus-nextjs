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

export default function TurnoMasterLanding() {
  return (
    <>
      <TurnoMasterHeroSection />
      <TurnoMasterClientsSection />
      <TurnoMasterProductsSection />
      <TurnoMasterBenefitsSection />
      <SecondaryTurnoMasterProductsSection />
      <TurnoMasterIndustriesSection />
      <TurnoMasterRelatedProducts />
    </>
  );
}