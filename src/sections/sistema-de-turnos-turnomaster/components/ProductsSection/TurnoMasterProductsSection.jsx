import { routes } from "@/config/routes";
import Image from "next/image";
import style from "./TurnoMasterProductsSection.module.scss";

function TurnoMasterProductsSection() {
  const whatsappUrl = `https://wa.me/573164682034?text=${encodeURIComponent(`Hola, vengo de la página "Sistema de turnos TurnoMaster" y quiero más información.`)}`;
  return (
    <section className={style.products__section} data-nosnippet>
      <h2 className={style.products__section__title}>Dos formas de solicitar el turno</h2>
      <div className={style.products__whatsapp__btn__desktop}>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`${style.products__whatsapp__btn__desktop} ${style.products__whatsapp__btn}`}>¡Quiero más información!</a> 
      </div>
      <div className={style.products__section__container}>
        <div className={style.products__section__mobile}>
          <div className={style.products__section__mobile__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742994791/8_4x-8_xto11r.webp"
              alt="Solicitar turno de manera presencial"
              width={588}
              height={378}
              className={style.products__section__mobile__image__img}
            />
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`${style.products__whatsapp__btn__mobile} ${style.products__whatsapp__btn}`}>¡Quiero más información!</a> 
          <div className={style.products__section__mobile__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742994790/9_4x-8_zejb3t.webp"
              alt="Solicitar turno de manera presencial"
              width={375}
              height={400}
              className={style.products__section__mobile__image__img}
            />
          </div>
        </div>
        <div className={style.products__section__desktop}>
          <div className={style.products__section__desktop__image}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860442/turno_en_casa_2x-8_szazfa.webp"
              alt="Solicitar turno de manera presencial"
              width={375}
              height={400}
              className={style.products__section__desktop__image__img}
              loading="lazy"
            />
          </div>
          <div className={style.products__section__desktop__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860441/pedestal_2x-8_eurzvd.webp"
              alt="Solicitar turno de manera presencial"
              width={588}
              height={378}
              className={style.products__section__desktop__image__img}
            />
          </div>
        </div>  
      </div>
    </section>
  );
}

export default TurnoMasterProductsSection;