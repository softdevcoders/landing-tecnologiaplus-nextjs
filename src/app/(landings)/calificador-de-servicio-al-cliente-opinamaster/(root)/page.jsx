// Importación de secciones específicas de la landing page
import getMetadata from "@/request/server/metadata/get-metadata";
import CalificadorBenefitsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/BenefitsSection/CalificadorBenefitsSection";
import CalificadorClientsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/ClientsSection/CalificadorClientsSection";
import CalificadorHeroSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/HeroSection/CalificadorHeroSection";
import CalificadorIndustriesSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/IndustriesSection/CalificadorIndustriesSection";
import CalificadorProductsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/ProductsSection/CalificadorProductsSection";
import CalificadorRelatedProducts from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/RelatedProducts/CalificadorRelatedProducts";
import SecondaryCalificadorProductsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/SecondaryProductsSection/SecondaryCalificadorProductsSection";
import StepsSectionCalificador from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/StepsSection/StepsSectionCalificador";

export async function generateMetadata() {
  const { 'calificador-de-servicio-al-cliente-opinamaster': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function CalificadorLanding() {
  return (
    <>
      <CalificadorHeroSection />
      <CalificadorClientsSection />
      <CalificadorProductsSection />
      <CalificadorBenefitsSection />
      <SecondaryCalificadorProductsSection />
      <StepsSectionCalificador />
      <CalificadorIndustriesSection />
      <CalificadorRelatedProducts />
    </>
  );
}
