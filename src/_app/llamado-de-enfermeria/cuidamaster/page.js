import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../../components/WppBtn/WppBtn";

import EnfermeriaBenefitsSection from "./components/BenefitsSection/EnfermeriaBenefitsSection";
import EnfermeriaClientsSection from "./components/ClientsSection/EnfermeriaClientsSection";
import EnfermeriaHeroSection from "./components/HeroSection/EnfermeriaHeroSection";
import EnfermeriaIndustriesSection from "./components/IndustriesSection/EnfermeriaIndustriesSection";
import EnfermeriaProductsSection from "./components/ProductsSection/EnfermeriaProductsSection";
import EnfermeriaRelatedProducts from "./components/RelatedProducts/EnfermeriaRelatedProducts";
import EnfermeriaSecondaryProductsSection from "./components/SecondaryProductsSection/EnfermeriaSecondaryProductsSection";
import StepsSectionEnfermeria from "./components/StepsSection/StepsSectionEnfermeria";


export const metadata = {
    title: "Llamado de Enfermería: Hacemos fácil la atención de tus pacientes",
    description: "Sistema de llamado de enfermería, somos fabricantes de bajo costo para modernizar y facilitar la atención de pacientes en el sector salud y geriátrico.",
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/",
        siteName: "TecnologiaPlus",
        title: "Llamado de enfermería - TecnologiaPlus",
        description: "Llamadores de enfermería de largo alcance y alta resistencia. Sistema eficiente para llamar enfermeras. ¡Contáctanos hoy!",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/4_aggf31.webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Llamado de enfermería - TecnologiaPlus",
        description: "Llamadores de enfermería de largo alcance y alta resistencia. Sistema eficiente para llamar enfermeras. ¡Contáctanos hoy!",
    },
};

export default function EnfermeriaLanding() {
    return (
        <>
            <EnfermeriaHeroSection />
            <SecondaryHeader />
            <EnfermeriaClientsSection />
            <EnfermeriaProductsSection />
            <EnfermeriaBenefitsSection />
            <EnfermeriaSecondaryProductsSection />
            <StepsSectionEnfermeria />
            <EnfermeriaIndustriesSection />
            <EnfermeriaRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}