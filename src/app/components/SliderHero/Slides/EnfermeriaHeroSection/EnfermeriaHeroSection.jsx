import styles from "./EnfermeriaHeroSection.module.scss";
import Header from "../../../Header/Header";

function EnfermeriaHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506524/2_4x-8_5_igrf1u.webp"
          alt="Llamado de enfermería presionando un botón"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861534/Group_5_t7cyjd.webp"
          alt="Botón para pacientes extensor EX1"
        />

        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo__cuidamaster}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp"
            alt="Logo Cuida master"
          />
          <h1>Llamado de enfermería</h1>
          <p>Conecta al paciente con el personal de salud.</p>
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

export default EnfermeriaHeroSection;
