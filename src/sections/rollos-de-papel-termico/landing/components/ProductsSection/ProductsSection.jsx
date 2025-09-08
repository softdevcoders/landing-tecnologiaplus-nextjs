import Image from "next/image";
import style from "./ProductsSection.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";

function ProductsSection() {
  return (
    <section className={style.products__section} data-nosnippet>
      <h2 className={style.products__title}>Rollos para impresora térmica</h2>
      <div className={style.products__container}>
        <Image
          width={1022}
          height={909}
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, (max-width: 1400px) 35vw, 20vw"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/image-1_1_ljyxis_qdsmdq"
          alt="Rollos Térmicos blancos"
          unoptimized={true}
        />
        <Image
          width={1237}
          height={908}
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, (max-width: 1400px) 35vw, 25vw"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/Recurso-13_2x-8_1_suitny_l91ptd"
          alt="rollos de papel termico para impresoras"
          unoptimized={true}
        />
      </div>
      <ToggleTextContent>
        <p>
          En Tecnología Plus, somos fabricantes especializados en rollos térmicos
          de alta calidad, diseñados para satisfacer las necesidades de impresión
          de todo tipo de negocios. Nuestros productos destacan por su precisión,
          durabilidad y compatibilidad con las principales impresoras del mercado.
          Nos comprometemos a brindar soluciones confiables que optimicen tus
          procesos y refuercen la profesionalidad de tu empresa. Elige Tecnología
          Plus y experimenta la diferencia que solo los expertos pueden ofrecer.
          ¡Contacta con nosotros y descubre cómo podemos ser tu mejor aliado en
          impresión térmica!
        </p>
      </ToggleTextContent>
    </section>
  );
}

export default ProductsSection;
