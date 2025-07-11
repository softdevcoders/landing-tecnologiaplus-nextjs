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
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704871/Frame_1_74_a9sxmd.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741705063/Frame_1_76_arw9zm.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742650842/Frame_1_2_gstdv0.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704706/Frame_1_73_q4yt1c.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774378/6_4x-8_2_ytxttp.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745435101/Frame_1_37_zb9elr.webp",
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
        <h1>Turnero Transformer</h1>
        <p>Personalizados según la necesidad.</p>
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
          El Turnero transformer se fabrica según la necesidad, permite asignar
          un consecutivo de turnos diferente para cada producto o servicio.
          Puede funcionar en el sector gastronómico para atender autoservicio o
          en oficinas donde tienen una fila para cada tipo de servicio. Este
          tipo de turnero es ideal para negocios que desean mejorar el llamado
          de turnos sin alterar su forma de trabajar.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
