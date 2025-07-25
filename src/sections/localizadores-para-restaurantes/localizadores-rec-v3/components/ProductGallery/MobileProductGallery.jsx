"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/ProductGallery.module.scss";
import TinesPreguntasButton from "@/components/tines-preguntas-button";     
import BackButton from "@/components/back-button";

function MobileProductGallery() {
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750429714/reemplazo_de_rec_v3_3x-100_eozpj4.jpg",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016956/3_4x-8_4_jpow97.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016956/1_4x-8_7_lw7jp3.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016955/4_4x-8_5_xujts9.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741622477/Frame_1_33_d1et3p.webp",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null); 

  return (
    <div className={styles.mobileGallery}>
      <div className={styles.action__nav}>  
        <BackButton /> 
      </div>

      <div className={styles.container__titles}>
        <h1>Localizadores para restaurantes REC-V3</h1>
        <p>Tus clientes disfrutan el tiempo mientras esperan el pedido</p>
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
          Con los Localizadores para restaurantes los clientes esperan su pedido
          sin temor de perder el turno, ya que el avisador de pedidos vibra y
          alumbra cuando el pedido está listo, evitando ruidos molestos para los
          demás clientes. Ideal para plazoletas de comida y restaurantes
          autoservicio.
        </p>

        <div className={styles.container__contact__info}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default MobileProductGallery;
