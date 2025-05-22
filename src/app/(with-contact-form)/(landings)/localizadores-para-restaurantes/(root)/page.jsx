// Importing components for different sections of the landing page
import getMetadata from "@/request/server/metadata/get-metadata";
import LocalizadoresBenefitsSection from "@/sections/localizadores-para-restaurantes/landing/components/BenefitsSection/LocalizadoresBenefitsSection";
import LocalizadoresClientsSection from "@/sections/localizadores-para-restaurantes/landing/components/ClientsSection/LocalizadoresClientsSection";
import LocalizadoresHeroSection from "@/sections/localizadores-para-restaurantes/landing/components/HeroSection/LocalizadoresHeroSection";
import LocalizadoresIndustriesSection from "@/sections/localizadores-para-restaurantes/landing/components/IndustriesSection/LocalizadoresIndustriesSection";
import LocalizadoresProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/ProductsSection/LocalizadoresProductsSection";
import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts";
import LocalizadoresSecondaryProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/SecondaryProductsSection/LocalizadoresSecondaryProductsSection";

export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { root: metadata } } = getMetadata('landings');
  return metadata;
}

// Main landing page component
export default function LocalizadoresLanding() {
  return (
    <>
      {/* Hero Section: Expects no props, displays the main banner */}
      <LocalizadoresHeroSection />

      {/* Clients Section: Expects no props, showcases client testimonials or logos */}
      <LocalizadoresClientsSection />

      {/* Products Section: Expects no props, highlights the main products */}
      <LocalizadoresProductsSection />

      {/* Benefits Section: Expects no props, lists the benefits of the products */}
      <LocalizadoresBenefitsSection />

      {/* Secondary Products Section: Expects no props, displays additional products */}
      <LocalizadoresSecondaryProductsSection />

      {/* Industries Section: Expects no props, shows industries where the products are used */}
      <LocalizadoresIndustriesSection />

      {/* Related Products Section: Expects no props, suggests related products */}
      <LocalizadoresRelatedProducts />
    </>
  );
}