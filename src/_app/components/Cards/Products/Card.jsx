import React from "react";
import classNames from "classnames";
import style from "./Card.module.scss";

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
        <img
          loading="lazy"
          src={imageSrc}
          alt={altText}
          className={style.card__image}
        />
      </div>
      <a className={style.card__btn} href={link}>
        Ver más
      </a>
    </div>
  );
};

export default Card;
