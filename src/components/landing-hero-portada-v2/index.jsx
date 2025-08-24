import style from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const defaultValues = {
  title: "",
  description: "",
  image: {
    mobile: {
      src: "",
      width: 0,
      height: 0,
    },
    desktop: {
      src: "",
      width: 0,
      height: 0,
    },
    alt: "",
  },
  button: null,
  brandImage: null,
};



export const LandingHeroPortada = ({ children, className = "" }) => {
  /* 
   return (
     <section className={style.landingHeroSection}>
       <div className={style.background__mobile}></div>
       <div className={style.background__desktop}></div>
       <div className={style.landingHeroSection__container}>
         <div className={style.landingHeroSection__content}>
           <div className={style.landingHeroSection__image}>
             <div className={style.image__mobile}>
               <Image
                 src={image.mobile.src}
                 alt={image.alt}
                 width={image.mobile.width}
                 height={image.mobile.height}
                 className={style.image__mobile__image}
                 unoptimized={true}
               />                
             </div>
             <div className={style.image__desktop}>
               <Image
                 src={image.desktop.src}
                 alt={image.alt}
                 width={image.desktop.width}
                 height={image.desktop.height}
                 className={style.image__desktop__image}
                 unoptimized={true}
               />
             </div>
           </div>
           <div className={style.landingHeroSection__text}>
             {brandImage && (
               <div className={style.brandImage}>
                 <Image
                   src={brandImage?.src}
                   alt={brandImage?.alt}
                   width={brandImage?.width}
                   height={brandImage?.height}
                   className={style.brandImage__image}
                   unoptimized={true}
                 />
               </div>
             )}
             <h1 className={style.title}>{title}</h1>
             <p className={style.description}>{description}</p>
             {button && (
               <Link
                 href={button.href}
                 className={style.button}
               >
                 {button.text}
               </Link>
             )}
           </div>
         </div>
       </div>
     </section>
   )
  */

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
    <div className={isMobile ? style.image__mobile : style.image__desktop}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={`${isMobile ? style.image__mobile__image : style.image__desktop__image} ${className}`}
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
    <p className={`${style.description} ${className}`}>
      {children}
    </p>
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