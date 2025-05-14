import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function LocalizadoresHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.localizadoresParaRestaurantes,
        title: landingHeros.localizadoresParaRestaurantes.informationPortadas.title,
        subTitle: landingHeros.localizadoresParaRestaurantes.informationPortadas.subTitle,
        description: landingHeros.localizadoresParaRestaurantes.informationPortadas.description,
        images: landingHeros.localizadoresParaRestaurantes.informationPortadas.images,
        button: null
      })} 
    />
  )
}

export default LocalizadoresHeroSection;
