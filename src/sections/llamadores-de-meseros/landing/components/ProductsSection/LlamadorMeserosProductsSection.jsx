import Image from "next/image"; 
import style from "./LlamadorMeserosProductsSection.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";
import { getOptimizedImageUrl } from "@/lib/imageUtils";


function LlamadorMeserosProductsSection() {
  return (
    <section data-nosnippet className={style.products__section}>
      <div className={style.products__container_mobile}>
        <div className={style.products__container__item}>
          <Image
            src={getOptimizedImageUrl({ url: "v1743022988/11_4x-8_1_sftupq", width: 600, quality: 80 })}
            alt="Reloj receptor de llamados para meseros"
            width={500}
            height={402}
            className={style.products__container__item__image}
            unoptimized={true}
          />
        </div>
        <div className={style.products__container__item}>
          <Image
            src={getOptimizedImageUrl({ url: "v1743022991/12_4x-8_km9kam", width: 600, quality: 80 })}
            alt="Hablador de mesa junto al botón para llamar al mesero"
            width={421}
            height={253}
            className={style.products__container__item__image}
            unoptimized={true}
          />
        </div>
      </div>
      <div className={style.products__container_desktop}>
        <div className={style.products__container__item}>
          <Image
            src={getOptimizedImageUrl({ url: "v1738694397/Group_8_og4pea", quality: 80 })}
            alt="Reloj receptor de llamados para meseros"
            width={800}
            height={585}
            className={style.products__container__item__image}
            unoptimized={true}
          />
        </div>
        <div className={style.products__container__item}>
          <Image
            src={getOptimizedImageUrl({ url: "v1738694396/Group_9_yutx7u", quality: 80 })}
            alt="Hablador de mesa junto al botón para llamar al mesero"
            width={800}
            height={585}
            className={style.products__container__item__image}
            unoptimized={true}
          />
        </div>
      </div>  
      <ToggleTextContent> 
        <p>Eleva la experiencia de tu negocio con los <strong>llamadores de meseros</strong>, una solución moderna diseñada para optimizar la comunicación entre clientes y personal. Este innovador sistema permite que, con solo pulsar un botón, los comensales soliciten atención inmediata sin tener que levantar la mano ni interrumpir su conversación. Al recibir la alerta, el mesero identifica la mesa y acude de manera rápida y discreta, logrando que el servicio sea más ágil y eficiente. Con el llamador de meseros, cada detalle cuenta para mejorar la satisfacción del cliente y fortalecer la reputación de tu restaurante, bar o cafetería.</p>
        <p>Los <strong>llamadores para restaurantes</strong> no solo agilizan la atención, también contribuyen a organizar mejor el flujo de trabajo del personal. Gracias a los <strong>timbres para mesas de restaurantes</strong>, se reducen los tiempos de espera y se aumenta la rotación de mesas, lo que impacta directamente en las ventas. Este tipo de dispositivos ofrecen un entorno más cómodo para los clientes, quienes perciben un servicio moderno, ordenado y profesional. Además, su instalación es sencilla y se adaptan perfectamente a diferentes tipos de negocios gastronómicos o de servicio al público.</p>
        <p>En Tecnología Plus encuentras múltiples opciones de <strong>llamadores de personal</strong>, que permiten gestionar varias mesas al mismo tiempo. Estos equipos no solo mejoran la experiencia del cliente, sino que también aumentan la productividad del equipo de trabajo. Invertir en un <strong>sistema de llamadores de meseros</strong> es apostar por la innovación, la eficiencia y la fidelización de quienes visitan tu negocio.</p>
      </ToggleTextContent>
    </section>
  );
}

export default LlamadorMeserosProductsSection;
