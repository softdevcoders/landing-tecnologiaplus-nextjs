'use client';

import { landingHeros } from "@/config/landing-heros";
import SliderHeroClient from "./slider-hero-client";
import styles from "./slider-hero.module.scss";
import Image from "next/image";

export default function SliderHero() {
  const { background, backgroundMobilePortada, ...restLandings } = landingHeros

  return (
    <div 
      className={styles.slider__container}
      style={{
        backgroundImage: `url(https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_1920,h_1080,c_fill,f_auto,q_auto/${landingHeros.background.images.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <SliderHeroClient items={restLandings} styles={styles} />
    </div>
  );
}