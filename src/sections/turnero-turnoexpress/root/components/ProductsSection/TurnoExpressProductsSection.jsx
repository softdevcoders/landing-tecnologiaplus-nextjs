"use client";

import { routes } from "@/config/routes";
import style from "./TurnoExpressProductsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function TurnoExpressProductsSection() {

  const products = [
    {
      title: "Turnero T1-B",
      description: "294 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroT1B.url,
      type: "panel_turnos",
    },
    {
      title: "Turnero T1-N",
      description: "869 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T1N_2x-8_r4igzs.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroT1N.url,
      type: "panel_turnos",
    },
    {
      title: "Turnero fila única",
      description: "32 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Fila_unica_2x-8_iejxvf.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroFilaUnicaSupermercados.url,
      type: "panel_turnos",
    },
    {
      title: "Turnero T3",
      description: "692 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T3_2x-8_ypmexo.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroT3ModuloTurno.url,
      type: "panel_turnos",
    },
    {
      title: "Turnero Transformer",
      description: "82 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431730/Segun_producto_2x-8_fepwc0.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroTransformer.url,
      type: "panel_digital",
    },
    {
      title: "Turnero T3 - con logo",
      description: "269 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431729/T3_con_logo_2x-8_ofmcyp.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroT3ConLogo.url,
      type: "panel_digital",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={style.ver__mas__section}>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Una pantalla de turnos para cada necesidad
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "panel_turnos").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className={style.ver__mas__section__container__card__image__img}
                />
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <h3>{product.title}</h3>
                <Link
                  className={style.ver__mas__section__container__card__content__btn}
                  href={product.link}
                >
                  Ver más
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Turneros digitales personalizados
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "panel_digital").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className={style.ver__mas__section__container__card__image__img}
                />
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <h3>{product.title}</h3> 
                
                <Link
                  className={style.ver__mas__section__container__card__content__btn}
                  href={product.link}
                >
                  Ver más
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.description__section}>
          <p className={`${style.description__section__text} ${isOpen ? style.open : ""}`}>
            Dale a tus clientes la comodidad que merecen con TurnoExpress. Nuestro
            Turnero digital elimina las aburridas filas, brindando orden y comodidad
            para tu equipo de trabajo y para tus clientes. Con nuestra pantalla de
            turnos ayudas a mejorar el servicio y los tiempos de atención, mientras
            tus clientes esperan el turno de una forma más cómoda y sin estrés
            porque sabrán exactamente cuantos turnos faltan para ser atendidos.
          </p>
          <button
            className={style.toggle__label}
            onClick={() => setIsOpen(!isOpen)}
          > 
            {isOpen ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TurnoExpressProductsSection;


