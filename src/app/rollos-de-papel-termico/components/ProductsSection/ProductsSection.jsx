import style from "./ProductsSection.module.scss";

function ProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>Rollos para impresora térmica</h2>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/image-1_1_ljyxis_qdsmdq.webp"
          alt="Rollos Térmicos blancos"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/Recurso-13_2x-8_1_suitny_l91ptd.webp"
          alt="rollos de papel termico para impresoras"
        />
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        En Tecnología Plus, somos fabricantes especializados en rollos térmicos
        de alta calidad, diseñados para satisfacer las necesidades de impresión
        de todo tipo de negocios. Nuestros productos destacan por su precisión,
        durabilidad y compatibilidad con las principales impresoras del mercado.
        Nos comprometemos a brindar soluciones confiables que optimicen tus
        procesos y refuercen la profesionalidad de tu empresa. Elige Tecnología
        Plus y experimenta la diferencia que solo los expertos pueden ofrecer.
        ¡Contacta con nosotros y descubre cómo podemos ser tu mejor aliado en
        impresión térmica!
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default ProductsSection;
