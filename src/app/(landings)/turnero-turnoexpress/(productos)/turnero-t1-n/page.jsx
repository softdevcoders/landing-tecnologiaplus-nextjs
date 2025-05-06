import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "../turnero-fila-unica-supermercados/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts";
import ControlsOptions from "./components/ControlsOptions/ControlsOptions";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Turnero T1-N: Organización y Marca en la Gestión de Turnos",
    description:
        "Pantalla personalizable que proyecta tu imagen mientras gestiona turnos. Uso frecuente en salud, gastronomía y oficinas. ¡Solicita asesoría personalizada!",
    keywords: ["Turnero digital"],
    openGraph: {
        title: "Turnero T1-N: Organización y Marca en la Gestión de Turnos",
        description:
            "Pantalla personalizable que proyecta tu imagen mientras gestiona turnos. Uso frecuente en salud, gastronomía y oficinas. ¡Solicita asesoría personalizada!",
        url: "https://landing-tecnologiaplus-nextjs.vercel.app/turnero-turnoexpress/turnero-t1-n",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Turnero T1-N: Organización y Marca en la Gestión de Turnos",
        description:
            "Pantalla personalizable que proyecta tu imagen mientras gestiona turnos. Uso frecuente en salud, gastronomía y oficinas. ¡Solicita asesoría personalizada!",
    },
};


export default function VerMasPantallaT1N() {
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