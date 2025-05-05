import style from "./nuestros-clientes.module.scss";
import InfiniteSlider from "@/components/inifinite-slider";

function NuestrosClientes(props) {

  const { title, description, logos } = props;

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>{title}</h2>
      <p>{description}</p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logos}/>
      </div>
    </section>
  );
}

export default NuestrosClientes;
