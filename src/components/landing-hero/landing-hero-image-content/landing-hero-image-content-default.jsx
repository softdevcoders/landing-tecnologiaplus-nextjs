import ResponsiveImage from "@/components/ui/responsive-image";
import styles from "@/components/landing-hero/landing-hero.module.scss";
import Image from "next/image";

const LandingHeroImageContentDefault = ({ images }) => {
  return (
    <>
      {!Array.isArray(images) && (
        <div className={styles.landing_hero__content__image}>
          <Image 
            className={styles.landing_hero__content__image__img} 
            width={900}
            height={680}
            alt={images.alt}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_900/${images.src}`}
          />
        </div>
      )}
      {Array.isArray(images) && (
        images.map((image, index) => (
          <div 
            key={index} 
            className={`${styles.landing_hero__content__image} ${image.className}`}
          >
            <Image 
              className={styles.landing_hero__content__image__img} 
              width={image.width || 900}
              height={image.height || 680}
              alt={image.alt}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_${image.width || 900}/${image.src}`}
              {...image.fetchPriority && { fetchPriority: image.fetchPriority, loading: 'eager', priority: true }}
            />
          </div>
        ))
      )}
    </>
  );
}

export default LandingHeroImageContentDefault;