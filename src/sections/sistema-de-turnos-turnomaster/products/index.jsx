import Image from "next/image";
import style from "./styles.module.scss";

function TurnoMasterProductsSection() {
  const whatsappUrl = `https://wa.me/573164682034?text=${encodeURIComponent(`Hola, vengo de la página "Sistema de turnos TurnoMaster" y quiero más información.`)}`;
  return (
    <section className={style.products__section} data-nosnippet>
      <h2 className={style.products__section__title}>Dos formas de usar el Sistema de Gestión de Turnos</h2>
      <div className={style.products__whatsapp__btn__desktop}>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`${style.products__whatsapp__btn__desktop} ${style.products__whatsapp__btn}`}>¡Quiero más información!</a> 
      </div>
      <div className={style.products__section__container}>
        <div className={style.products__section__mobile}>
          <div className={style.products__section__mobile__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758903159/sistema_de_turnos_online_movil.webp"
              alt="Solicitud de turnos en línea desde cualquier dispositivo"
              title="Ofrece turnos online para comodidad de tus usuarios"
              width={588}
              height={378}
              className={style.products__section__mobile__image__img}
              unoptimized={true}
            />
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`${style.products__whatsapp__btn__mobile} ${style.products__whatsapp__btn}`}>¡Quiero más información!</a> 
          <div className={style.products__section__mobile__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758903159/maquina_para_turnos_digital_movil.webp"
              alt="Máquina digital para turnos con dispensador automático de tickets"
              title="Agiliza la organización con una máquina para turnos digital"
              width={375}
              height={400}
              className={style.products__section__mobile__image__img}
              unoptimized={true}
            />
          </div>
        </div>
        <div className={style.products__section__desktop}>
          <div className={style.products__section__desktop__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902040/sistema_de_turnos_online.webp"
              alt="Solicitud de turnos en línea desde cualquier dispositivo"
              title="Ofrece turnos online para comodidad de tus usuarios"
              width={375}
              height={400}
              className={style.products__section__desktop__image__img}
              unoptimized={true}
            />
          </div>
          <div className={style.products__section__desktop__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902039/maquina_para_turnos_digital.webp"
              alt="Máquina digital para turnos con dispensador automático de tickets"
              title="Agiliza la organización con una máquina para turnos digital"
              width={588}
              height={378}
              className={style.products__section__desktop__image__img}
              unoptimized={true}
            />
          </div>
        </div>  
      </div>
    </section>
  );
}

export default TurnoMasterProductsSection;