import styles from "./SliderHero.module.scss";
import { SLIDER_HERO_ITEMS } from "./slides";
import SliderHeroClient from "./SliderHeroClient";

export default function SliderHero() {
  return (
    <div className={styles.slider__container}>
      <SliderHeroClient items={SLIDER_HERO_ITEMS} styles={styles} />
    </div>
  );
}