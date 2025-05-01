
import EncuestaVirtualBenefitsSection from "./components/BenefitsSection/EncuestaVirtualBenefitsSection";
import EncuestaVirtualClientsSection from "./components/ClientsSection/EncuestaVirtualClientsSection";
import EncuestaVirtualHeroSection from "./components/HeroSection/EncuestaVirtualHeroSection";
import EncuestaVirtualIndustriesSection from "./components/IndustriesSection/EncuestaVirtualIndustriesSection";
import EncuestaVirtualProductsSection from "./components/ProductsSection/EncuestaVirtualProductsSection";
import EncuestaVirtualRelatedProducts from "./components/RelatedProducts/EncuestaVirtualRelatedProducts";
import SecondaryEncuestaVirtualProductsSection from "./components/SecondaryProductsSection/SecondaryEncuestaVirtualProductsSection";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import Footer from "@/app/components/Footer/Footer";
import ContactForm from "@/app/components/ContactForm/ContactForm";

export default function EncuestaVirtualLanding() {
    return (
        <>
            <EncuestaVirtualHeroSection />
            <SecondaryHeader />
            <EncuestaVirtualClientsSection />
            <EncuestaVirtualProductsSection />
            <EncuestaVirtualBenefitsSection />
            <SecondaryEncuestaVirtualProductsSection />
            <EncuestaVirtualIndustriesSection />
            <EncuestaVirtualRelatedProducts />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}