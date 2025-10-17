import style from "./styles.module.scss";
import YouTubePlayer from "@/components/youtube-player";
import ImageGallery from "@/components/image-gallery";

const MultimediaSection = () => {
  return (
    <section data-nosnippet className={style.section_multimedia}> 
      <h2 className={style.multimedia__title}>Conoce el botón para llamar al mesero y elige el color ideal para tu negocio</h2>
      <div className={style.multimedia__container}>
        <div className={style.video__container}>
          <YouTubePlayer
            videoId="XGGhLks0iVc" 
            title="Llamador de Meseros - Tecnología Plus"
          />
        </div>
        <div className={style.gallery__container}>
          <ImageGallery
            thumbnailsOrientation="horizontal" // Cambiar a "vertical" para el comportamiento por defecto
            showThumbnails={true} // Siempre mostrar thumbnails, independientemente del dispositivo
            productTitle="Llamador de Meseros E2-B"
            mediaItems={[
              {
                type: '3d',
                modelID: '7f65ca693d5d41ce933a2b3f113ad4b7',
                thumbnail: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
                preview: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
                alt: 'Llamador de meseros E2-B: un toque, cero esperas',
                darkBackground: true
              },
              {
                type: '3d',
                modelID: 'a9eaa5b55b94451798ed570eeece63da',
                thumbnail: 'v1757338385/timbre_para_mesa_de_restaurante_e2b_negro_amarillo',
                preview: 'v1757338385/timbre_para_mesa_de_restaurante_e2b_negro_amarillo',
                alt: 'Llamador de meseros E2-B: un toque, cero esperas',
                darkBackground: true
              },
              {
                type: '3d',
                modelID: 'bcb6d9771ab34f918e3ec8330fc0549d',
                thumbnail: 'v1757338391/llamador_de_meseros_e2b_negro_negro',
                preview: 'v1757338391/llamador_de_meseros_e2b_negro_negro',
                alt: 'Llamador de meseros E2-B: un toque, cero esperas',
                darkBackground: true
              },
              {
                type: '3d',
                modelID: 'b271ce6e9af044809cda4173953f98ac',
                thumbnail: 'v1757338396/llamador_de_meseros_e2b_blanco_rojo',
                preview: 'v1757338396/llamador_de_meseros_e2b_blanco_rojo',
                alt: 'Llamador de meseros E2-B: un toque, cero esperas',
                darkBackground: true
              },
              {
                type: '3d',
                modelID: 'f309cdec26f44f28a21de01aa90eea1d',
                thumbnail: 'v1757338387/llamador_de_meseros_e2b_2_teclas_blanco_amarillo',
                preview: 'v1757338387/llamador_de_meseros_e2b_2_teclas_blanco_amarillo',
                alt: 'Llamador de meseros E2-B: un toque, cero esperas',
                darkBackground: true
              },
              {
                type: '3d',
                modelID: '16e8d01891ca4913b7b9b5027828d85e',
                thumbnail: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_modelo',
                preview: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_modelo',
                alt: 'Llamador de meseros E2-B: un toque, cero esperas',
                darkBackground: true
              },
            ]}
            title="Llamador de Meseros - Tecnología Plus"
          />
        </div>
      </div>
    </section>
  );
};

export default MultimediaSection;