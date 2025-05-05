import style from "./LocalizadoresBenefitsSection.module.scss";

function LocalizadoresBenefitsSection() {
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
          Vibran, suenan y alumbran.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
            alt="icono de conectividad y largo alcance"
          />
          Largo Alcance, más de
          <br />
          200 metros a la redonda.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738851894/icono_3_2x-8_1_nftdzj.webp"
            alt="icono de medalla de excelencia"
          />
          Material resistente
          <br />a golpes y caídas.
        </li>
      </ul>
    </section>
  );
}

export default LocalizadoresBenefitsSection;
