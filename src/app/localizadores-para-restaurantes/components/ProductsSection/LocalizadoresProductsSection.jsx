import style from "./LocalizadoresProductsSection.module.scss";
import ServerFirstImage from "../../../components/ServerFirstImage/ServerFirstImage";

function LocalizadoresProductsSection() {
  return (
    <section className={style.products__section}>
      <h2>Más de 1.000 restaurantes usan nuestros localizadores</h2>
      <p>Elige el avisador de pedidos que mejor se adapte a tu negocio.</p>
      <div className={style.products__container}>
        <ServerFirstImage
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738851946/rec_v3_2x-8_ehwkxo.webp"
          alt="Localizador para clientes Rec V3"
          width={500}
          height={500}
          optimizeAfterHydration={true}
        />
        <ServerFirstImage
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738851948/cir_c2_2x-8_icgmcm.webp"
          alt="Localizador para restaurantes Cir C2"
          width={600}
          height={500}
          optimizeAfterHydration={true}
        />
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        Los localizadores de clientes de Tecnología Plus son la solución ideal
        para facilitar la entrega de pedidos en restaurantes autoservicio y
        otros sectores. Con un alcance de más de 200 metros, estos dispositivos
        permiten a los usuarios disfrutar su tiempo sin temor de perder su
        turno, ya que el avisador de pedidos vibra alumbra y suena para avisar
        cuando el pedido está listo. Marcas reconocidas los utilizan en sus
        plazoletas de comidas, mejorando la atención y resaltando su marca a
        través de publicidad impresa en los localizadores de clientes.
        Fabricados con material termoplástico resistente a golpes, garantizan
        durabilidad y fiabilidad para más años de vida útil. Además, contamos
        con los repuestos para ofrecer servicio técnico y así prolongar su vida
        útil. Su versatilidad los hace ideales no solo para restaurantes, sino
        también en el sector salud y otros sectores que buscan facilitar la
        entrega de pedidos o el llamado de turnos. Con modelos que se ajustan
        según la necesidad, es una solución escalable que se ajusta según el
        crecimiento de los negocios, los Localizadores para restaurantes de
        Tecnología Plus son la herramienta perfecta para transformar la
        experiencia de atención al cliente.
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default LocalizadoresProductsSection;
