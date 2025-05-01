import styles from "./HeroSection.module.scss";
import Header from "../../../components/Header/Header";

function HeroSection({
  hideHeader = false,
  backgroundTransparent = false,
  boton,
}) {
  return (
    <section
      className={`${styles.hero} ${
        backgroundTransparent ? styles.transparent : ""
      }`}
    >
      {!hideHeader && <Header />}
      <div className={styles.hero__content}>
        <img
          className={styles.hero__img__desktop}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/tiuyfgrjwlmhj4gdzrtm_lybcwl.webp"
          alt="Rollos de papel térmico"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744771350/tiuyfgrjwlmhj4gdzrtm_lybcwl_1_alshzc.webp"
          alt="Rollos de papel térmico"
        />

        <div className={styles.hero__text}>
          <h1>
            Rollos térmicos en variedad
            <br />
            de tamaños. ¡Somos fabricantes!
          </h1>
          <p>
            Perfectos para tickets, facturas y más.
            <br />
            ¡No busques más!
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : (
            <a
              className={styles.hero__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico/rollos-termicos"
            >
              Ver más
            </a>
          )}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>
            Rollos
            <br />
            térmicos
          </h1>
          <p>
            <span>
              En variedad de tamaños.
              <br />
              ¡Somos fabricantes!
            </span>
          </p>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745196016/linea_2x-8_n80wv9_6a5e17-horizontal_giisl2.webp"
            alt="separador de textos"
            className={styles.separador__text}
          />
          <p>
            Perfectos para tickets,
            <br />
            facturas y más.
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : (
            <a
              className={styles.hero__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico/rollos-termicos"
            >
              Ver más
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
