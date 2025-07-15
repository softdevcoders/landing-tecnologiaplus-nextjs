import style from "./SecondaryEncuestaVirtualProductsSection.module.scss";
import Image from "next/image";

function SecondaryEncuestaVirtualProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.information}>
        <h2>Gráficos para tomar decisiones</h2>
        <p>Convierte opiniones en gráficos que reflejan la percepción real de tus clientes.</p>
      </div>
      <Image
        src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596106/Estadi%CC%81sticas_2x-8_dlqi3u.webp"
        width={1823}
        height={1083}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Estadísticas en base a los resultados del calificador de servicio"
      />
    </section>
  );
}

export default SecondaryEncuestaVirtualProductsSection;
