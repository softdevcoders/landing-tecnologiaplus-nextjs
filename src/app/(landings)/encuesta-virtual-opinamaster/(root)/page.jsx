import getMetadata from "@/request/server/metadata/get-metadata";
import EncuestaVirtualBenefitsSection from "@/sections/encuesta-virtual-opinamaster/landing/components/BenefitsSection/EncuestaVirtualBenefitsSection";
import EncuestaVirtualClientsSection from "@/sections/encuesta-virtual-opinamaster/landing/components/ClientsSection/EncuestaVirtualClientsSection";
import EncuestaVirtualHeroSection from "@/sections/encuesta-virtual-opinamaster/landing/components/HeroSection/EncuestaVirtualHeroSection";
import EncuestaVirtualIndustriesSection from "@/sections/encuesta-virtual-opinamaster/landing/components/IndustriesSection/EncuestaVirtualIndustriesSection";
import EncuestaVirtualProductsSection from "@/sections/encuesta-virtual-opinamaster/landing/components/ProductsSection/EncuestaVirtualProductsSection";
import EncuestaVirtualRelatedProducts from "@/sections/encuesta-virtual-opinamaster/landing/components/RelatedProducts/EncuestaVirtualRelatedProducts";
import SecondaryEncuestaVirtualProductsSection from "@/sections/encuesta-virtual-opinamaster/landing/components/SecondaryProductsSection/SecondaryEncuestaVirtualProductsSection";
import LandingPageSchema from "@/components/schema/LandingPageSchema";

export async function generateMetadata() {
  const { 'encuesta-virtual-opinamaster': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function EncuestaVirtualLanding() {
  const { 'encuesta-virtual-opinamaster': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      {/* <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="encuestaVirtualOpinamaster"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      /> */}
      <EncuestaVirtualHeroSection />
      <EncuestaVirtualClientsSection />
      <EncuestaVirtualProductsSection />
      <EncuestaVirtualBenefitsSection />
      <SecondaryEncuestaVirtualProductsSection />
      <EncuestaVirtualIndustriesSection />
      <EncuestaVirtualRelatedProducts />
    </>
  );
}