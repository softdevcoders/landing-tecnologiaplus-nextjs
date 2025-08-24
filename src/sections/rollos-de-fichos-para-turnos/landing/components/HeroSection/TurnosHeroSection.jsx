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

const RollosDeFichosParaTurnosHeroSection = () => {
  const values = {
    title: "Rollos de fichos para turnos",
    description: "Numeración clara para agilizar la atención de turnos.",
    image: {
      mobile: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
        width: 600,
        height: 600,
      },
      desktop: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,f_webp,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
        width: 1000,
        height: 1000,
      },
      alt: "Imagen de Rollos de fichos para turnos TurnoExpress - Tecnología Plus",
    },
    button: {
      text: "Ver más",
      href: routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url,
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

export default RollosDeFichosParaTurnosHeroSection;