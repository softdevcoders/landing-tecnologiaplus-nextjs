import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function HeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.rollosDePapelTermico,
        title: landingHeros.rollosDePapelTermico.informationPortadas.title,
        subTitle: landingHeros.rollosDePapelTermico.informationPortadas.subTitle,
        description: landingHeros.rollosDePapelTermico.informationPortadas.description,
        images: landingHeros.rollosDePapelTermico.informationPortadas.images,
        button: null
      })} 
    />
  );
}

export default HeroSection;
