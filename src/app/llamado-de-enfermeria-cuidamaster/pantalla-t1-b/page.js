import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "../alarma-de-luz/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Pantalla T1-B para Enfermería: Visualiza Llamados en Tiempo Real",
    description:
        "Gestiona hasta 15 llamados en pantalla. Solución ideal para hospitales y hogares geriátricos. Mejora la atención y la coordinación del personal.",
    keywords: ["Pantalla para Timbre Hospitalario"],
    openGraph: {
        title: "Pantalla T1-B para Enfermería: Visualiza Llamados en Tiempo Real",
        description:
            "Gestiona hasta 15 llamados en pantalla. Solución ideal para hospitales y hogares geriátricos. Mejora la atención y la coordinación del personal.",
        url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/pantalla-t1-b",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pantalla T1-B para Enfermería: Visualiza Llamados en Tiempo Real",
        description:
            "Gestiona hasta 15 llamados en pantalla. Solución ideal para hospitales y hogares geriátricos. Mejora la atención y la coordinación del personal.",
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
            <EnfermeriaRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}