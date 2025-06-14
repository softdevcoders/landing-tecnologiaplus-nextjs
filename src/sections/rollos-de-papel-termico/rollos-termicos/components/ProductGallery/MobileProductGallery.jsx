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
import Image from "next/image";

// Main gallery images - don't modify these constants during rendering
const GALLERY_IMAGES = [
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638695/Frame_1_60_sl57gi.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392044/2_2x-100_jikuc2.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743638601/Frame_2_9_da908b.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743638738/Frame_2_10_mjtfir.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743637906/Frame_2_7_ybq4g4.png",
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
        <h1>ROLLOS TÉRMICOS</h1>
        <p>Perfectos para tickets, facturas y más.</p>
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
            <Image
              width={485}
              height={382}
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
          Rollos de Papel térmico de alta calidad compatibles con múltiples
          modelos de impresoras térmicas. Contamos con Rollos térmicos en
          variedad de tamaños. ¡Somos fabricantes!
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
