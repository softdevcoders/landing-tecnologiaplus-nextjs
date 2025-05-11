import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function HeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.rollosDePapelTermico,
        title: landingHeros.rollosDePapelTermico.informationSingleLanding.title,
        subTitle: landingHeros.rollosDePapelTermico.informationSingleLanding.subTitle,
        description: landingHeros.rollosDePapelTermico.informationSingleLanding.description,
        button: null
      })} 
    />
  );
}

export default HeroSection;
