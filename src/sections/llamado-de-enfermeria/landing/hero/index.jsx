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
import style from "./styles.module.scss";

const IMAGE_MOBILE = 0;
const IMAGE_DESKTOP = 1;

const LlamadoDeEnfermeriaHeroSection = () => { 
  const { informationPortadas: values } = landingHeros.llamadoDeEnfermeria;  

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
              className={style.custom_image__desktop}  
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