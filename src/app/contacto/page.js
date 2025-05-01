
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import WppBtn from "../components/WppBtn/WppBtn";
import altStyles from "../components/Header/HeaderAlt.module.scss";
import ContactForm from "@/app/components/ContactForm/ContactForm";


export default function ContactoLanding() {

    return (
        <>
            <Header
                customStyles={{
                    header: altStyles.altHeader,
                    phoneBtn: altStyles.altPhoneBtn,
                    searchIcon: altStyles.altSearchIcon,
                    menuIcon: altStyles.altMenuIcon,
                }}
            />
            <ContactForm noMarginTop={true} />
            <WppBtn />
            <Footer />
        </>
    );
}