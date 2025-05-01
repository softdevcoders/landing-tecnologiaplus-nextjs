import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "@/app/llamado-de-enfermeria-cuidamaster/alarma-de-luz/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Llamador de Enfermería E2 Blanco: Atención Inmediata",
    description:
        "Mejora la experiencia de pacientes en clínicas y hospitales con el llamador inalámbrico E2. Ágil, cómodo y fácil de usar. ¡Solicita asesoría hoy!",
    keywords: ["Llamado de enfermería inhalambrico"],
    openGraph: {
        title: "Llamador de Enfermería E2 Blanco: Atención Inmediata",
        description:
            "Mejora la experiencia de pacientes en clínicas y hospitales con el llamador inalámbrico E2. Ágil, cómodo y fácil de usar. ¡Solicita asesoría hoy!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/llamador-e2-blanco",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Llamador de Enfermería E2 Blanco: Atención Inmediata",
        description:
            "Mejora la experiencia de pacientes en clínicas y hospitales con el llamador inalámbrico E2. Ágil, cómodo y fácil de usar. ¡Solicita asesoría hoy!",
    },
};


export default function VerMasEnfermeriaLlamadorV2b() {
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