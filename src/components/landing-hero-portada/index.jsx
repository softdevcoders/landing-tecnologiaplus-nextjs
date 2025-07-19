import styles from "./styles.module.scss";
import Link from "next/link";
import { landingHeros } from "@/config/landing-heros";
import ResponsiveImage from "@/components/ui/responsive-image";
import Image from "next/image";

export const LandingHeroPortadaContainer = ({ className = "", children }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Image 
        {...landingHeros.background.images}
        className={`${styles.background} ${styles.background__desktop}`} 
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_${landingHeros.background.images.width}/${landingHeros.background.images.src}`}
        loading="eager"
        fetchPriority="high"
        priority
      />
      <Image 
        {...landingHeros.backgroundMobilePortada.images}
        className={`${styles.background} ${styles.background__mobile}`} 
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_${landingHeros.backgroundMobilePortada.images.width}/${landingHeros.backgroundMobilePortada.images.src}`}
        loading="eager"
        fetchPriority="high"
        priority
      />
      {children}
    </div>
  );
};

export const LandingHeroPortadaContent = ({ className = "", children }) => {
  return (
    <div className={`${styles.content} ${className}`}>
      {children}
    </div>
  )
}

export const LandingHeroPortadaContentImage = ({ children, className = "" }) => {
  return (
    <div className={`${styles.content__image} ${className}`}>
      {children}
    </div>
  )
}

export const LandingHeroPortadaContentImageImg = ({ image, className = "" }) => {
  return (
    <Image
      className={`${styles.content__image__img} ${className}`}
      {...image} 
      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_${image.width}/${image.src}`}
      loading="eager"
      fetchPriority="high"
      priority
      unoptimized={true}
    />
  )
}

export const LandingHeroPortadaContentText = ({children, className = ""}) => {
  return (
    <div className={`${styles.content__text} ${className}`}>
      {children}
    </div>
  ) 
}

export const LandingHeroPortadaContentTextTitle = ({className = "", isMobile = false, children}) => {
  return (
    // Se hace esto para que SEO no tome dos h1 en la misma pagina.
    <>
      {isMobile ? (  
        <h2 
          className={`${styles.content__text__title} ${className}`}
          dangerouslySetInnerHTML={{__html: children}}
        />
      ) : (
        <h1 
          className={`${styles.content__text__title} ${className}`}
          dangerouslySetInnerHTML={{__html: children}}
        />
      )}
    </>
  )
}

export const LandingHeroPortadaContentTextSubTitle = ({className = "", children}) => {
  return (
    <h2 
      className={`${styles.content__text__subTitle} ${className}`}
      dangerouslySetInnerHTML={{__html: children}}
    />
  ) 
}

export const LandingHeroPortadaContentTextDescription = ({className = "", children}) => {
  return (
    <p 
      className={`${styles.content__text__description} ${className}`}
      dangerouslySetInnerHTML={{__html: children}}
    />
  ) 
}

export const LandingHeroPortadaContentTextButton = ({className = "", href, children}) => {
  return (
    <Link href={href} className={`${styles.content__text__button} ${className}`} >
      {children}
    </Link>
  ) 
}

export const LandingHeroPortadaContentTextLogoBrand = ({className = "", image}) => {
  return (
    <div className={`${styles.content__text__image_container} ${className}`}>
      <Image
        className={styles.landing_hero__content__logo__brand__image} 
        {...image} 
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_${image.width}/${image.src}`}
        loading="lazy"
      />
    </div>
  )
}

export const LandingHeroPortadaContentDivider = ({className = ""}) => {
  const baseUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

  return (
    <Image
      className={`${styles.content__divider} ${className}`}
      src={`${baseUrl}/v1745196016/linea_2x-8_n80wv9_6a5e17-horizontal_giisl2.webp`}
      alt="divisor"
      width={400}
      height={5}
    />
  ) 
}


