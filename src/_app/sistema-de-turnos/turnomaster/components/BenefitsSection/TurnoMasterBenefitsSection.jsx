import style from "./TurnoMasterBenefitsSection.module.scss";

function TurnoMasterBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        VENTAJAS DE NUESTRO
        <br className={style.hide__on__mobile} />
        SISTEMA DE TURNOS
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860473/icono_1_2x-8_2_ahx7d0.webp"
            alt="Icono de controles"
          />
          Personaliza según colores <br className={style.hide__on__mobile} /> y
          necesidades de tu marca.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860472/icono_2_2x-8_2_kjq13k.webp"
            alt="Reportes gráficos para mejor toma de decisiones"
          />
          Datos y estadísticas para evaluar{" "}
          <br className={style.hide__on__mobile} /> y controlar la calidad del
          servicio.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860471/icono_3_2x-8_2_fzlqej.webp"
            alt="icono de medalla de adición"
          />
          Agrega funciones extra <br className={style.hide__on__mobile} />
          según tus necesidades.
        </li>
      </ul>
    </section>
  );
}

export default TurnoMasterBenefitsSection;
