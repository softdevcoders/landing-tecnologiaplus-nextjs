import Header from "@/app/components/Header/Header";
import altStyles from "../../../components/Header/HeaderAlt.module.scss";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import Articulo from "./Articulo";

export const metadata = {
    title: "Llamado de Enfermería: Cómo mejorar el servicio en geriátricos",
    description:
        "Mejora la atención en tu hogar geriátrico con un llamado de enfermería. Simplifica el cuidado, aumenta la seguridad y adquiere el tuyo ahora. ¡Descúbrelo!",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/llamado-de-enfermeria-como-mejorar-el-servicio-en-geriatricos",
    },
    openGraph: {
        type: "article",
        locale: "es_ES",
        url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog-tecnologia-plus/articulos/llamado-de-enfermeria-como-mejorar-el-servicio-en-geriatricos",
        title: "Llamado de Enfermería: Cómo mejorar el servicio en geriátricos",
        description:
            "Mejora la atención en tu hogar geriátrico con un llamado de enfermería. Simplifica el cuidado, aumenta la seguridad y adquiere el tuyo ahora. ¡Descúbrelo!",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743783087/Imagen_de_WhatsApp_2025-04-04_a_las_11.06.54_1dcf04a8_gj6t2l.webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Llamado de Enfermería: Cómo mejorar el servicio en geriátricos",
        description:
            "Mejora la atención en tu hogar geriátrico con un llamado de enfermería. Simplifica el cuidado, aumenta la seguridad y adquiere el tuyo ahora. ¡Descúbrelo!",
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