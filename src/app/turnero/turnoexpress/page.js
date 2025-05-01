import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../../components/WppBtn/WppBtn";

import TurnoExpressBenefitsSection from "./components/BenefitsSection/TurnoExpressBenefitsSection";
import TurnoExpressClientsSection from "./components/ClientsSection/TurnoExpressClientsSection";
import TurnoExpressHeroSection from "./components/HeroSection/TurnoExpressHeroSection";
import TurnoExpressIndustriesSection from "./components/IndustriesSection/TurnoExpressIndustriesSection";
import TurnoExpressProductsSection from "./components/ProductsSection/TurnoExpressProductsSection";
import TurnoExpressRelatedProducts from "./components/RelatedProducts/TurnoExpressRelatedProducts";
import SecondaryTurnoExpressProductsSection from "./components/SecondaryProductsSection/SecondaryTurnoExpressProductsSection";

export const metadata = {
    title: "Turnero Digital: Agiliza y Organiza las Filas en tu negocio.",
    description:
        "Turnero digital: Somos fabricantes. Acelera la atención al cliente y moderniza tu negocio. ¡Solicita una asesoria ahora!",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero/",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Turnero Digital: Agiliza y Organiza las Filas en tu negocio.",
        description:
            "Turnero digital: Somos fabricantes. Acelera la atención al cliente y moderniza tu negocio. ¡Solicita una asesoria ahora!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero/",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/9_pl5ffb.webp",
                width: 1600,
                height: 600,
                alt: "pantallas de turnos",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
    other: {
        "article:publisher": "https://www.facebook.com/tecnologiapluscolombia",
        "article:modified_time": "2024-12-16T22:12:14+00:00",
    },

};


export default function TurnoExpressLanding() {
    return (
        <>
            <TurnoExpressHeroSection />
            <SecondaryHeader />
            <TurnoExpressClientsSection />
            <TurnoExpressProductsSection />
            <TurnoExpressBenefitsSection />
            <SecondaryTurnoExpressProductsSection />
            <TurnoExpressIndustriesSection />
            <TurnoExpressRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}