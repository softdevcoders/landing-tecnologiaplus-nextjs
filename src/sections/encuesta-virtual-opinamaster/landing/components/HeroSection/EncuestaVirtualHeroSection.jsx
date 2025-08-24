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

const EncuestaVirtualHeroSection = () => {
  const values = {
    title: "Encuesta virtual",
    description: "Detecta los puntos fuertes y como mejorar tu negocio.",
    image: {
      mobile: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
        width: 600,
        height: 600,
      },
      desktop: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,q_80,f_webp/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
        width: 1000,
        height: 1000,
      },
      alt: "Imagen de Encuesta Virtual - Tecnología Plus",
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

export default EncuestaVirtualHeroSection;