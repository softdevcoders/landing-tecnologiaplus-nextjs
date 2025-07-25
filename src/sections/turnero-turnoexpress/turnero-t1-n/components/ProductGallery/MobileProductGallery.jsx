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
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619121/Frame_1_26_fqmq3t.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619266/Frame_1_27_dylrz4.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619456/Frame_1_28_cygi5b.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619634/Frame_1_29_l8n9ct.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774378/6_4x-8_2_ytxttp.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741621668/Frame_1_30_dndw16.webp",
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
          Tunero T<span>1</span>-N
        </h1>
        <p>Turnos organizados en una pantalla que refleja tu marca.</p>
      </div>

      <Swiper
        ref={swiperRef}
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

      <div className={styles.container__info__products}>
        <p>
          Pantalla digital de gran formato para turnos o llamados con base en
          nuestro equipo más versatil y avanzado TurnoMaster® ahora con un
          módulo de audio especial, que permite al operador atender desde una
          aplicación táctil. No requiere software, es de fácil instalación y
          manejo por parte del operador.
        </p>
        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
