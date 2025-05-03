"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./CalificadorRelatedProducts.module.scss";

function CalificadorRelatedProducts({ titleClassName = "" }) {
  const products = [
    {
      name: "TurnoMaster",
      description: "Digitaliza la gestión de turnos.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350030/TurnoMaster_2x-8_stvupu_tvjv5q.webp",
      sold: "194 vendidos",
      link: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/sistema-de-turnos/turnomaster",
      className: style.turnomaster__card,
    },
    {
      name: "TurnoExpress",
      description: "Rapidez y agilidad para tus filas.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp",
      sold: "692 vendidos",
      link: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero/turnoexpress",
    },
    {
      name: "CuidaMaster",
      description: "Transforma opiniones en acciones estratégicas.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596111/cuidamaster_2x-8_dlawzx.webp",
      sold: "9.825 vendidos",
      link: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/cuidamaster",
    },
  ];
  return (
    <section className={style.related__products}>
      <h2 className={`${style.defaultTitle} ${titleClassName}`}>
        Productos similares
      </h2>
      <div className={style.related__products__container}>
        <div className={style.card__container}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            /* autoplay={{ delay: 3000 }} */
            breakpoints={{
              640: { slidesPerView: 1 },
              868: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className={`${style.swiper__slide} ${product.className || ""}`}
              >
                <div className={style.related__products__card}>
                  <div className={style.card__info}>
                    <div className={style.card__text}>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                    <img
                      loading="lazy"
                      src={product.img}
                      alt={`imagen de ${product.name}`}
                    />
                  </div>
                  <p className={style.selling__counter}>{product.sold}</p>
                  <a className={style.card__btn} href={product.link}>
                    Ver más
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={style.related__products__specs}>
        <ul>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/xcbtnf1wh1en4taujsdx_avnfkj.webp"
              alt="icono pulgar arriba"
            />
            <p>Precios Justos</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/zpyfcqvsxo6wdubn2kdu_iuw7tl.webp"
              alt="icono de seguridad"
            />
            <p>Protección al comprador</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/jg3stajnopybox4xxdkd_favvxk.webp"
              alt="icono de excelencia"
            />
            <p>Garantía superior</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/ynuxn64wkw3nkqxl4tvo_lwqzi0.webp"
              alt="icono de Envíos en Colombia y Latinoamérica"
            />
            <p>Envíos en Colombia y Latinoamerica</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CalificadorRelatedProducts;
