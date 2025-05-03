import React from "react";
import classNames from "classnames";
import style from "./Card.module.scss";
import Link from "next/link";
import ImageCloudinary from "@/components/ui/image-cloudinary";

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
        <ImageCloudinary
          src={imageSrc}
          alt={altText}
          className={style.card__image}
          width={200}
          height={200}
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
