import styleDefault from "@/components/landing-hero/landing-hero.module.scss"
import style from "./encuesta-virtual-cuidamaster-home-desktop.module.scss"
import ResponsiveImage from "@/components/ui/responsive-image";

const EncuestaVirtualCuidamasteHomeDesktop = ({ images }) => {
  return (
    <>
      {!Array.isArray(images) && (
        <div className={styleDefault.landing_hero__content__image}>
          <ResponsiveImage 
            className={styleDefault.landing_hero__content__image__img} 
            image={images}
          />
        </div>
      )}
      {Array.isArray(images) && (
        images.map((image, index) => (
          <div 
            key={index} 
            className={`${styleDefault.landing_hero__content__image} ${image.className}`}
          >
            <ResponsiveImage 
              className={`${styleDefault.landing_hero__content__image__img} ${style.encuestaVirtualImage}`} 
              image={image}
            />
          </div>
        ))
      )}
    </>
  );
}

export default EncuestaVirtualCuidamasteHomeDesktop;