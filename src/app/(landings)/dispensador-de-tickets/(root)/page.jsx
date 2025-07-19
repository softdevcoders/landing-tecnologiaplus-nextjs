import getMetadata from "@/request/server/metadata/get-metadata";
import DispensadorTiquetesBenefitsSection from "@/sections/dispensador-de-tickets/landing/components/BenefitsSection/DispensadorTiquetesBenefitsSection";
import DispensadorTiquetesClientsSection from "@/sections/dispensador-de-tickets/landing/components/ClientsSection/DispensadorTiquetesClientsSection";
import DispensadorTiquetesHeroSection from "@/sections/dispensador-de-tickets/landing/components/HeroSection/DispensadorTiquetesHeroSection";
import DispensadorTiquetesIndustriesSection from "@/sections/dispensador-de-tickets/landing/components/IndustriesSection/DispensadorTiquetesIndustriesSection";
import DispensadorTiquetesProductsSection from "@/sections/dispensador-de-tickets/landing/components/ProductsSection/DispensadorTiquetesProductsSection";
import DispensadorTiquetesRelatedProducts from "@/sections/dispensador-de-tickets/landing/components/RelatedProducts/DispensadorTiquetesRelatedProducts";
import LandingPageSchema from "@/components/schema/LandingPageSchema";

export async function generateMetadata() {
  const { 'dispensador-de-tickets': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function DispensadorTiquetesLanding() {
  const { 'dispensador-de-tickets': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="dispensadorDeTickets"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      />
      <DispensadorTiquetesHeroSection />
      <DispensadorTiquetesClientsSection />
      <DispensadorTiquetesProductsSection />
      <DispensadorTiquetesBenefitsSection />
      <DispensadorTiquetesIndustriesSection />
      <DispensadorTiquetesRelatedProducts />
    </>
  );
}