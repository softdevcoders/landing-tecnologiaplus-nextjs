import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function TurnoExpressHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.turneroTurnoexpress,
        title: landingHeros.turneroTurnoexpress.informationPortadas.title,
        subTitle: landingHeros.turneroTurnoexpress.informationPortadas.subTitle,
        description: landingHeros.turneroTurnoexpress.informationPortadas.description,
        images: landingHeros.turneroTurnoexpress.informationPortadas.images,
        button: null
      })} 
    />
  )
}

export default TurnoExpressHeroSection;
