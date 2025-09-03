import ToggleTextContent from "@/components/toggle-text-content";
import style from "./EncuestaVirtualProductsSection.module.scss";
import Image from "next/image";

function EncuestaVirtualProductsSection() {
  return (
    <section className={style.products__section} data-nosnippet>
      <div className={style.products__container}>
        <Image
          width={660}
          height={593}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738681738/Group_3_1_kawcef"
          alt="Computador portátil que muestra un aviso emergente de la aplicación de encuestas de satisfacción"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 20vw"
        />
        <Image
          width={559}
          height={589}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738681739/Group_4_1_h4asog"
          alt="Ejemplo de una alerta en tiempo real recibida en un teléfono celular"
        />
      </div>
      <ToggleTextContent>
        <p>
        Cada empresa es única, y OpinaMaster Virtual se adapta a sus
        necesidades. Este sistema de encuestas de satisfacción del cliente
        permite personalizar preguntas, elegir diferentes formatos de respuesta
        y compartir encuestas a través de múltiples canales, como pantallas
        táctiles, tablets, celulares, email y redes sociales. Su interfaz
        intuitiva y su diseño adaptable lo hacen ideal para cualquier sector,
        desde retail y restaurantes hasta clínicas y corporaciones. Con
        OpinaMaster, medir la experiencia del cliente te ayuda a tomar mejores
        decisiones.
        </p>
      </ToggleTextContent>
    </section>
  );
}

export default EncuestaVirtualProductsSection;
