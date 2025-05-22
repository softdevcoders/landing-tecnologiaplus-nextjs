// Importación de componentes específicos de la página
import getMetadata from "@/request/server/metadata/get-metadata";
import TurnosBenefitsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/BenefitsSection/TurnosBenefitsSection"; // Sección de beneficios
import TurnosClientsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/ClientsSection/TurnosClientsSection"; // Sección de clientes
import TurnosHeroSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/HeroSection/TurnosHeroSection"; // Sección principal (hero)
import TurnoIndustriesSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/IndustriesSection/TurnoIndustriesSection"; // Sección de industrias
import TurnosProductsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/ProductsSection/TurnosProductsSection"; // Sección de productos
import TurnosRelatedProducts from "@/sections/rollos-de-fichos-para-turnos/landing/components/RelatedProducts/TurnosRelatedProducts"; // Sección de productos relacionados
import TurnosTechnicalDetails from "@/sections/rollos-de-fichos-para-turnos/landing/components/TechnicalDetails/TurnosTechnicalDetails"; // Sección de detalles técnicos

export async function generateMetadata() {
  const { 'rollos-de-fichos-para-turnos': { root: metadata } } = getMetadata('landings');
  return metadata;
}

// Componente principal de la página
export default function RollosTurnosLanding() {
	return (
		<>
			{/* Sección principal (hero) */}
			{/* Props esperados: Ninguno */}
			<TurnosHeroSection />

			{/* Sección de clientes */}
			{/* Props esperados: Ninguno */}
			<TurnosClientsSection />

			{/* Sección de productos */}
			{/* Props esperados: Ninguno */}
			<TurnosProductsSection />

			{/* Sección de beneficios */}
			{/* Props esperados: Ninguno */}
			<TurnosBenefitsSection />

			{/* Sección de detalles técnicos */}
			{/* Props esperados: Ninguno */}
			<TurnosTechnicalDetails />

			{/* Sección de industrias */}
			{/* Props esperados: Ninguno */}
			<TurnoIndustriesSection />

			{/* Sección de productos relacionados */}
			{/* Props esperados: Ninguno */}
			<TurnosRelatedProducts />
		</>
	);
}
