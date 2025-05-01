import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/calificador-de-servicio-al-cliente/opinamaster/components/RelatedProducts/CalificadorRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CalificadorRelatedProducts from "@/app/calificador-de-servicio-al-cliente/opinamaster/components/RelatedProducts/CalificadorRelatedProducts";
import LogosSection from "@/app/ver-mas/opinamaster-calificador/aviso-de-pared/components/LogosSection/LogosSection";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";


export const metadata = {
    title: "Calificador de Servicio al Cliente: Opinión en Tiempo Real",
    description:
        "Captura la percepción real de tus clientes en segundos. Recibe alertas de calificaciones negativas y mejora tu servicio. ¡Solicita asesoría personalizada!",
    keywords: ["Calificador de servicio"],
    openGraph: {
        title: "Calificador de Servicio al Cliente: Opinión en Tiempo Real",
        description:
            "Captura la percepción real de tus clientes en segundos. Recibe alertas de calificaciones negativas y mejora tu servicio. ¡Solicita asesoría personalizada!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Calificador de Servicio al Cliente: Opinión en Tiempo Real",
        description:
            "Captura la percepción real de tus clientes en segundos. Recibe alertas de calificaciones negativas y mejora tu servicio. ¡Solicita asesoría personalizada!",
    },
};


export default function VerMasOpinaMaster() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <CalificadorRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}