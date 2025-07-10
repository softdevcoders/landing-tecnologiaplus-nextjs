import style from "./nuestros-clientes.module.scss";
import InfiniteSlider from "@/components/nuestros-clientes/inifinite-slider";

function NuestrosClientes({ title, description, logos, isVerMasView = false }) {

  return (
    <section className={`${style.nuestros__clientes__section} ${isVerMasView ? style.nuestros__clientes__section__ver__mas : ""}`}>
      <h2 className={`${style.nuestros__clientes__title} ${isVerMasView ? style.nuestros__clientes__title__ver__mas : ""}`}>{title}</h2>
      {description && <p className={style.nuestros__clientes__description}>{description}</p>}
      <div className={style.nuestros__clientes__container}>
        <div className={style.nuestros__clientes__background_gradient_left}></div>
        <InfiniteSlider logos={logos}/>
        <div className={style.nuestros__clientes__background_gradient_right}></div>
      </div>
    </section>
  );
}

export default NuestrosClientes;
