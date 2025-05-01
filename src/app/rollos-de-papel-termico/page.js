import Footer from "../components/Footer/Footer";
import SecondaryHeader from "../components/SecondaryHeader/SecondaryHeader";
import WppBtn from "../components/WppBtn/WppBtn";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import HeroSection from "./components/HeroSection/HeroSection";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import TechnicalDetails from "./components/TechnicalDetails/TechnicalDetails";

export const metadata = {
    title: "Rollos Térmicos: Somos fabricantes de alta calidad",
    description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Rollos Térmicos - Tecnología Plus",
        description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico/",
        siteName: "Tecnología Plus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/8_obkppw.webp",
                width: 1200,
                height: 630,
                alt: "Rollos térmicos de alta calidad",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rollos Térmicos - Tecnología Plus",
        description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
        images: ["https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/8_obkppw.webp"],
    },

};



export default function RollosTermicosLanding() {
    return (
        <>
            <HeroSection />
            <SecondaryHeader />
            <ClientsSection />
            <ProductsSection />
            <BenefitsSection />
            <TechnicalDetails />
            <IndustriesSection />
            <RelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}
