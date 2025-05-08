import style from "./EnfermeriaBenefitsSection.module.scss";

function EnfermeriaBenefitsSection() {
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_1_2x-8_1_yqr37o.webp"
            alt="icono de gota de agua"
          />
          <div>
            <div>
              Resiste derrames de agua.
              <span className={style.hide__on__mobile}>*</span>
            </div>
            <span>*Referencia seleccionada</span>
          </div>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_2_2x-8_1_kjdmh4.webp"
            alt="icono de batería de carga"
          />
          Batería de larga duración.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
            alt="icono de conectividad y largo alcance"
          />
          Señal de largo alcance.
        </li>
      </ul>
    </section>
  );
}

export default EnfermeriaBenefitsSection;
