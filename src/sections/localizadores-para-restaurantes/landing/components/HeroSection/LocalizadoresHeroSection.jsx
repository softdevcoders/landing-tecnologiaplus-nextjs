import styles from "./LocalizadoresHeroSection.module.scss";
import ImageCloudinary from "@/components/ui/image-cloudinary";

function LocalizadoresHeroSection({
  backgroundTransparent = false,
  boton,
}) {
  const desktopImageUrl =
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744781254/Imagen_portada_4x-8_dfrjjg_1_1_lvtv17.webp";

  return (
    <section
      className={`${styles.hero} ${
        backgroundTransparent ? styles.transparent : ""
      }`}
    >
      <div className={styles.hero__content}>
        <ImageCloudinary
          className={styles.hero__img__desktop}
          src={desktopImageUrl}
          alt="Localizadores para clientes"
          width={800}
          height={600}
          loading="eager"
          fetchPriority="high"
        />

        <div className={styles.hero__text}>
          <h1>
            Localizadores para restaurantes:
            <br />
          </h1>
          <p>
            Tus clientes disfrutan el tiempo
            <br />
            sin temor de perder el turno.
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>
            <span>Localizadores</span>
            <br />
            para restaurantes
          </h1>
          <p>
            <span>
              Tus clientes disfrutan el
              <br />
              tiempo sin temor de
              <br />
              perder eI turno.
            </span>
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresHeroSection;
