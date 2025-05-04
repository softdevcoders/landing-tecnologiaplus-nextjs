import { CldImage } from "next-cloudinary";
import styles from "./SliderHero.module.scss";
import Link from "next/link";

const SliderHeroItem = ({ title, image, description, button, priority, fetchPriority }) => {
  return (
    <div className={styles.slider__hero__content}>
      {/* Image Section */}
      <div className={styles.slider__hero__content__image}>
        <CldImage 
          className={styles.slider__hero__content__image__img}
          src={image.src}
          alt={image.alt}
          width={200}
          height={200}
          {...priority && { priority: true } }
          {...fetchPriority && { fetchPriority: "high" } }
        />
      </div>

      {/* Text Section */}
      <div className={styles.slider__hero__content__text}>
        <div className={styles.slider__hero__content__text__image_container}>
          {image.image_text_column && (
            <CldImage 
              className={styles.slider__hero__content__text__image}
              src={image.image_text_column.src}
              alt={image.image_text_column.alt}
              sizes="(max-width: 640px) 80vw, 
                (max-width: 768px) 60vw, 
                (max-width: 1024px) 40vw, 
                (max-width: 1280px) 30vw, 
                25vw"
              width={350}
              height={350}
            />
          )}
        </div>
        <h1 className={styles.slider__hero__content__text__title}>
          {title}
        </h1>
        <p className={styles.slider__hero__content__text__description}>
          {description}
        </p>
        {button && (
          <Link
            href={button.href}
            className={styles.slider__hero__content__text__button}
          >
            {button.text}
          </Link>
        )}
      </div>
    </div>
  );
};

export default SliderHeroItem;