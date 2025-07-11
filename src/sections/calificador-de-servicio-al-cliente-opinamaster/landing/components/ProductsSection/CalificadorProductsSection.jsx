import Link from "next/link";
import style from "./CalificadorProductsSection.module.scss";
import { routes } from "@/config/routes";

function CalificadorProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.product__item}>
          <Link href={routes.landings.calificadorDeServicioAlClienteOpinamaster.children.calificadorDeServicio.url}> 
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741104598/nuevo_4x-8_qbdidq.webp"
              alt="Calificador de Servicio"
              className={style.img__desktop}
            />
          </Link>
          <Link href={routes.landings.calificadorDeServicioAlClienteOpinamaster.children.calificadorDeServicio.url}> 
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742992729/6_4x-8_fqosbn.webp"
              alt="Calificador de Servicio"
              className={style.img__mobile}
            />
          </Link>
          <div className={style.btn__container}>
            <p className={style.selling__counter}>472 vendidos</p>
            <Link
              className={style.card__btn}
              href={routes.landings.calificadorDeServicioAlClienteOpinamaster.children.calificadorDeServicio.url}
            >
              Ver más
            </Link>
          </div>
        </div>
        <div className={style.product__item}>
          <Link href={routes.landings.calificadorDeServicioAlClienteOpinamaster.children.avisoDeParedParaCalificarServicio.url}> 
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738678296/Group_2_fpyzaa.webp"
              alt="Aviso de pared con calificador de servicio al cliente"
              className={style.img__desktop}
            />
          </Link>
          <Link href={routes.landings.calificadorDeServicioAlClienteOpinamaster.children.avisoDeParedParaCalificarServicio.url}> 
            <img
              loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742992730/7_4x-8_nuhjlt.webp"
            alt="Calificador de Servicio"
            className={style.img__mobile}
            />
          </Link>
          <div className={style.btn__container}>
            <p className={style.selling__counter}>38 vendidos</p>
            <Link
              className={style.card__btn}
              href={routes.landings.calificadorDeServicioAlClienteOpinamaster.children.avisoDeParedParaCalificarServicio.url}
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        En Tecnología Plus, entendemos que la satisfacción del cliente es clave
        para el éxito de cualquier negocio. Por eso, hemos desarrollado
        OpinaMaster, un sistema avanzado que permite recopilar opiniones en
        tiempo real y transformar cada experiencia en una oportunidad de mejora.
        Con nuestro Calificador de Servicio, los clientes pueden evaluar su
        atención de forma rápida, permitiéndote recibir alertas automáticas en
        caso de calificaciones negativas, personalizar preguntas según tus
        necesidades y acceder a estadísticas en línea para analizar tendencias y
        tomar decisiones estratégicas. Somos fabricantes, lo que nos permite
        ofrecer soluciones personalizadas, adaptadas a distintos sectores como
        restaurantes, clínicas, hoteles y más.
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default CalificadorProductsSection;
