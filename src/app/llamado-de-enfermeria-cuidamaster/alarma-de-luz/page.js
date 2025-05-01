import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";
import LogosSection from "./components/LogosSection/LogosSection";

export const metadata = {
    title: "Alarma de Luz para Enfermería: Atención Visual y Sonora",
    description:
        "Facilita la comunicación en hospitales con nuestra alarma de luz y sonido. Ideal para áreas amplias y entornos ruidosos. ¡Solicita tu cotización!",
    keywords: ["Alarma visual y sonora"],
    openGraph: {
        title: "Alarma de Luz para Enfermería: Atención Visual y Sonora",
        description:
            "Facilita la comunicación en hospitales con nuestra alarma de luz y sonido. Ideal para áreas amplias y entornos ruidosos. ¡Solicita tu cotización!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/alarma-de-luz",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alarma de Luz para Enfermería: Atención Visual y Sonora",
        description:
            "Facilita la comunicación en hospitales con nuestra alarma de luz y sonido. Ideal para áreas amplias y entornos ruidosos. ¡Solicita tu cotización!",
    },
};


export default function VerMasEnfermeriaAlarmaDeLuz() {
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