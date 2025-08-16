import getMetadata from "@/request/server/metadata/get-metadata";
import TurnoExpressBenefitsSection from "@/sections/turnero-turnoexpress/root/components/BenefitsSection/TurnoExpressBenefitsSection";
import TurnoExpressClientsSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection";
import TurnoExpressHeroSection from "@/sections/turnero-turnoexpress/root/components/HeroSection/TurnoExpressHeroSection";
import TurnoExpressIndustriesSection from "@/sections/turnero-turnoexpress/root/components/IndustriesSection/TurnoExpressIndustriesSection";
import TurnoExpressProductsSection from "@/sections/turnero-turnoexpress/root/components/ProductsSection/TurnoExpressProductsSection";
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts";
import SecondaryTurnoExpressProductsSection from "@/sections/turnero-turnoexpress/root/components/SecondaryProductsSection/SecondaryTurnoExpressProductsSection";

export async function generateMetadata() {
  const { 'turnero-turnoexpress': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function TurnoExpressLanding() {
  return (
    <>
      <TurnoExpressHeroSection />
      <TurnoExpressClientsSection />
      <TurnoExpressProductsSection />
      <TurnoExpressBenefitsSection />
      <SecondaryTurnoExpressProductsSection />
      <TurnoExpressIndustriesSection />
      <TurnoExpressRelatedProducts />
    </>
  );
}