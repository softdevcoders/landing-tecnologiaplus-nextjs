"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/ProductGallery.module.scss";
import TinesPreguntasButton from "@/components/tines-preguntas-button";   
import BackButton from "@/components/back-button";

// Main gallery images - don't modify these constants during rendering
const GALLERY_IMAGES = [
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623334/Frame_1_34_g50ooz.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741624007/Frame_1_37_tfazpz.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623899/Frame_1_36_es8iv0.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743041711/20_4x-8_vcvvlc.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623763/Frame_1_35_gfrxdm.webp",
];

// Helper function to generate safe keys from URLs
const generateImageKey = (url, index) => {
  if (!url) return `img-${index}`;
  return `img-${url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."))}`;
};

function MobileProductGallery() {
  // Reference to swiper - more efficient than using state
  const swiperRef = useRef(null);

  return (
    <div className={styles.mobileGallery}>
      <div className={styles.action__nav}>
        <BackButton /> 
      </div>

      <div className={styles.container__titles}>
        <h1>CONTROL NUMÉRICO</h1>
        <p>Para llamar empleados o meseros desde cocina</p>
      </div>

      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className={styles.mainSwiper}
      >
        {GALLERY_IMAGES.map((img, index) => (
          <SwiperSlide key={generateImageKey(img, index)}>
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product information */}
      <div className={styles.container__info__products}>
        <p>
          Facilita la comunicación entre tus empleados con este práctico control
          que permite llamar uno o varios empleados al mismo tiempo. Ideal para
          restaurantes, hoteles y fábricas, agiliza la coordinación del equipo.
          ¡Responde a cada solicitud sin demoras!
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
