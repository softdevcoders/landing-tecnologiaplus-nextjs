// Importing sections for the landing page
import getMetadata from "@/request/server/metadata/get-metadata";
import BenefitsSection from "@/sections/rollos-de-papel-termico/landing/components/BenefitsSection/BenefitsSection";
import ClientsSection from "@/sections/rollos-de-papel-termico/landing/components/ClientsSection/ClientsSection";
import HeroSection from "@/sections/rollos-de-papel-termico/landing/components/HeroSection/HeroSection";
import IndustriesSection from "@/sections/rollos-de-papel-termico/landing/components/IndustriesSection/IndustriesSection";
import ProductsSection from "@/sections/rollos-de-papel-termico/landing/components/ProductsSection/ProductsSection";
import RelatedProducts from "@/sections/rollos-de-papel-termico/landing/components/RelatedProducts/RelatedProducts";
import TechnicalDetails from "@/sections/rollos-de-papel-termico/landing/components/TechnicalDetails/TechnicalDetails";

export async function generateMetadata() {
  const { 'rollos-de-papel-termico': { root: metadata } } = getMetadata('landings');
  return metadata;
}


// Main landing page component
export default function RollosTermicosLanding() {
  return (
    <>
      {/* HeroSection: Expects no props, renders the hero/banner section */}
      <HeroSection />
      
      {/* ClientsSection: Expects no props, displays client logos or testimonials */}
      <ClientsSection />
      
      {/* ProductsSection: Expects no props, showcases the product catalog */}
      <ProductsSection />
      
      {/* BenefitsSection: Expects no props, highlights the benefits of the product */}
      <BenefitsSection />
      
      {/* TechnicalDetails: Expects no props, provides technical specifications */}
      <TechnicalDetails />
      
      {/* IndustriesSection: Expects no props, lists industries that use the product */}
      <IndustriesSection />
      
      {/* RelatedProducts: Expects no props, displays related products */}
      <RelatedProducts />
    </>
  );
}
