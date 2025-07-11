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
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741635705/Frame_1_50_wda5sy.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742517358/NUEVA_4x-8_absvfy.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741635832/Frame_1_51_m0kx84.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740432241/3_4x-8_1_bfbqv1.webp",
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
        <h1>AVISO DE PARED PARA CALIFICAR SERVICIO</h1>
        <p>No te quedes sin saber la opinión de tus clientes.</p>
      </div>

      {/* Main Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        className={styles.mainSwiper}
        navigation={true}
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
          Diseñado para espacios sin contacto humano, este calificador de
          servicio para instalar en pared facilita la recolección de opiniones
          de forma práctica y discreta. Ideal para zonas de baños, áreas de
          autoservicio, zonas comunes, áreas de coworking y zonas silenciosas.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} /> 
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
