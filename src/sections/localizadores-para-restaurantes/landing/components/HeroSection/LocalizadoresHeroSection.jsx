import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function LocalizadoresHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.localizadoresParaRestaurantes,
        title: landingHeros.localizadoresParaRestaurantes.informationSingleLanding.title,
        subTitle: landingHeros.localizadoresParaRestaurantes.informationSingleLanding.subTitle,
        description: landingHeros.localizadoresParaRestaurantes.informationSingleLanding.description,
        button: null
      })} 
    />
  )
}

export default LocalizadoresHeroSection;
