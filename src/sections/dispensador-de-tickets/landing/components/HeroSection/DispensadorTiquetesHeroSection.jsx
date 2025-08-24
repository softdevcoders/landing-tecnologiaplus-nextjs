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
} from "@/components/landing-hero-portada-v2";
import { routes } from "@/config/routes";

const DispensadorTiquetesHeroSection = () => {
  const values = {
    title: "Dispensador de tickets",
    description: "Adiós a las filas. Orden y comodidad en cada turno.",
    image: {
      mobile: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
        width: 600,
        height: 600,
      },
      desktop: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,q_80,f_webp/website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
        width: 1000,
        height: 1000,
      },
      alt: "Imagen de Dispensador de Tickets TurnoExpress - Tecnología Plus",
    },
    button: {
      text: "Ver más",
      href: routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url,
    },
    brandImage: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_500,f_webp/v1744463735/12-8_qjsewx",
      alt: "Logo Turno Express",
      width: 300,
      height: 65,
    }
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