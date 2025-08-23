import style from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const defaultValues = {
  title: "",
  description: "",
  image: {
    mobile: "",
    desktop: "",
    alt: "",
  },
  button: null,
  brandImage: null,
};

const LandingHeroPortadaV2 = ({values = defaultValues}) => {
  const {title, description, image, button, brandImage} = values;

  return (
    <section className={style.landingHeroSection}>
      <div className={style.background__mobile}></div>
      <div className={style.background__desktop}></div>
      <div className={style.landingHeroSection__container}>
        <div className={style.landingHeroSection__content}>
          <div className={style.landingHeroSection__image}>
            <picture className={style.landingHeroSection__image__picture}>
              <source 
                media="(min-width: 1023px)"
                srcSet={image.desktop}
                type="image/webp"
              />
              <source 
                media="(min-width: 0px)"
                srcSet={image.mobile}
                type="image/webp"
              />
              <img
                src={image.desktop}
                alt={image.alt}
                loading="eager"
                fetchPriority="high"
              />
            </picture>
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
};

export default LandingHeroPortadaV2;