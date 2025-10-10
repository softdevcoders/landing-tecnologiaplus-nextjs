import style from "./TurnosProductsSection.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";
import Image from "next/image";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

function TurnosProductsSection() {
  return (
    <section className={style.products__section} data-nosnippet>
      <h2 className={style.products__title}>
        Colores de Ticket para turnos más solicitados
      </h2>
      <div className={style.products__container}>
        <div className={style.product__image_container}>
          <Image
            width={967}
            height={352}
            src={getOptimizedImageUrl({ url: 'v1760130661/tickets_para_turnos_alfanumericos_de_colores', width: 1200, quality: 80 })}
            title="Rollo de tickets turno en varios colores para dispensador tipo caracol"
            alt="Rollo de tickets turno alfanuméricos de colores, ideal para diferentes sectores y puntos de atención"
            className={style.product__image}
            unoptimized={true}
          />
        </div>

        <ToggleTextContent showToggleButtonInDesktop={true}>
          <p>En Tecnología Plus fabricamos <strong>fichos para turnos</strong> y <strong>rollos de turnos</strong> con materiales resistentes y numeración precisa, pensados para optimizar el flujo de atención en cualquier punto de servicio. Cada <strong>rollo de tickets para turnos</strong> está diseñado con cortes limpios que facilitan la impresión y evitan desperdicios, garantizando una experiencia ordenada tanto para clientes como para el personal. Su compatibilidad con sistemas turnomatic, turnero o dispensador de turnos los convierte en una solución práctica para negocios de todos los sectores.</p>  
          <p>Nuestros <strong>rollos de papel para turnos</strong> están disponibles en varios colores y opciones de numeración, permitiendo adaptar <strong>cada ticket de turno numerado</strong> a la identidad visual de tu empresa. Ya sea un <strong>rollo de turno</strong> para el área de atención al cliente, un <strong>rollo para turnomatic</strong> o un <strong>rollo para dispensador de turnos</strong>, todos aseguran un rendimiento confiable y una lectura nítida con corte preciso.  Además, puedes elegir entre diferentes formatos según el tipo de dispensador o <strong>sistema de tickets</strong> que utilices, fabricados con precisión para minimizar el desperdicio y mejorar el aprovechamiento de cada <strong>ticket</strong>.</p>  
          <p>Con los <strong>rollos de tickets</strong> para turnos de Tecnología Plus, obtienes una herramienta eficaz para mantener el orden, reducir los tiempos de espera y mejorar la experiencia de tus usuarios. Cada <strong>rollo de números para turnos</strong> está pensado para maximizar la eficiencia en sectores como salud, banca, comercio u oficinas. Apostar por nuestros productos es invertir en una gestión de turnos más fluida, reduciendo tiempos de espera y optimizando la gestión de turnos en todo momento.</p>  
        </ToggleTextContent>
      </div>
    </section>
  );
}

export default TurnosProductsSection;
