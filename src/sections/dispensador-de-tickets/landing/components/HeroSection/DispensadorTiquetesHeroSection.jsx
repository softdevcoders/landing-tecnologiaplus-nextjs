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
} from "@/components/heros/portada";
import landingHeros from "@/data/heros";
import style from "./styles.module.scss";

const IMAGE_MOBILE = 0;
const IMAGE_DESKTOP = 1;

const DispensadorTiquetesHeroSection = () => {
  const values = landingHeros?.dispensadorDeTickets?.portada;

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
            <LandingHeroPortadaContentTextButton href={values?.boton?.href}>
              {values?.boton?.texto}
            </LandingHeroPortadaContentTextButton>
          </LandingHeroPortadaContentText>
        </LandingHeroPortadaContent>
      </LandingHeroPortadaContainer>
    </LandingHeroPortada> 
  )
};

export default DispensadorTiquetesHeroSection;