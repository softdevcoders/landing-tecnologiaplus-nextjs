import style from "./SecondaryCalificadorProductsSection.module.scss";
import Image from "next/image";

function SecondaryCalificadorProductsSection() {
  return (
    <section className={style.products__section} data-nosnippet> 
      <div className={style.information}>
        <h2>Alertas en tiempo real.</h2>
        <p>Agiliza la toma de decisiones.</p>
        <Image
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596112/Alertas_cel_2x-8_tfsbg1"
          width={518}
          height={1036}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Recibe alertas moviles"
          unoptimized={true}
        />
      </div>
      <div className={style.information}>
        <h2>Métricas precisas.</h2>
        <p>Identifica como mejorar tu negocio.</p>
        <Image
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596106/Estadi%CC%81sticas_2x-8_dlqi3u"
          width={1823}
          height={1083}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt="Estadísticas en base a los resultados del calificador de servicio"
          unoptimized={true}
        />
      </div>
    </section>
  );
}

export default SecondaryCalificadorProductsSection;
