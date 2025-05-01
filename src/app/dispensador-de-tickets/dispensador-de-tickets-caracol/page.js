import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/app/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import LogosSection from "./components/LogosSection/LogosSection";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Dispensador de Tickets Caracol: Ordena y Optimiza Filas",
    description:
        "Organiza filas fácilmente con nuestro dispensador tipo caracol. Ideal para salas de espera y servicios. Instalación sencilla. ¡Cotiza y mejora tu atención!",
    keywords: ["DISPENSADOR DE TICKETS"],
    openGraph: {
        title: "Dispensador de Tickets Caracol: Ordena y Optimiza Filas",
        description:
            "Organiza filas fácilmente con nuestro dispensador tipo caracol. Ideal para salas de espera y servicios. Instalación sencilla. ¡Cotiza y mejora tu atención!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets/dispensador-de-tickets-caracol",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dispensador de Tickets Caracol: Ordena y Optimiza Filas",
        description:
            "Organiza filas fácilmente con nuestro dispensador tipo caracol. Ideal para salas de espera y servicios. Instalación sencilla. ¡Cotiza y mejora tu atención!",
    },
};


export default function VerMasDispensadorDeTiquetes() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}