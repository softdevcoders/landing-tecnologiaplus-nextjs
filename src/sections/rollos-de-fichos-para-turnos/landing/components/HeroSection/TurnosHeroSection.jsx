import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function TurnosHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.rollosDeFichosParaTurnos,
        title: landingHeros.rollosDeFichosParaTurnos.informationSingleLanding.title,
        subTitle: landingHeros.rollosDeFichosParaTurnos.informationSingleLanding.subTitle,
        description: landingHeros.rollosDeFichosParaTurnos.informationSingleLanding.description,
        button: null
      })} 
    />
  );
}

export default TurnosHeroSection;
