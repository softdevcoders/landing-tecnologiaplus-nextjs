import getMetadata from "@/request/server/metadata/get-metadata";
import TurnoMasterBenefitsSection from "@/sections/sistema-de-turnos-turnomaster/benefits";
import TurnoMasterClientsSection from "@/sections/sistema-de-turnos-turnomaster/clients";
import TurnoMasterHeroSection from "@/sections/sistema-de-turnos-turnomaster/hero";
import TurnoMasterIndustriesSection from "@/sections/sistema-de-turnos-turnomaster/industries";
import TurnoMasterProductsSection from "@/sections/sistema-de-turnos-turnomaster/products";
import TurnoMasterRelatedProducts from "@/sections/sistema-de-turnos-turnomaster/related-products";
import SecondaryTurnoMasterProductsSection from "@/sections/sistema-de-turnos-turnomaster/secondary-products";
import TurnoMasterPreguntasFrecuentes from "@/sections/sistema-de-turnos-turnomaster/fqa";

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
      <TurnoMasterPreguntasFrecuentes />
    </>
  );
}