import getMetadata from "@/request/server/metadata/get-metadata";
import TurnoExpressBenefitsSection from "@/sections/turnero-turnoexpress/root/components/BenefitsSection/TurnoExpressBenefitsSection";
import TurnoExpressClientsSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TurnoExpressHeroSection from "@/sections/turnero-turnoexpress/root/components/HeroSection/TurnoExpressHeroSection";
import TurnoExpressIndustriesSection from "@/sections/turnero-turnoexpress/root/components/IndustriesSection/TurnoExpressIndustriesSection";
import TurnoExpressProductsSection from "@/sections/turnero-turnoexpress/root/components/ProductsSection/TurnoExpressProductsSection";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import SecondaryTurnoExpressProductsSection from "@/sections/turnero-turnoexpress/root/components/SecondaryProductsSection/SecondaryTurnoExpressProductsSection";
import LandingPageSchema from "@/components/schema/LandingPageSchema";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function TurnoExpressLanding() {
  const { 'turnero-turnoexpress': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="turneroTurnoexpress"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      />
      <TurnoExpressHeroSection />
      <TurnoExpressClientsSection />
      <TurnoExpressProductsSection />
      <TurnoExpressBenefitsSection />
      <SecondaryTurnoExpressProductsSection />
      <TurnoExpressIndustriesSection />
      <TurnoExpressRelatedProducts />
    </>
  );
}