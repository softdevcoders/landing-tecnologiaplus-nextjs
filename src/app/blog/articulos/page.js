import Header from "@/app/components/Header/Header";
import altStyles from "../../components/Header/HeaderAlt.module.scss";
import BlogPostEjemploUno from "./BlogPostEjemploUno";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";

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