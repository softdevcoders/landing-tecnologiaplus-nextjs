import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../../components/WppBtn/WppBtn";

import TurnoMasterBenefitsSection from "./components/BenefitsSection/TurnoMasterBenefitsSection";
import TurnoMasterClientsSection from "./components/ClientsSection/TurnoMasterClientsSection";
import TurnoMasterHeroSection from "./components/HeroSection/TurnoMasterHeroSection";
import TurnoMasterIndustriesSection from "./components/IndustriesSection/TurnoMasterIndustriesSection";
import TurnoMasterProductsSection from "./components/ProductsSection/TurnoMasterProductsSection";
import TurnoMasterRelatedProducts from "./components/RelatedProducts/TurnoMasterRelatedProducts";
import SecondaryTurnoMasterProductsSection from "./components/SecondaryProductsSection/SecondaryTurnoMasterProductsSection";

export const metadata = {
    title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
    description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/sistema-de-turnos/turnomaster",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
        description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/software-para-turnos/",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/10_zozuzq.webp",
                width: 900,
                height: 514,
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
        description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
    },

};


export default function TurnoMasterLanding() {
    return (
        <>
            <TurnoMasterHeroSection />
            <SecondaryHeader />
            <TurnoMasterClientsSection />
            <TurnoMasterProductsSection />
            <TurnoMasterBenefitsSection />
            <SecondaryTurnoMasterProductsSection />
            <TurnoMasterIndustriesSection />
            <TurnoMasterRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}