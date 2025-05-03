import styles from "./SliderHero.module.scss";
import { SLIDER_HERO_ITEMS } from "./slides";
import SliderHeroClient from "./SliderHeroClient"; // ya es client-only

export default function SliderHero() {
  return (
    <div className={styles.swiper__container}>
      <SliderHeroClient items={SLIDER_HERO_ITEMS} styles={styles} />
    </div>
  );
}