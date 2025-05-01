"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/app/ver-mas/styles/ProductGallery.module.scss";
import altStyles from "@/app/components/Header/HeaderAlt.module.scss";
import Header from "@/app/components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

function MobileProductGallery() {
  const images = [
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741474210/Frame_1_qdeikt.webp",
      alt: "Imagen 1",
      uniqueId: "1",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740581920/6_4x-8_2_ixyjhq.webp",
      alt: "Imagen 2",
      uniqueId: "2",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740581920/2_4x-8_2_oviatn.webp",
      alt: "Imagen 3",
      uniqueId: "3",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740581920/5_4x-8_1_ntaqff.webp",
      alt: "Imagen 4",
      uniqueId: "4",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741474429/Frame_1_2_azowe4.webp",
      alt: "Imagen 5",
      uniqueId: "5",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741474655/Frame_1_3_lrwc2g.webp",
      alt: "Imagen 6",
      uniqueId: "6",
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.mobileGallery}>
      <Header
        customStyles={{
          header: altStyles.altHeader,
          phoneBtn: altStyles.altPhoneBtn,
          searchIcon: altStyles.altSearchIcon,
          menuIcon: altStyles.altMenuIcon,
        }}
      />

      <div className={styles.action__nav}>
        <button onClick={() => window.history.back()}>
          <IoIosArrowBack className={styles.icon__back} /> Volver
        </button>
      </div>

      <div className={styles.container__titles}>
        <h1>
          LLAMADOR DE ENFERMERÍA EX<span>1</span>
        </h1>
        <p>Con cable extensor para alcanzar la cama.</p>
      </div>

      {/* Carrusel principal */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
      >
        {images.map((img) => (
          <SwiperSlide key={img.uniqueId}>
            <img src={img.src} alt={img.alt} className={styles.mainImage} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Información del producto */}
      <div className={styles.container__info__products}>
        <p>
          Sistema de timbres para habitaciones con cable flexible, ideal para
          camas hospitalarias y hogares geriátricos. Facilita la comunicación
          entre pacientes y el personal de salud.
        </p>

        <div className={styles.container__contact__info}>
          <a href="https://wa.me/573164682034" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.icon__wpp} />
            <h3>¿Tienes preguntas?</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
