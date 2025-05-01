import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";
import LogosSection from "../alarma-de-luz/components/LogosSection/LogosSection";

export const metadata = {
    title: "Llamador de Enfermería E1 para Cuello: Autonomía Total",
    description:
        "Brinda libertad a tus pacientes con el botón portátil E1. Resistente al agua y fácil de usar. Perfecto para adultos mayores. ¡Conoce sus ventajas!",
    keywords: ["Botón de enfermería"],
    openGraph: {
        title: "Llamador de Enfermería E1 para Cuello: Autonomía Total",
        description:
            "Brinda libertad a tus pacientes con el botón portátil E1. Resistente al agua y fácil de usar. Perfecto para adultos mayores. ¡Conoce sus ventajas!",
        url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Llamador de Enfermería E1 para Cuello: Autonomía Total",
        description:
            "Brinda libertad a tus pacientes con el botón portátil E1. Resistente al agua y fácil de usar. Perfecto para adultos mayores. ¡Conoce sus ventajas!",
    },
};


export default function VerMasEnfermeriaBotonE1() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <EnfermeriaRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}