import React from "react";
import classNames from "classnames";
import style from "./Card.module.scss";
import Link from "next/link";
import Image from "next/image";
import ResponsiveImage from "../../responsive-image";

const Card = ({
  title,
  description,
  imageSrc,
  altText,
  soldCount,
  link,
  customClass,
}) => {
  return (
    <div
      className={classNames(style.related__products__card, style[customClass])}
    >
      <div className={style.card__info}>
        <div className={style.card__text}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <ResponsiveImage
          image={{
            src: imageSrc,
            alt: altText,
            sizes: [
              { imageWidth: 400, mediaQuery: "(min-width: 0px)" }, 
              { imageWidth: 500, mediaQuery: "(min-width: 700px)" }, 
            ],
          }}
          src={imageSrc}
          alt={altText}
          className={style.card__image}
        />
      </div>
      {link && (
        <Link className={style.card__btn} href={link}>
          Ver más
        </Link>
      )}  
    </div>
  );
};

export default Card;
