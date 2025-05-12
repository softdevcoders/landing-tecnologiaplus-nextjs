import ImageCloudinary from "@/components/ui/image-cloudinary";
import styles from "./landing-hero.module.scss";
import Link from "next/link";
import { landingHeros } from "@/config/landing-heros";
import ResponsiveImage from "@/components/ui/responsive-image";

const LandingHero = ({ title, subTitle, description, button, image, imageTextColumn, showBackground = true }) => {
  
  return (
    <div className={styles.landing_hero__container}>
      {showBackground && (
        <ResponsiveImage 
          className={styles.landing_hero__background} 
          image={landingHeros.background.image}
        />
      )}
      <div className={styles.landing_hero__content}>
        <div className={styles.landing_hero__content__image}>
          <ResponsiveImage 
            className={styles.landing_hero__content__image__img} 
            image={image}
          />
        </div>
        <div className={styles.landing_hero__content__text}>
          <div className={styles.landing_hero__content__text__image_container}>
            {imageTextColumn && (
              <ResponsiveImage 
                className={styles.landing_hero__content__text__image} 
                image={imageTextColumn}
              />
            )}
          </div>
          {title && subTitle && (
            <>
              <h1 className={styles.landing_hero__content__text__title}>
                {title}
              </h1>
              <h2 className={styles.landing_hero__content__text__subtitle}>
                {subTitle}
              </h2>
            </>
          )}
          {title && !subTitle && (
            <h1 className={styles.landing_hero__content__text__subtitle}>
              {title}
            </h1>
          )}
          <p className={styles.landing_hero__content__text__description}>
            {description}
          </p>
          {button && (
            <Link
              href={button.href}
              className={styles.landing_hero__content__text__button}
            >
              {button.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingHero;