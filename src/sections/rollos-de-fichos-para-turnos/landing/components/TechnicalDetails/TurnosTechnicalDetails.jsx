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
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760461853/rollos_de_tickets_para_turnos_amarillos",
    alt: "Rollos de tickets para turnos color amarillo, resistentes y visibles para una gestión de atención ágil",
    title: "Rollos de tickets para turnos amarillos ideales para alto flujo de clientes",
  },
  {
    id: "verde",
    label: "Verde",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760461853/rollo_de_turnos_verde",
    alt: "Rollo de turnos color verde ideal para organizar filas y gestionar la atención al cliente",
    title: "Rollo de turnos verde para un sistema de atención eficiente",
  },
  {
    id: "rosa",
    label: "Rosa",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760461854/rollos_de_fichos_para_turnos_rosados",
    alt: "Rollos de fichos para turnos rosados usados en puntos de atención y comercios concurridos",
    title: "Rollos de fichos para turnos color rosado para control de filas",
  },
  {
    id: "blanco",
    label: "Blanco",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760461853/rollo_de_numeros_para_turnos_blancos",
    alt: "Rollo de números para turnos blancos ideal para puntos de servicio y atención al cliente",
    title: "Rollo de números para turnos blanco para organización de filas",
  },
];

const features = [
  {
    id: "material",
    label: "Material: papel bond",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760462979/icono_caracteristicas_ficho_para_turno_gris",
    alt: "Icono de características del ficho para turnos gris",
    title: "Icono del ficho para turnos gris",
  },
  {
    id: "numeracion",
    label: "Varias opciones de numeración",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760462980/icono_caracteristicas_fichos_alfanumericos",
    alt: "Icono características de los fichos alfanuméricos gris",
    title: "Icono de los fichos alfanuméricos",
  },
  { 
    id: "turno",
    label: "Asigna turnos en orden de llegada",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760462980/icono_caracteristicas_tickets_turnos_alfanumericos",
    alt: "Icono características de los tickets turnos alfanuméricos gris",
    title: "Icono de los tickets turnos alfanuméricos gris",
  },
  {
    id: "dispensador",
    label: "Funciona en dispensadores de turnos tipo caracol",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760462980/icono__caracteristicas_dispensador_de_turnos",
    alt: "Icono características del dispensador de turnos gris",
    title: "Icono del dispensador de turnos gris",
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
                      title={feature.title}
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