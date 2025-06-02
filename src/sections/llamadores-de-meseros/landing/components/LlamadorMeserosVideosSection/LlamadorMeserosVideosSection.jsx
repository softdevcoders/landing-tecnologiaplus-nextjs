import style from "./LlamadorMeserosVideosSection.module.scss";
import YouTubePlayer from "@/components/YouTubePlayer";

function LlamadorMeserosVideosSection() {
  return (
    <>
      <section className={style.video__section}>
        <div className={style.video__container}>
          <h2 className={style.video__title}>Dale play para verlos funcionar</h2>
          <div
            className={style.video__card__container}
          >
            <div className={style.video__card}>
              <p className={style.video__card__title}>Así de fácil es mejorar la atención en tu restaurante.</p>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="uXfDzZuoym4"
                  title="Así de fácil es mejorar la atención en tu restaurante"
                  imageCover="https://i.ytimg.com/vi_webp/uXfDzZuoym4/maxresdefault.webp"
                />
              </div>

            </div>
            <div className={style.video__card}>
              <p className={style.video__card__title}>Personal más alerta, facilita el llamado de meseros desde la cocina.</p>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="XevVCpp6Drc"
                  title="Personal más alerta, facilita el llamado de meseros desde la cocina"
                  imageCover="https://i.ytimg.com/vi_webp/XevVCpp6Drc/sddefault.webp"
                />
              </div>
            </div>
            <div className={style.video__card}>
              <p className={style.video__card__title}>Un solo toque y el número de mesa aparece en pantalla.</p>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="b2nlu7sOlcI"
                  title="Un solo toque y el número de mesa aparece en pantalla"
                  imageCover="https://i.ytimg.com/vi_webp/9CPZ2QoFyqM/sddefault.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LlamadorMeserosVideosSection;

