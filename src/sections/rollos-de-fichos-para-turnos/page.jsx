import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";

import TurnosBenefitsSection from "./landing/components/BenefitsSection/TurnosBenefitsSection";
import TurnosClientsSection from "./landing/components/ClientsSection/TurnosClientsSection";
import TurnosHeroSection from "./landing/components/HeroSection/TurnosHeroSection";
import TurnoIndustriesSection from "./landing/components/IndustriesSection/TurnoIndustriesSection";
import TurnosProductsSection from "./landing/components/ProductsSection/TurnosProductsSection";
import TurnosRelatedProducts from "./landing/components/RelatedProducts/TurnosRelatedProducts";
import TurnosTechnicalDetails from "./landing/components/TechnicalDetails/TurnosTechnicalDetails";

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


export default function RollosTurnosLanding() {
    return (
        <>
            <TurnosHeroSection />
            <SecondaryHeader />
            <TurnosClientsSection />
            <TurnosProductsSection />
            <TurnosBenefitsSection />
            <TurnosTechnicalDetails />
            <TurnoIndustriesSection />
            <TurnosRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}
