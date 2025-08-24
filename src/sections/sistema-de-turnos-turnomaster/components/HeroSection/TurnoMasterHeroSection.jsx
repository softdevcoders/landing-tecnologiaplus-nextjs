import { 
  LandingHeroPortada, 
  LandingHeroPortadaContainer, 
  LandingHeroPortadaContent, 
  LandingHeroPortadaContentImage, 
  LandingHeroPortadaContentImageImg, 
  LandingHeroPortadaContentText, 
  LandingHeroPortadaContentTextTitle, 
  LandingHeroPortadaContentDescription 
} from "@/components/landing-hero-portada-v2";

const SistemaDeTurnosTurnoMasterHeroSection = () => {
  const values = {
    title: "Sistema de turnos de espera",
    description: "TurnoMaster lleva tu sala de espera al siguiente nivel.",
    image: {
      mobile: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71",
        width: 600,
        height: 600,
      },
      desktop: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,f_webp,q_80/13_adjkab",
        width: 1000,
        height: 1000,
      },
      alt: "Imagen de Sistema de Turnos de espera Turnomaster - Tecnología Plus.",
    },
  };

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
            <LandingHeroPortadaContentTextTitle>{values?.title}</LandingHeroPortadaContentTextTitle>
            <LandingHeroPortadaContentDescription>{values?.description}</LandingHeroPortadaContentDescription>
          </LandingHeroPortadaContentText>
        </LandingHeroPortadaContent>
      </LandingHeroPortadaContainer>
    </LandingHeroPortada> 
  )
};

export default SistemaDeTurnosTurnoMasterHeroSection;