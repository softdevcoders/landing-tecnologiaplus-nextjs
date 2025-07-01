import stylesDefault from "@/components/landing-hero-portada/styles.module.scss";
import style from "./styles.module.scss";
import { LandingHeroPortadaContainer, LandingHeroPortadaContent, LandingHeroPortadaContentDivider, LandingHeroPortadaContentImage, LandingHeroPortadaContentImageImg, LandingHeroPortadaContentText, LandingHeroPortadaContentTextButton, LandingHeroPortadaContentTextDescription, LandingHeroPortadaContentTextLogoBrand, LandingHeroPortadaContentTextSubTitle, LandingHeroPortadaContentTextTitle } from "@/components/landing-hero-portada";
import { landingHeros } from "@/config/landing-heros";

function HeroSection() {
  return (
    <LandingHeroPortadaContainer>
      <LandingHeroPortadaContent className={style.content__mobile__custom}>
        {/* Seccion de Images */}
        <>
          <LandingHeroPortadaContentImage className={`${stylesDefault.content__image__imgMobile} ${style.content__image__imgMobile__custom}`}>
            <LandingHeroPortadaContentImageImg image={landingHeros.encuestaVirtual.informationPortadas.mobile.image} />
          </LandingHeroPortadaContentImage>
          <LandingHeroPortadaContentImage className={`${stylesDefault.content__image__imgDesktop} ${style.content__image__imgDesktop__custom}`}>
            <LandingHeroPortadaContentImageImg image={landingHeros.encuestaVirtual.informationPortadas.desktop.image} />
          </LandingHeroPortadaContentImage>
        </>

        {/* Seccion de Texto */}
        <>
          <LandingHeroPortadaContentText className={`${stylesDefault.content__text__mobile} ${style.content__text__mobile__custom}`}>
            <LandingHeroPortadaContentTextTitle isMobile={true} className={style.content__text__title__mobile__custom}>
              {landingHeros.encuestaVirtual.informationPortadas.mobile.text.title}
            </LandingHeroPortadaContentTextTitle>
            <LandingHeroPortadaContentTextSubTitle className={style.content__text__subTitle__mobile__custom}>
              {landingHeros.encuestaVirtual.informationPortadas.mobile.text.subTitle}
            </LandingHeroPortadaContentTextSubTitle>
          </LandingHeroPortadaContentText>
          <LandingHeroPortadaContentText className={`${stylesDefault.content__text__desktop} ${style.content__text__desktop__custom}`}>
            <LandingHeroPortadaContentTextTitle className={style.content__text__title__desktop__custom}>
              {landingHeros.encuestaVirtual.informationPortadas.desktop.text.title}
            </LandingHeroPortadaContentTextTitle>
            <LandingHeroPortadaContentTextSubTitle className={style.content__text__subTitle__desktop__custom}>
              {landingHeros.encuestaVirtual.informationPortadas.desktop.text.subTitle}
            </LandingHeroPortadaContentTextSubTitle>
          </LandingHeroPortadaContentText>
        </>
      </LandingHeroPortadaContent>
    </LandingHeroPortadaContainer>
  )
}

export default HeroSection;