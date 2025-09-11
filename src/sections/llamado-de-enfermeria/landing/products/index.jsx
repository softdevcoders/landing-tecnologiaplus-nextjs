import ToggleTextContent from "@/components/toggle-text-content";
import style from "./styles.module.scss";
import Image from "next/image";

function LlamadoDeEnfermeriaProductsSection() {  
  return (
    <section data-nosnippet className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__container__item}>
          <div className={style.products__container__item__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738795337/Group_6_1_oukvce.webp"
              alt="Botón de llamado de personal"
              width={468}
              height={669}
              className={style.products__container__item__image__img}
              unoptimized={true}
            />
          </div>
        </div>
        <div className={style.products__container__item}>
          <div className={style.products__container__item__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738795342/Group_7_1_qxkgvu.webp"
              alt="Llamador de enfermeras para colgar en el cuello"
              width={649}
              height={649}
              className={style.products__container__item__image__img}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
      <ToggleTextContent>
        <p>El <strong>llamado de enfermería</strong> es una herramienta esencial en hospitales, clínicas y hogares geriátricos, ya que está diseñado para facilitar la comunicación entre paciente y enfermera de manera rápida y confiable. Nuestro <strong>llamador de enfermería</strong> combina practicidad y facilidad de uso: con solo presionar un botón para llamar a enfermera, la alerta llega de inmediato al personal, permitiendo una asistencia oportuna que mejora la calidad del servicio y genera tranquilidad tanto en pacientes como en familiares.</p>
        <p>Un <strong>sistema de llamado de enfermeras</strong> eficaz reduce los tiempos de espera y ayuda a organizar mejor las tareas del personal. Gracias a nuestro <strong>sistema de llamado de enfermería</strong>, la atención se vuelve más ágil, discreta y eficiente. Estos equipos pueden integrarse a un sistema de timbres para habitaciones, lo que facilita identificar solicitudes específicas y acudir con rapidez. Además, alternativas como el <strong>timbre para pacientes</strong> o el <strong>timbre hospitalario</strong> hacen que la asistencia sea más organizada y práctica en entornos con alta demanda.</p>
        <p>En Tecnología Plus desarrollamos <strong>llamadores hospitalarios</strong> adaptados a diferentes necesidades, desde clínicas pequeñas hasta grandes instituciones médicas. Ofrecemos soluciones como el <strong>timbre para cama de hospital</strong>, sistemas inalámbricos o dispositivos portátiles de largo alcance, fabricados con estándares de calidad que garantizan eficiencia y durabilidad. Con estas herramientas, el personal de salud puede responder de manera más rápida, mientras los pacientes disfrutan de mayor comodidad y comunicación directa. Apostar por este sistema es invertir en bienestar y confianza para todos.</p>
      </ToggleTextContent>
    </section>
  );
}

export default LlamadoDeEnfermeriaProductsSection;
