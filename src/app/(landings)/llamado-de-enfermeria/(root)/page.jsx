import getMetadata from "@/request/server/metadata/get-metadata";
import BenefitsSection from "@/sections/llamado-de-enfermeria/landing/benefits";
import ClientsSection from "@/sections/llamado-de-enfermeria/landing/clients"
import HeroSection from "@/sections/llamado-de-enfermeria/landing/hero";
import IndustriesSection from "@/sections/llamado-de-enfermeria/landing/industries";
import ProductsSection from "@/sections/llamado-de-enfermeria/landing/products";
import RelatedProductsSection from "@/sections/llamado-de-enfermeria/landing/related-products";
import ProductsSecondarySection from "@/sections/llamado-de-enfermeria/landing/products-secondary";
import StepsSection from "@/sections/llamado-de-enfermeria/landing/steps";
import FQASection from "@/sections/llamado-de-enfermeria/landing/fqa";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function LlamadoDeEnfermeriaLandingPage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ProductsSection /> 
      <BenefitsSection />
      <ProductsSecondarySection />
      <StepsSection />
      <IndustriesSection />
      <RelatedProductsSection />
      <FQASection />
    </>
  );
}