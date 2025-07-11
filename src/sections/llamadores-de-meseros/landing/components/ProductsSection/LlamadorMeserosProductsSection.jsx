"use client";

import Image from "next/image";
import { useState } from "react";
import style from "./LlamadorMeserosProductsSection.module.scss";

function LlamadorMeserosProductsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={style.products__section}>
      <div className={style.products__container_mobile}>
        <div className={style.products__container__item}>
          <Image
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743022988/11_4x-8_1_sftupq.webp"
            alt="Reloj receptor de llamados para meseros"
            width={500}
            height={402}
            className={style.products__container__item__image}
          />
        </div>
        <div className={style.products__container__item}>
          <Image
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743022991/12_4x-8_km9kam.webp"
            alt="Hablador de mesa junto al botón para llamar al mesero"
            width={421}
            height={253}
            className={style.products__container__item__image}
          />
        </div>
      </div>
      <div className={style.products__container_desktop}>
        <div className={style.products__container__item}>
          <Image
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694397/Group_8_og4pea.webp"
            alt="Reloj receptor de llamados para meseros"
            width={500}
            height={402}
            className={style.products__container__item__image}
          />
        </div>
        <div className={style.products__container__item}>
          <Image
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694396/Group_9_yutx7u.webp"
            alt="Hablador de mesa junto al botón para llamar al mesero"
            width={421}
            height={253}
            className={style.products__container__item__image}
          />
        </div>
      </div>
      <p className={`${style.products__text} ${isOpen ? style.open : ""}`}>
        Eleva el nivel de tu negocio con el Llamador de Meseros. Este sistema
        permite que los clientes soliciten atención de manera rápida, discreta y
        sin interrumpir su conversación. Con solo pulsar un botón, el mesero
        recibe la alerta y acude a la mesa indicada en segundos. Nada de
        levantar la mano, esperar demasiado o llamar en voz alta. Con este
        sistema, la atención es más fluida, el servicio más ágil y la
        satisfacción del cliente aumenta considerablemente, impactando
        directamente en la reputación y fidelización de tu negocio.
      </p>
      <button
        className={style.toggle__label}
        onClick={() => setIsOpen(!isOpen)}
      > 
        {isOpen ? "Ver menos" : "Ver más"}
      </button>
    </section>
  );
}

export default LlamadorMeserosProductsSection;
