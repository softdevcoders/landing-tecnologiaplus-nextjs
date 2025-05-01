import Header from "@/app/components/Header/Header";
import altStyles from "../../../components/Header/HeaderAlt.module.scss";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import Articulo from "./Articulo";

export const metadata = {
    title: "Llamador de pacientes: Beneficios de estos sistemas",
    description:
        "Mejora la rentabilidad y eficiencia de tu clínica u hospital con un sistema de llamador de pacientes. ¡Aumenta tu productividad hoy mismo!",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/llamador-de-pacientes-conoce-los-beneficios-de-invertir-en-estos-sistemas",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/llamador-de-pacientes-conoce-los-beneficios-de-invertir-en-estos-sistemas",
        title: "Llamador de pacientes: Beneficios de estos sistemas",
        description:
            "Mejora la rentabilidad y eficiencia de tu clínica u hospital con un sistema de llamador de pacientes. ¡Aumenta tu productividad hoy mismo!",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744122648/IMG_4834-1_xzrvjs.webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Llamador de pacientes: Beneficios de estos sistemas",
        description:
            "Mejora la rentabilidad y eficiencia de tu clínica u hospital con un sistema de llamador de pacientes. ¡Aumenta tu productividad hoy mismo!",
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