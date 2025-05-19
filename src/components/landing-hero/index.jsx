import styles from "./landing-hero.module.scss";
import Link from "next/link";
import { landingHeros } from "@/config/landing-heros";
import ResponsiveImage from "@/components/ui/responsive-image";
import LandingHeroImageContent from "./landing-hero-image-content";
import Image from "next/image";

const LandingHero = (props) => {
  const { 
    title, 
    subTitle, 
    description, 
    button, 
    images, 
    imageTextColumn, 
    customTemplate = false,
    templateName = null 
  } = props;
  
  return (
    <div className={styles.landing_hero__container}>
      <div className={styles.landing_hero__content}>
        <LandingHeroImageContent 
          images={images} 
          customTemplate={customTemplate}
          templateName={templateName} 
        />
        <div className={styles.landing_hero__content__text}>
          <div className={styles.landing_hero__content__text__image_container}>
            {imageTextColumn && (
              <Image 
                className={styles.landing_hero__content__text__image} 
                width={imageTextColumn.width}
                height={imageTextColumn.height}
                alt={imageTextColumn.alt}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_${imageTextColumn.width}/${imageTextColumn.src}`}
              />
            )}
          </div>
          {title && subTitle && (
            <>
              {Array.isArray(title) && (
                <h1 className={styles.landing_hero__content__text__title}>
                  {title.map((item, index) => (
                    <span 
                      key={index} 
                      className={item.className}
                      dangerouslySetInnerHTML={{ __html: item.text }} 
                    />
                  ))}
                </h1>
              )}
              {!Array.isArray(title) && (
                <h1 
                  className={styles.landing_hero__content__text__title}
                  dangerouslySetInnerHTML={{ __html: title }} 
                />
              )}
              <h2 className={styles.landing_hero__content__text__subtitle}>
                {subTitle}
              </h2>
            </>
          )}
          {title && !subTitle && (
            <>
              {Array.isArray(title) && (
                <h1 className={styles.landing_hero__content__text__title}>
                  {title.map((item, index) => (
                    <span 
                      key={index} 
                      className={item.className}
                      dangerouslySetInnerHTML={{ __html: item.text }} 
                    />
                  ))}
                </h1>
              )}
              {!Array.isArray(title) && (
                <h1 
                  className={styles.landing_hero__content__text__title}
                  dangerouslySetInnerHTML={{ __html: title }} 
                />
              )}
            </>
          )}
          <p 
            className={styles.landing_hero__content__text__description}
            dangerouslySetInnerHTML={{ __html: description }} 
          />
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