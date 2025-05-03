import style from "./SecondaryTurnoMasterProductsSection.module.scss";

function SecondaryTurnoMasterProductsSection() {
  return (
    <>
      <section className={style.products__section}>
        <div className={style.products__container}>
          <div className={style.products__card__container}>
            <div className={style.card}>
              <h2>Ticket de turno</h2>
              <p>físico o digital</p>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738864481/Group_11_1_muxouk.webp"
                alt="Ticket de turno en físico y en el teléfono"
              />
            </div>
            <div className={style.card}>
              <h2>Pantalla TV</h2>
              <p>para llamar los turnos</p>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860441/pantalla_tv_2x-8_oq494d.webp"
                alt="Ticket de turno en físico y en el teléfono"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${style.products__section} ${style.variant__section}`}
      >
        <div className={style.products__container}>
          <div className={style.products__card__container}>
            <div className={style.card}>
              <h2>Estadísticas generales y de cada turno</h2>
              <p>
                Reportes en tiempo real de tiempos de atención y calidad del
                servicio
              </p>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738864484/estadisticas_2x-8_i2w4e1.webp"
                alt="Estadísticas en base a los resultados del calificador de servicio"
              />
            </div>
            <div className={style.card}>
              <h2>Control total de la sala de espera</h2>
              <p>software amigable y escalable a las necesidades</p>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860449/software_2x-8_rpfkti.webp"
                alt="Pantalla de turnos con la información correspondiente al mostrar el llamado"
              />
            </div>
          </div>
        </div>
        <input
          type="checkbox"
          id="toggleText"
          className={style.toggle__checkbox}
        />
        <p>
          Cada marca es única, y en Tecnología Plus lo sabemos. Por eso, nuestro
          Sistema TurnoMaster es fácil de usar y personalizable, diseñado para
          adaptarse a las necesidades de tu sala de espera. Configura los
          colores, escoge la numeración de turnos, elige entre múltiples
          opciones para organizar filas y el llamado de turnos. Además, puedes
          integrar servicios adicionales para optimizar la experiencia del
          usuario. Nuestro software de turnos es dinámico, lo cual permite
          generar reportes detallados y visualizar métricas clave en tiempo
          real, facilitando la toma de decisiones para agilizar la atención. Ya
          sea en el sector salud, retail, oficinas u otros, TurnoMaster
          transforma la gestión de turnos en un proceso más ágil y organizado,
          mejorando la experiencia tanto para los colaboradores como para los
          usuarios.
        </p>
        <label htmlFor="toggleText" className={style.toggle__label}></label>
      </section>

      <section className={style.additional__services__section}>
        <h2>Servicios adicionales</h2>

        <div className={style.services__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860451/1_2x-8_2_dm6w2x.webp"
              alt=" Código QR para seguir el turno desde el teléfono"
            />
            <p>
              Código QR para
              <br />
              revisar el turno
            </p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860450/2_2x-8_2_gf82jw.webp"
              alt="Visualización del turno correspondiente y del que fue llamado para así guiar al usuario"
            />
            <p>
              Ver estado del
              <br />
              turno en el celular
            </p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860452/3_2x-8_1_aldwxr.webp"
              alt="Notificación por medio de mensaje de texto del turno correspondiente"
            />
            <p>
              Turno por
              <br />
              mensaje de texto
            </p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738868534/4_2x-8_1_nalqed.webp"
              alt="Calificador de servicios u OpinaMaster"
            />
            <p>
              Calificador
              <br />
              de servicio
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondaryTurnoMasterProductsSection;
