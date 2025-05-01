import Header from "@/app/components/Header/Header";
import altStyles from "../../../components/Header/HeaderAlt.module.scss";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import Articulo from "./Articulo";

export const metadata = {
    title: "Llamador de Entrenadores: Mejora la atención en gimnasios",
    description:
        "Mejora la atención en tu gimnasio con un llamador de entrenadores. Facilita la comunicación y brinda un servicio más eficiente.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/mejora-la-atencion-en-los-gimnasios-a-traves-del-llamador-de-entrenadores",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/mejora-la-atencion-en-los-gimnasios-a-traves-del-llamador-de-entrenadores",
        title: "Llamador de Entrenadores: Mejora la atención en gimnasios",
        description:
            "Mejora la atención en tu gimnasio con un llamador de entrenadores. Facilita la comunicación y brinda un servicio más eficiente.",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744202150/26_ezfnar.webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Llamador de Entrenadores: Mejora la atención en gimnasios",
        description:
            "Mejora la atención en tu gimnasio con un llamador de entrenadores. Facilita la comunicación y brinda un servicio más eficiente.",
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