import getMetadata from "@/request/server/metadata/get-metadata";
import TurnosBenefitsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/BenefitsSection/TurnosBenefitsSection";
import TurnosClientsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/ClientsSection/TurnosClientsSection";
import TurnosHeroSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/HeroSection/TurnosHeroSection";
import TurnoIndustriesSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/IndustriesSection/TurnoIndustriesSection";
import TurnosProductsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/ProductsSection/TurnosProductsSection";
import TurnosRelatedProducts from "@/sections/rollos-de-fichos-para-turnos/landing/components/RelatedProducts/TurnosRelatedProducts";
import TurnosTechnicalDetails from "@/sections/rollos-de-fichos-para-turnos/landing/components/TechnicalDetails/TurnosTechnicalDetails";
import LandingPageSchema from "@/components/schema/LandingPageSchema";

export async function generateMetadata() {
  const { 'rollos-de-fichos-para-turnos': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function RollosTurnosLanding() {
  const { 'rollos-de-fichos-para-turnos': { root: metadata } } = getMetadata('landings');

	return (
		<>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      {/* <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="rollosDeFichosParaTurnos"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      />		 */}
			<TurnosHeroSection />
			<TurnosClientsSection />
			<TurnosProductsSection />
			<TurnosBenefitsSection />
			<TurnosTechnicalDetails />
			<TurnoIndustriesSection />
			<TurnosRelatedProducts />
		</>
	);
}
