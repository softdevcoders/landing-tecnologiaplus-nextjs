import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";

import LocalizadoresBenefitsSection from "./components/BenefitsSection/LocalizadoresBenefitsSection";
import LocalizadoresClientsSection from "./components/ClientsSection/LocalizadoresClientsSection";
import LocalizadoresHeroSection from "./components/HeroSection/LocalizadoresHeroSection";
import LocalizadoresIndustriesSection from "./components/IndustriesSection/LocalizadoresIndustriesSection";
import LocalizadoresProductsSection from "./components/ProductsSection/LocalizadoresProductsSection";
import LocalizadoresRelatedProducts from "./components/RelatedProducts/LocalizadoresRelatedProducts";
import LocalizadoresSecondaryProductsSection from "./components/SecondaryProductsSection/LocalizadoresSecondaryProductsSection";


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



export default function LocalizadoresLanding() {
    return (
        <>
            <LocalizadoresHeroSection />
            <SecondaryHeader />
            <LocalizadoresClientsSection />
            <LocalizadoresProductsSection />
            <LocalizadoresBenefitsSection />
            <LocalizadoresSecondaryProductsSection />
            <LocalizadoresIndustriesSection />
            <LocalizadoresRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}