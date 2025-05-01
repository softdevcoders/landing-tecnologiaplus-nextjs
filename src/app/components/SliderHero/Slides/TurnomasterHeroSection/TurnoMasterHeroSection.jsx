"use client";

import styles from "./TurnoMasterHeroSection.module.scss";
import Header from "../../../Header/Header";
import ServerFirstImage from "../../../ServerFirstImage/ServerFirstImage";
import { useState, useEffect } from "react";

function TurnoMasterHeroSection({
  hideHeader = false,
  backgroundTransparent = false,
  boton,
  priority = false,
}) {
  // Track if the component is hydrated
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506523/4_4x-8_2_lxfolj.webp"
          alt="Software de feedback de clientes con pantalla de turnos"
          width={620}
          height={500}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          optimizeAfterHydration={isHydrated}
        />
        <ServerFirstImage
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861623/Group_7_zgut7e.webp"
          alt="Software de feedback de clientes con pantalla de turnos"
          width={375}
          height={284}
          loading={priority ? "eager" : "lazy"}
          optimizeAfterHydration={isHydrated}
        />

        <div className={styles.hero__text}>
          <ServerFirstImage
            className={styles.hero__img__logo__turnoMaster}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744830279/3-8_jxkhuf.webp"
            alt="Logo TurnoMaster"
            width={150}
            height={80}
            optimizeAfterHydration={isHydrated}
          />
          <h1>
            Sistema de turnos
            <span className={styles.hide__mobile}> de espera</span>
          </h1>
          <p>Digitaliza tu sala de espera fácilmente.</p>

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

export default TurnoMasterHeroSection;
