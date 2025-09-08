import { routes } from "@/config/routes";
import style from "./DispensadorTiquetesProductsSection.module.scss";
import Link from "next/link";
import Image from "next/image";
import ToggleTextContent from "@/components/toggle-text-content";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

function DispensadorTiquetesProductsSection() {
  return (
    <section className={style.products__section} data-nosnippet>
      <h2 className={style.products__title}>Dispensador de rollos de turnos</h2>
      <div className={style.products__container}>
        <Image
          width={1594}
          height={952}
          src={getOptimizedImageUrl({ url: 'v1738424725/dispensador_2x-8_dwru2g', width: 900, quality: 80 })}
          alt="Colores de tickets y dispensador de turnos rojo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
          unoptimized={true}
        />
        <Link
          className={style.card__btn}
          href={routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}
        >
          Ver más
        </Link>
      </div>
      <ToggleTextContent>
        <p>Elimina las filas y agiliza el flujo de atención, nuestro dispensador de turnos ayuda a reducir el desorden y mejora la experiencia de espera,asegurando que cada cliente sea atendido en el momento adecuado y sin confusiones.</p>
      </ToggleTextContent>
    </section>
  );
}

export default DispensadorTiquetesProductsSection;
