import { routes } from "@/config/routes";
import style from "./TurnoExpressProductsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import ToggleTextContent from "@/components/toggle-text-content";

function TurnoExpressProductsSection() {

  const products = [
    {
      title: "Turnero T<span>1</span>-B",
      description: "294 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroT1B.url,
      type: "panel_turnos",
    },
    {
      title: "Turnero T<span>1</span>-N",
      description: "869 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T1N_2x-8_r4igzs.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroT1N.url,
      type: "panel_turnos",
    },
    {
      title: "Turnero fila única",
      description: "32 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Fila_unica_2x-8_iejxvf.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroFilaUnicaSupermercados.url,
      type: "panel_turnos",
    },
    {
      title: "Turnero T3",
      description: "692 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T3_2x-8_ypmexo.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroT3ModuloTurno.url,
      type: "panel_turnos",
    },
    {
      title: "Turnero Transformer",
      description: "82 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431730/Segun_producto_2x-8_fepwc0.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroTransformer.url,
      type: "panel_digital",
    },
    {
      title: "Turnero T3 - con logo",
      description: "269 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431729/T3_con_logo_2x-8_ofmcyp.webp",
      link: routes.landings.turneroTurnoexpress.children.turneroT3ConLogo.url,
      type: "panel_digital",
    },
  ];

  return (
    <section data-nosnippet className={style.ver__mas__section}> 
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Una pantalla de turnos para cada necesidad
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "panel_turnos").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Link href={product.link}>  
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={250}
                    height={250}
                    className={style.ver__mas__section__container__card__image__img}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <Link href={product.link}>  
                  <h3
                    dangerouslySetInnerHTML={{ __html: product.title }}
                  />
                </Link>
                <Link
                  className={style.ver__mas__section__container__card__content__btn}
                  href={product.link}
                >
                  Ver más
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Turneros digitales personalizados
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "panel_digital").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Link href={product.link}>  
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={250}
                    height={250}
                    className={style.ver__mas__section__container__card__image__img}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <Link href={product.link}>  
                  <h3
                    dangerouslySetInnerHTML={{ __html: product.title }}
                  />
                </Link>

                <Link
                  className={style.ver__mas__section__container__card__content__btn}
                  href={product.link}
                >
                  Ver más
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <ToggleTextContent showToggleButtonInDesktop={true}>
          <p>El <strong>turnero</strong> es una solución esencial para organizar filas de espera en bancos, restaurantes, farmacias, clínicas y diferentes tipos de negocios. Diseñado para ofrecer orden y comodidad, un <strong>turnero digital</strong> permite que cada cliente reciba su número y espere su turno sin confusiones ni incomodidades. Este sistema elimina el desorden de las filas físicas y mejora la experiencia del usuario, ya que siempre sabe cuántos turnos faltan para ser atendido. Gracias a su practicidad, el <strong>turnero digiturno</strong> se convierte en una herramienta indispensable para agilizar procesos y dar un servicio más organizado.</p>
          <p>Contar con un <strong>turnero electrónico</strong> facilita la gestión de la atención, optimiza el tiempo del personal y reduce el estrés de los clientes. Existen diferentes tipos de soluciones, desde el <strong>turnero manual</strong> hasta los <strong>turneros inalámbricos</strong> y digitales, todos adaptados a la necesidad de cada negocio. Los <strong>organizadores de fila</strong> permiten manejar grandes volúmenes de usuarios de manera eficiente, con pantallas claras y sistemas de fácil uso. Además, estos equipos responden a una de las preguntas más comunes: <strong>cómo organizar filas de espera</strong> sin complicaciones, ofreciendo la mejor experiencia en atención.</p>
          <p>En Tecnología Plus somos fabricantes de <strong>turneros en Colombia</strong> y ofrecemos equipos personalizables, con el respaldo de nuestra marca. Contamos con diferentes modelos de pantallas y sistemas, incluyendo <strong>turneros digitales</strong> en Medellín, Bogotá y Cali, adaptados a cada sector. Nuestros <strong>turneros para restaurantes</strong>, bancos o farmacias están diseñados para garantizar durabilidad, variedad de funciones y un precio competitivo. Apostar por un <strong>dispensador de turnos digital</strong> o manual de Tecnología Plus es invertir en orden, eficiencia y confianza para tu negocio.</p>
        </ToggleTextContent>
        
      </div>
    </section>
  );
}

export default TurnoExpressProductsSection;


