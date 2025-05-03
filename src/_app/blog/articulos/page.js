import Header from "@/components/layout/header/Header";
import altStyles from "../../components/Header/HeaderAlt.module.scss";
import BlogPostEjemploUno from "./BlogPostEjemploUno";
import ContactForm from "@/_app/components/ContactForm/ContactForm";
import WppBtn from "@/_app/components/WppBtn/WppBtn";
import Footer from "@/_app/components/Footer/Footer";

export default function BlogPostArticuloUno() {
    return (
        <>
            <Header
                customStyles={{
                    header: altStyles.altHeader,
                    phoneBtn: altStyles.altPhoneBtn,
                    searchIcon: altStyles.altSearchIcon,
                }}
            />
            <BlogPostEjemploUno />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}