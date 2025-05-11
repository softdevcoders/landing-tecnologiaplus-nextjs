import { CldImage } from "next-cloudinary";
import styles from "./SliderHero.module.scss";
import Link from "next/link";
import ResponsiveImage from "@/components/ui/responsive-image";

const SliderHeroItem = ({ title, image, description, button, priority, fetchPriority }) => {
  return (
    <div className={styles.slider__hero__content}>
      <div className={styles.slider__hero__content__image}>
        {/* <CldImage 
          className={styles.slider__hero__content__image__img}
          src={image.src}
          alt={image.alt}
          width={600}
          height={600}
          {...priority && { priority: true } }
          {...fetchPriority && { fetchPriority: "high" } }
        /> */}
        <ResponsiveImage 
          className={styles.slider__hero__content__image__img}
          src={image.src}
          alt={image.alt}
          sizes={[
            { imageWidth: 300, mediaQuery: "(min-width: 0px)" }, 
            { imageWidth: 800, mediaQuery: "(min-width: 1200px)" }
          ]}
          {...priority && { priority: "true" } }
          {...fetchPriority && { fetchPriority: "high" } }
        />
      </div>

      {/* Text Section */}
      <div className={styles.slider__hero__content__text}>
        <div className={styles.slider__hero__content__text__image_container}>
          {image.image_text_column && (
            // <CldImage 
            //   className={styles.slider__hero__content__text__image}
            //   src={image.image_text_column.src}
            //   alt={image.image_text_column.alt}
            //   width={100}
            //   height={100}
            // />
            <ResponsiveImage 
              className={styles.slider__hero__content__image__img}
              src={image.image_text_column.src}
              alt={image.image_text_column.alt}
              sizes={[
                { imageWidth: 100, mediaQuery: "(min-width: 0px)" },
              ]}
              {...priority && { priority: "true" } }
              {...fetchPriority && { fetchPriority: "high" } }
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