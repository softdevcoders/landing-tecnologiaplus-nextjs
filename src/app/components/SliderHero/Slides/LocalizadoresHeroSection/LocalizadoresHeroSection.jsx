"use client";

import styles from "./LocalizadoresHeroSection.module.scss";
import Header from "../../../Header/Header";
import ServerFirstImage from "../../../ServerFirstImage/ServerFirstImage";
import { useState, useEffect } from "react";

function LocalizadoresHeroSection({
  hideHeader = false,
  backgroundTransparent = false,
  boton,
  priority = false,
}) {
  // Use original URLs to avoid hydration mismatches
  const desktopImageUrl =
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/bQaT52.tif_4x-8_su2sfk.webp";
  const mobileImageUrl =
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861573/12_1-8_1_x1xwix.webp";

  // Track if the component is hydrated to ensure consistent rendering
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section
      className={`${styles.hero} ${
        backgroundTransparent ? styles.transparent : ""
      }`}
    >
      {!hideHeader && <Header />}
      <div className={styles.hero__content}>
        <ServerFirstImage
          className={styles.hero__img}
          src={desktopImageUrl}
          alt="Localizadores para clientes"
          width={620}
          height={500}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          optimizeAfterHydration={isHydrated}
        />
        <ServerFirstImage
          className={styles.hero__img__mobile}
          src={mobileImageUrl}
          alt="Localizadores para clientes"
          width={375}
          height={284}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          optimizeAfterHydration={isHydrated}
        />

        <div className={styles.hero__text}>
          <h1>Localizadores para restaurantes</h1>
          <p>Tiempo de espera sin temor a perder el turno.</p>
          {boton ? (
            <a
              className={styles.hero__btn}
              href={boton.href}
              aria-label="Ver más sobre localizadores para restaurantes"
            >
              {boton.text}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresHeroSection;
