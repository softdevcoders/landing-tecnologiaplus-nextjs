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
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741624303/Frame_1_38_ymaal6.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740172460/5_4x-8_5_m8fsct.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740172461/4_4x-8_5_ozbtbq.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741624505/Frame_1_39_yodrwy.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741624798/Frame_1_40_ywjh06.webp",
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
        <h1>HABLADOR DE MESA</h1>
        <p>Resalta tu marca con un espacio adecuado para el botón</p>
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
          Hablador de mesa para mostrar publicidad cerca a tus clientes. Ideal
          para restaurantes, hoteles y clubes. Incluye un espacio especial para
          colocar el botón de llamado de personal.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
