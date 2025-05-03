import style from "./EncuestaVirtualProductsSection.module.scss";

function EncuestaVirtualProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738681738/Group_3_1_kawcef.webp"
          alt="Computador portátil que muestra un aviso emergente de la aplicación de encuestas de satisfacción"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738681739/Group_4_1_h4asog.webp"
          alt="Ejemplo de una alerta en tiempo real recibida en un teléfono celular"
        />
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        Cada empresa es única, y OpinaMaster Virtual se adapta a sus
        necesidades. Este sistema de encuestas de satisfacción del cliente
        permite personalizar preguntas, elegir diferentes formatos de respuesta
        y compartir encuestas a través de múltiples canales, como pantallas
        táctiles, tablets, celulares, email y redes sociales. Su interfaz
        intuitiva y su diseño adaptable lo hacen ideal para cualquier sector,
        desde retail y restaurantes hasta clínicas y corporaciones. Con
        OpinaMaster, medir la experiencia del cliente te ayuda a tomar mejores
        decisiones.
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default EncuestaVirtualProductsSection;
