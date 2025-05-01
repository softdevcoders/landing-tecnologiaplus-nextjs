"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ProductGallery.module.scss";
import altStyles from "../../../../components/Header/HeaderAlt.module.scss";
import Header from "@/app/components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import classNames from "classnames";

const images = [
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/10_4x-8_4_zewff6.webp",
  "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743562353/Frame_1_10_amnnfc.webp",
];

const alternativeImages = [
  {
    name: "Blanco",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743540140/Frame_1_15_bei8yg.webp",
  },
  {
    name: "Verde",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743540141/Frame_1_14_ebh5tc.webp",
  },
  {
    name: "Rosa",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743540137/Frame_1_17_wytng7.webp",
  },
  {
    name: "Amarillo",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743540138/Frame_1_16_xajdgf.webp",
  },
  {
    name: "Azul",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743540101/Frame_1_18_mmrgzv.webp",
  },
];

function MobileProductGallery() {
  const mainSwiperRef = useRef(null);
  const [currentImages, setCurrentImages] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAlternative = alternativeImages.some(
    (img) => img.url === currentImages[0]
  );
  const isGallery = currentImages === images;

  const handleThumbnailClick = (imageSet, index) => {
    setCurrentImages(imageSet);
    setCurrentIndex(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
  };

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
        <h1>ROLLOS DE TURNOS</h1>
        <p>Varias opciones y colores, numeración clara y corte preciso.</p>
      </div>

      <Swiper
        ref={mainSwiperRef}
        modules={[Navigation, Pagination]}
        pagination={isAlternative ? false : { clickable: true }}
        navigation={true}
        loop={true}
        className={styles.mainSwiper}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      >
        {currentImages.map((img, index) => (
          <SwiperSlide
            key={`slide-${
              typeof img === "string"
                ? img.substring(img.lastIndexOf("/") + 1, img.lastIndexOf("."))
                : img.url.substring(
                    img.url.lastIndexOf("/") + 1,
                    img.url.lastIndexOf(".")
                  )
            }`}
          >
            <img
              src={typeof img === "string" ? img : img.url}
              alt={`Imagen ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isAlternative ? (
        <div className={styles.colorNameContainer}>
          <h3>{alternativeImages[currentIndex]?.name}</h3>
          <div className={styles.container__colors}>
            {alternativeImages.map((image, index) => (
              <div
                key={`color-${image.name}`}
                className={`${styles.technical__circle__figure} ${
                  styles["color__" + image.name]
                } ${currentIndex === index ? styles.selected : ""}`}
                onClick={() =>
                  handleThumbnailClick(
                    alternativeImages.map((alt) => alt.url),
                    index
                  )
                }
              ></div>
            ))}
          </div>
        </div>
      ) : null}

      <div className={styles.thumbs__container}>
        <h3>Galería</h3>
        <div className={styles.thumbsRow}>
          {images.map((img, index) => (
            <div
              key={`gallery-thumb-${img.substring(
                img.lastIndexOf("/") + 1,
                img.lastIndexOf(".")
              )}`}
              className={classNames(styles.thumb__Slide, {
                [styles.active]: isGallery && currentIndex === index,
              })}
              onClick={() => handleThumbnailClick(images, index)}
            >
              <img src={img} alt={`Thumbnail ${index}`} />
            </div>
          ))}
        </div>

        <h3>Colores</h3>
        <div className={styles.thumbsRow}>
          {alternativeImages.map((img, index) => (
            <div
              key={`color-thumb-${img.name}`}
              className={classNames(styles.thumb__Slide, {
                [styles.active]: !isGallery && currentIndex === index,
              })}
              onClick={() =>
                handleThumbnailClick(
                  alternativeImages.map((alt) => alt.url),
                  index
                )
              }
            >
              <img src={img.url} alt={img.name} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container__info__products}>
        <p>
          Rollos de tickets numerados para uso de Dispensador tipo Caracol,
          elimina las filas y facilita el llamado de turnos de forma ordenada.
          Perfectos para zonas de espera en sector salud y servicios. Producto
          de bajo costo con un alto beneficio.
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
