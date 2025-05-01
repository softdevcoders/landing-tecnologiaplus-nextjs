import styles from "./BlogHeroSection.module.scss";
import altStyles from "../../../components/Header/HeaderAlt.module.scss";

import Header from "../../../components/Header/Header";

function BlogHeroSection() {
  return (
    <section className={styles.hero}>
      <Header
        customStyles={{
          header: altStyles.altHeader,
          phoneBtn: altStyles.altPhoneBtn,
          searchIcon: altStyles.altSearchIcon,
        }}
      />
      <div className={styles.hero__content}>
        <h1 className={styles.neon__effect}>BLOG</h1>
        <p>
          Descubre en nuestro blog cómo usamos la tecnología para que
          <br />
          nuestros clientes puedan ofrecer un mejor servicio.
          <br />
          <span>¡Innovación para un mejor servicio!</span>
        </p>
      </div>
    </section>
  );
}

export default BlogHeroSection;
