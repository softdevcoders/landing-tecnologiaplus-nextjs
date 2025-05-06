import style from "./TurnoExpressProductsSection.module.scss";

function TurnoExpressProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        Una pantalla de turnos para cada necesidad
      </h2>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp"
              alt="Turnero T1-B"
            />
            <h3>
              Turnero T<span>1</span>-B
            </h3>
            <p>294 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-t1-b"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T1N_2x-8_r4igzs.webp"
              alt="Turnero digital  T1-N"
            />
            <h3>
              Turnero T<span>1</span>-N
            </h3>
            <p>869 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs.vercel.app/turnero-turnoexpress/turnero-t1-n"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Fila_unica_2x-8_iejxvf.webp"
              alt="Turnero colombia de fila única"
            />
            <h3>Turnero fila única</h3>
            <p>32 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-fila-unica-supermercados"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T3_2x-8_ypmexo.webp"
              alt="Turneros digitales  T3"
            />
            <h3>Turnero T3</h3>
            <p>692 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-t3-modulo-turno"
            >
              Ver más
            </a>
          </div>
        </div>
        <h2>Turneros digitales personalizados</h2>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431730/Segun_producto_2x-8_fepwc0.webp"
              alt="turneros inalámbricos personalizados según producto"
            />
            <h3>Turnero Transformer</h3>
            <p>82 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-transformer"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431729/T3_con_logo_2x-8_ofmcyp.webp"
              alt="Turneros bogota​ T3 con logo"
            />
            <h3>Turnero T3 - con logo</h3>
            <p>269 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero-turnoexpress/turnero-t3-modulo-turno"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        Dale a tus clientes la comodidad que merecen con TurnoExpress. Nuestro
        Turnero digital elimina las aburridas filas, brindando orden y comodidad
        para tu equipo de trabajo y para tus clientes. Con nuestra pantalla de
        turnos ayudas a mejorar el servicio y los tiempos de atención, mientras
        tus clientes esperan el turno de una forma más cómoda y sin estrés
        porque sabrán exactamente cuantos turnos faltan para ser atendidos.
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default TurnoExpressProductsSection;
