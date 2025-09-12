import Link from "next/link";
import Image from "next/image";
import styles from "./hero-content.module.scss";

const HeroContent = ({content, isFirstSlide}) => {
  const {
    titulo,
    descripcion,
    imagenes,
    boton = null,
    imagenDeMarca = null,
  } = content;

  const HeadingTag = isFirstSlide ? 'h1' : 'h2';
  
  return (
    <div className={styles.landing_hero__container}>
      <div className={styles.landing_hero__content}>
        {imagenes.map((imagen, index) => (
          <div 
            key={index} 
            className={`${styles.landing_hero__content__image} ${imagen.tipo === 'mobile' ? styles.landing_hero__content__image_mobile : styles.landing_hero__content__image_desktop}`}
          >
            <Image 
              className={styles.landing_hero__content__image__img} 
              width={imagen.width || 900}
              height={imagen.height || 680}
              alt={imagen.alt}
              src={imagen.src}
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
        ))}
        <div className={styles.landing_hero__content__text}>
          <div className={styles.landing_hero__content__text__image_container}>
            {imagenDeMarca && (
              <Image 
                className={styles.landing_hero__content__text__image} 
                width={imagenDeMarca.width}
                height={imagenDeMarca.height}
                alt={imagenDeMarca.alt}
                src={imagenDeMarca.src}
                unoptimized={true}
              />
            )}
          </div>
          <HeadingTag className={styles.landing_hero__content__text__title}>
            {titulo}
          </HeadingTag>
          <p 
            className={styles.landing_hero__content__text__description}
            dangerouslySetInnerHTML={{ __html: descripcion }} 
          />
          {boton && (
            <Link
              href={boton.href}
              className={styles.landing_hero__content__text__button}
            >
              {boton.texto}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;