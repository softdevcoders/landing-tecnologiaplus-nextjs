"use client";

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/app/ver-mas/styles/ProductGallery.module.scss";
import altStyles from "@/app/components/Header/HeaderAlt.module.scss";
import Header from "@/app/components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import classNames from "classnames";

// Main gallery images - don't modify these constants during rendering
const GALLERY_IMAGES = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741563948/Frame_1_20_1_kyyezr.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741564202/Frame_1_18_1_hx4udq.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745345004/Frame_1_36_fudaw4.webp",
  ];

// Color variants - don't modify these constants during rendering
const COLOR_VARIANTS = [
  {
    name: "Rojo",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741563948/Frame_1_20_1_kyyezr.webp",
    id: "red-light-alarm"
  },
  {
    name: "Azul",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741564202/Frame_1_18_1_hx4udq.webp",
    id: "blue-light-alarm"
  }
];

// Helper function to generate safe keys from URLs
const generateImageKey = (url, index) => {
  if (!url) return `img-${index}`;
  return `img-${url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."))}`;
};

function MobileProductGallery() {
  // References to both swipers - we'll create two separate swipers
  const gallerySwiperRef = useRef(null);
  const colorSwiperRef = useRef(null);
  
  // Track which view is active - 'gallery' or 'colors'
  const [activeView, setActiveView] = useState('gallery');
  
  // Track individual indexes for each view
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  
  // This will be true when we're actively switching views/slides to prevent double updates
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current color name
  const currentColorName = colorIndex >= 0 && colorIndex < COLOR_VARIANTS.length 
    ? COLOR_VARIANTS[colorIndex].name
    : '';

  // Handle clicking a gallery thumbnail
  const handleGalleryThumbnailClick = (index) => {
    if (activeView !== 'gallery') {
      setIsTransitioning(true);
      setActiveView('gallery');
      setGalleryIndex(index);
      
      // Give time for view to change before sliding
      setTimeout(() => {
        if (gallerySwiperRef.current?.swiper) {
          gallerySwiperRef.current.swiper.slideTo(index);
        }
        setIsTransitioning(false);
      }, 50);
    } else {
      // Already in gallery view, just update the index
      setGalleryIndex(index);
      if (gallerySwiperRef.current?.swiper) {
        gallerySwiperRef.current.swiper.slideTo(index);
      }
    }
  };

  // Handle clicking a color thumbnail
  const handleColorThumbnailClick = (index) => {
    if (activeView !== 'colors') {
      setIsTransitioning(true);
      setActiveView('colors');
      setColorIndex(index);
      
      // Give time for view to change before sliding
      setTimeout(() => {
        if (colorSwiperRef.current?.swiper) {
          colorSwiperRef.current.swiper.slideTo(index);
        }
        setIsTransitioning(false);
      }, 50);
    } else {
      // Already in colors view, just update the index
      setColorIndex(index);
      if (colorSwiperRef.current?.swiper) {
        colorSwiperRef.current.swiper.slideTo(index);
      }
    }
  };

  // Handle slide change for gallery swiper
  const handleGallerySlideChange = (swiper) => {
    if (!isTransitioning) {
      setGalleryIndex(swiper.realIndex);
    }
  };

  // Handle slide change for colors swiper
  const handleColorSlideChange = (swiper) => {
    if (!isTransitioning) {
      setColorIndex(swiper.realIndex);
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
        <h1>Alarma de luz</h1>
        <p>Alerta instantánea con luz y sonido</p>
      </div>

      {/* Gallery Swiper - only visible when activeView is 'gallery' */}
      <div style={{ display: activeView === 'gallery' ? 'block' : 'none' }}>
        <Swiper
          ref={gallerySwiperRef}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className={styles.mainSwiper}
          onSlideChange={handleGallerySlideChange}
          initialSlide={galleryIndex}
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
      </div>

      {/* Colors Swiper - only visible when activeView is 'colors' */}
      <div style={{ display: activeView === 'colors' ? 'block' : 'none' }}>
        <Swiper
          ref={colorSwiperRef}
          modules={[Navigation, Pagination]}
          pagination={false}
          loop={true}
          className={styles.mainSwiper}
          onSlideChange={handleColorSlideChange}
          initialSlide={colorIndex}
        >
          {COLOR_VARIANTS.map((color, index) => (
            <SwiperSlide key={color.id || `color-slide-${index}`}>
              <img
                src={color.url}
                alt={color.name}
                className={styles.mainImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className={styles.colorNameContainer}>
          <h3>{currentColorName}</h3>
          <div className={styles.container__colors}>
            {COLOR_VARIANTS.map((color, index) => (
              <div
                key={color.id || `color-dot-${index}`}
                className={`${styles.technical__circle__figure} ${
                  styles["color__" + color.name.replace(/\s+/g, "_").replace(/-/g, "_")]
                } ${colorIndex === index ? styles.selected : ""}`}
                onClick={() => handleColorThumbnailClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.thumbs__container}>
        <h3>Galería</h3>
        <div className={styles.thumbsRow}>
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={generateImageKey(img, index)}
              className={classNames(styles.thumb__Slide, {
                [styles.active]: activeView === 'gallery' && galleryIndex === index,
              })}
              onClick={() => handleGalleryThumbnailClick(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>

        <h3>Colores</h3>
        <div className={styles.thumbsRow}>
          {COLOR_VARIANTS.map((color, index) => (
            <div
              key={color.id || `thumb-${index}`}
              className={classNames(styles.thumb__Slide, {
                [styles.active]: activeView === 'colors' && colorIndex === index,
              })}
              onClick={() => handleColorThumbnailClick(index)}
            >
              <img src={color.url} alt={color.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Product information */}
      <div className={styles.container__info__products}>
        <p>
          Alarma visual y sonora compatible con llamado de enfermería, ideal
          para lugares con alto nivel de ruido, espacios amplios y pasillos
          largos, buscando facilitar la comunicación entre pacientes y el
          personal de enfermería.
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
