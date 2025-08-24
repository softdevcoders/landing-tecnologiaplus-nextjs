import { routes } from "@/config/routes";
import style from "./LlamadorMeserosVerMasSection.module.scss";
import Image from "next/image";
import Link from "next/link";

function LlamadorMeserosVerMasSection() {

  const products = [
    {
      title: "Llamador E2-N de 3 teclas",
      description: "4.987 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742395037/Boto%CC%81n_3_teclas_4x-8_buaiyg.webp",
      link: routes.landings.llamadoresDeMeseros.children.e2_n.url,
      type: "llamador_mesero",
    },
    {
      title: "Llamador E2-B de 2 teclas",
      description: "4.193 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694394/2_2x-8_1_yojp4b.webp",
      link: routes.landings.llamadoresDeMeseros.children.e2_b.url,
      type: "llamador_mesero",
    },
    {
      title: "Hablador para mesa",
      description: "2.175 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694393/3_2x-8_igijiu.webp",
      link: routes.landings.llamadoresDeMeseros.children.habladorDeMesa.url,
      type: "llamador_mesero",
    },
    {
      title: "Control numérico para cocina",
      description: "198 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694391/4_2x-8_mioq3p.webp",
      link: routes.landings.llamadoresDeMeseros.children.controlNumerico.url,
      type: "llamador_mesero",
    },
    {
      title: "Reloj receptor de llamados",
      description: "2.276 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp",
      link: routes.landings.llamadoresDeMeseros.children.relojReceptorDeLlamados.url,
      type: "recibir_llamados",
    },
    {
      title: "Pantalla T<span>1</span>-B de <span>1</span> llamado",
      description: "886 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp",
      link: routes.landings.llamadoresDeMeseros.children.t1_b.url,
      type: "recibir_llamados",
    },
    {
      title: "Pantalla T6 de 6 llamados",
      description: "942 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694391/6_llamados_2x-8_wppkb6.webp",
      link: routes.landings.llamadoresDeMeseros.children.t6.url,
      type: "recibir_llamados",
    },
  ];

  return (
    <section data-nosnippet className={style.ver__mas__section}>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Opciones para llamar al mesero
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "llamador_mesero").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Link href={product.link}>  
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={250}
                    height={250}
                    className={style.ver__mas__section__container__card__image__img}
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
          Opciones para recibir llamados
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "recibir_llamados").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Link href={product.link}>  
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={250}
                    height={250}
                    className={style.ver__mas__section__container__card__image__img}
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
    </section>
  );
}

export default LlamadorMeserosVerMasSection;

