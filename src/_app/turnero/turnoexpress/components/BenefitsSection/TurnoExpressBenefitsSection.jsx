import style from "./TurnoExpressBenefitsSection.module.scss";

function TurnoExpressBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        BENEFICIOS
        <br />
        DESTACADOS
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431751/icono_1_2x-8_zw5neg.webp"
            alt="icono de sonido"
          />
          Sonido para anunciar el turno.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
            alt="icono de conectividad y largo alcance"
          />
          Cero cables, conexión inalámbrica
          <br />
          entre pantalla y controles.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431752/icono_3_2x-8_ypc1eu.webp"
            alt="icono de tipos de pantalla anti reflejo"
          />
          Visibilidad clara desde cualquier
          <br />
          ángulo, sin reflejos molestos.
        </li>
      </ul>
    </section>
  );
}

export default TurnoExpressBenefitsSection;
