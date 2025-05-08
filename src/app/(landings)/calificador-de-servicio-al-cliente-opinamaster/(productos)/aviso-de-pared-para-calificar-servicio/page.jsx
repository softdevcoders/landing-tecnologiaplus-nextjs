import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/calificador-de-servicio-al-cliente/opinamaster/components/RelatedProducts/CalificadorRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "../../../../../sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "../../../../../sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/HowItWorks/HowItWorks";
import CalificadorRelatedProducts from "@/app/calificador-de-servicio-al-cliente/opinamaster/components/RelatedProducts/CalificadorRelatedProducts";
import LogosSection from "../../../../../sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/LogosSection/LogosSection";
import ProductGallerySelected from "../../../../../sections/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio/components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Aviso de Pared para Calificar Servicio: Opiniones Sin Contacto",
    description:
        "Recoge opiniones fácilmente en baños, áreas comunes y coworking. Calificador práctico y discreto para espacios sin contacto humano. ¡Mejora tu servicio!",
    keywords: ["AVISO DE PARED"],
    openGraph: {
        title: "Aviso de Pared para Calificar Servicio: Opiniones Sin Contacto",
        description:
            "Recoge opiniones fácilmente en baños, áreas comunes y coworking. Calificador práctico y discreto para espacios sin contacto humano. ¡Mejora tu servicio!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aviso de Pared para Calificar Servicio: Opiniones Sin Contacto",
        description:
            "Recoge opiniones fácilmente en baños, áreas comunes y coworking. Calificador práctico y discreto para espacios sin contacto humano. ¡Mejora tu servicio!",
    },
};


export default function VerMasAvisoDePared() {
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