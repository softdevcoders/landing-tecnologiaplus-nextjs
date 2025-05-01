import Header from "@/app/components/Header/Header";
import altStyles from "../../../components/Header/HeaderAlt.module.scss";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import Articulo from "./Articulo";

export const metadata = {
    title: "Sistema de Llamado de Enfermería - ¿Por qué usarlo?",
    description:
        "Descubre cómo un sistema de llamado de enfermería mejora la atención, reduce tiempos de espera y moderniza tu servicio. ¡Adquiérelo ahora!",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/por-que-usar-sistema-de-llamado-de-enfermeria",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/por-que-usar-sistema-de-llamado-de-enfermeria",
        title: "Sistema de Llamado de Enfermería - ¿Por qué usarlo?",
        description:
            "Descubre cómo un sistema de llamado de enfermería mejora la atención, reduce tiempos de espera y moderniza tu servicio. ¡Adquiérelo ahora!",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743860057/18_ygcenj.webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sistema de Llamado de Enfermería - ¿Por qué usarlo?",
        description:
            "Descubre cómo un sistema de llamado de enfermería mejora la atención, reduce tiempos de espera y moderniza tu servicio. ¡Adquiérelo ahora!",
    },

};


export default function BlogPostArticulo() {
    return (
        <>
            <Header
                customStyles={{
                    header: altStyles.altHeader,
                    phoneBtn: altStyles.altPhoneBtn,
                    searchIcon: altStyles.altSearchIcon,
                }}
            />
            <Articulo />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}