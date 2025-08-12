import Image from "next/image";
import globalStyles from "@/components/ver-mas-productos/styles/ver-mas-productos-global-style.module.scss";
import styles from "./como-funciona.module.scss";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

const ComoFunciona = ({ comoFuncionaPasos }) => {
  return (
    <section className={globalStyles.container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.container__items}>
        {comoFuncionaPasos.map((paso, index) => (
          <div className={styles.container__item} key={index}>
            <div className={styles.container__item__image__container}>
              <Image 
                src={getOptimizedImageUrl({url: paso.imagen.src, width: 600, quality: 80})}  
                alt={paso.imagen.alt} 
                width={350} 
                height={350}
                unoptimized={true} 
                className={styles.container__item__image}
              />
            </div>
            <p className={styles.container__item__description}>{paso.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComoFunciona;