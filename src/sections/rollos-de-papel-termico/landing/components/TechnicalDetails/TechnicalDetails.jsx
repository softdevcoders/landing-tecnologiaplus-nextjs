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
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/v1761239490/papel_de_impresion_termica_para_turnos_qr",
    alt: "Etiqueta impresa con papel de impresión térmica para turnos con código QR",
    title: "Papel de impresión térmica ideal para etiquetas y turnos QR",
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
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1761239490/icono_papel_termico_gris_blanco",
    alt: "icono de papel térmico gris",
    title: "Papel térmico griss",
    width: 136,
    height: 128,
  },
  {
    label: "Distintos<br />tamaños", 
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1761239489/aicono_rollos_termicos_grises",
    alt: "Icono de Rollos térmicos gris con fondo blanco",
    title: "Icono de rollos térmicos grises",
    width: 153,
    height: 115,
  },
  { 
    label: "Tipo de uso:<br /> para impresora térmica",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1761239490/icono_impresora_papel_termico",
    alt: "Icono de impresora con papel térmico",
    title: "Icono de impresora termica con papel",
    width: 143,
    height: 145,
  },
  {
    label: "Compatible con la mayoría <br /> de impresoras térmicas.",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1761239490/icono_compatibilidad_impresoras_termicas",
    alt: "icono de compatibilidad con la mayoría de impresoras térmicas",
    title: "Icono compatibilidad con impresoras térmicas",
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
        <h2 className={style.title}>Ficha Técnica de los Rollos Térmicos</h2>
      </div>
      <div className={style.carousel_container}>
        <div className={style.carousel}>
          {colors.map((color) => (
            <div className={`${style.item} ${selectedColor === color.id ? style.selected : ""}`} key={color.id}> 
              <Image 
                src={color.src} 
                alt={color.alt}
                title={color.title}
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
          <h2>Características del papel de transferencia térmica</h2>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                {feature.figure ? (
                  <div className={style.figure} />
                ) : (
                  <Image 
                    src={feature.src} 
                    alt={feature.alt}
                    title={feature.title}
                    width={feature.width} 
                    height={feature.height} 
                    className={style.icon}
                    sizes="(max-width: 768px) 25vw, 10vw"
                    unoptimized={true}
                  />
                )}
                <h3 dangerouslySetInnerHTML={{ __html: feature.label }} />
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