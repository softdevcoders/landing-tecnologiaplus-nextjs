import style from "./nuestros-clientes.module.scss";
import InfiniteSlider from "@/components/inifinite-slider";

function NuestrosClientes(props) {

  const { title, description, logos } = props;

  return (
    <section className={style.nuestros__clientes__section}>
      <h2 className={style.nuestros__clientes__title}>{title}</h2>
      <p className={style.nuestros__clientes__description}>{description}</p>
      <div className={style.nuestros__clientes__container}>
        <div className={style.nuestros__clientes__background_gradient_left}></div>
        <InfiniteSlider logos={logos}/>
        <div className={style.nuestros__clientes__background_gradient_right}></div>
      </div>
    </section>
  );
}

export default NuestrosClientes;
