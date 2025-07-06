import getMetadata from "@/request/server/metadata/get-metadata";
import LocalizadoresBenefitsSection from "@/sections/localizadores-para-restaurantes/landing/components/BenefitsSection/LocalizadoresBenefitsSection";
import LocalizadoresClientsSection from "@/sections/localizadores-para-restaurantes/landing/components/ClientsSection/LocalizadoresClientsSection";
import LocalizadoresHeroSection from "@/sections/localizadores-para-restaurantes/landing/components/HeroSection/LocalizadoresHeroSection";
import LocalizadoresIndustriesSection from "@/sections/localizadores-para-restaurantes/landing/components/IndustriesSection/LocalizadoresIndustriesSection";
import LocalizadoresProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/ProductsSection/LocalizadoresProductsSection";
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts";
import LocalizadoresSecondaryProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/SecondaryProductsSection/LocalizadoresSecondaryProductsSection";
// import LocalizadoresPreguntasFrecuentes from "@/sections/localizadores-para-restaurantes/landing/components/PreguntasFrecuentes";

export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function LocalizadoresLanding() {
  return (
    <>
      <LocalizadoresHeroSection />
      <LocalizadoresClientsSection />
      <LocalizadoresProductsSection />
      <LocalizadoresBenefitsSection />
      <LocalizadoresSecondaryProductsSection />
      <LocalizadoresIndustriesSection />
      <LocalizadoresRelatedProducts />
      <LocalizadoresPreguntasFrecuentes />
    </>
  );
}