import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function TurnoExpressHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.turneroTurnoexpress,
        title: landingHeros.turneroTurnoexpress.informationSingleLanding.title,
        subTitle: landingHeros.turneroTurnoexpress.informationSingleLanding.subTitle,
        description: landingHeros.turneroTurnoexpress.informationSingleLanding.description,
        button: null
      })} 
    />
  )
}

export default TurnoExpressHeroSection;
