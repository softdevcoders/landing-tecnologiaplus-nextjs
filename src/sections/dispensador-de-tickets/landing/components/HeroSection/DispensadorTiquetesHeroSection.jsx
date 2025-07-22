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
            <LandingHeroPortadaContentImageImg image={landingHeros.dispensadorDeTickets.informationPortadas.mobile.image} />
          </LandingHeroPortadaContentImage>
          <LandingHeroPortadaContentImage className={`${stylesDefault.content__image__imgDesktop} ${style.content__image__imgDesktop__custom}`}>
            <LandingHeroPortadaContentImageImg image={landingHeros.dispensadorDeTickets.informationPortadas.desktop.image} />
          </LandingHeroPortadaContentImage>
        </>

        {/* Seccion de Texto */}
        <>
          <LandingHeroPortadaContentText className={`${stylesDefault.content__text__desktop} ${style.content__text__desktop__custom}`}>
            <LandingHeroPortadaContentTextLogoBrand
              className={style.content__text__logoBrand__desktop__custom} 
              image={landingHeros.dispensadorDeTickets.informationPortadas.desktop.imageTextColumn}
            />
            <LandingHeroPortadaContentTextTitle className={style.content__text__title__desktop__custom}>
              {landingHeros.dispensadorDeTickets.informationPortadas.desktop.text.title}
            </LandingHeroPortadaContentTextTitle>
            <LandingHeroPortadaContentTextSubTitle className={style.content__text__subTitle__desktop__custom}>
              {landingHeros.dispensadorDeTickets.informationPortadas.desktop.text.subTitle}
            </LandingHeroPortadaContentTextSubTitle>
            <LandingHeroPortadaContentTextDescription className={style.content__text__description__desktop__custom}>
              {landingHeros.dispensadorDeTickets.informationPortadas.desktop.text.description}
            </LandingHeroPortadaContentTextDescription>
            <LandingHeroPortadaContentTextButton
              href={landingHeros.dispensadorDeTickets.informationPortadas.desktop.button.href}
            >
              {landingHeros.dispensadorDeTickets.informationPortadas.desktop.button.text}
            </LandingHeroPortadaContentTextButton>
          </LandingHeroPortadaContentText>
          <LandingHeroPortadaContentText className={`${stylesDefault.content__text__mobile} ${style.content__text__mobile__custom}`}>
            <LandingHeroPortadaContentTextTitle isMobile={true} className={style.content__text__title__mobile__custom}>
              {landingHeros.dispensadorDeTickets.informationPortadas.mobile.text.title}
            </LandingHeroPortadaContentTextTitle>
            <LandingHeroPortadaContentTextSubTitle className={style.content__text__subTitle__mobile__custom}>
              {landingHeros.dispensadorDeTickets.informationPortadas.mobile.text.subTitle}
            </LandingHeroPortadaContentTextSubTitle>
            <LandingHeroPortadaContentDivider />
            <LandingHeroPortadaContentTextDescription className={style.content__text__description__mobile__custom}>
              {landingHeros.dispensadorDeTickets.informationPortadas.mobile.text.description}
            </LandingHeroPortadaContentTextDescription>
            <LandingHeroPortadaContentTextButton
              href={landingHeros.dispensadorDeTickets.informationPortadas.mobile.button.href}
            >
              {landingHeros.dispensadorDeTickets.informationPortadas.mobile.button.text}
            </LandingHeroPortadaContentTextButton>
          </LandingHeroPortadaContentText>
        </>
      </LandingHeroPortadaContent>
    </LandingHeroPortadaContainer>
  )
}

export default HeroSection;