import style from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export const LandingHeroPortada = ({ children, className = "" }) => {
  return (
    <section className={`${style.landingHeroSection} ${className}`}>
      <div className={style.background__mobile}></div>
      <div className={style.background__desktop}></div>
      {children}
    </section>
  )
};

export const LandingHeroPortadaContainer = ({ children, className = "" }) => {
  return (
    <div className={`${style.landingHeroSection__container} ${className}`}>
      {children}
    </div>
  )
}

export const LandingHeroPortadaContent = ({ children, className = "" }) => {
  return (
    <div className={`${style.landingHeroSection__content} ${className}`}>
      {children}
    </div>
  )
}

export const LandingHeroPortadaContentImage = ({ children, className = "" }) => {
  return (
    <div className={`${style.landingHeroSection__image} ${className}`}>
      {children}
    </div>
  )
}

export const LandingHeroPortadaContentImageImg = ({ image, isMobile = false, className = "" }) => {
  return (
    <div className={`${isMobile ? style.image__mobile : style.image__desktop} ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={isMobile ? style.image__mobile__image : style.image__desktop__image} 
        unoptimized={true}
      />
    </div>
  )
}

export const LandingHeroPortadaContentText = ({ children, className = "" }) => {
  return (
    <div className={`${style.landingHeroSection__text} ${className}`}>
      {children}
    </div>
  )
}

export const LandingHeroPortadaContentTextTitle = ({ children, className = "" }) => {
  return (
    <h1 className={`${style.title} ${className}`}>
      {children}
    </h1>
  )
}

export const LandingHeroPortadaContentDescription = ({ children, className = "" }) => {
  return (
    <h2 className={`${style.description} ${className}`}>
      {children}
    </h2>
  )
}

export const LandingHeroPortadaContentTextButton = ({ children, className = "", href }) => {
  return (
    <Link
      href={href}
      className={`${style.button} ${className}`}
    >
      {children}
    </Link>
  )
}

export const LandingHeroPortadaContentTextLogoBrand = ({ image, className = "" }) => {
  return (
    <div className={`${style.brandImage} ${className}`}>
      <Image 
        src={image.src} 
        alt={image.alt} 
        width={image.width} 
        height={image.height} 
        className={`${style.brandImage__image} ${className}`}
        unoptimized={true}
      />
    </div>
  )
}

export default LandingHeroPortada;