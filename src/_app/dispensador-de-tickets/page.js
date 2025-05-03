import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";

import DispensadorTiquetesBenefitsSection from "./components/BenefitsSection/DispensadorTiquetesBenefitsSection";
import DispensadorTiquetesClientsSection from "./components/ClientsSection/DispensadorTiquetesClientsSection";
import DispensadorTiquetesHeroSection from "./components/HeroSection/DispensadorTiquetesHeroSection";
import DispensadorTiquetesIndustriesSection from "./components/IndustriesSection/DispensadorTiquetesIndustriesSection";
import DispensadorTiquetesProductsSection from "./components/ProductsSection/DispensadorTiquetesProductsSection";
import DispensadorTiquetesRelatedProducts from "./components/RelatedProducts/DispensadorTiquetesRelatedProducts";


export const metadata = {
    title: "Dispensador de Tiquetes | Agiliza la Atención",
    description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets",
        title: "Dispensador de Tiquetes | Agiliza la Atención",
        description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/2_dccdnc.webp",
                width: 958,
                height: 747,
                alt: "Dispensador de tiquetes",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dispensador de Tiquetes | Agiliza la Atención",
        description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
    },
    other: {
        "article:publisher": "https://www.facebook.com/tecnologiapluscolombia",
        "article:modified_time": "2025-02-27T15:41:02+00:00",
    },

};


export default function DispensadorTiquetesLanding() {
    return (
        <>
            <DispensadorTiquetesHeroSection />
            <SecondaryHeader />
            <DispensadorTiquetesClientsSection />
            <DispensadorTiquetesProductsSection />
            <DispensadorTiquetesBenefitsSection />
            <DispensadorTiquetesIndustriesSection />
            <DispensadorTiquetesRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}