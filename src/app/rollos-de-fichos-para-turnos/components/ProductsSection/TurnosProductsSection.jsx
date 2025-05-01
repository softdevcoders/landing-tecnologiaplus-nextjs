import style from "./TurnosProductsSection.module.scss";

function TurnosProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        Colores de Ticket más solicitados
      </h2>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/tickets_2x-8_j3gdmx_mt44rr.webp"
          alt="Fichos para turnos"
        />
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        En Tecnología Plus, ofrecemos rollos de turnos de alta calidad,
        diseñados con cortes precisos para garantizar una impresión clara y
        duradera. Nuestros Fichos de turnos se adaptan perfectamente a cualquier
        turnero digital, minimizando el desperdicio y optimizando el uso en cada
        ticket, lo que mejora la eficiencia tanto para negocios como para
        clientes. No importa el tipo de negocio: en Tecnología Plus tenemos
        rollos de turnos ideales para sector salud, comercio, oficinas y más.
        Gracias a su versatilidad en fabricación, ofrecemos opciones
        personalizables en colores y numeración para cada sector, asegurando un
        sistema de turnos acorde a la necesidad del sector. Un flujo de turnos
        ágil es esencial para una experiencia positiva. Con nuestros rollos,
        garantizas una atención más ordenada, reduciendo tiempos de espera y
        evitando confusiones, lo que resulta en mayor satisfacción y un mejor
        desempeño operativo. Recomendados por múltiples empresas, nuestros
        rollos de turnos ofrecen calidad y rendimiento confiable. En Tecnología
        Plus, nos comprometemos a optimizar tu sistema de gestión de turnos,
        asegurando precisión y eficiencia en cada ticket.
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default TurnosProductsSection;
