import getMetadata from "@/request/server/metadata/get-metadata";
import EnfermeriaBenefitsSection from "@/sections/llamado-de-enfermeria/landing/components/BenefitsSection/EnfermeriaBenefitsSection";
import EnfermeriaClientsSection from "@/sections/llamado-de-enfermeria/landing/components/ClientsSection/EnfermeriaClientsSection";
import EnfermeriaHeroSection from "@/sections/llamado-de-enfermeria/landing/components/HeroSection/EnfermeriaHeroSection";
import EnfermeriaIndustriesSection from "@/sections/llamado-de-enfermeria/landing/components/IndustriesSection/EnfermeriaIndustriesSection";
import EnfermeriaProductsSection from "@/sections/llamado-de-enfermeria/landing/components/ProductsSection/EnfermeriaProductsSection";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import EnfermeriaSecondaryProductsSection from "@/sections/llamado-de-enfermeria/landing/components/SecondaryProductsSection/EnfermeriaSecondaryProductsSection";
import StepsSectionEnfermeria from "@/sections/llamado-de-enfermeria/landing/components/StepsSection/StepsSectionEnfermeria";
import EnfermeriaPreguntasFrecuentes from "@/sections/llamado-de-enfermeria/landing/components/PreguntasFrecuentes";

export async function generateMetadata() {
  const { 'llamado-de-enfermeria': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function EnfermeriaLanding() {
  return (
    <>
      <EnfermeriaHeroSection />
      <EnfermeriaClientsSection />
      <EnfermeriaProductsSection /> 
      <EnfermeriaBenefitsSection />
      <EnfermeriaSecondaryProductsSection />
      <StepsSectionEnfermeria />
      <EnfermeriaIndustriesSection />
      <EnfermeriaRelatedProducts />
      <EnfermeriaPreguntasFrecuentes />
    </>
  );
}