import ContactForm from "@/_app/components/ContactForm/ContactForm";
import WppBtn from "@/_app/components/WppBtn/WppBtn";
import Footer from "@/_app/components/Footer/Footer";
import style from "../../../llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";
import SecondaryHeader from "@/_app/components/SecondaryHeader/SecondaryHeader";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/_app/llamadores-de-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LogosSection from "../control-numerico/components/LogosSection/LogosSection";
import ProductGallerySelected from "./components/ProductGallery/ProductGallerySelected";

export default function VerMasMeserosHabladorParaMesa() {
    return (
        <>
            <ProductGallerySelected />
            <SecondaryHeader />
            <TechnicalSheet />
            <LogosSection />
            <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}