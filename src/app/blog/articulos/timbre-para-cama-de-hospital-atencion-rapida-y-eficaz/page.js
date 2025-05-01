import Header from "@/app/components/Header/Header";
import altStyles from "../../../components/Header/HeaderAlt.module.scss";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import Articulo from "./Articulo";

export const metadata = {
    title: "Timbre para Cama de Hospital: Atención rápida y eficaz",
    description:
        "Un timbre para cama de hospital mejora la atención, agiliza la respuesta del personal de salud y reduce la carga laboral. Tecnología Plus te asesora.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/timbre-para-cama-de-hospital-atencion-rapida-y-eficaz",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/timbre-para-cama-de-hospital-atencion-rapida-y-eficaz",
        title: "Timbre para Cama de Hospital: Atención rápida y eficaz",
        description:
            "Un timbre para cama de hospital mejora la atención, agiliza la respuesta del personal de salud y reduce la carga laboral. Tecnología Plus te asesora.",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743712565/2-2-r2t8qbxf8mvesiss8ymnx9zqjfj67eus8hglr7abkw_klgqcz.webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Timbre para Cama de Hospital: Atención rápida y eficaz",
        description:
            "Un timbre para cama de hospital mejora la atención, agiliza la respuesta del personal de salud y reduce la carga laboral. Tecnología Plus te asesora.",
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