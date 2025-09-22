import Link from "next/link";
import style from "./SecondaryTurnoExpressProductsSection.module.scss";
import { routes } from "@/config/routes";
import Image from "next/image";

function SecondaryTurnoExpressProductsSection() {
  return (
    <section data-nosnippet className={style.products__section}>
      <div className={style.products__card}>
        <Link href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}> 
          <span className={style.products__card__title}>Dispensador de tiquetes</span> 
        </Link>
        <div className={style.products__card__image_container}>
          <Link href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}> 
            <Image
              width={490}
              height={320}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/v1758571671/dispensador_de_tickets_tecnologia_plus"
              alt="Dispensador de tickets - Tecnología Plus"
              title="Dispensador de tickets"
              className={style.products__card__image_container__image}    
              unoptimized={true}
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
          <span className={style.products__card__title}>Rollos de turnos</span>
        </Link>
        <div className={style.products__card__image_container}>
          <Link href={routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url}> 
            <Image
              width={490}
              height={320}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/v1758571659/rollos_de_fichos_para_turnos_tecnologia_plus"
              alt="Rollos de fichos para turnos - Tecnología Plus"
              title="Rollos de fichos para turnos"
              className={style.products__card__image_container__image}
              unoptimized={true}
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
