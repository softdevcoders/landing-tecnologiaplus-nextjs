import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/localizadores-para-restaurantes/components/RelatedProducts/LocalizadoresRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import LocalizadoresRelatedProducts from "@/app/localizadores-para-restaurantes/components/RelatedProducts/LocalizadoresRelatedProducts";
import LogosSection from "./components/LogosSection/LogosSection";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Localizadores CIR-C2: Solución para Autoservicio Eficiente",
    description:
        "Mantén el orden y mejora la entrega de pedidos con localizadores CIR-C2. Control separado y máxima eficiencia en restaurantes de autoservicio. ¡Solicita demo!",
    keywords: ["localizadores para restaurantes"],
    openGraph: {
        title: "Localizadores CIR-C2: Solución para Autoservicio Eficiente",
        description:
            "Mantén el orden y mejora la entrega de pedidos con localizadores CIR-C2. Control separado y máxima eficiencia en restaurantes de autoservicio. ¡Solicita demo!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/localizadores-para-restaurantes/localizadores-cir-c2",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Localizadores CIR-C2: Solución para Autoservicio Eficiente",
        description:
            "Mantén el orden y mejora la entrega de pedidos con localizadores CIR-C2. Control separado y máxima eficiencia en restaurantes de autoservicio. ¡Solicita demo!",
    },
};


export default function VerMasLocalizadoresCirC2() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <LocalizadoresRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}