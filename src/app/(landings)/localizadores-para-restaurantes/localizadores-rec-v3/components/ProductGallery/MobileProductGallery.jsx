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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741622306/Frame_1_32_fg46my.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016956/3_4x-8_4_jpow97.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016956/1_4x-8_7_lw7jp3.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016955/4_4x-8_5_xujts9.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741622477/Frame_1_33_d1et3p.webp",
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
        <h1>Localizadores para restaurantes REC-V3</h1>
        <p>Tus clientes disfrutan el tiempo mientras esperan el pedido</p>
      </div>

      {/* Carrusel principal */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Información del producto */}
      <div className={styles.container__info__products}>
        <p>
          Con los Localizadores para restaurantes los clientes esperan su pedido
          sin temor de perder el turno, ya que el avisador de pedidos vibra y
          alumbra cuando el pedido está listo, evitando ruidos molestos para los
          demás clientes. Ideal para plazoletas de comida y restaurantes
          autoservicio.
        </p>

        <div className={styles.container__contact__info}>
          <a href="https://wa.me/573227347971" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.icon__wpp} />
            <h3>¿Tienes preguntas?</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
