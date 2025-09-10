import Image from "next/image";
import styles from "../styles/ver-mas-productos-global-style.module.scss";
import queIncluyeStyles from "./que-incluye.module.scss";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

const QueIncluye = ({ articulosIncluidos, title = "¿Qué incluye?" }) => {
  return (
    <section className={styles.container} data-nosnippet>
      <h3 className={styles.title} >{title}</h3>
      <div className={queIncluyeStyles.container}>
        {articulosIncluidos.map((articulo, key) => (
          <div className={queIncluyeStyles.container__item} key={key}>
            <div className={queIncluyeStyles.container__item__image__container}>
              <Image 
                src={getOptimizedImageUrl({url: articulo.imagen.src, width: 600, quality: 80})}  
                alt={articulo?.imagen?.alt} 
                title={articulo?.imagen?.title}
                width={350} 
                height={350}
                unoptimized={true} 
                className={queIncluyeStyles.container__item__image}
              />
            </div>
            <p className={queIncluyeStyles.container__item__description}>{articulo.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QueIncluye;