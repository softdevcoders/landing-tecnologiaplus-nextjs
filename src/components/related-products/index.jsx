"use client";

import { Swiper, SwiperSlide } from "@/components/ui/SwiperDynamic";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import style from "./related-products.module.scss";
import { routes } from "@/config/routes";
import { categories } from "@/config/categories";

const defaultProducts = [
  {
    name: "Rollos de turnos",
    description: "Organiza y mejora el servicio.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1745436638/Frame_1_35_vku1gs_746c0e.webp",
    sold: "8.527 vendidos",
    link: routes.landings.rollosDeFichosParaTurnos.url,
    category_key: categories.ROLLOS_DE_FICHOS_PARA_TURNOS.category_key,
  },
  {
    name: "Rollos térmicos",
    description: "Perfectos para tickets, facturas y más.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/image-1_1_ljyxis_qdsmdq.webp",
    sold: "14.485 vendidos",
    link: routes.landings.rollosDePapelTermico.url,
    category_key: categories.ROLLOS_DE_PAPEL_TERMICO.category_key,
  },
  {
    name: "TurnoExpress",
    description: "Rapidez y agilidad para tus filas.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp",
    sold: "692 vendidos",
    link: routes.landings.turneroTurnoexpress.url,
    category_key: categories.TURNERO_TURNOEXPRESS.category_key,
  },
  {
    name: "TurnoMaster",
    description: "Digitaliza la gestión de turnos.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738350030/TurnoMaster_2x-8_stvupu_tvjv5q.webp",
    sold: "194 vendidos",
    link: routes.landings.sistemasDeTurnosTurnomaster.url,
    category_key: categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
  },
  {
    name: "Dispensador de tiquetes",
    description: "Complemento práctico para tomar el turno.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349966/dispensador_de_tiquetes_2x-8_qusuqr_fuxs8k.webp",
    sold: "2.686 vendidos",
    link: routes.landings.dispensadorDeTickets.url,
    category_key: categories.DISPENSADOR_DE_TICKETS.category_key,
  },
  {
    name: "Localizadores para restaurantes",
    description: "Lleva el autoservicio a otro nivel.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1741708165/NUEVA_etp9mi.webp",
    sold: "4.225 vendidos",
    link: routes.landings.localizadoresParaRestaurantes.url,
    category_key: categories.LOCALIZADORES_PARA_RESTAURANTES.category_key,
  },
  {
    name: "CuidaMaster",
    description: "Transforma opiniones en acciones estratégicas.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738596111/cuidamaster_2x-8_dlawzx.webp",
    sold: "9.825 vendidos",
    link: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
    category_key: categories.LLAMADO_DE_ENFERMERIA_CUIDAMASTER.category_key,
  },
  {
    name: "OpinaMaster",
    description: "Transforma opiniones en acciones estratégicas.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685536/Opinamaster_2x-8_sg1wyy.webp",
    sold: "18 vendidos",
    link: routes.landings.encuestaVirtual.url,
    category_key: categories.ENCUESTA_VIRTUAL_OPINAMASTER.category_key,
  },
  {
    name: "Calificador de servicios",
    description: "Toma decisiones con la opinión de tus clientes",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607994/calificador_de_servicios_2x-8_pjnvol.webp",
    sold: "490 vendidos",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
    category_key: categories.CALIFICADOR_DE_SERVICIO_AL_CLIENTE_OPINAMASTER.category_key,
  },
];

function RelatedProducts({ productsKeys = [] }) {
  const filteredProducts = productsKeys.map((key) => defaultProducts.find((product) => product.category_key === key));  

  return (
    <section className={style.related__products}>
      <div className={style.related__products__container}>
        <h2 className={style.related__products__title}>Productos similares</h2>
        <div className={style.swiper__container}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              868: { slidesPerView: 2 },
              1250: { slidesPerView: 3 },
            }}
          >
            {filteredProducts.map((product, index) => (
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
