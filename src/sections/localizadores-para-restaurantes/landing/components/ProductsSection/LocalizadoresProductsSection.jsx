import style from "./LocalizadoresProductsSection.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";
import Viewer3DWithModal from "@/components/3d-viewer-with-modal/Viewer3DWithModal";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

function LocalizadoresProductsSection() {
  return (
    <section data-nosnippet className={style.products__section}>
      <h2 className={style.products__title}>
        Más de 1.000 restaurantes usan nuestros localizadores de clientes
      </h2>
      <p className={style.products__description}>
        Elige el avisador de pedidos que mejor se adapte a tu negocio.
      </p>
      <div className={style.viewer3d__iconArrastrarParaRotar}>
        <img 
          src={getOptimizedImageUrl({url: 'v1761071071/arrastrar-para-rotar-3d', quality: 80})} 
          alt="Arrastra para rotar el modelo 3D"
        />
      </div>
      <div className={style.products__container}>
        <div className={style.products__container__item}>
          <Viewer3DWithModal
            modelID="a31cf7ea2e914152a9c9fbb928c0c555"
            title="LRS Rec V3 de Tecnología Plus"
            preset="ecommerce"
            isMobile={false}
            enableZoom={true}
            enableControls={true}
            showIconArrastrarParaRotar={false}
            show360Button={true}
            buttonPosition="bottom-right"
            buttonSize="medium"
          />
        </div>
        <div className={style.products__container__item}>
          <Viewer3DWithModal
            modelID="493cf372aabd43dd8839b1f42f199409"
            title="Avisador de pedidos Cir C2"
            preset="ecommerce"
            isMobile={false}
            enableZoom={true}
            enableControls={true}
            showIconArrastrarParaRotar={false}
            show360Button={true}
            buttonPosition="bottom-right"
            buttonSize="medium"
          />
        </div>
      </div>
    
      <ToggleTextContent showToggleButtonInDesktop={true}>
        <p>En Tecnología Plus fabricamos <strong>localizadores para restaurantes</strong>, eventos y negocios autoservicio, diseñados para optimizar la entrega de pedidos y elevar la experiencia del cliente, con un alcance real de más de 200 metros, nuestros <strong>localizadores de clientes</strong> permiten a los usuarios disfrutar su tiempo con tranquilidad, ya que el avisador de pedidos vibra, ilumina y emite sonido en el momento exacto en que el pedido está listo. Marcas reconocidas los utilizan en plazoletas de comidas, potenciando la eficiencia operativa y proyectando su marca gracias a la publicidad personalizada en cada dispositivo.</p>
        <p>Fabricados en material termoplástico de alta resistencia a golpes, garantizan durabilidad y rendimiento constante incluso en entornos de alta demanda. Contamos con repuestos originales y un completo servicio técnico para extender la vida útil del equipo. Su versatilidad permite implementarlos no solo en restaurantes, sino también en clínicas, hospitales, casas de eventos y cualquier lugar donde se requiera agilizar la entrega de pedidos o gestionar turnos de forma ordenada.</p>
        <p>Disponibles en distintos modelos que se adaptan al crecimiento de cada negocio, los <strong>localizadores para restaurantes</strong> de Tecnología Plus son una solución escalable, fiable y diseñada para transformar por completo la atención al cliente, convirtiéndose en una inversión que genera eficiencia y satisfacción desde el primer día.</p>
      </ToggleTextContent>
    </section>
  );
}

export default LocalizadoresProductsSection;
