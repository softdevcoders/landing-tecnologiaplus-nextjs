import getMetadata from "@/request/server/metadata/get-metadata";
import LlamadorMeserosBenefitsSection from "@/sections/llamadores-de-meseros/landing/components/BenefitsSection/LlamadorMeserosBenefitsSection"; 
import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosHeroSection from "@/sections/llamadores-de-meseros/landing/components/HeroSection/LlamadorMeserosHeroSection";
import LlamadorMeserosIndustriesSection from "@/sections/llamadores-de-meseros/landing/components/IndustriesSection/LlamadorMeserosIndustriesSection";
import LlamadorMeserosProductsSection from "@/sections/llamadores-de-meseros/landing/components/ProductsSection/LlamadorMeserosProductsSection";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LlamadorMeserosVideosSection from "@/sections/llamadores-de-meseros/landing/components/LlamadorMeserosVideosSection/LlamadorMeserosVideosSection";
import LlamadorMeserosVerMasSection from "@/sections/llamadores-de-meseros/landing/components/LlamadorMeserosVerMasSection/LlamadorMeserosVerMasSection";
import StepsSectionLlamadorMeseros from "@/sections/llamadores-de-meseros/landing/components/StepsSection/StepsSectionLlamadorMeseros";
import LlamadoresDeMeserosPreguntasFrecuentes from "@/sections/llamadores-de-meseros/landing/components/PreguntasFrecuentes";
import MultimediaSection from "@/sections/llamadores-de-meseros/landing/components/MultimediaSection/MultimediaSection";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function LlamadorMeserosLanding() {
  return (
    <>
      <LlamadorMeserosHeroSection />
      <LlamadorMeserosClientsSection />
      <MultimediaSection />
      <LlamadorMeserosBenefitsSection />
      <LlamadorMeserosProductsSection />
      <StepsSectionLlamadorMeseros />
      <LlamadorMeserosVerMasSection />
      {/* <LlamadorMeserosVideosSection /> */}
      <LlamadorMeserosIndustriesSection />
      <LlamadorMeserosRelatedProducts />
      <LlamadoresDeMeserosPreguntasFrecuentes />
    </>
  );
}