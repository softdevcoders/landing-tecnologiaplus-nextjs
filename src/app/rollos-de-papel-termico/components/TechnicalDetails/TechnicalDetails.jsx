import style from "./TechnicalDetails.module.scss";

function TechnicalDetails() {
  return (
    <section className={style.technical__details}>
      <div>
        <h2 className={style.title__mobile}>Ficha Técnica</h2>
        <p className={style.subtitle__mobile}>Rollos térmicos</p>
      </div>
      <div className={style.technical__carousel__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/w95mg3v5l3rz4s634bso_dqg6eq.webp"
          alt="rollos y etiquetas para impresoras termicas"
        />
      </div>
      <div className={style.TechnicalDetails__container}>
        <div className={style.technical__textContainer}>
          <h2>Ficha Técnica</h2>
          <p>Rollos térmicos</p>
        </div>
        <div className={style.technical__info}>
          <h3>Color - Blanco</h3>
          <div className={style.technical__circle__figure}></div>
        </div>
        <div className={style.technical__info}>
          <h3>Características</h3>
          <ul>
            <li>
              <div className={style.technical__circle__figure}></div>
              <p>
                Color
                <br />
                Blanco
              </p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/uq6mantgalzbg1cwabg2_lq36yt.webp"
                alt="icono de papel térmico"
              />
              <p>
                Material:
                <br />
                Papel térmico
              </p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/mfucx7jyhfttrhehhv6f_gparqv.webp"
                alt="icono de Rollos térmicos"
              />
              <p>
                Distintos
                <br />
                tamaños
              </p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/mklyxhubukpeobmbjxso_swt54w.webp"
                alt="icono de rollos termicos impresora"
              />
              <p>
                Tipo de uso: para
                <br />
                impresora térmica
              </p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/jacnophczhcmtv5jmrmt_vsmuoe.webp"
                alt="icono de símbolo de aprobación"
              />
              <p>
                Compatible con la mayoría
                <br />
                de impresoras térmicas.
              </p>
            </li>
          </ul>
        </div>

        <a
          className={style.technical__details__btn}
          href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico/rollos-termicos"
        >
          Ver más
        </a>
      </div>
    </section>
  );
}

export default TechnicalDetails;
