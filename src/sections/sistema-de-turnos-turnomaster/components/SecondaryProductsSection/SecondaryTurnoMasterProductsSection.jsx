
import Image from "next/image";
import style from "./SecondaryTurnoMasterProductsSection.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";

function SecondaryTurnoMasterProductsSection() {  
  return (
    <>
      <section className={style.products__section__top}>
        <div className={style.products__container__top}>
          <div className={style.products__card}>
            <h2 className={style.products__card__title}>Ticket de turno</h2>
            <p className={style.products__card__description}>físico o digital</p>
            <div className={style.products__card__image_container}> 
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738864481/Group_11_1_muxouk.webp"
                alt="Ticket de turno en físico y en el teléfono"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className={style.products__card}>
            <h2 className={style.products__card__title}>Pantalla TV</h2>
            <p className={style.products__card__description}>para llamar los turnos</p>
            <div className={style.products__card__image_container}> 
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860441/pantalla_tv_2x-8_oq494d.webp"
                alt="Pantalla TV para llamar los turnos"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.products__section__bottom}>
        <div className={style.products__container__bottom}>
          <div className={style.products__card}>
            <h2 className={style.products__card__title}>Estadísticas generales y de cada turno</h2>
            <p className={style.products__card__description}>Reportes en tiempo real de tiempos de atención y calidad del servicio</p>
            <div className={style.products__card__image_container}> 
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738864484/estadisticas_2x-8_i2w4e1.webp"
                alt="Estadísticas en base a los resultados del calificador de servicio"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className={style.products__card}>
            <h2 className={style.products__card__title}>Control total de la sala de espera</h2>
            <p className={style.products__card__description}>software amigable y escalable a las necesidades</p>
            <div className={style.products__card__image_container}> 
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860449/software_2x-8_rpfkti.webp"
                alt="Pantalla de turnos con la información correspondiente al mostrar el llamado"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <ToggleTextContent>
          <p>Cada marca es única, y en Tecnología Plus lo sabemos. Por eso, nuestro Sistema TurnoMaster es fácil de usar y personalizable, diseñado para adaptarse a las necesidades de tu sala de espera. Configura los colores, escoge la numeración de turnos, elige entre múltiples opciones para organizar filas y el llamado de turnos. Además, puedes integrar servicios adicionales para optimizar la experiencia del usuario. Nuestro software de turnos es dinámico, lo cual permite generar reportes detallados y visualizar métricas clave en tiempo real, facilitando la toma de decisiones para agilizar la atención. Ya sea en el sector salud, retail, oficinas u otros, TurnoMaster transforma la gestión de turnos en un proceso más ágil y organizado, mejorando la experiencia tanto para los colaboradores como para los usuarios.</p> 
        </ToggleTextContent>
      </section>
      <section className={style.additional__services__section}>
        <h2 className={style.additional__services__section__title}>Servicios adicionales</h2>
        <div className={style.additional__services__section__cards}>
          <div className={style.additional__services__section__card}>
            <div className={style.additional__services__section__card__image_container}>  
              <Image 
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860451/1_2x-8_2_dm6w2x.webp" 
                alt="Código QR para revisar el turno"
                width={1000}
                height={1000}
              />
            </div>
            <p className={style.additional__services__section__card__text}>Código QR para revisar el turno</p>
          </div>
          <div className={style.additional__services__section__card}>
            <div className={style.additional__services__section__card__image_container}>  
              <Image 
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860450/2_2x-8_2_gf82jw.webp" 
                alt="Visualización del turno correspondiente y del que fue llamado para así guiar al usuario"
                width={1000}
                height={1000}
              />
            </div>
            <p className={style.additional__services__section__card__text}>Ver estado del turno en el celular</p>
          </div>
          <div className={style.additional__services__section__card}>
            <div className={style.additional__services__section__card__image_container}>  
              <Image 
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860452/3_2x-8_1_aldwxr.webp" 
                alt="Notificación por medio de mensaje de texto del turno correspondiente"
                width={1000}
                height={1000}
              />
            </div>
            <p className={style.additional__services__section__card__text}>Turno por mensaje de texto</p>
          </div>
          <div className={style.additional__services__section__card}>
            <div className={style.additional__services__section__card__image_container}>  
              <Image 
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738868534/4_2x-8_1_nalqed.webp" 
                alt="Calificador de servicio u OpinaMaster"
                width={1000}
                height={1000}
              />
            </div>
            <p className={style.additional__services__section__card__text}>Calificador de servicio</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondaryTurnoMasterProductsSection;
