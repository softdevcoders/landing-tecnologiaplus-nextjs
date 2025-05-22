import getMetadata from "@/request/server/metadata/get-metadata";
import LlamadorMeserosBenefitsSection from "@/sections/llamadores-de-meseros/landing/components/BenefitsSection/LlamadorMeserosBenefitsSection"; // Props: { benefits: Array }
import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection"; // Props: { clients: Array }
import LlamadorMeserosHeroSection from "@/sections/llamadores-de-meseros/landing/components/HeroSection/LlamadorMeserosHeroSection"; // Props: { title: String, subtitle: String, image: String }
import LlamadorMeserosIndustriesSection from "@/sections/llamadores-de-meseros/landing/components/IndustriesSection/LlamadorMeserosIndustriesSection"; // Props: { industries: Array }
import LlamadorMeserosProductsSection from "@/sections/llamadores-de-meseros/landing/components/ProductsSection/LlamadorMeserosProductsSection"; // Props: { products: Array }
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts"; // Props: { relatedProducts: Array }
import LlamadorMeserosSecondaryProductsSection from "@/sections/llamadores-de-meseros/landing/components/SecondaryProductsSection/LlamadorMeserosSecondaryProductsSection"; // Props: { secondaryProducts: Array }
import StepsSectionLlamadorMeseros from "@/sections/llamadores-de-meseros/landing/components/StepsSection/StepsSectionLlamadorMeseros"; // Props: { steps: Array }

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function LlamadorMeserosLanding() {
  return (
    <>
      <LlamadorMeserosHeroSection />

      <LlamadorMeserosClientsSection />

      <LlamadorMeserosProductsSection />

      <LlamadorMeserosBenefitsSection />

      <StepsSectionLlamadorMeseros />

      {/* Sección de productos secundarios */}
      <LlamadorMeserosSecondaryProductsSection />

      {/* Sección de industrias: muestra las industrias que pueden beneficiarse */}
      <LlamadorMeserosIndustriesSection />

      {/* Sección de productos relacionados */}
      <LlamadorMeserosRelatedProducts />
    </>
  );
}