import styles from "./styles.module.scss";
import Link from "next/link";
import { landingHeros } from "@/config/landing-heros";
import ResponsiveImage from "@/components/ui/responsive-image";

export const LandingHeroPortadaContainer = ({ className = "", children }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <ResponsiveImage 
        className={`${styles.background} ${styles.background__desktop}`} 
        image={landingHeros.background.images}
      />
      <ResponsiveImage 
        className={`${styles.background} ${styles.background__mobile}`} 
        image={landingHeros.backgroundMobilePortada.images}
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
    <ResponsiveImage 
      className={`${styles.content__image__img} ${className}`} 
      image={image}
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

export const LandingHeroPortadaContentTextTitle = ({className = "", children}) => {
  return (
    <h1 className={`${styles.content__text__title} ${className}`}>
      {children}
    </h1>
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
    <div className={`${styles.landing_hero__content__logo__brand__image_container} ${className}`}>
      <ResponsiveImage 
        className={styles.landing_hero__content__logo__brand__image} 
        image={image}
      />
    </div>
  )
}

export const LandingHeroPortadaContentDivider = ({className = ""}) => {
  return (
    <ResponsiveImage 
      className={`${styles.content__divider} ${className}`} 
      image={{
        src: "v1745196016/linea_2x-8_n80wv9_6a5e17-horizontal_giisl2.webp",
        alt: "Turnero digital",
        sizes: [
          { imageWidth: 400, mediaQuery: "(min-width: 0px)" }, 
        ],
      }}
    />
  ) 
}


