import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "../turnero-fila-unica-supermercados/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Turnero T1-B: Solución Compacta en Salas de Espera",
    description:
        "Turnero inalámbrico de bajo costo, ideal para zonas de espera pequeñas. Llama turnos en orden y aleatorios. Fácil instalación y uso. ¡Cotiza ahora!",
    keywords: ["Turnero"],
    openGraph: {
        title: "Turnero T1-B: Solución Compacta en Salas de Espera",
        description:
            "Turnero inalámbrico de bajo costo, ideal para zonas de espera pequeñas. Llama turnos en orden y aleatorios. Fácil instalación y uso. ¡Cotiza ahora!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-t1-b",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Turnero T1-B: Solución Compacta en Salas de Espera",
        description:
            "Turnero inalámbrico de bajo costo, ideal para zonas de espera pequeñas. Llama turnos en orden y aleatorios. Fácil instalación y uso. ¡Cotiza ahora!",
    },
};


export default function VerMasPantallaT1B() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <TurnoExpressRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}