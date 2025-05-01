import styles from "./RollosTermicosHeroSection.module.scss";
import Header from "../../../../components/Header/Header";

function RollosTermicosHeroSection({
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
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/11_4x-8_2_nsacou.webp"
          alt="Rollos de papel térmico"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861534/11-8_1_hruyob.webp"
          alt="Rollos de papel térmico"
        />

        <div className={styles.hero__text}>
          <h1>Rollos térmicos</h1>
          <p>Para tickets, facturas y más.</p>
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

export default RollosTermicosHeroSection;
