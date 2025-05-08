import Link from "next/link";
import style from "./EnfermeriaSecondaryProductsSection.module.scss";
import { routes } from "@/config/routes";

function EnfermeriaSecondaryProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        Opciones de llamador de enfermeras
      </h2>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685527/llamador_blanco_2x-8_pibji3.webp"
              alt="Llamador de enfermería E2 Blanco"
            />
            <h3>Llamador E2 Blanco</h3>
            <Link
              className={style.card__btn}
              href={routes.landings.llamadoDeEnfermeriaCuidamaster.children.llamadorE2NBlanco.url}
            >
              Ver más
            </Link>
            <p>4.193 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739198779/Recurso_32_2x-8_ifuwuz.webp"
              alt="Botón para pacientes extensor EX1"
            />
            <h3>
              Llamador con
              <br />
              extensor EX1
            </h3>
            <Link
              className={style.card__btn}
              href={routes.landings.llamadoDeEnfermeriaCuidamaster.children.llamadorEx1.url}
            >
              Ver más
            </Link>
            <p>3.852 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685525/llamador_para_colgar_cuello_2x-8_oqbvar.webp"
              alt="Llamador de enfermeras para colgar en el cuello"
            />
            <h3>
              Llamador E1
              <br />
              para colgar en cuello
            </h3>
            <Link
              className={style.card__btn}
              href={routes.landings.llamadoDeEnfermeriaCuidamaster.children.llamadorE1ParaCuello.url}
            >
              Ver más
            </Link>
            <p>568 vendidos</p>
          </div>
        </div>
        <h2>Opciones para recibir llamados</h2>
        <div
          className={`${style.products__card__container} ${style.products__card__container__variant}`}
        >
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp"
              alt="Turnero T1-B"
            />
            <h3>
              Pantalla T1B de 1 llamado
            </h3>
            <Link
              className={style.card__btn}
              href={routes.landings.llamadoDeEnfermeriaCuidamaster.children.pantallaT1B.url}
            >
              Ver más
            </Link>
            <p>886 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/pantalla_T6_2x-8_zm3lja.webp"
              alt="Pantalla de turnos T6"
            />
            <h3>Pantalla T6 de 6 llamados</h3>
            <Link
              className={style.card__btn}
              href={routes.landings.llamadoDeEnfermeriaCuidamaster.children.pantallaT6.url}
            >
              Ver más
            </Link>
            <p>942 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685530/alarma_de_luz_2x-8_xhufht.webp"
              alt="Alarma de luz para enfermeras"
            />
            <h3>Alarma de luz</h3>
            <Link
              className={style.card__btn}
              href={routes.landings.llamadoDeEnfermeriaCuidamaster.children.alarmaDeLuz.url}
            >
              Ver más
            </Link>
            <p>2.649 vendidos</p>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp"
              alt="Reloj de llamado al personal"
            />
            <h3>Reloj receptor de llamados</h3>
            <Link
              className={style.card__btn}
              href={routes.landings.llamadoDeEnfermeriaCuidamaster.children.relojReceptorDeLlamados.url}
            >
              Ver más
            </Link>
            <p>2.276 vendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnfermeriaSecondaryProductsSection;
