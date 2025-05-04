import style from "./HomeClientsSection.module.scss";
import InfiniteSlider from "@/components/inifinite-slider";
import { logosHome } from "@/config/client-logos";

function HomeClientsSection() {

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Empresas que confían en Tecnología Plus para mejorar la atención al
        cliente.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosHome}/>
      </div>
    </section>
  );
}

export default HomeClientsSection;
