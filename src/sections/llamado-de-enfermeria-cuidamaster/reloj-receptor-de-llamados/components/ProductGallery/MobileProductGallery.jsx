"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import styles from "@/styles/ProductGallery.module.scss";


import { ArrowBack } from "@/components/ui/icons";
import TinesPreguntasButton from "@/components/tines-preguntas-button";   

// Main gallery images - don't modify these constants during rendering
const GALLERY_IMAGES = [
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741555504/Frame_1_15_bwa18u.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740252992/6_4x-8_1_ihfzge.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740252992/7_4x-8_1_epxrf8.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740682202/6_4x-8_3_gqyivm.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741555843/Frame_1_16_iuugms.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742945524/Frame_1_7_gw2rf4.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742945617/Frame_1_8_r55rzo.webp",
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
        <button onClick={() => window.history.back()}>
          <ArrowBack className={styles.icon__back} /> Volver
        </button>
      </div>

      <div className={styles.container__titles}>
        <h1>Reloj receptor de llamados</h1>
        <p>Vibra y muestra el número de la cama.</p>
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
          Reloj receptor de llamados de enfermería, recibe alertas instantáneas
          facilitando la atención a los pacientes. Ideal en zonas específicas de
          hospitales y hogares geriátricos.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
