import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import LogosSection from "./components/LogosSection/LogosSection";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "@/app/rollos-de-papel-termico/components/RelatedProducts/RelatedProducts.module.scss";
import RelatedProducts from "@/app/rollos-de-papel-termico/components/RelatedProducts/RelatedProducts";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export const metadata = {
    title: "Rollos de Papel Térmico: Calidad y Compatibilidad Garantizada",
    description:
        "Rollos térmicos para tickets y facturas. Variedad de tamaños y alta durabilidad. Compatibles con múltiples impresoras. ¡Compra directo de fabricante!",
    keywords: ["Rollos de Papel térmico"],
    openGraph: {
        title: "Rollos de Papel Térmico: Calidad y Compatibilidad Garantizada",
        description:
            "Rollos térmicos para tickets y facturas. Variedad de tamaños y alta durabilidad. Compatibles con múltiples impresoras. ¡Compra directo de fabricante!",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico/rollos-termicos",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rollos de Papel Térmico: Calidad y Compatibilidad Garantizada",
        description:
            "Rollos térmicos para tickets y facturas. Variedad de tamaños y alta durabilidad. Compatibles con múltiples impresoras. ¡Compra directo de fabricante!",
    },
};


export default function VerMasTermicos() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <LogosSection />
            <RelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}