import React from "react";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import style from "./BlogCard.module.scss";
import Link from "next/link";
import ImageCloudinary from "@/components/ui/image-cloudinary";

const BlogCard = ({
  title,
  description,
  imageSrc,
  altText,
  link,
  customClass,
  width,
  height,
  titleFontSize,
  descriptionFontSize,
  imageWidth,
  imageHeight,
  imageObjectPosition,
  date,
  hideSocials = false,
  dateFontSize,
  buttonFontSize,
  buttonPadding,
  descriptionMargin,
}) => {
  const renderSocialIcons = () => (
    <div className={style.social__icons}>
      {["instagram", "facebook", "wpp"].map((platform) => (
        <ImageCloudinary
          loading="lazy"
          width={20}
          height={20}
          key={platform}
          src={`https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944989/${platform}_2x-8.webp`}
          alt={`Icono de ${platform}`}
          className={style.social__icon}
        />
      ))}
    </div>
  );

  const renderDateOrSocials = () => {
    if (date) {
      return (
        <span
          className={style.card__date}
          style={{ fontSize: dateFontSize || "0.875rem" }}
        >
          {date}
        </span>
      );
    }
    if (!hideSocials) {
      return renderSocialIcons();
    }
    return null;
  };

  return (
    <div
      className={classNames(style.blog__card, style[customClass])}
      style={{ width: width || "auto", height: height || "auto" }}
    >
      <ImageCloudinary
        loading="lazy"
        width={200}
        height={200}
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
          {renderDateOrSocials()}
          <Link
            className={style.card__btn}
            href={link}
            style={{
              fontSize: buttonFontSize || "0.8rem",
              padding: buttonPadding || "0.5rem 1rem",
            }}
          >
            Leer más <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
