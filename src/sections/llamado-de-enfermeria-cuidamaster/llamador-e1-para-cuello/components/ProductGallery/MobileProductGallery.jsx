"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/ProductGallery.module.scss";
import TinesPreguntasButton from "@/components/tines-preguntas-button";   
import BackButton from "@/components/back-button";

function MobileProductGallery() {
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741473545/Frame_1_1_usrdgr.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740498992/4_4x-8_mwaldk.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741113379/2_4x-8_8_lmidfg.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1749567187/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/ver-mas/llamador-e1-para-cuello/x6hejabhrif3ncb2yl1m.jpg",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.mobileGallery}>


      <div className={styles.action__nav}>
        <BackButton /> 
      </div>

      <div className={styles.container__titles}>
        <h1>
          LLAMADOR DE ENFERMERÍA E<span>1</span> PARA USAR EN EL CUELLO
        </h1>
        <p>Siempre a la mano de tus pacientes</p>
      </div>

      {/* Carrusel principal */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className={styles.mainSwiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Información del producto */}
      <div className={styles.container__info__products}>
        <p>
          Botón de enfermería portátil, ligero y resistente al agua, ideal para
          adultos mayores o pacientes con movilidad reducida. Permite llamar a
          la enfermera fácilmente, mejorando el bienestar del paciente.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
