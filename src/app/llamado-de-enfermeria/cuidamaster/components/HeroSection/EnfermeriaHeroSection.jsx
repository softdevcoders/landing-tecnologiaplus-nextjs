import styles from "./EnfermeriaHeroSection.module.scss";
import Header from "../../../../components/Header/Header";

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
          className={styles.hero__img__desktop}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/Imagen_principal_2x-8_1_cnekrr.webp"
          alt="Llamado de enfermería presionando un botón"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745243187/Recurso_19_3x-8_okf5hg.webp"
          alt="Botón para pacientes extensor EX1"
        />

        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo__cuidamaster}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp"
            alt="Logo Cuida master"
          />
          <h1>
            Llamado de Enfermería:
            <br />
            Más cerca de tus pacientes.
          </h1>
          <p>
            Facilita el contacto entre el paciente y
            <br />
            personal de salud.
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>
            Llamado de
            <br />
            enfermería
          </h1>
          <p>
            <span>
              Conecta al paciente con
              <br />
              el personal de salud.
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

export default EnfermeriaHeroSection;
