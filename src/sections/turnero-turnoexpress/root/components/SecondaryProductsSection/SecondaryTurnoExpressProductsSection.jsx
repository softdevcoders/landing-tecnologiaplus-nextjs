import Link from "next/link";
import style from "./SecondaryTurnoExpressProductsSection.module.scss";
import { routes } from "@/config/routes";
import Image from "next/image";

function SecondaryTurnoExpressProductsSection() {
  return (
    <section data-nosnippet className={style.products__section}>
      <div className={style.products__card}>
        <Link href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}> 
          <h2 className={style.products__card__title}>Dispensador de tiquetes</h2> 
        </Link>
        <div className={style.products__card__image_container}>
          <Link href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}> 
            <Image
              width={490}
              height={320}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738789798/Dispensador_2x-8_soj9hp.webp"
              alt="Dispensador de turnos caracol rojo"
                className={style.products__card__image_container__image}
            />
          </Link>
        </div>
        <p className={style.products__card__sold}>2.686 vendidos</p>
        <Link
          className={style.products__card__btn}
          href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}
        >
          Ver más
        </Link>
      </div>
      <div className={style.products__card}>
        <Link href={routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url}> 
          <h2 className={style.products__card__title}>Rollos de turnos</h2>
        </Link>
        <div className={style.products__card__image_container}>
          <Link href={routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url}> 
            <Image
              width={490}
              height={320}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738448114/Rollos_de_turnos_2x-8_ovbwlu.webp"
              alt="Rollos de turnos personalizados"
                className={style.products__card__image_container__image}
            />
          </Link>
        </div>  
        <p className={style.products__card__sold}>8.527 vendidos</p>
        <Link
          className={style.products__card__btn}
          href={routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url}
        >
          Ver más
        </Link>
      </div>
    </section>
  );
}

export default SecondaryTurnoExpressProductsSection;
