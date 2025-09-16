import Image from "next/image";
import styles from "../styles/ver-mas-productos-global-style.module.scss";
import fichaTecnicaStyles from "./ficha-tecnica.module.scss";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

const FichaTecnica = ({ fichaTecnica, title = "Ficha técnica" }) => {  
  return (
    <section className={styles.container} data-nosnippet>
      <h2>{title}</h2>
      <div className={fichaTecnicaStyles.container}>
        {fichaTecnica.map((articulo, key) => (
          <div className={fichaTecnicaStyles.container__item} key={key}>
            <div className={fichaTecnicaStyles.container__item__image__container}>
              <Image 
                src={getOptimizedImageUrl({url: articulo.imagen.src, width: 600, quality: 80})}  
                alt={articulo?.imagen?.alt} 
                title={articulo?.imagen?.title}
                width={350} 
                height={350}
                unoptimized={true} 
                className={fichaTecnicaStyles.container__item__image}
              />
            </div>
            <p 
              className={fichaTecnicaStyles.container__item__description}
              dangerouslySetInnerHTML={{ __html: articulo.descripcion }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FichaTecnica;