import getMetadata from "@/request/server/metadata/get-metadata";
import EnfermeriaBenefitsSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/BenefitsSection/EnfermeriaBenefitsSection";
import EnfermeriaClientsSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import EnfermeriaHeroSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/HeroSection/EnfermeriaHeroSection";
import EnfermeriaIndustriesSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/IndustriesSection/EnfermeriaIndustriesSection";
import EnfermeriaProductsSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ProductsSection/EnfermeriaProductsSection";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import EnfermeriaSecondaryProductsSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/SecondaryProductsSection/EnfermeriaSecondaryProductsSection";
import StepsSectionEnfermeria from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/StepsSection/StepsSectionEnfermeria";
import LandingPageSchema from "@/components/schema/LandingPageSchema";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria-cuidamaster': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function EnfermeriaLanding() {
  const { 'llamado-de-enfermeria-cuidamaster': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      {/* <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="llamadoDeEnfermeriaCuidamaster"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      /> */}
      <EnfermeriaHeroSection />
      <EnfermeriaClientsSection />
      <EnfermeriaProductsSection />
      <EnfermeriaBenefitsSection />
      <EnfermeriaSecondaryProductsSection />
      <StepsSectionEnfermeria />
      <EnfermeriaIndustriesSection />
      <EnfermeriaRelatedProducts />
    </>
  );
}