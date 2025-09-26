import Image from "next/image";
import style from "./styles.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";

function SecondaryTurnoMasterProductsSection() {  
  return (
    <>
      <section className={style.products__section__top} data-nosnippet>
        <h2 className={style.products__section__title}>¿Cómo funciona nuestro Sistema de Gestión de Turnos?</h2>
        <div className={style.products__container__top}>
          <div className={style.products__card}>
            <span className={style.products__card__title}>Ticket de turno</span>
            <p className={style.products__card__description}>físico o digital</p>
            <div className={style.products__card__image_container}> 
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902037/maquina_de_tickets_para_filas"
                alt="Máquina de tickets para filas con opción física y digital"
                title="Ofrece tickets en papel y en celular con sistema de turnos"
                width={1000}
                height={1000}
                unoptimized={true}
              />
            </div>
          </div>
          <div className={style.products__card}>
            <span className={style.products__card__title}>Pantalla TV</span>
            <p className={style.products__card__description}>para llamar los turnos</p>
            <div className={style.products__card__image_container}> 
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902038/pantalla_de_turnos_electronica"
                alt="Pantalla electrónica para mostrar turnos en tiempo real"
                title="Organiza las filas con pantallas electrónicas de turnos"
                width={1000}
                height={1000}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.products__section__bottom} data-nosnippet>
        <h2 className={style.products__section__title}>Funciones destacadas del sistema de turnos</h2>
        <div className={style.products__container__bottom}>
          <div className={style.products__card}>
            <span className={style.products__card__title}>Estadísticas generales y de cada turno</span>
            <p className={style.products__card__description}>Reportes en tiempo real de tiempos de atención y calidad del servicio</p>
            <div className={style.products__card__image_container}> 
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902038/sistema_de_turnos_con_estadisticas"
                alt="Sistema de turnos con estadísticas y calificación del servicio"
                title="Analiza la atención con estadísticas en tu sistema de turnos"
                width={1000}
                height={1000}
                unoptimized={true}
              />
            </div>
          </div>
          <div className={style.products__card}>
            <span className={style.products__card__title}>Control total de la sala de espera</span>
            <p className={style.products__card__description}>software amigable y escalable a las necesidades</p>
            <div className={style.products__card__image_container}> 
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902035/software_para_turnos_de_espera"
                alt="Software de turnos de espera con información en pantalla"
                title="Controla la atención al cliente con software para turnos"
                width={1000}
                height={1000}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
        <ToggleTextContent showToggleButtonInDesktop={true}>
          <p>Cada marca es única, y en Tecnología Plus lo sabemos. Por eso, nuestro <strong>Sistema de Turnos TurnoMaster</strong> está diseñado para ser intuitivo, personalizable y adaptable, ya sea que necesites <strong>un software para turnos médicos</strong>, una <strong>máquina de turnos digital</strong> o un <strong>completo sistema de control de colas y turnos</strong>. Configura colores, clasifica tipos de servicio, elige la numeración adecuada y organiza las filas y el llamado de turnos según tus necesidades específicas. También puedes complementar el sistema con servicios adicionales que mejoren la experiencia del usuario en salas de espera o atención en filas.</p> 
          <p>Nuestro <strong>software turnero</strong> permite generar métricas detalladas y reportes en tiempo real, facilitando la toma de decisiones y optimizando el flujo de atención. Gracias a su diseño dinámico, puedes monitorear tiempos de espera, identificar cuellos de botella y ajustar parámetros automáticamente para mejorar la gestión del sistema de turnos. Si usas nuestra solución como <strong>sistema gestión de filas, sistema de gestión de turnos</strong> o incluso con funciones tipo <strong>software de turnos para atención en salas de espera</strong>, tendrás acceso a información valiosa que impulsa tu eficiencia operativa.</p> 
          <p>Ya sea en el sector salud, oficinas, retail u otros rubros con alta demanda de atención, TurnoMaster transforma la gestión de turnos en un proceso ordenado, efectivo y profesional. Con nuestra <strong>máquina de tickets para filas</strong> integrada, podrás combinar el uso físico y digital. Además, el <strong>sistema digiturno</strong> que ofrecemos permite eliminar filas tradicionales, mejorar la experiencia del cliente y dar control sobre el servicio. En suma, nuestro <strong>sistema de turnos</strong> no solo facilita la operación diaria, sino que posiciona tu marca como referente en organización, modernidad y calidad en atención al cliente.</p>
        </ToggleTextContent>
      </section>
      <section className={style.additional__services__section} data-nosnippet>
        <h2 className={style.additional__services__section__title}>Servicios complementarios de la Máquina para Turnos Digital</h2>
        <div className={style.additional__services__section__cards}>
          <div className={style.additional__services__section__card}>
            <div className={style.additional__services__section__card__image_container}>  
              <Image 
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902034/sistema_de_turnos_con_qr.webp" 
                alt="Sistema de turnos con código QR para consultar ticket"
                title="Facilita la consulta con sistema de turnos y QR"
                width={1000}
                height={1000}
                unoptimized={true}
              />
            </div>
            <h3 className={style.additional__services__section__card__text}>Código QR para revisar el turno</h3>
          </div>
          <div className={style.additional__services__section__card}>
            <div className={style.additional__services__section__card__image_container}>  
              <Image 
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902035/sistema_de_control_de_turnos.webp" 
                alt="Sistema de control de turnos con visualización en pantalla"
                title="Guía a los clientes con un sistema de control de turnos"
                width={1000}
                height={1000}
                unoptimized={true}
              />
            </div>
            <h3 className={style.additional__services__section__card__text}>Ver estado del turno en el celular</h3>
          </div>
          <div className={style.additional__services__section__card}>
            <div className={style.additional__services__section__card__image_container}>  
              <Image 
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902034/sistema_de_turnos_con_sms.webp" 
                alt="Sistema de turnos con notificación por mensaje de texto" 
                title="Informa a los clientes con sistema de turnos vía SMS"
                width={1000}
                height={1000}
                unoptimized={true}
              />
            </div>
            <h3 className={style.additional__services__section__card__text}>Turno por mensaje de texto</h3>
          </div>
          <div className={style.additional__services__section__card}>
            <div className={style.additional__services__section__card__image_container}>  
              <Image 
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902035/sistema_de_turnos_con_calificador.webp" 
                alt="Calificador de servicio integrado en el sistema de turnos"
                title="Mejora la atención con calificación en tu sistema de turnos"
                width={1000}
                height={1000}
                unoptimized={true}
              />
            </div>
            <h3 className={style.additional__services__section__card__text}>Calificador de servicio</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondaryTurnoMasterProductsSection;
