import getMetadata from "@/request/server/metadata/get-metadata";
import TurnosBenefitsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/BenefitsSection/TurnosBenefitsSection";
import TurnosClientsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/ClientsSection/TurnosClientsSection";
import TurnosHeroSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/HeroSection/TurnosHeroSection";
import TurnoIndustriesSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/IndustriesSection/TurnoIndustriesSection";
import TurnosProductsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/ProductsSection/TurnosProductsSection";
import TurnosRelatedProducts from "@/sections/rollos-de-fichos-para-turnos/landing/components/RelatedProducts/TurnosRelatedProducts";
import TurnosTechnicalDetails from "@/sections/rollos-de-fichos-para-turnos/landing/components/TechnicalDetails/TurnosTechnicalDetails";
import TurnosPreguntasFrecuentes from "@/sections/rollos-de-fichos-para-turnos/landing/components/PreguntasFrecuentes";

export async function generateMetadata() {
  const { 'rollos-de-fichos-para-turnos': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function RollosTurnosLanding() {
	return (
		<>
			<TurnosHeroSection />
			<TurnosClientsSection />
			<TurnosProductsSection />
			<TurnosBenefitsSection />
			<TurnosTechnicalDetails />
			<TurnoIndustriesSection />
			<TurnosRelatedProducts />
			<TurnosPreguntasFrecuentes  />
		</>
	);
}
