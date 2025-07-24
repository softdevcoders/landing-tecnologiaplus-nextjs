import getMetadata from "@/request/server/metadata/get-metadata";
import LlamadorMeserosBenefitsSection from "@/sections/llamadores-de-meseros/landing/components/BenefitsSection/LlamadorMeserosBenefitsSection"; 
import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosHeroSection from "@/sections/llamadores-de-meseros/landing/components/HeroSection/LlamadorMeserosHeroSection";
import LlamadorMeserosIndustriesSection from "@/sections/llamadores-de-meseros/landing/components/IndustriesSection/LlamadorMeserosIndustriesSection";
import LlamadorMeserosProductsSection from "@/sections/llamadores-de-meseros/landing/components/ProductsSection/LlamadorMeserosProductsSection";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LlamadorMeserosVideosSection from "@/sections/llamadores-de-meseros/landing/components/LlamadorMeserosVideosSection/LlamadorMeserosVideosSection";
import LlamadorMeserosVerMasSection from "@/sections/llamadores-de-meseros/landing/components/LlamadorMeserosVerMasSection/LlamadorMeserosVerMasSection";
import StepsSectionLlamadorMeseros from "@/sections/llamadores-de-meseros/landing/components/StepsSection/StepsSectionLlamadorMeseros";
import LandingPageSchema from "@/components/schema/LandingPageSchema";
import LlamadoresDeMeserosPreguntasFrecuentes from "@/sections/llamadores-de-meseros/landing/components/PreguntasFrecuentes";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function LlamadorMeserosLanding() {
  const { 'llamadores-de-meseros': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="llamadoresDeMeseros"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      />
      <LlamadorMeserosHeroSection />
      <LlamadorMeserosClientsSection />
      <LlamadorMeserosProductsSection />
      <LlamadorMeserosBenefitsSection />
      <StepsSectionLlamadorMeseros />
      <LlamadorMeserosVerMasSection />
      <LlamadorMeserosVideosSection />
      <LlamadorMeserosIndustriesSection />
      <LlamadorMeserosRelatedProducts />
      <LlamadoresDeMeserosPreguntasFrecuentes />
    </>
  );
}