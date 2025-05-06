import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts";
import ControlsOptions from "../turnero-t1-n/components/ControlsOptions/ControlsOptions";
import LogosSection from "../turnero-fila-unica-supermercados/components/LogosSection/LogosSection";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Turnero Transformer: Personalización Total en la Gestión de Turnos",
    description:
        "Turnero adaptable a cada producto o servicio. Ideal para autoservicio y oficinas con múltiples filas. Mejora la atención sin alterar procesos. ¡Conócelos!",
    keywords: ["Turnero"],
    openGraph: {
        title: "Turnero Transformer: Personalización Total en la Gestión de Turnos",
        description:
            "Turnero adaptable a cada producto o servicio. Ideal para autoservicio y oficinas con múltiples filas. Mejora la atención sin alterar procesos. ¡Conócelos!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-transformer",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Turnero Transformer: Personalización Total en la Gestión de Turnos",
        description:
            "Turnero adaptable a cada producto o servicio. Ideal para autoservicio y oficinas con múltiples filas. Mejora la atención sin alterar procesos. ¡Conócelos!",
    },
};


export default function VerMasPantallaSegunProducto() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <ControlsOptions />
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