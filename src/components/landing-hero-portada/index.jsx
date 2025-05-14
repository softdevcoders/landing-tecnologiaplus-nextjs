import styles from "./styles.module.scss";
import Link from "next/link";
import { landingHeros } from "@/config/landing-heros";
import ResponsiveImage from "@/components/ui/responsive-image";

export const LandingHeroPortadaContainer = ({ className = "", children }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <ResponsiveImage 
        className={styles.background} 
        image={landingHeros.background.images}
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
    <h2 className={`${styles.content__text__subTitle} ${className}`}>
      {children}
    </h2>
  ) 
}

export const LandingHeroPortadaContentTextDescription = ({className = "", children}) => {
  return (
    <p className={`${styles.content__text__description} ${className}`}>
      {children}
    </p>
  ) 
}

export const LandingHeroPortadaContentTextButton = ({className = "", href, children}) => {
  return (
    <Link href={href} className={`${styles.content__text__button} ${className}`} >
      {children}
    </Link>
  ) 
}


