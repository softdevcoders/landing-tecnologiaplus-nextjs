'use client';

import { landingHeros } from "@/config/landing-heros";
import styles from "./slider-hero.module.scss";
import dynamic from "next/dynamic";
import Image from "next/image";

// Cargar la parte interactiva (Swiper) solo en cliente
const SliderHeroClient = dynamic(() => import("./slider-hero-client"), {
  ssr: false,
  loading: () => null,
});

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