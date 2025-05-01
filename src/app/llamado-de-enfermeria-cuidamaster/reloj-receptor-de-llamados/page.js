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
    title: "Reloj Receptor de Llamados: Atención Ágil en Enfermería",
    description:
        "Recibe alertas instantáneas y vibra mostrando el número de cama. Ideal para personal de salud en hospitales y hogares geriátricos. ¡Solicita asesoría!",
    keywords: ["Reloj receptor de llamados de enfermería"],
    openGraph: {
        title: "Reloj Receptor de Llamados: Atención Ágil en Enfermería",
        description:
            "Recibe alertas instantáneas y vibra mostrando el número de cama. Ideal para personal de salud en hospitales y hogares geriátricos. ¡Solicita asesoría!",
        url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Reloj Receptor de Llamados: Atención Ágil en Enfermería",
        description:
            "Recibe alertas instantáneas y vibra mostrando el número de cama. Ideal para personal de salud en hospitales y hogares geriátricos. ¡Solicita asesoría!",
    },
};


export default function VerMasEnfermeriaRelojReceptor() {
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