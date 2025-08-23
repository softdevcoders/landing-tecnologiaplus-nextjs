import Image from "next/image"; 
import style from "./LocalizadoresProductsSection.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";

function LocalizadoresProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        <span data-nosnippet>Más de 1.000 restaurantes usan nuestros localizadores</span>
      </h2>
      <p className={style.products__description}>
        <span data-nosnippet>Elige el avisador de pedidos que mejor se adapte a tu negocio.</span>
      </p>
      <div className={style.products__container}>
        <div className={style.products__container__item}>
          <Image
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_470/v1738851946/rec_v3_2x-8_ehwkxo.webp"
            alt="Localizador para clientes Rec V3"
            width={500}
            height={402}
            className={style.products__container__item__image}
          />
        </div>
        <div className={style.products__container__item}>
          <Image
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_600/v1738851948/cir_c2_2x-8_icgmcm.webp"
            alt="Localizador para restaurantes Cir C2"
            width={421}
            height={253}
            className={style.products__container__item__image}
          />
        </div>
      </div>
      <ToggleTextContent>
        <p><span data-nosnippet>En Tecnología Plus fabricamos <strong>localizadores para restaurantes</strong>, eventos y negocios autoservicio, diseñados para optimizar la entrega de pedidos y elevar la experiencia del cliente, con un alcance real de más de 200 metros, nuestros <strong>localizadores de clientes</strong> permiten a los usuarios disfrutar su tiempo con tranquilidad, ya que el avisador de pedidos vibra, ilumina y emite sonido en el momento exacto en que el pedido está listo. Marcas reconocidas los utilizan en plazoletas de comidas, potenciando la eficiencia operativa y proyectando su marca gracias a la publicidad personalizada en cada dispositivo.</span></p>
        <p><span data-nosnippet>Fabricados en material termoplástico de alta resistencia a golpes, garantizan durabilidad y rendimiento constante incluso en entornos de alta demanda. Contamos con repuestos originales y un completo servicio técnico para extender la vida útil del equipo. Su versatilidad permite implementarlos no solo en restaurantes, sino también en clínicas, hospitales, casas de eventos y cualquier lugar donde se requiera agilizar la entrega de pedidos o gestionar turnos de forma ordenada.</span></p>
        <p><span data-nosnippet>Disponibles en distintos modelos que se adaptan al crecimiento de cada negocio, los <strong>localizadores para restaurantes</strong> de Tecnología Plus son una solución escalable, fiable y diseñada para transformar por completo la atención al cliente, convirtiéndose en una inversión que genera eficiencia y satisfacción desde el primer día.</span></p>
      </ToggleTextContent>
    </section>
  );
}

export default LocalizadoresProductsSection;
