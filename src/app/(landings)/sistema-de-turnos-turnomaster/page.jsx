import getMetadata from "@/request/server/metadata/get-metadata";
import TurnoMasterBenefitsSection from "@/sections/sistema-de-turnos-turnomaster/components/BenefitsSection/TurnoMasterBenefitsSection";
import TurnoMasterClientsSection from "@/sections/sistema-de-turnos-turnomaster/components/ClientsSection/TurnoMasterClientsSection";
import TurnoMasterHeroSection from "@/sections/sistema-de-turnos-turnomaster/components/HeroSection/TurnoMasterHeroSection";
import TurnoMasterIndustriesSection from "@/sections/sistema-de-turnos-turnomaster/components/IndustriesSection/TurnoMasterIndustriesSection";
import TurnoMasterProductsSection from "@/sections/sistema-de-turnos-turnomaster/components/ProductsSection/TurnoMasterProductsSection";
import TurnoMasterRelatedProducts from "@/sections/sistema-de-turnos-turnomaster/components/RelatedProducts/TurnoMasterRelatedProducts";
import SecondaryTurnoMasterProductsSection from "@/sections/sistema-de-turnos-turnomaster/components/SecondaryProductsSection/SecondaryTurnoMasterProductsSection";
import LandingPageSchema from "@/components/schema/LandingPageSchema";

export async function generateMetadata() {
  const { 'sistema-de-turnos-turnomaster': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function TurnoMasterLanding() {
  const { 'sistema-de-turnos-turnomaster': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="sistemasDeTurnosTurnomaster"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      />
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