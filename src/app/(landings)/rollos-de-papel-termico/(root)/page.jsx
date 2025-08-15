import getMetadata from "@/request/server/metadata/get-metadata";
import BenefitsSection from "@/sections/rollos-de-papel-termico/landing/components/BenefitsSection/BenefitsSection";
import ClientsSection from "@/sections/rollos-de-papel-termico/landing/components/ClientsSection/ClientsSection";
import HeroSection from "@/sections/rollos-de-papel-termico/landing/components/HeroSection/HeroSection";
import IndustriesSection from "@/sections/rollos-de-papel-termico/landing/components/IndustriesSection/IndustriesSection";
import ProductsSection from "@/sections/rollos-de-papel-termico/landing/components/ProductsSection/ProductsSection";
import RelatedProducts from "@/sections/rollos-de-papel-termico/landing/components/RelatedProducts/RelatedProducts";
import TechnicalDetails from "@/sections/rollos-de-papel-termico/landing/components/TechnicalDetails/TechnicalDetails";
import LandingPageSchema from "@/components/schema/LandingPageSchema";

export async function generateMetadata() {
  const { 'rollos-de-papel-termico': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function RollosTermicosLanding() {
  const { 'rollos-de-papel-termico': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      {/* <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="rollosDePapelTermico"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      /> */}
      <HeroSection />
      <ClientsSection />
      <ProductsSection />
      <BenefitsSection />
      <TechnicalDetails />
      <IndustriesSection />
      <RelatedProducts />
    </>
  );
}
