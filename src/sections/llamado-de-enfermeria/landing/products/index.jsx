import ToggleTextContent from "@/components/toggle-text-content";
import style from "./styles.module.scss";
import Image from "next/image";
import ImageGallery from "@/components/image-gallery";

function LlamadoDeEnfermeriaProductsSection() {  
  return (
    <section data-nosnippet className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__container__item}>
          <div className={style.products__container__item__gallery}>
            <ImageGallery
              thumbnailsOrientation="horizontal"
              showThumbnails={true}
              productTitle="Llamador de Meseros E2-B"
              mediaItems={[
                {
                  type: '3d',
                  modelID: 'b271ce6e9af044809cda4173953f98ac',
                  thumbnail: 'v1757338396/llamador_de_meseros_e2b_blanco_rojo',
                  preview: 'v1757338396/llamador_de_meseros_e2b_blanco_rojo',
                  alt: 'Llamador para restaurantes blanco y rojo, fácil de usar y atractivo.',
                  title: 'Llamador para restaurantes blanco y rojo, ideal para atención rápida.',
                  darkBackground: true
                },
                {
                  type: '3d',
                  modelID: 'f309cdec26f44f28a21de01aa90eea1d',
                  thumbnail: 'v1757338387/llamador_de_meseros_e2b_2_teclas_blanco_amarillo',
                  preview: 'v1757338387/llamador_de_meseros_e2b_2_teclas_blanco_amarillo',
                  alt: 'Botón de llamador de meseros blanco y amarillo, diseño moderno y vistoso.',
                  title: 'Botón de llamador de meseros blanco y amarillo para mesas de servicio.',
                  darkBackground: true
                },
                {
                  type: '3d',
                  modelID: '16e8d01891ca4913b7b9b5027828d85e',
                  thumbnail: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_modelo',
                  preview: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_modelo',
                  alt: 'Timbre para llamar al mesero blanco y negro, elegante y funcional.',
                  title: 'Timbre para llamar al mesero blanco y negro para restaurantes.',
                  darkBackground: true
                },
                {
                  type: '3d',
                  modelID: '7f65ca693d5d41ce933a2b3f113ad4b7',
                  thumbnail: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
                  preview: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
                  alt: 'Llamador de meseros negro y rojo, ideal para restaurantes modernos.',
                  title: 'Llamador de meseros negro y rojo con diseño elegante.',
                  darkBackground: true
                },
                {
                  type: '3d',
                  modelID: 'a9eaa5b55b94451798ed570eeece63da',
                  thumbnail: 'v1757338385/timbre_para_mesa_de_restaurante_e2b_negro_amarillo',
                  preview: 'v1757338385/timbre_para_mesa_de_restaurante_e2b_negro_amarillo',
                  alt: 'Timbre para llamar al mesero negro y amarillo, práctico y visible.',
                  title: 'Timbre para llamar al mesero negro y amarillo para servicio rápido.',
                  darkBackground: true
                },
                {
                  type: '3d',
                  modelID: 'bcb6d9771ab34f918e3ec8330fc0549d',
                  thumbnail: 'v1757338391/llamador_de_meseros_e2b_negro_negro',
                  preview: 'v1757338391/llamador_de_meseros_e2b_negro_negro',
                  alt: 'Botón para llamar al mesero color negro, diseño sobrio y profesional.',
                  title: 'Botón para llamar al mesero negro para restaurantes elegantes.',
                  darkBackground: true
                }
              ]}
              title="Llamador de Meseros - Tecnología Plus"
            />
          </div>
        </div>
        <div className={style.products__container__item}>
          <div className={style.products__container__item__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1758724166/llamador_de_enfermeria_boton__pared"
              alt="Llamador de enfermería CuidaMaster para pared con botón de llamado y cancelación"
              title="Llamador de Enfermería | Botón CuidaMaster para pared"
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
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757698091/sistema_de_llamado_de_enfermeria_colgante_pacientes"
              alt="Sistema de llamado de enfermería CuidaMaster con cordón colgante para pacientes"
              title="Sistema de Llamado de Enfermería colgante para pacientes"
              width={649}
              height={649}
              className={style.products__container__item__image__img}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
      <ToggleTextContent showToggleButtonInDesktop={true}>
        <p>El <strong>llamado de enfermería</strong> es una herramienta esencial en hospitales, clínicas y hogares geriátricos, ya que está diseñado para facilitar la comunicación entre paciente y enfermera de manera rápida y confiable. Nuestro <strong>llamador de enfermería</strong> combina practicidad y facilidad de uso: con solo presionar un botón para llamar a enfermera, la alerta llega de inmediato al personal, permitiendo una asistencia oportuna que mejora la calidad del servicio y genera tranquilidad tanto en pacientes como en familiares.</p>
        <p>Un <strong>sistema de llamado de enfermeras</strong> eficaz reduce los tiempos de espera y ayuda a organizar mejor las tareas del personal. Gracias a nuestro <strong>sistema de llamado de enfermería</strong>, la atención se vuelve más ágil, discreta y eficiente. Estos equipos pueden integrarse a un sistema de timbres para habitaciones, lo que facilita identificar solicitudes específicas y acudir con rapidez. Además, alternativas como el <strong>timbre para pacientes</strong> o el <strong>timbre hospitalario</strong> hacen que la asistencia sea más organizada y práctica en entornos con alta demanda.</p>
        <p>En Tecnología Plus desarrollamos <strong>llamadores hospitalarios</strong> adaptados a diferentes necesidades, desde clínicas pequeñas hasta grandes instituciones médicas. Ofrecemos soluciones como el <strong>timbre para cama de hospital</strong>, sistemas inalámbricos o dispositivos portátiles de largo alcance, fabricados con estándares de calidad que garantizan eficiencia y durabilidad. Con estas herramientas, el personal de salud puede responder de manera más rápida, mientras los pacientes disfrutan de mayor comodidad y comunicación directa. Apostar por este sistema es invertir en bienestar y confianza para todos.</p>
      </ToggleTextContent>
    </section>
  );
}

export default LlamadoDeEnfermeriaProductsSection;
