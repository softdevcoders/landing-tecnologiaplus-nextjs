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
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481332/Frame_1_13_pdmf7w.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481174/Frame_1_12_hhtcp2.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481453/Frame_1_14_dlksjz.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742652616/Frame_1_3_c5bdho.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740186399/1_4x-8_ehyify.webp",
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
        <h1>Pantalla T6</h1>
        <p>Muestra 6 llamados al mismo tiempo.</p>
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
          Pantalla alfanumérica compatible con timbre para enfermos, muestra los
          números de habitaciones o el área que requiere la atención. Visible
          para varias enfermeras.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
