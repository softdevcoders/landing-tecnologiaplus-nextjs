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
import Link from "next/link";
import { routes } from "@/config/routes";

// Main gallery images - don't modify these constants during rendering
const GALLERY_IMAGES = [
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750866698/localizadores_cir_c2_25_06_2024_sk4gqn.jpg",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566057/Frame_1_24_n6ekz0.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/8_4x-8_4_okujsy.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/11_4x-8_5_yhlqcs.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741565927/Frame_1_23_gv9w1g.webp",
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
        <h1>Localizadores para restaurantes CIR-C2</h1>
        <p>Ideal para autoservicio, sin temor de perder el turno.</p>
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
          Los Localizadores para restaurantes Cir C2 mantienen las ventajas del
          modelo <Link className={styles.related__link_to_other_product} href={routes.landings.localizadoresParaRestaurantes.children.rec_v3.url}>Rec V3</Link> y además funciona con un control separado de los
          localizadores. Ideal para locales de comida que entregan el
          localizador en un punto distinto al de llamado.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
