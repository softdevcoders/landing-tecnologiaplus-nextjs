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

export default function RollosTermicosLanding() {
  return (
    <>
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
