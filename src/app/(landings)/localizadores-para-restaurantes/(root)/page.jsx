import getMetadata from "@/request/server/metadata/get-metadata";
import LocalizadoresBenefitsSection from "@/sections/localizadores-para-restaurantes/landing/components/BenefitsSection/LocalizadoresBenefitsSection";
import LocalizadoresClientsSection from "@/sections/localizadores-para-restaurantes/landing/components/ClientsSection/LocalizadoresClientsSection";
import LocalizadoresHeroSection from "@/sections/localizadores-para-restaurantes/landing/components/HeroSection/LocalizadoresHeroSection";
import LocalizadoresIndustriesSection from "@/sections/localizadores-para-restaurantes/landing/components/IndustriesSection/LocalizadoresIndustriesSection";
import LocalizadoresProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/ProductsSection/LocalizadoresProductsSection";
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts";
import LocalizadoresSecondaryProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/SecondaryProductsSection/LocalizadoresSecondaryProductsSection";
import LocalizadoresFaqSection from "@/sections/localizadores-para-restaurantes/landing/components/FaqSection/LocalizadoresFaqSection";
import LocalizadoresImplementationSection from "@/sections/localizadores-para-restaurantes/landing/components/ImplementationSection/LocalizadoresImplementationSection";
import LocalizadoresCompetitiveSection from "@/sections/localizadores-para-restaurantes/landing/components/CompetitiveSection/LocalizadoresCompetitiveSection";
import LocalizadoresSuccessSection from "@/sections/localizadores-para-restaurantes/landing/components/SuccessSection/LocalizadoresSuccessSection";
import LocalizadoresTechnicalSection from "@/sections/localizadores-para-restaurantes/landing/components/TechnicalSection/LocalizadoresTechnicalSection";

export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function LocalizadoresLanding() {
  return (
    <>
      <LocalizadoresHeroSection />
      {/* <LocalizadoresClientsSection /> */}
      <LocalizadoresProductsSection />
      <LocalizadoresBenefitsSection />
      <LocalizadoresSecondaryProductsSection />
      <LocalizadoresIndustriesSection />
      {/* New sections */}
      <LocalizadoresFaqSection />
      <LocalizadoresImplementationSection />
      <LocalizadoresCompetitiveSection />
      <LocalizadoresSuccessSection />
      <LocalizadoresTechnicalSection />
      {/* End new sections */}
      <LocalizadoresRelatedProducts />
    </>
  );
}