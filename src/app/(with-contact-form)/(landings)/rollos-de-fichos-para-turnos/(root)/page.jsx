// Importación de componentes específicos de la página
import TurnosBenefitsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/BenefitsSection/TurnosBenefitsSection"; // Sección de beneficios
import TurnosClientsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/ClientsSection/TurnosClientsSection"; // Sección de clientes
import TurnosHeroSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/HeroSection/TurnosHeroSection"; // Sección principal (hero)
import TurnoIndustriesSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/IndustriesSection/TurnoIndustriesSection"; // Sección de industrias
import TurnosProductsSection from "@/sections/rollos-de-fichos-para-turnos/landing/components/ProductsSection/TurnosProductsSection"; // Sección de productos
import TurnosRelatedProducts from "@/sections/rollos-de-fichos-para-turnos/landing/components/RelatedProducts/TurnosRelatedProducts"; // Sección de productos relacionados
import TurnosTechnicalDetails from "@/sections/rollos-de-fichos-para-turnos/landing/components/TechnicalDetails/TurnosTechnicalDetails"; // Sección de detalles técnicos

// Metadatos de la página
export const metadata = {
	title: "Rollos de Turno: Fabricantes de Calidad Garantizada",
	description:
		"Somos fabricantes de rollos de turno de alta calidad. Compra directo de fábrica con entrega rápida. ¡Cotiza ahora y recibe asesoría personalizada!",
	robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
	alternates: {
		canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-turno/",
	},
	openGraph: {
		type: "article",
		locale: "es_ES",
		url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-turno/",
		title: "Rollos de Turno: Fabricantes de Calidad Garantizada",
		description:
			"Somos fabricantes de rollos de turno de alta calidad. Compra directo de fábrica con entrega rápida. ¡Cotiza ahora y recibe asesoría personalizada!",
		siteName: "TecnologiaPlus",
		images: [
			{
				url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/7_onwjnc.webp",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Rollos de Turno: Fabricantes de Calidad Garantizada",
		description:
			"Somos fabricantes de rollos de turno de alta calidad. Compra directo de fábrica con entrega rápida. ¡Cotiza ahora y recibe asesoría personalizada!",
	},
};

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
