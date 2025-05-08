import ImageCloudinary from "@/components/ui/image-cloudinary";
import styles from "./landing-hero.module.scss";
import Link from "next/link";

const LandingHero = ({ title, image, description, button, priority, fetchPriority }) => {
  return (
    <div className={styles.landing_hero__container}>
      <ImageCloudinary
        src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/jlxxsnlercoj0nihz4am_udppso.webp"
        alt="Background Image for Slider Hero"
        fill
        priority
        fetchPriority="high"
        sizes="(min-width: 1024px) 25vw, 100px"
        className={styles.landing_hero__background}
      />
      <div className={styles.landing_hero__content}>
        {/* Image Section */}
        <div className={styles.landing_hero__content__image}>
          <ImageCloudinary 
            className={styles.landing_hero__content__image__img}
            src={image.src}
            alt={image.alt}
            width={600}
            height={600}
            {...priority && { priority: true } }
            {...fetchPriority && { fetchPriority: "high" } }
          />
        </div>

        {/* Text Section */}
        <div className={styles.landing_hero__content__text}>
          <div className={styles.landing_hero__content__text__image_container}>
            {image.image_text_column && (
              <ImageCloudinary 
                className={styles.landing_hero__content__text__image}
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
          <h1 className={styles.landing_hero__content__text__title}>
            {title}
          </h1>
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