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

const EnfermeriaHeroSection = () => {
  const values = {
    title: "Llamado de Enfermería",
    description: "Más cerca de tus pacientes. Facilita el contacto entre el paciente y personal de salud.",
    image: {
      mobile: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj",
        width: 600,
        height: 600,
      },
      desktop: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,q_80,f_webp/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
        width: 1000,
        height: 1000,
      },
      alt: "Imagen de Llamado de Enfermería CuidaMaster - Tecnología Plus",
    },
    brandImage: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_500,f_webp/v1744462125/Logo_CuidaMaster_4x-8_cn4z4h",
      alt: "Logo CuidaMaster",
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
          </LandingHeroPortadaContentText>
        </LandingHeroPortadaContent>
      </LandingHeroPortadaContainer>
    </LandingHeroPortada> 
  )
};

export default EnfermeriaHeroSection;