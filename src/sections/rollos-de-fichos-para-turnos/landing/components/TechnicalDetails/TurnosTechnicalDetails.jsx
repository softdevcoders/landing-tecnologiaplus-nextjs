"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import style from "./TurnosTechnicalDetails.module.scss";
import Link from "next/link";
import { routes } from "@/config/routes";

const colors = [
  {
    id: "azul",
    label: "Azul",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760130297/rollos_de_tickets_para_turnos_azules",
    alt: "Rollos de tickets para turnos color azul, compatibles con dispensadores automáticos",
    title: "Rollos de tickets para turnos azules para dispensadores",
  },
  {
    id: "amarillo",
    label: "Amarillo",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349971/rollos_amarillo_2x-8_p2ydov_xppmau.webp",
    alt: "imagen rollos de tickets amarillos",
    title: "Rollos de tickets para turnos color amarillo, compatibles con dispensadores automáticos",
  },
  {
    id: "verde",
    label: "Verde",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350026/rollos_verde_2x-8_n0r63p_gkrq0j.webp",
    alt: "imagen rollos de tickets verdes",
    title: "Rollos de tickets para turnos color verde, compatibles con dispensadores automáticos",
  },
  {
    id: "rosa",
    label: "Rosa",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349986/rollos_rosado_2x-8_oocdj4_d0tqzs.webp",
    alt: "imagen rollos de tickets rosas",
    title: "Rollos de tickets para turnos color rosa, compatibles con dispensadores automáticos",
  },
  {
    id: "blanco",
    label: "Blanco",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349971/rollos_blanco_2x-8_r2y66g_escez9.webp",
    alt: "imagen rollos de tickets blancos",
    title: "Rollos de tickets para turnos color blanco, compatibles con dispensadores automáticos",
  },
];

const features = [
  {
    id: "material",
    label: "Material: papel bond",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349968/iono_caracteristicas_1_2x-8_pnvmte_mfgdfd.webp",
    alt: "icono de ticket gris",
  },
  {
    id: "numeracion",
    label: "Varias opciones de numeración",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349968/iono_caracteristicas_3_2x-8_ypg8wb_esoytf.webp",
    alt: "icono de tipos de numeración gris",
  },
  { 
    id: "turno",
    label: "Asigna turnos en orden de llegada",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349968/iono_caracteristicas_2_2x-8_jkw2nh_w5ebni.webp",
    alt: "icono de turno numerado gris",
  },
  {
    id: "dispensador",
    label: "Funciona en dispensadores de turnos tipo caracol",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349968/iono_caracteristicas_4_2x-8_ppszke_c4zofk.webp",
    alt: "icono de dispensador de turnos gris",
  },
];

function TurnosTechnicalDetails() {
  const [selectedColor, setSelectedColor] = useState("azul");

  const handleColorClick = useCallback((colorId) => {
    setSelectedColor(colorId);
  }, [setSelectedColor]);

  return (
    <section className={style.technical__details} data-nosnippet> 
      <div className={style.technical__details__header}>
        <h2 className={style.technical__details__header__title}>Ficha técnica de los rollos de turnos</h2>
        {/* <Link href={routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url}> 
          <p className={style.technical__details__header__description}>Rollos de turnos</p>
        </Link> */}
      </div>
      <Link href={routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url} className={style.technical__details__carousel_container}> 
        <div className={style.technical__details__carousel}>
          {colors.map((color) => (
            <div className={`${style.technical__details__carousel__item} ${selectedColor === color.id ? style.selected : ""}`} key={color.id}>
              <Image 
                src={color.src} 
                alt={color.alt}
                title={color.title} 
                width={500} 
                height={500} 
                onClick={() => handleColorClick(color.id)}
                className={style.technical__details__carousel__item__image}
                unoptimized={true}
              />
            </div>
            ))}
        </div>
      </Link>
      <div className={style.technical__details__container}>
        <div className={style.technical__details__container__body}>
          <div className={style.technical__details__container__body__colors_container}>
            <span className={style.technical__details__container__body__colors_container__title}>Color - {colors.find((color) => color.id === selectedColor)?.label}</span>
            <div className={style.technical__details__container__body__colors_container__colors_list}>
              {colors.map((color) => (
                <div 
                  key={color.id}
                  className={`${style.technical__details__container__body__colors_container__colors_list__color} ${style["technical__details__container__body__colors_container__colors_list__color__" + color.id]} ${selectedColor === color.id ? style.selected : ""}`} 
                  onClick={() => handleColorClick(color.id)}
                />
              ))}
            </div>
          </div>
          <div className={style.technical__details__container__body__features_container}>
            <h2 className={style.technical__details__container__body__features_container__title}>Características de los tickets para turnos</h2>
            <div className={style.technical__details__container__body__features_container__features_list}>
              {features.map((feature) => (
                <div className={style.technical__details__container__body__features_container__features_list__feature} key={feature.id}>
                  <div className={style.technical__details__container__body__features_container__features_list__feature__icon}>
                    <Image 
                      src={feature.src} 
                      alt={feature.alt} 
                      width={200} 
                      height={200} 
                      className={style.technical__details__container__body__features_container__features_list__feature__icon__image}
                      unoptimized={true}
                    />
                  </div>
                  <h3 className={style.technical__details__container__body__features_container__features_list__feature__description}>{feature.label}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={style.technical__details__container__body__button_container}>
            <Link href={routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url} className={style.technical__details__container__body__button}>Ver más</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TurnosTechnicalDetails;