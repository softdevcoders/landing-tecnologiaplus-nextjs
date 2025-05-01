import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TurnoExpressRelatedProducts from "@/app/turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts";
import LogosSection from "./components/LogosSection/LogosSection";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Turnero Fila Única: Agiliza la Atención en Supermercados",
    description:
        "Organiza a todos en una sola fila y muestra la caja libre. Reduce confusión y mejora el servicio en supermercados y lugares concurridos. ¡Solicita demo!",
    keywords: ["TURNERO FILA ÚNICA"],
    openGraph: {
        title: "Turnero Fila Única: Agiliza la Atención en Supermercados",
        description:
            "Organiza a todos en una sola fila y muestra la caja libre. Reduce confusión y mejora el servicio en supermercados y lugares concurridos. ¡Solicita demo!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-fila-unica-supermercados",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Turnero Fila Única: Agiliza la Atención en Supermercados",
        description:
            "Organiza a todos en una sola fila y muestra la caja libre. Reduce confusión y mejora el servicio en supermercados y lugares concurridos. ¡Solicita demo!",
    },
};


export default function VerMasTurnosFilaUnica() {
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