'use client';

import { landingHeros } from "@/config/landing-heros";
import SliderHeroClient from "./slider-hero-client";
import styles from "./slider-hero.module.scss";
import Image from "next/image";

export default function SliderHero() {
  const { background, backgroundMobilePortada, ...restLandings } = landingHeros

  return (
    <div className={styles.slider__container}>
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1600px"
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${landingHeros.background.images.src}`}
        alt={landingHeros.background.images.alt}
        priority
        quality={70}
        className={styles.slider__background}
        loading="eager"
      />
      <SliderHeroClient items={restLandings} styles={styles} />
    </div>
  );
}