"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
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
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349920/image-1_1_ljyxis_qdsmdq.webp",
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
    customClass: style.turnomaster__img__custom,
  },
  {
    name: "Dispensador de tiquetes",
    description: "Complemento práctico para tomar el turno.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349966/dispensador_de_tiquetes_2x-8_qusuqr_fuxs8k.webp",
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
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738685536/Opinamaster_2x-8_sg1wyy.webp",
    sold: "18 vendidos",
    link: routes.landings.encuestaVirtual.url,
    category_key: categories.ENCUESTA_VIRTUAL_OPINAMASTER.category_key,
  },
  {
    name: "Calificador de servicios",
    description: "Toma decisiones con la opinión de tus clientes",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738607994/calificador_de_servicios_2x-8_pjnvol.webp",
    sold: "490 vendidos",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
    category_key: categories.CALIFICADOR_DE_SERVICIO_AL_CLIENTE_OPINAMASTER.category_key,
  },
  {
    name: "Llamadores de meseros",
    description: "El botón que eleva la calidad del servicio.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1743107327/NUEVA_4x-8_1_wyooar.webp",
    sold: "8.426 vendidos",
    link: routes.landings.llamadoresDeMeseros.url,
    category_key: categories.LLAMADORES_DE_MESEROS.category_key,
    customClass: style.llamadores__img__custom,
  },
];

function RelatedProducts({ productsKeys = [], isVerMasView = false }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30,
    dragFree: false,
    containScroll: 'trimSnaps',
    skipSnaps: false,
    inViewThreshold: 0.7,
    align: 'center',
    watchDrag: true,
    speed: 10,
    slidesToScroll: 1,
    breakpoints: {
      '(max-width: 768px)': { 
        dragFree: false,
        containScroll: 'keepSnaps',
        speed: 15,
        skipSnaps: false,
        watchDrag: true
      }
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const filteredProducts = productsKeys.map((key) => defaultProducts.find((product) => product.category_key === key));  

  return (
    <section className={style.related__products}>
      <div className={style.related__products__container}>
        <h2 className={`${style.related__products__title} ${isVerMasView ? style.related__products__title__ver__mas : ""}`}>Productos similares</h2>
        <div className={style.slider}>
          <div className={style.viewport} ref={emblaRef}>
            <div className={style.container}>
              {filteredProducts.map((product, index) => (
                <div 
                  key={index} 
                  className={style.slide}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${filteredProducts.length}`}
                >
                  <div className={style.swiper__slide__card}>
                    <div className={`${style.swiper__slide__card__info} ${product.shouldImageBeAtTheBottom ? style.swiper__slide__card__info__image__at__bottom : ""}`}>
                      <Link href={product.link}> 
                        <h3 className={style.swiper__slide__card__info__title}>{product.name}</h3>
                      </Link>
                      <Link href={product.link}> 
                        <p className={style.swiper__slide__card__info__description}>{product.description}</p>
                      </Link>
                      <Link href={product.link}> 
                        <div className={style.swiper__slide__card__info__img__container}>
                          <img
                            width={320} 
                            height={230}
                            src={product.img}
                            alt={`imagen de ${product.name}`}
                            className={`${style.swiper__slide__card__info__img} ${product.customClass ? product.customClass : ""}`}
                            loading="lazy"
                          />
                        </div>
                      </Link>
                      <p className={style.swiper__slide__card__info__selling__counter}>{product.sold}</p>
                    </div>
                    <Link className={style.swiper__slide__card__btn} href={product.link}>
                      Ver más
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            className={style.prev} 
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
          >
            <span className={style.prev__icon} />
          </button>
          <button 
            className={style.next} 
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next slide"
          >
            <span className={style.next__icon} />
          </button>
          <div 
            className={style.bullets}
            role="tablist"
            aria-label="Choose slide to display"
          >
            {filteredProducts.map((_, index) => (
              <span
                key={index}
                role="tab"
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === selectedIndex}
                className={style.bullet}
                onClick={() => scrollTo(index)}
                data-selected={index === selectedIndex}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollTo(index);
                  }
                }}
              />
            ))}
          </div>
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