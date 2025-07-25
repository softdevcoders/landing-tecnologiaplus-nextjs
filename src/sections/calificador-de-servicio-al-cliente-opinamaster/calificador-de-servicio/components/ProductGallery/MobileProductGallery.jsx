"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/ProductGallery.module.scss";
import TinesPreguntasButton from "@/components/tines-preguntas-button";
import BackButton from "@/components/back-button";

function MobileProductGallery() {
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636345/Frame_1_52_eqauh0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740507248/5_4x-8_gnfbpe.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740507247/6_4x-8_1_twnuh9.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636593/Frame_1_54_ek48dm.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636725/Frame_1_55_y91pzs.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636505/Frame_1_53_1_yivyaz.webp",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.mobileGallery}>


      <div className={styles.action__nav}>
        <BackButton /> 
      </div>

      <div className={styles.container__titles}>
        <h1>CALIFICADOR DE SERVICIO</h1>
        <p>Para crecer con la opinión de tus clientes</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className={styles.mainSwiper}
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={`slide-${img.substring(
              img.lastIndexOf("/") + 1,
              img.lastIndexOf(".")
            )}`}
          >
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.container__info__products}>
        <p>
          Dispositivo electrónico que mide la satisfacción de los usuarios una
          vez concluido el servicio prestado. Los datos se almacenan en un
          servidor web donde el cliente puede visualizar estadísticos para tomar
          decisiones acertadas. ¡Nunca había sido tan fácil mejorar la
          experiencia del usuario!
        </p>
        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
