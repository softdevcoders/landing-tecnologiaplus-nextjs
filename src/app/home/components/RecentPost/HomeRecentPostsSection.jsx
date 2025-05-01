import BlogCard from "../../../components/Cards/Blog/BlogCard";
import style from "./HomeRecentPostsSection.module.scss";
import { IoIosArrowForward } from "react-icons/io";

function HomeRecentPostsSection() {
  return (
    <section className={style.products__section}>
      <h2>Publicaciones recientes</h2>
      <div className={style.products__container}>
        <BlogCard
          title="¿Cómo integrar un dispensador de
turnos con tu sistema de gestión?"
          description="Lorem ipsum dolor sit amet, consectetuer
adipiscing elit, sed diam orem ipsum dol"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739206999/1_1_2x-8_vbgthg.png"
          altText="imagen de referencia"
          link="#"
          hideSocials="true"
        />

        <BlogCard
          title="¿Qué es un sistema de espera
inteligente y cómo funciona?"
          description="Lorem ipsum dolor sit amet, consectetuer
adipiscing elit, sed diam orem ipsum dol"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739206940/3_1_2x-8_znjln1.png"
          altText="imagen de referencia"
          link="#"
          customClass="custom__style__one"
          hideSocials="true"
        />

        <BlogCard
          title="¿Qué es el papel de transferencia
térmica y cómo usarlo en tu negocio?"
          description="Lorem ipsum dolor sit amet, consectetuer
adipiscing elit, sed diam orem ipsum dol"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739206967/2_1_2x-8_i8zygy.png"
          altText="imagen de referencia"
          link="#"
          hideSocials="true"
        />
      </div>
      <a
        href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog"
        className={style.btn__go_to_blog}
      >
        Visita nuestro blog
        <IoIosArrowForward className={style.icon__btn} />
      </a>
    </section>
  );
}

export default HomeRecentPostsSection;
