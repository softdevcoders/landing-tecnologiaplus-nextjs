import React from "react";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import style from "./BlogCard.module.scss";

const BlogCard = ({
  title,
  description,
  imageSrc,
  altText,
  link,
  customClass,
  width, // Nuevo prop para cambiar ancho
  height, // Nuevo prop para cambiar alto
  titleFontSize, // Nuevo prop para tamaño de fuente del titulo
  descriptionFontSize, // Nuevo prop para tamaño de fuente de la descripción
  imageWidth, // Nuevo prop para ancho de imagen
  imageHeight, // Nuevo prop para alto de imagen
  imageObjectPosition,
  date, // Nuevo prop para mostrar fecha
  hideSocials = false, // Controla si se ocultan las redes
  dateFontSize, // para .card__date
  buttonFontSize, // para .card__btn
  buttonPadding, // para .card__btn
  descriptionMargin,
}) => {
  return (
    <div
      className={classNames(style.blog__card, style[customClass])}
      style={{ width: width || "auto", height: height || "auto" }}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className={style.card__image}
        style={{
          width: imageWidth || "100%",
          height: imageHeight || "auto",
          objectPosition: imageObjectPosition || "center",
        }}
      />
      <div className={style.card__content}>
        <h3
          className={style.card__title}
          style={{ fontSize: titleFontSize || "1.3rem" }}
        >
          {title}
        </h3>
        <p
          className={style.card__description}
          style={{
            fontSize: descriptionFontSize || "1rem",
            margin: descriptionMargin || "0.5rem 0 1rem 0",
          }}
        >
          {description}
        </p>

        <div className={style.social__container}>
          {date ? (
            <span
              className={style.card__date}
              style={{ fontSize: dateFontSize || "0.875rem" }}
            >
              {date}
            </span>
          ) : !hideSocials ? (
            <div className={style.social__icons}>
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944989/instagram_2x-8_bflzuj.webp"
                alt="Icono de Instagram"
                className={style.social__icon}
              />
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944985/facebook_2x-8_sy9pch.webp"
                alt="Icono de Facebook"
                className={style.social__icon}
              />
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944987/wpp_2x-8_tsgorp.webp"
                alt="Icono de WhatsApp"
                className={style.social__icon}
              />
            </div>
          ) : null}

          <a
            className={style.card__btn}
            href={link}
            style={{
              fontSize: buttonFontSize || "0.8rem",
              padding: buttonPadding || "0.5rem 1rem",
            }}
          >
            Leer más <IoIosArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
