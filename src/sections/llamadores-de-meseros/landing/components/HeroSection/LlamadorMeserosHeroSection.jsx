import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function LlamadorMeserosHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.llamadoresDeMeseros,
        title: landingHeros.llamadoresDeMeseros.informationPortadas.title,
        subTitle: landingHeros.llamadoresDeMeseros.informationPortadas.subTitle,
        description: landingHeros.llamadoresDeMeseros.informationPortadas.description,
        images: landingHeros.llamadoresDeMeseros.informationPortadas.images,
        button: null
      })} 
    />
  )
}

export default LlamadorMeserosHeroSection;
