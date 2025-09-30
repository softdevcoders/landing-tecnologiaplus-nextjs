import getMetadata from "@/request/server/metadata/get-metadata";
import DispensadorTiquetesBenefitsSection from "@/sections/dispensador-de-tickets/landing/benefits";
import DispensadorTiquetesClientsSection from "@/sections/dispensador-de-tickets/landing/clients";
import DispensadorTiquetesHeroSection from "@/sections/dispensador-de-tickets/landing/hero";
import DispensadorTiquetesIndustriesSection from "@/sections/dispensador-de-tickets/landing/industries";
import DispensadorTiquetesProductsSection from "@/sections/dispensador-de-tickets/landing/products";
import DispensadorTiquetesRelatedProducts from "@/sections/dispensador-de-tickets/landing/related-products";
import DispensadorTiquetesHowItWorksSection from "@/sections/dispensador-de-tickets/landing/how-it-works";
import DispensadorTiquetesFQASection from "@/sections/dispensador-de-tickets/landing/fqa";

export async function generateMetadata() {
  const { 'dispensador-de-tickets': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function DispensadorTiquetesLanding() {
  return (
    <>
      <DispensadorTiquetesHeroSection />
      <DispensadorTiquetesClientsSection />
      <DispensadorTiquetesProductsSection />
      <DispensadorTiquetesHowItWorksSection />
      <DispensadorTiquetesBenefitsSection />
      <DispensadorTiquetesIndustriesSection />
      <DispensadorTiquetesRelatedProducts />
      <DispensadorTiquetesFQASection />
    </>
  );
}