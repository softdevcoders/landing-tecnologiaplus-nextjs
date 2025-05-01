
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../../components/WppBtn/WppBtn";

import CalificadorBenefitsSection from "./components/BenefitsSection/CalificadorBenefitsSection";
import CalificadorClientsSection from "./components/ClientsSection/CalificadorClientsSection";
import CalificadorHeroSection from "./components/HeroSection/CalificadorHeroSection";
import CalificadorIndustriesSection from "./components/IndustriesSection/CalificadorIndustriesSection";
import CalificadorProductsSection from "./components/ProductsSection/CalificadorProductsSection";
import CalificadorRelatedProducts from "./components/RelatedProducts/CalificadorRelatedProducts";
import SecondaryCalificadorProductsSection from "./components/SecondaryProductsSection/SecondaryCalificadorProductsSection";
import StepsSectionCalificador from "./components/StepsSection/StepsSectionCalificador";


export const metadata = {
    title: "Calificador de Servicios: Conoce la opinión real de tus clientes",
    description:
        "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicio-al-cliente/opinamaster",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Calificador de Servicios: Conoce la opinión real de tus clientes",
        description:
            "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicios/",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/1_spvfxt.webp",
            },
        ],
        updatedTime: "2024-12-30T16:34:53-05:00",
    },
    twitter: {
        card: "summary_large_image",
        title: "Calificador de Servicios: Conoce la opinión real de tus clientes",
        description:
            "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
        images: [
            "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/1_spvfxt.webp",
        ],
    },

};


export default function CalificadorLanding() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicios/",
        name: "Calificador de Servicios: Conoce la opinión real de tus clientes",
        description:
            "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
        image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/1_spvfxt.webp",
        datePublished: "2020-08-21T01:24:34+00:00",
        dateModified: "2024-12-30T21:34:53+00:00",
        inLanguage: "es",
        publisher: {
            "@type": "Organization",
            name: "TecnologiaPlus",
            url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/",
            logo: {
                "@type": "ImageObject",
                url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/wp-content/uploads/2020/10/Logo-1a1.jpg",
            },
        },
    };



    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CalificadorHeroSection />
            <SecondaryHeader />
            <CalificadorClientsSection />
            <CalificadorProductsSection />
            <CalificadorBenefitsSection />
            <SecondaryCalificadorProductsSection />
            <StepsSectionCalificador />
            <CalificadorIndustriesSection />
            <CalificadorRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}