"use client";

import Image from "next/image";
import { useState } from "react";
import style from "./LocalizadoresProductsSection.module.scss";

function LocalizadoresProductsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        Más de 1.000 restaurantes usan nuestros localizadores
      </h2>
      <p className={style.products__description}>
        Elige el avisador de pedidos que mejor se adapte a tu negocio.
      </p>
      <div className={style.products__container}>
        <div className={style.products__container__item}>
          <Image
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_470/v1738851946/rec_v3_2x-8_ehwkxo.webp"
            alt="Localizador para clientes Rec V3"
            width={500}
            height={402}
            className={style.products__container__item__image}
          />
        </div>
        <div className={style.products__container__item}>
          <Image
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_600/v1738851948/cir_c2_2x-8_icgmcm.webp"
            alt="Localizador para restaurantes Cir C2"
            width={421}
            height={253}
            className={style.products__container__item__image}
          />
        </div>
      </div>
      <p className={`${style.products__text} ${isOpen ? style.open : ""}`}>
        Los localizadores de clientes de Tecnología Plus son la solución ideal
        para facilitar la entrega de pedidos en restaurantes autoservicio y
        otros sectores. Con un alcance de más de 200 metros, estos dispositivos
        permiten a los usuarios disfrutar su tiempo sin temor de perder su
        turno, ya que el avisador de pedidos vibra alumbra y suena para avisar
        cuando el pedido está listo. Marcas reconocidas los utilizan en sus
        plazoletas de comidas, mejorando la atención y resaltando su marca a
        través de publicidad impresa en los localizadores de clientes.
        Fabricados con material termoplástico resistente a golpes, garantizan
        durabilidad y fiabilidad para más años de vida útil. Además, contamos
        con los repuestos para ofrecer servicio técnico y así prolongar su vida
        útil. Su versatilidad los hace ideales no solo para restaurantes, sino
        también en el sector salud y otros sectores que buscan facilitar la
        entrega de pedidos o el llamado de turnos. Con modelos que se ajustan
        según la necesidad, es una solución escalable que se ajusta según el
        crecimiento de los negocios, los Localizadores para restaurantes de
        Tecnología Plus son la herramienta perfecta para transformar la
        experiencia de atención al cliente.
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

export default LocalizadoresProductsSection;
