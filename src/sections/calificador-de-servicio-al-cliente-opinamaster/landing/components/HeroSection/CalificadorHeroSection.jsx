import { 
  LandingHeroPortada, 
  LandingHeroPortadaContainer, 
  LandingHeroPortadaContent, 
  LandingHeroPortadaContentImage, 
  LandingHeroPortadaContentImageImg, 
  LandingHeroPortadaContentText, 
  LandingHeroPortadaContentTextTitle, 
  LandingHeroPortadaContentDescription,
} from "@/components/landing-hero-portada-v2";
import { landingHeros } from "@/config/landing-heros";

const CalificadorHeroSection = () => {
  const { informationPortadas: values } = landingHeros.calificadorDeServicioAlClienteOpinamaster;

  return (
    <LandingHeroPortada>
      <LandingHeroPortadaContainer>
        <LandingHeroPortadaContent>
          <LandingHeroPortadaContentImage>
            <LandingHeroPortadaContentImageImg 
              image={{...values?.image?.mobile, alt: values?.image?.alt}} 
              isMobile={true} 
            />
            <LandingHeroPortadaContentImageImg 
              image={{...values?.image?.desktop, alt: values?.image?.alt}} 
              isMobile={false} 
            />
          </LandingHeroPortadaContentImage>
          <LandingHeroPortadaContentText>
            <LandingHeroPortadaContentTextTitle>{values?.title}</LandingHeroPortadaContentTextTitle>
            <LandingHeroPortadaContentDescription>{values?.description}</LandingHeroPortadaContentDescription>
          </LandingHeroPortadaContentText>
        </LandingHeroPortadaContent>
      </LandingHeroPortadaContainer>
    </LandingHeroPortada> 
  ) 
};

export default CalificadorHeroSection;