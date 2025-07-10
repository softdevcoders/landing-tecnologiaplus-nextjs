import { routes } from "@/config/routes";
import style from "./DispensadorTiquetesProductsSection.module.scss";
import Link from "next/link";
import Image from "next/image";
import ToggleTextContent from "@/components/toggle-text-content";

function DispensadorTiquetesProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>Dispensador de rollos de turnos</h2>
      <div className={style.products__container}>
        <Image
          width={1594}
          height={952}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424725/dispensador_2x-8_dwru2g"
          alt="Colores de tickets y dispensador de turnos rojo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
        />
        <Link
          className={style.card__btn}
          href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}
        >
          Ver más
        </Link>
      </div>
      <ToggleTextContent>
        Elimina las filas y agiliza el flujo de atención, nuestro dispensador de turnos ayuda a reducir el desorden y mejora la experiencia de espera,asegurando que cada cliente sea atendido en el momento adecuado y sin confusiones.
      </ToggleTextContent>
    </section>
  );
}

export default DispensadorTiquetesProductsSection;
