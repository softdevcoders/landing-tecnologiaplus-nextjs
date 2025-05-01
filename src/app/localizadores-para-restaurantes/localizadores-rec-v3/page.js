import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/localizadores-para-restaurantes/components/RelatedProducts/LocalizadoresRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import LocalizadoresRelatedProducts from "@/app/localizadores-para-restaurantes/components/RelatedProducts/LocalizadoresRelatedProducts";
import LogosSection from "@/app/localizadores-para-restaurantes/localizadores-cir-c2/components/LogosSection/LogosSection";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Localizadores para Restaurantes REC-V3: Experiencia Sin Espera",
    description:
        "Tus clientes esperan su pedido sin perder el turno. Avisador vibra y alumbra cuando el pedido está listo. Ideal para autoservicio y plazoletas de comida.",
    keywords: ["localizadores para restaurantes"],
    openGraph: {
        title: "Localizadores para Restaurantes REC-V3: Experiencia Sin Espera",
        description:
            "Tus clientes esperan su pedido sin perder el turno. Avisador vibra y alumbra cuando el pedido está listo. Ideal para autoservicio y plazoletas de comida.",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/localizadores-para-restaurantes/localizadores-rec-v3",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Localizadores para Restaurantes REC-V3: Experiencia Sin Espera",
        description:
            "Tus clientes esperan su pedido sin perder el turno. Avisador vibra y alumbra cuando el pedido está listo. Ideal para autoservicio y plazoletas de comida.",
    },
};


export default function VerMasLocalizadoresRecV3() {
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