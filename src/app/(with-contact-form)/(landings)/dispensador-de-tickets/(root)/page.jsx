import getMetadata from "@/request/server/metadata/get-metadata";
import DispensadorTiquetesBenefitsSection from "@/sections/dispensador-de-tickets/landing/components/BenefitsSection/DispensadorTiquetesBenefitsSection";
import DispensadorTiquetesClientsSection from "@/sections/dispensador-de-tickets/landing/components/ClientsSection/DispensadorTiquetesClientsSection";
import DispensadorTiquetesHeroSection from "@/sections/dispensador-de-tickets/landing/components/HeroSection/DispensadorTiquetesHeroSection";
import DispensadorTiquetesIndustriesSection from "@/sections/dispensador-de-tickets/landing/components/IndustriesSection/DispensadorTiquetesIndustriesSection";
import DispensadorTiquetesProductsSection from "@/sections/dispensador-de-tickets/landing/components/ProductsSection/DispensadorTiquetesProductsSection";
import DispensadorTiquetesRelatedProducts from "@/sections/dispensador-de-tickets/landing/components/RelatedProducts/DispensadorTiquetesRelatedProducts";

export async function generateMetadata() {
  const { 'dispensador-de-tickets': { root: metadata } } = getMetadata('landings');
  return metadata;
}

// Main landing page component
export default function DispensadorTiquetesLanding() {
  return (
    <>
      {/* Hero Section: Displays the main banner or introduction */}
      <DispensadorTiquetesHeroSection />

      {/* Clients Section: Highlights client testimonials or logos */}
      <DispensadorTiquetesClientsSection />

      {/* Products Section: Showcases the products related to ticket dispensers */}
      <DispensadorTiquetesProductsSection />

      {/* Benefits Section: Lists the benefits of using the product */}
      <DispensadorTiquetesBenefitsSection />

      {/* Industries Section: Displays industries where the product can be used */}
      <DispensadorTiquetesIndustriesSection />

      {/* Related Products Section: Suggests related products */}
      <DispensadorTiquetesRelatedProducts />
    </>
  );
}