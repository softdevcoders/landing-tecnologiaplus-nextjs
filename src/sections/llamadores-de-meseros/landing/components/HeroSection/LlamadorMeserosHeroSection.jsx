import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function LlamadorMeserosHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.llamadoresDeMeseros,
        title: landingHeros.llamadoresDeMeseros.informationSingleLanding.title,
        subTitle: landingHeros.llamadoresDeMeseros.informationSingleLanding.subTitle,
        description: landingHeros.llamadoresDeMeseros.informationSingleLanding.description,
        button: null
      })} 
    />
  )
}

export default LlamadorMeserosHeroSection;
