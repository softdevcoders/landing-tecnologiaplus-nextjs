// "use client";
// import { useState } from "react";
// import style from "./TurnosTechnicalDetails.module.scss";
// import { routes } from "@/config/routes";
// import Link from "next/link";

// function TurnosTechnicalDetails() {
//   const [selectedColor, setSelectedColor] = useState("Azul");

//   const images = [
//     {
//       id: "Azul",
//       src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/rollos-azules_2x-8_1_zlde3h_bt9zne.webp",
//       alt: "imagen rollos de tickets azules",
//     },
//     {
//       id: "Amarillo",
//       src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349971/rollos_amarillo_2x-8_p2ydov_xppmau.webp",
//       alt: "imagen rollos de tickets amarillos",
//     },
//     {
//       id: "Verde",
//       src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350026/rollos_verde_2x-8_n0r63p_gkrq0j.webp",
//       alt: "imagen rollos de tickets verdes",
//     },
//     {
//       id: "Rosa",
//       src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349986/rollos_rosado_2x-8_oocdj4_d0tqzs.webp",
//       alt: "imagen rollos de tickets rosas",
//     },
//     {
//       id: "Blanco",
//       src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349971/rollos_blanco_2x-8_r2y66g_escez9.webp",
//       alt: "imagen rollos de tickets blancos",
//     },
//   ];

//   return (
//     <section className={style.technical__details}>
//       <div>
//         <h2 className={style.title__mobile}>Ficha Técnica</h2>
//         <p className={style.subtitle__mobile}>Rollos de turnos</p>
//       </div>
//       <div className={style.technical__carousel__container}>
//         {images.map((image) => (
//           <img
//             key={image.id}
//             src={image.src}
//             alt={image.alt}
//             loading="lazy"
//             className={
//               selectedColor === image.id ? style.visible : style.invisible
//             }
//           />
//         ))}
//       </div>
//       <div className={style.TechnicalDetails__container}>
//         <div className={style.technical__textContainer}>
//           <h2>Ficha Técnica</h2>
//           <p>Rollos de turnos</p>
//         </div>
//         <div className={style.technical__info}>
//           <h3>
//             Color -{" "}
//             {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
//           </h3>
//           <div className={style.container__colors}>
//             {images.map((image) => (
//               <div
//                 key={image.id}
//                 className={`${style.technical__circle__figure} ${
//                   style["color__" + image.id]
//                 } 
//         ${selectedColor === image.id ? style.selected : ""}`}
//                 onClick={() => setSelectedColor(image.id)}
//               ></div>
//             ))}
//           </div>
//         </div>
//         <div className={style.technical__info}>
//           <h3>Características</h3>
//           <ul>
//             <li>
//               <img
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349968/iono_caracteristicas_1_2x-8_pnvmte_mfgdfd.webp"
//                 alt="icono de ticket gris"
//               />
//               <p>
//                 Material:
//                 <br />
//                 papel bond
//               </p>
//             </li>
//             <li>
//               <img
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349968/iono_caracteristicas_3_2x-8_ypg8wb_esoytf.webp"
//                 alt="icono de tipos de numeración gris"
//               />
//               <p>
//                 Varias opciones
//                 <br />
//                 de numeración
//               </p>
//             </li>
//             <li>
//               <img
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349968/iono_caracteristicas_2_2x-8_jkw2nh_w5ebni.webp"
//                 alt="icono de turno numerado gris"
//               />
//               <p>
//                 Asigna turnos en
//                 <br />
//                 orden de llegada.
//               </p>
//             </li>
//             <li>
//               <img
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349968/iono_caracteristicas_4_2x-8_ppszke_c4zofk.webp"
//                 alt="icono de dispensador de turnos gris"
//               />
//               <p>
//                 Funciona en dispensadores
//                 <br />
//                 de turnos tipo caracol
//               </p>
//             </li>
//           </ul>
//         </div>

//         <Link
//           className={style.technical__details__btn}
//           href={routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url}
//         >
//           Ver más
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default TurnosTechnicalDetails;
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
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/rollos-azules_2x-8_1_zlde3h_bt9zne.webp",
    alt: "imagen rollos de tickets azules",
  },
  {
    id: "amarillo",
    label: "Amarillo",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349971/rollos_amarillo_2x-8_p2ydov_xppmau.webp",
    alt: "imagen rollos de tickets amarillos",
  },
  {
    id: "verde",
    label: "Verde",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350026/rollos_verde_2x-8_n0r63p_gkrq0j.webp",
    alt: "imagen rollos de tickets verdes",
  },
  {
    id: "rosa",
    label: "Rosa",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349986/rollos_rosado_2x-8_oocdj4_d0tqzs.webp",
    alt: "imagen rollos de tickets rosas",
  },
  {
    id: "blanco",
    label: "Blanco",
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349971/rollos_blanco_2x-8_r2y66g_escez9.webp",
    alt: "imagen rollos de tickets blancos",
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
    label: "Asigna turnos en orden de llegada.",
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
    <section className={style.technical__details}>
      <div className={style.technical__details__header}>
        <h2 className={style.technical__details__header__title}>Ficha Técnica</h2>
        <p className={style.technical__details__header__description}>Rollos de turnos</p>
      </div>
      <div className={style.technical__details__carousel_container}>
        <div className={style.technical__details__carousel}>
          {colors.map((color) => (
            <div className={`${style.technical__details__carousel__item} ${selectedColor === color.id ? style.selected : ""}`} key={color.id}>
              <Image 
                src={color.src} 
                alt={color.alt} 
                width={500} 
                height={500} 
                onClick={() => handleColorClick(color.id)}
                className={style.technical__details__carousel__item__image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={style.technical__details__container}>
        <div className={style.technical__details__container__body}>
          <div className={style.technical__details__container__body__colors_container}>
            <h3 className={style.technical__details__container__body__colors_container__title}>Color - {colors.find((color) => color.id === selectedColor)?.label}</h3>
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
            <h3 className={style.technical__details__container__body__features_container__title}>Características</h3>
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
                    />
                  </div>
                  <p className={style.technical__details__container__body__features_container__features_list__feature__description}>{feature.label}</p>
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