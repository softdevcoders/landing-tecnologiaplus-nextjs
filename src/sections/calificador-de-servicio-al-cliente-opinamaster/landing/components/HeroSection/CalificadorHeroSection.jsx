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

const CalificadorHeroSection = () => {
  const values = {
    title: "Calificador de servicio al cliente",
    description: "Para crecer con la voz de tus clientes.",
    image: {
      mobile: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
        width: 600,
        height: 600,
      },
      desktop: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,q_80,f_webp/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/aih7y6glfth4vthhkytk",
        width: 1000,
        height: 1000,
      },
      alt: "Imagen de Calificador de servicio al cliente - Tecnología Plus",
    },
  };

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