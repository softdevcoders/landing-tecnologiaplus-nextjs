"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/ProductGallery.module.scss";
import BackButton from "@/components/back-button";
import TinesPreguntasButton from "@/components/tines-preguntas-button";   

// Main gallery images - don't modify these constants during rendering
const GALLERY_IMAGES = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476098/Frame_1_5_cgypo1.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/2_4x-8_1_qcs5ym.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476842/Frame_1_10_gjnhca.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741640914/Frame_1_67_xia2au.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476255/Frame_1_6_ao3mbn.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476562/Frame_1_9_gvix9n.webp",
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
        <h1>
          PANTALLA T<span>1</span>-B
        </h1>
        <p>
          Muestra 1 llamado en pantalla,
          <br />
          hasta 15 en cola.
        </p>
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
          Pantalla para visualizar llamados del timbre de mesa. Facilita la
          atención al ser visible por varios meseros al mismo tiempo. Ideal para
          restaurantes, bares y clubes en áreas con menos de 15 mesas.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
