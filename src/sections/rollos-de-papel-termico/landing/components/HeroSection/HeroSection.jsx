import { 
  LandingHeroPortada, 
  LandingHeroPortadaContainer, 
  LandingHeroPortadaContent, 
  LandingHeroPortadaContentImage, 
  LandingHeroPortadaContentImageImg, 
  LandingHeroPortadaContentText, 
  LandingHeroPortadaContentTextTitle, 
  LandingHeroPortadaContentDescription,
  LandingHeroPortadaContentTextButton
} from "@/components/landing-hero-portada-v2";
import { routes } from "@/config/routes";

const RollosDePapelTermicoHeroSection = () => { 
  const values = {
    title: "Rollos de papel térmico",
    description: "Perfectos para tickets, facturas y más. ¡Somos fabricantes!",
    image: {
      mobile: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
        width: 600,
        height: 600,
      },
      desktop: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,f_webp,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
        width: 1000,
        height: 1000,
      },
      alt: "Imagen de Rollos de Papel Térmico - Tecnología Plus",
    },
    button: {
      text: "Ver más",
      href: routes.landings.rollosDePapelTermico.children.rollosTermicos.url,
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
            <LandingHeroPortadaContentTextButton href={values?.button?.href}>
              {values?.button?.text}
            </LandingHeroPortadaContentTextButton>
          </LandingHeroPortadaContentText>
        </LandingHeroPortadaContent>
      </LandingHeroPortadaContainer>
    </LandingHeroPortada> 
  )
};

export default RollosDePapelTermicoHeroSection;