// Importing components for different sections of the landing page
import LocalizadoresBenefitsSection from "@/sections/localizadores-para-restaurantes/landing/components/BenefitsSection/LocalizadoresBenefitsSection";
import LocalizadoresClientsSection from "@/sections/localizadores-para-restaurantes/landing/components/ClientsSection/LocalizadoresClientsSection";
import LocalizadoresHeroSection from "@/sections/localizadores-para-restaurantes/landing/components/HeroSection/LocalizadoresHeroSection";
import LocalizadoresIndustriesSection from "@/sections/localizadores-para-restaurantes/landing/components/IndustriesSection/LocalizadoresIndustriesSection";
import LocalizadoresProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/ProductsSection/LocalizadoresProductsSection";
// import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/landing/components/RelatedProducts/LocalizadoresRelatedProducts";
import LocalizadoresSecondaryProductsSection from "@/sections/localizadores-para-restaurantes/landing/components/SecondaryProductsSection/LocalizadoresSecondaryProductsSection";

// Metadata for the page, used for SEO and social sharing
export const metadata = {
  title: "Localizadores para restaurantes: organiza y resalta tu marca",
  description:
    "Somos fabricantes expertos en autoservicio, impulsa tu negocio con nuestros localizadores. ¡Solicita una asesoría ahora!",
  keywords: ["localizadores", "restaurantes", "tecnología", "autoservicio"],
  openGraph: {
    title: "Localizadores de clientes - TecnologiaPlus",
    description:
      "Localizadores para restaurantes te permiten mejorar y agilizar el servicio. Modernos llamadores para restaurantes ultraresistentes a golpes",
    url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/localizadores-para-restaurantes-de-clientes/",
    siteName: "TecnologiaPlus",
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/6_aqz1pb.webp",
        width: 1600,
        height: 600,
        alt: "Llamadores para restaurantes Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Localizadores de clientes - TecnologiaPlus",
    description:
      "Localizadores para restaurantes te permiten mejorar y agilizar el servicio. Modernos llamadores para restaurantes ultraresistentes a golpes",
  },
};

// Main landing page component
export default function LocalizadoresLanding() {
  return (
    <>
      {/* Hero Section: Expects no props, displays the main banner */}
      <LocalizadoresHeroSection />

      {/* Clients Section: Expects no props, showcases client testimonials or logos */}
      <LocalizadoresClientsSection />

      {/* Products Section: Expects no props, highlights the main products */}
      <LocalizadoresProductsSection />

      {/* Benefits Section: Expects no props, lists the benefits of the products */}
      <LocalizadoresBenefitsSection />

      {/* Secondary Products Section: Expects no props, displays additional products */}
      <LocalizadoresSecondaryProductsSection />

      {/* Industries Section: Expects no props, shows industries where the products are used */}
      <LocalizadoresIndustriesSection />

      {/* Related Products Section: Expects no props, suggests related products */}
      {/* <LocalizadoresRelatedProducts /> */}
    </>
  );
}