import style from "./LlamadorMeserosVideosSection.module.scss";
import YouTubePlayer from "@/components/youtube-player";

function LlamadorMeserosVideosSection() {
  return (
    <section data-nosnippet className={style.video__section}>
      <div className={style.video__container}>
        <h2 className={style.video__title}>Mira cómo funciona el botón para llamar al mesero</h2>
        <div
          className={style.video__card__container}
        >
          <div className={style.video__card}>
            <p className={style.video__card__title}>Así de fácil es mejorar la atención en tu restaurante.</p>
            <div className={style.video__card__player__container}>
              <YouTubePlayer
                videoId="uXfDzZuoym4"
                title="Así de fácil es mejorar la atención en tu restaurante"
                imageCover="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758214316/vista_previa_video_timbre_de_restaurante"
                imageCoverAlt="Vista previa del video sobre timbre de restaurante"
                imageCoverTitle="Video timbre de restaurante"
              />
            </div>

          </div>
          <div className={style.video__card}>
            <p className={style.video__card__title}>Personal más alerta, facilita el llamado de meseros desde la cocina.</p>
            <div className={style.video__card__player__container}>
              <YouTubePlayer
                videoId="XevVCpp6Drc"
                title="Personal más alerta, facilita el llamado de meseros desde la cocina"
                imageCover="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758214313/vista_previa_video_timbre_inalambrico_para_restaurantes"
                imageCoverAlt="Vista previa del video timbre inalámbrico para restaurantes"
                imageCoverTitle="Video timbre inalámbrico para restaurantes"
              />
            </div>
          </div>
          <div className={style.video__card}>
            <p className={style.video__card__title}>Un solo toque y el número de mesa aparece en pantalla.</p>
            <div className={style.video__card__player__container}>
              <YouTubePlayer
                videoId="9CPZ2QoFyqM"
                title="Un solo toque y el número de mesa aparece en pantalla"
                imageCover="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758214313/vista_previa_video_llamadores_de_mesa"
                imageCoverAlt="Vista previa del video explicativo de llamadores de mesa"
                imageCoverTitle="Video llamadores de mesa"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LlamadorMeserosVideosSection;

