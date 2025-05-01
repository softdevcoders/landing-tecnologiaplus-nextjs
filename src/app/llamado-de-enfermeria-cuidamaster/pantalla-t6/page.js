import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "../alarma-de-luz/components/LogosSection/LogosSection";
import TechnicalSheet from "@/app/ver-mas/meseros/pantalla-6-llamados/components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import EnfermeriaRelatedProducts from "@/app/llamado-de-enfermeria/cuidamaster/components/RelatedProducts/EnfermeriaRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Pantalla T6 para Enfermería: Monitorea 6 Llamados Simultáneos",
    description:
        "Visualiza fácilmente los llamados de habitaciones o áreas. Pantalla alfanumérica compatible con sistemas de timbre para enfermería. ¡Optimiza tu servicio!",
    keywords: ["Pantalla alfanumérica"],
    openGraph: {
        title: "Pantalla T6 para Enfermería: Monitorea 6 Llamados Simultáneos",
        description:
            "Visualiza fácilmente los llamados de habitaciones o áreas. Pantalla alfanumérica compatible con sistemas de timbre para enfermería. ¡Optimiza tu servicio!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/pantalla-t6",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pantalla T6 para Enfermería: Monitorea 6 Llamados Simultáneos",
        description:
            "Visualiza fácilmente los llamados de habitaciones o áreas. Pantalla alfanumérica compatible con sistemas de timbre para enfermería. ¡Optimiza tu servicio!",
    },
};


export default function VerMasMeserosPantalla6Llamados() {
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