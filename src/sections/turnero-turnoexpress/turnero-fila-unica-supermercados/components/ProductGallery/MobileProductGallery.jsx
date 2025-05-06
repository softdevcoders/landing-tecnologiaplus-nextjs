"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/app/ver-mas/styles/ProductGallery.module.scss";
import altStyles from "@/app/components/Header/HeaderAlt.module.scss";
import Header from "@/app/components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

// Main gallery images - don't modify these constants during rendering
const GALLERY_IMAGES = [
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741639150/Frame_1_61_oytf51.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741640170/Frame_1_64_accs3g.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741639905/Frame_1_63_oxeepw.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741640270/Frame_1_65_xczehx.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739997884/4_4x-8_zjhzm0.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741639603/Frame_1_62_waa0ey.webp",
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
      <Header
        customStyles={{
          header: altStyles.altHeader,
          phoneBtn: altStyles.altPhoneBtn,
          searchIcon: altStyles.altSearchIcon,
          menuIcon: altStyles.altMenuIcon,
        }}
      />

      <div className={styles.action__nav}>
        <button onClick={() => window.history.back()}>
          <IoIosArrowBack className={styles.icon__back} /> Volver
        </button>
      </div>

      <div className={styles.container__titles}>
        <h1>Turnero fila única - supermercados</h1>
        <p>
          Una sola fila para agilizar la atención en cajas y mejorar el
          servicio.
        </p>
      </div>

      {/* Main Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
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
          La Pantalla Fila Única permite organizar a todas las personas en una
          sola fila, la pantalla muestra el número de caja o ventanilla que está
          libre. Este sistema ha ganado popularidad en supermercados y lugares
          con alta afluencia de personas, ya que mejora el orden, reduce la
          confusión y agiliza la atención al evitar múltiples filas.
        </p>

        <div className={styles.container__contact__info}>
          <a href="https://wa.me/573164682034" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.icon__wpp} />
            <h3>¿Tienes preguntas?</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
