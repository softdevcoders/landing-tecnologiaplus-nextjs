import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "../alarma-de-luz/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Llamador de Enfermería EX1: Cable Extensor y Accesibilidad",
    description:
        "Facilita el llamado de ayuda con el EX1, diseñado para máxima accesibilidad en camas hospitalarias y hogares geriátricos. ¡Solicita información!",
    keywords: ["Sistema de timbres para habitaciones"],
    openGraph: {
        title: "Llamador de Enfermería EX1: Cable Extensor y Accesibilidad",
        description:
            "Facilita el llamado de ayuda con el EX1, diseñado para máxima accesibilidad en camas hospitalarias y hogares geriátricos. ¡Solicita información!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/llamador-ex1",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Llamador de Enfermería EX1: Cable Extensor y Accesibilidad",
        description:
            "Facilita el llamado de ayuda con el EX1, diseñado para máxima accesibilidad en camas hospitalarias y hogares geriátricos. ¡Solicita información!",
    },
};


export default function VerMasEnfermeriaLlamadorConExtensor() {
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