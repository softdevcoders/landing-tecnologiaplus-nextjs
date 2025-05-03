import ContactForm from "@/_app/components/ContactForm/ContactForm";
import WppBtn from "@/_app/components/WppBtn/WppBtn";
import Footer from "@/_app/components/Footer/Footer";
import style from "../../../turnero/turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts.module.scss";
import SecondaryHeader from "@/_app/components/SecondaryHeader/SecondaryHeader";
import LogosSection from "../control-numerico/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import LlamadorMeserosRelatedProducts from "@/_app/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export default function VerMasPantallaT1B() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}