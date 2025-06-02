"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import style from "./related-products.module.scss";

function RelatedProducts({ products }) {
  return (
    <section className={style.related__products}>
      <div className={style.related__products__container}>
        <h2 className={style.related__products__title}>Productos similares</h2>
        <div className={style.swiper__container}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              868: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className={style.swiper__slide}
              >
                <div className={style.swiper__slide__card}>
                  <div className={`${style.swiper__slide__card__info} ${product.shouldImageBeAtTheBottom ? style.swiper__slide__card__info__image__at__bottom : ""}`}>
                    <h3 className={style.swiper__slide__card__info__title}>{product.name}</h3>
                    <p className={style.swiper__slide__card__info__description}>{product.description}</p>
                    <div className={style.swiper__slide__card__info__img__container}>
                      <Image
                        width={320}
                        height={230}
                        src={product.img}
                        alt={`imagen de ${product.name}`}
                        className={style.swiper__slide__card__info__img}
                      />
                    </div>
                    <p className={style.swiper__slide__card__info__selling__counter}>{product.sold}</p>
                  </div>
                  <Link className={style.swiper__slide__card__btn} href={product.link}>
                    Ver más
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={style.related__products__specs}>
        <ul className={style.related__products__specs__list}>
          <li className={style.related__products__specs__list__item}>
            <div className={style.related__products__specs__list__item__icon}>
              <Image
                width={30}
                height={30}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/xcbtnf1wh1en4taujsdx_avnfkj.webp"
                alt="icono pulgar arriba"
                className={style.related__products__specs__list__item__icon__img}
              />
            </div>
            <p className={style.related__products__specs__list__item__text}>Precios Justos</p>
          </li>
          <li className={style.related__products__specs__list__item}>
            <div className={style.related__products__specs__list__item__icon}>
              <Image
                width={30}
                height={30}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/zpyfcqvsxo6wdubn2kdu_iuw7tl.webp"
                alt="icono de seguridad"
                className={style.related__products__specs__list__item__icon__img}
              />
            </div>
            <p className={style.related__products__specs__list__item__text}>Protección al comprador</p>
          </li>
          <li className={style.related__products__specs__list__item}>
            <div className={style.related__products__specs__list__item__icon}>
              <Image
                width={30}
                height={30}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349921/jg3stajnopybox4xxdkd_favvxk.webp"
                alt="icono de excelencia"
                className={style.related__products__specs__list__item__icon__img}
              />
            </div>
            <p className={style.related__products__specs__list__item__text}>Garantía superior</p>
          </li>
          <li className={style.related__products__specs__list__item}>
            <div className={style.related__products__specs__list__item__icon}>
              <Image
                width={30}
                height={30}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/ynuxn64wkw3nkqxl4tvo_lwqzi0.webp"
                alt="icono de Envíos en Colombia y Latinoamérica"
                className={style.related__products__specs__list__item__icon__img}
              />
            </div>
            <p className={style.related__products__specs__list__item__text}>Envíos en Colombia y Latinoamérica</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RelatedProducts;
