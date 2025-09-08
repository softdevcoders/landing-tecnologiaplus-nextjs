"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import style from "./TechnicalDetails.module.scss";
import Link from "next/link";
import { routes } from "@/config/routes";

const colors = [
  {
    id: "blanco",
    label: "Blanco",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/w95mg3v5l3rz4s634bso_dqg6eq",
    alt: "rollos y etiquetas para impresoras termicas",
    width: 1789,
    height: 1415,
  },
];

const features = [
  {
    label: "Color: <br />Blanco",
    figure: true,
  },
  {
    label: "Material: <br />papel térmico",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/uq6mantgalzbg1cwabg2_lq36yt",
    alt: "icono de ticket gris",
    width: 136,
    height: 128,
  },
  {
    label: "Distintos<br />tamaños", 
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/mfucx7jyhfttrhehhv6f_gparqv",
    alt: "icono de Rollos térmicos",
    width: 153,
    height: 115,
  },
  { 
    label: "Tipo de uso:<br /> para impresora térmica",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/mklyxhubukpeobmbjxso_swt54w",
    alt: "icono de rollos termicos impresora",
    width: 143,
    height: 145,
  },
  {
    label: "Compatible con la mayoría <br /> de impresoras térmicas.",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/jacnophczhcmtv5jmrmt_vsmuoe",
    alt: "icono de símbolo de aprobación",
    width: 108,
    height: 104,
  },
];

function TurnosTechnicalDetails() {
  const [selectedColor, setSelectedColor] = useState("blanco");

  const handleColorClick = useCallback((colorId) => {
    setSelectedColor(colorId);
  }, [setSelectedColor]);

  return (
    <section className={style.technical__details} data-nosnippet> 
      <div className={style.header}>
        <h2 className={style.title}>Ficha Técnica</h2>
        <p className={style.description}>Rollos térmicos</p>
      </div>
      <div className={style.carousel_container}>
        <div className={style.carousel}>
          {colors.map((color) => (
            <div className={`${style.item} ${selectedColor === color.id ? style.selected : ""}`} key={color.id}> 
              <Image 
                src={color.src} 
                alt={color.alt} 
                width={color.width} 
                height={color.height}
                sizes="(max-width: 768px) 100vw, 80vw"
                onClick={() => handleColorClick(color.id)}
                className={style.image}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div> 
      <div className={style.info_container}>
        <div className={style.colors}>
          <span>Color - {colors.find((color) => color.id === selectedColor)?.label}</span>
          <ul>
            {colors.map((color) => (
              <li 
                key={color.id}
                className={`${style.color} ${style["color__" + color.id]} ${selectedColor === color.id ? style.selected : ""}`} 
                onClick={() => handleColorClick(color.id)}
              />
            ))}
          </ul>
        </div>
        <div className={style.features}>
          <span>Características</span>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                {feature.figure ? (
                  <div className={style.figure} />
                ) : (
                  <Image 
                    src={feature.src} 
                    alt={feature.alt} 
                    width={feature.width} 
                    height={feature.height} 
                    className={style.icon}
                    sizes="(max-width: 768px) 25vw, 10vw"
                    unoptimized={true}
                  />
                )}
                <p dangerouslySetInnerHTML={{ __html: feature.label }} />
              </li>
            ))}
          </ul>
        </div>
        <Link href={routes.landings.rollosDePapelTermico.children.rollosTermicos.url} className={style.button}>Ver más</Link>
      </div>
    </section>
  );
}

export default TurnosTechnicalDetails;