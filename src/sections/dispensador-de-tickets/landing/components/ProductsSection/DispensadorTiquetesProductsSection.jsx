import { routes } from "@/config/routes";
import style from "./DispensadorTiquetesProductsSection.module.scss";
import Link from "next/link";
import Image from "next/image";

function DispensadorTiquetesProductsSection() {
  return (
    <section className={style.products__section}>
      <Link href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}> 
        <h2 className={style.products__title}>Dispensador de rollos de turnos</h2>
      </Link>
      <div className={style.products__container}>
        <Link href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}> 
          <Image
            width={589}
            height={352}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424725/dispensador_2x-8_dwru2g.webp"
            alt="Colores de tickets y dispensador de turnos rojo"
          />
        </Link>
        <Link
          className={style.card__btn}
          href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}
        >
          Ver más
        </Link>
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        Elimina las filas y agiliza el flujo de atención, nuestro dispensador de
        turnos ayuda a reducir el desorden y mejora la experiencia de espera,
        asegurando que cada cliente sea atendido en el momento adecuado y sin
        confusiones.
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default DispensadorTiquetesProductsSection;
