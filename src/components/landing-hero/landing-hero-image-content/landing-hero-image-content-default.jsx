import ResponsiveImage from "@/components/ui/responsive-image";
import styles from "@/components/landing-hero/landing-hero.module.scss";

const LandingHeroImageContentDefault = ({ images }) => {
  return (
    <>
      {!Array.isArray(images) && (
        <div className={styles.landing_hero__content__image}>
          <ResponsiveImage 
            className={styles.landing_hero__content__image__img} 
            image={images}
          />
        </div>
      )}
      {Array.isArray(images) && (
        images.map((image, index) => (
          <div 
            key={index} 
            className={`${styles.landing_hero__content__image} ${image.className}`}
          >
            <ResponsiveImage 
              className={styles.landing_hero__content__image__img} 
              image={image}
            />
          </div>
        ))
      )}
    </>
  );
}

export default LandingHeroImageContentDefault;