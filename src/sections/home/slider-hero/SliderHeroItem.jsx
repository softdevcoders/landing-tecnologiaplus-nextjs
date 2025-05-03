import { CldImage } from "next-cloudinary";
import styles from "./SliderHero.module.scss";
import Link from "next/link";

/**
 * SliderHeroItem Component
 * 
 * Props:
 * - title (string): The title to display in the slider item.
 * - image (object): The image object containing:
 *   - src (string): The source URL of the image.
 *   - alt (string): The alt text for the image.
 * - description (string): The description text to display.
 * - button (object): The button object containing:
 *   - href (string): The URL the button links to.
 *   - text (string): The text to display on the button.
 */
const SliderHeroItem = ({ title, image, description, button }) => {
  return (
    <div className={styles.slider__hero__content}>
      {/* Image Section */}
      <div className={styles.slider__hero__content__image}>
        <CldImage 
          className={styles.slider__hero__content__image__img}
          src={image.src}
          alt={image.alt}
          width={350}
          height={350}
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