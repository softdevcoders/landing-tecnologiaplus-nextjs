import ContactForm from "@/_app/components/ContactForm/ContactForm";
import WppBtn from "@/_app/components/WppBtn/WppBtn";
import Footer from "@/_app/components/Footer/Footer";
import style from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/_app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "@/_app/turnero-turnoexpress/turnero-fila-unica-supermercados/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/_app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts";
import ControlsOptions from "@/_app/turnero-turnoexpress/turnero-t1-n/components/ControlsOptions/ControlsOptions";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";


export const metadata = {
    title: "Turnero T3: Llama Turnos y Resalta tu Marca Profesionalmente",
    description:
        "Turnero digital con espacio para logo. Llama turnos en orden y muestra ventanillas libres. Eleva la imagen y eficiencia de tu empresa. ¡Solicita demo!",
    keywords: ["Turnero digital"],
    openGraph: {
        title: "Turnero T3: Llama Turnos y Resalta tu Marca Profesionalmente",
        description:
            "Turnero digital con espacio para logo. Llama turnos en orden y muestra ventanillas libres. Eleva la imagen y eficiencia de tu empresa. ¡Solicita demo!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-t3-modulo-turno",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Turnero T3: Llama Turnos y Resalta tu Marca Profesionalmente",
        description:
            "Turnero digital con espacio para logo. Llama turnos en orden y muestra ventanillas libres. Eleva la imagen y eficiencia de tu empresa. ¡Solicita demo!",
    },
};


export default function VerMasPantallaT3() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <ControlsOptions />
            <HowItWorks />
            <LogosSection />
            <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}