import { 
  LandingHeroPortada, 
  LandingHeroPortadaContainer, 
  LandingHeroPortadaContent, 
  LandingHeroPortadaContentImage, 
  LandingHeroPortadaContentImageImg, 
  LandingHeroPortadaContentText, 
  LandingHeroPortadaContentTextTitle, 
  LandingHeroPortadaContentDescription,
  LandingHeroPortadaContentTextButton,
  LandingHeroPortadaContentTextLogoBrand
} from "@/components/landing-hero-portada";
import { landingHeros } from "@/config/landing-heros";

const DispensadorTiquetesHeroSection = () => {
  const { informationPortadas: values } = landingHeros.dispensadorDeTickets;  

  return (
    <LandingHeroPortada>
      <LandingHeroPortadaContainer>
        <LandingHeroPortadaContent>
          <LandingHeroPortadaContentImage>
            <LandingHeroPortadaContentImageImg 
              image={{
                ...values?.image?.mobile, 
                alt: values?.image?.alt,
              }} 
              isMobile={true} 
            />
            <LandingHeroPortadaContentImageImg 
              image={{
                ...values?.image?.desktop, 
                alt: values?.image?.alt,
              }} 
              isMobile={false} 
            />
          </LandingHeroPortadaContentImage>
          <LandingHeroPortadaContentText>
            <LandingHeroPortadaContentTextLogoBrand image={values?.brandImage} />
            <LandingHeroPortadaContentTextTitle>{values?.title}</LandingHeroPortadaContentTextTitle>
            <LandingHeroPortadaContentDescription>{values?.description}</LandingHeroPortadaContentDescription>
            <LandingHeroPortadaContentTextButton href={values?.button?.href}>
              {values?.button?.text}
            </LandingHeroPortadaContentTextButton>
          </LandingHeroPortadaContentText>
        </LandingHeroPortadaContent>
      </LandingHeroPortadaContainer>
    </LandingHeroPortada> 
  )
};

export default DispensadorTiquetesHeroSection;