import styleDefault from "@/components/landing-hero/landing-hero.module.scss"
import style from "./llamado-enfermeria-home-desktop.module.scss"
import Image from "next/image";

const LLamadoEnfermeriaHomeDesktop = ({ images }) => {
  return (
    <>
      {!Array.isArray(images) && (
        <div className={styleDefault.landing_hero__content__image}>
          <Image 
            className={styleDefault.landing_hero__content__image__img} 
            width={900}
            height={680}
            alt={images.alt}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_900/${images.src}`}
            loading="lazy"
          />
        </div>
      )}
      {Array.isArray(images) && (
        images.map((image, index) => (
          <div 
            key={index} 
            className={`${styleDefault.landing_hero__content__image} ${image.className}`}
          >
            <Image 
              className={`${styleDefault.landing_hero__content__image__img} ${style.llamadoEnfermeriaImage}`} 
              width={900}
              height={680}
              alt={image.alt}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_900/${image.src}`}
              loading="lazy"
            />
          </div>
        ))
      )}
    </>
  );
}

export default LLamadoEnfermeriaHomeDesktop;