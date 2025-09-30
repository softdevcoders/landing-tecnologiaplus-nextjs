import { routes } from "@/config/routes";
import style from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import ToggleTextContent from "@/components/toggle-text-content";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

function DispensadorTiquetesProductsSection() {
  return (
    <section className={style.products__section} data-nosnippet>
      <h2 className={style.products__title}>Dispensador de tickets compatible con rollos de turnos</h2>
      <div className={style.products__container}>
        <div className={style.products__wrapper}>
          <div className={style.products__wrapper__item}>
            <Image
              width={1594}
              height={952}
              src={getOptimizedImageUrl({ url: 'v1759249532/caracol_de_turnos_rollo_tickets', width: 900, quality: 80 })}
              alt="Caracol de turnos compatible con rollos grandes de tiquetes"
              title="Caracol de turnos con rollos de tickets para atención al cliente"
              unoptimized={true}
            />
          </div>
          <div className={style.products__wrapper__item}>
            <span className={style.products__wrapper__item__title}>Opciones de colores</span>
            <Image
              width={1594}
              height={952}
              src={getOptimizedImageUrl({ url: 'v1759249532/dispensador_de_tickets_para_bancos_colores', width: 900, quality: 80 })}
              alt="Dispensador de tickets para bancos en colores azul rojo y verde"
              title="Dispensador de tickets para bancos disponible en varios colores"
              unoptimized={true}
            />
          </div>
        </div>
      </div>
      <h2 className={style.products__title}>Accesorios para dispensador de tiquetes</h2>
      <div className={style.products__container}>
        <div className={style.products__wrapper}>
          <div className={`${style.products__wrapper__item} ${style.products__wrapper__item__soporte}`}>
            <h3 className={style.products__wrapper__item__title}>Soporte de piso para dispensador de tickets</h3>
            <Image
              width={1594}
              height={952}
              src={getOptimizedImageUrl({ url: 'v1759249531/dispensador_de_tickets_de_piso_soporte_120cm', height: 900, quality: 80 })}
              alt="Dispensador de tickets de piso con soporte negro de 120 cm de altura"
              title="Dispensador de tickets de piso con soporte vertical para turnos"
              unoptimized={true}
            />
          </div>
          <div className={style.products__wrapper__item}>
            <h3 className={style.products__wrapper__item__title}>Acrílico ‘Tome su turno’ para dispensador de tickets</h3>
            <Image
              width={1594}
              height={952}
              src={getOptimizedImageUrl({ url: 'v1759249532/dispensador_de_tickets_de_pared_personalizable', width: 900, quality: 80 })}
              alt="Dispensador de tickets de pared color rojo con acrílico personalizable para turnos"
              title="Dispensador de tickets de pared con opción de personalizar logotipo"
              unoptimized={true}
            />
          </div>
        </div>
        <Link
          className={style.card__btn}
          href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}
        >
          Ver más
        </Link>
      </div>
      <ToggleTextContent showToggleButtonInDesktop={true}>
        <p>El <strong>dispensador de tickets</strong> es la herramienta ideal para organizar el flujo de personas en cualquier espacio de atención. Al implementar un <strong>dispensador de tiquetes</strong> se eliminan las filas desordenadas, se optimiza la experiencia del cliente y se asegura que cada persona sea atendida en orden, sin confusiones ni esperas innecesarias. Estos equipos son ampliamente utilizados en bancos, clínicas, oficinas y eventos, ya que garantizan un proceso mucho más ágil y ordenado.</p>
        <p>Contar con un <strong>dispensador de turnos manual</strong> aporta una ventaja competitiva: permite manejar con precisión la entrega de números y controlar de manera eficiente la afluencia de clientes. Existen diferentes modelos en colores, el <strong>dispensador de números</strong> para atención, que se adaptan a distintas necesidades según el tipo de servicio y el volumen de usuarios, que ofrecen mayor capacidad y comodidad al momento de entregar los números.</p>
        <p>Además, el <strong>dispensador de tickets para turnos</strong> brinda una experiencia más clara y organizada en entornos de alta demanda. Al integrar este sistema en cualquier punto de atención se logra mayor eficiencia, orden y satisfacción del cliente, lo que convierte al dispensador en un aliado estratégico para empresas y organizaciones que desean ofrecer un servicio impecable.</p>
        <p>Elegir un <strong>dispensador de números para colas</strong> o un <strong>dispensador de tickets para turnos</strong> significa invertir en eficiencia y orden. Estos equipos no solo agilizan la entrega de números, sino que también mejoran la percepción del servicio y reducen la frustración en los clientes. Gracias a su diseño funcional y sus accesorios, los <strong>dispensadores de tickets</strong> se convierten en un aliado estratégico para cualquier empresa u organización que desee ofrecer una atención más clara, rápida y organizada.</p>
      </ToggleTextContent>
    </section>
  );
}

export default DispensadorTiquetesProductsSection;
