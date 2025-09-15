import { 
  LandingHeroPortada, 
  LandingHeroPortadaContainer, 
  LandingHeroPortadaContent, 
  LandingHeroPortadaContentImage, 
  LandingHeroPortadaContentImageImg, 
  LandingHeroPortadaContentText, 
  LandingHeroPortadaContentTextTitle, 
  LandingHeroPortadaContentDescription,
  LandingHeroPortadaContentTextLogoBrand
} from "@/components/heros/portada";
import landingHeros from "@/data/heros";

const IMAGE_MOBILE = 0;
const IMAGE_DESKTOP = 1;

const LlamadoDeEnfermeriaHeroSection = () => { 
  const values = landingHeros?.llamadoDeEnfermeria?.portada;  

  return (
    <LandingHeroPortada>
      <LandingHeroPortadaContainer>
        <LandingHeroPortadaContent>
          <LandingHeroPortadaContentImage>
            <LandingHeroPortadaContentImageImg 
              image={values?.imagenes[IMAGE_MOBILE]} 
              isMobile={true} 
            />
            <LandingHeroPortadaContentImageImg 
              image={values?.imagenes[IMAGE_DESKTOP]}   
            />
          </LandingHeroPortadaContentImage>
          <LandingHeroPortadaContentText>
            <LandingHeroPortadaContentTextLogoBrand image={values?.imagenDeMarca} />
            <LandingHeroPortadaContentTextTitle>{values?.titulo}</LandingHeroPortadaContentTextTitle>
            <LandingHeroPortadaContentDescription>{values?.descripcion}</LandingHeroPortadaContentDescription>
          </LandingHeroPortadaContentText>
        </LandingHeroPortadaContent>
      </LandingHeroPortadaContainer>
    </LandingHeroPortada> 
  )
};

export default LlamadoDeEnfermeriaHeroSection;