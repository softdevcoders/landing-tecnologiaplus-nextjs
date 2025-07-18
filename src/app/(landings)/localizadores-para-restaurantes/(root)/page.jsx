import getMetadata from "@/request/server/metadata/get-metadata";
import LandingPageSchema from "@/components/schema/LandingPageSchema";
import LocalizadoresBenefitsSection from "@/sections/localizadores-para-restaurantes/landing/components/BenefitsSection/LocalizadoresBenefitsSection";
import LocalizadoresClientsSection from "@/sections/localizadores-para-restaurantes/landing/components/ClientsSection/LocalizadoresClientsSection";
import LocalizadoresHeroSection from "@/sections/localizadores-para-restaurantes/landing/components/HeroSection/LocalizadoresHeroSection";
import LocalizadoresIndustriesSection from "@/sections/localizadores-para-restaurantes/landing/components/IndustriesSection/LocalizadoresIndustriesSection";
import LocalizadoresProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/ProductsSection/LocalizadoresProductsSection";
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts";
import LocalizadoresSecondaryProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/SecondaryProductsSection/LocalizadoresSecondaryProductsSection";
import LocalizadoresPreguntasFrecuentes from "@/sections/localizadores-para-restaurantes/landing/components/PreguntasFrecuentes";
import HiddenImage from "@/components/hidden-image";

// Los metadatos ya están optimizados en el archivo de metadata centralizado
export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function LocalizadoresLanding() {
  // Obtener metadatos que ya incluyen datos optimizados
  const { 'localizadores-para-restaurantes': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="localizadoresParaRestaurantes"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      />
      
      <LocalizadoresHeroSection />
      <LocalizadoresClientsSection />
      <LocalizadoresProductsSection />
      <LocalizadoresBenefitsSection />
      <LocalizadoresSecondaryProductsSection />
      <LocalizadoresIndustriesSection />
      <LocalizadoresRelatedProducts />
      <LocalizadoresPreguntasFrecuentes />
      <HiddenImage 
        {...metadata.openGraph.images[0]}
      />
    </>
  );
}