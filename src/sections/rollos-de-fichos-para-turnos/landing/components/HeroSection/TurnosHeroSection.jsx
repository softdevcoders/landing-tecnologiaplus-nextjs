import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function TurnosHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.rollosDeFichosParaTurnos,
        title: landingHeros.rollosDeFichosParaTurnos.informationPortadas.title,
        subTitle: landingHeros.rollosDeFichosParaTurnos.informationPortadas.subTitle,
        description: landingHeros.rollosDeFichosParaTurnos.informationPortadas.description,
        images: landingHeros.rollosDeFichosParaTurnos.informationPortadas.images,
        button: null
      })} 
    />
  );
}

export default TurnosHeroSection;
