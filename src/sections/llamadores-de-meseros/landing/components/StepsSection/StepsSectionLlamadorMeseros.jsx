import style from "./StepsSectionLlamadorMeseros.module.scss";
import Image from "next/image";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

function StepsSectionLlamadorMeseros() {
  return (
    <section data-nosnippet className={style.steps__section}>
      <h2 className={style.steps__section__title}>¿Cómo funciona un timbre de restaurante?</h2>

      <div className={style.cards__container}>
        <div className={style.card__desktop}>
          <div className={style.card__desktop__card}>
            <Image
              src={getOptimizedImageUrl({ url: "v1758214573/instrucciones_llamador_de_meseros", quality: 70, width: 2000 })}
              alt="Imagen de instrucciones para utilizar el llamador de meseros"
              title="Instrucciones llamador de meseros"
              className={style.card__desktop__card__image}
              width={1840}
              height={690}
              unoptimized={true}
            />
          </div>
        </div>
        <div className={style.card__mobile}>
          <div className={style.card__mobile__card}>
            <Image
              src={getOptimizedImageUrl({ url: "v1758214571/cliente_boton_boton_para_llamar_al_mesero", quality: 80, width: 1000 })}
              alt="Cliente oprimiendo botón para llamar al mesero en mesa"
              title="Botón para llamar al mesero en mesa"
              className={style.card__mobile__card__image}
              width={1000}
              height={1000}
              unoptimized={true}
            />
          </div>
          <div className={style.card__mobile__card}>
            <Image
              src={getOptimizedImageUrl({ url: "v1758214576/mesero_recibe_timbre_inalambrico_para_restaurantes", quality: 80, width: 1000 })}
              alt="Mesero recibe aviso en pantalla con timbre inalámbrico para restaurantes"
              title="Timbre inalámbrico para restaurantes aviso en pantalla"
              className={style.card__mobile__card__image}
              width={1000}
              height={1000}
              unoptimized={true}
            />
          </div>
          <div className={style.card__mobile__card}>
            <Image
              src={getOptimizedImageUrl({ url: "v1758214568/cliente_atendido_llamadores_para_restaurantes", quality: 80, width: 1000 })}
              alt="Cliente recibe atención gracias a llamadores para restaurantes"
              title="Llamadores para restaurantes atención rápida"
              className={style.card__mobile__card__image}
              width={1000}
              height={1000}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSectionLlamadorMeseros;
