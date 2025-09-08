import styleDefault from "@/components/landing-hero/landing-hero.module.scss"
import style from "./encuesta-virtual-cuidamaster-home-desktop.module.scss"
import Image from "next/image";

const EncuestaVirtualCuidamasteHomeDesktop = ({ images }) => {
  return (
    <>
      {!Array.isArray(images) && (
        <div className={styleDefault.landing_hero__content__image}>
          <Image 
            className={styleDefault.landing_hero__content__image__img} 
            width={900}
            height={680}
            alt={images.alt}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_webp,q_70,w_${image.width || 900}/${images.src}`}
            {...images.fetchPriority ? { fetchPriority: images.fetchPriority, priority: 'high' } : { loading: "lazy" }}
            unoptimized={true}
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
              className={`${styleDefault.landing_hero__content__image__img} ${style.encuestaVirtualImage}`} 
              width={900}
              height={680}
              alt={image.alt}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_webp,q_70,w_${image.width || 900}/${image.src}`}
              {...image.fetchPriority ? { fetchPriority: image.fetchPriority, priority: 'high' } : { loading: "lazy" }}
              unoptimized={true}
            />
          </div>
        ))
      )}
    </>
  );
}

export default EncuestaVirtualCuidamasteHomeDesktop;