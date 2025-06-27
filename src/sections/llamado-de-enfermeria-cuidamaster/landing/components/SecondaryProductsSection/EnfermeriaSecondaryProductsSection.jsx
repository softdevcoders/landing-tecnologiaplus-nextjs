import { routes } from "@/config/routes";
import style from "./EnfermeriaSecondaryProductsSection.module.scss";
import Image from "next/image";
import Link from "next/link";

function EnfermeriaSecondaryProductsSection() {

  const products = [
    {
      title: "Llamador E2 Blanco", 
      description: "4.193 vendidos", 
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685527/llamador_blanco_2x-8_pibji3.webp", 
      link: routes.landings.llamadoDeEnfermeriaCuidamaster.children.llamadorE2NBlanco.url,
      type: "llamador_enfermera",
    },
    {
      title: "Llamador con <br> extensor EX<span>1</span>",
      description: "3.852 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739198779/Recurso_32_2x-8_ifuwuz.webp",
      link: routes.landings.llamadoDeEnfermeriaCuidamaster.children.llamadorEx1.url,
      type: "llamador_enfermera",
    },
    {
      title: "Llamador E<span>1</span> <br> para colgar en cuello",
      description: "568 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685525/llamador_para_colgar_cuello_2x-8_oqbvar.webp",
      link: routes.landings.llamadoDeEnfermeriaCuidamaster.children.llamadorE1ParaCuello.url,
      type: "llamador_enfermera",
    },
    {
      title: "Pantalla T<span>1</span>B de <span>1</span> llamado",
      description: "886 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp",
      link: routes.landings.llamadoDeEnfermeriaCuidamaster.children.pantallaT1B.url,
      type: "recibir_llamados",
    },
    {
      title: "Pantalla T6 de 6 llamados",
      description: "942 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/pantalla_T6_2x-8_zm3lja.webp",
      link: routes.landings.llamadoDeEnfermeriaCuidamaster.children.pantallaT6.url,
      type: "recibir_llamados",
    },
    {
      title: "Alarma de luz",
      description: "2.649 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685530/alarma_de_luz_2x-8_xhufht.webp",
      link: routes.landings.llamadoDeEnfermeriaCuidamaster.children.alarmaDeLuz.url,
      type: "recibir_llamados",
    },
    {
      title: "Reloj receptor de llamados",
      description: "2.276 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp",
      link: routes.landings.llamadoDeEnfermeriaCuidamaster.children.relojReceptorDeLlamados.url,
      type: "recibir_llamados",
    },
  ];

  return (
    <section className={style.ver__mas__section}>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Opciones para llamar a la enfermera
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "llamador_enfermera").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Link href={product.link}> 
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className={style.ver__mas__section__container__card__image__img}
                  />
                </Link>
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <Link href={product.link}> 
                  <h3 dangerouslySetInnerHTML={{ __html: product.title }} />
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
                    width={500}
                    height={500}
                    className={style.ver__mas__section__container__card__image__img}
                  />
                </Link>
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <Link href={product.link}> 
                  <h3 dangerouslySetInnerHTML={{ __html: product.title }} /> 
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

export default EnfermeriaSecondaryProductsSection;