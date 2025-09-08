
import styles from "./TechnicalSheet.module.scss";
import Image from "next/image";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container} data-nosnippet>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <Image
            width={70}
            height={35}
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254431/16_4x-8_pcbsng.webp"
            alt="icono batería"
            unoptimized={true}
          />
          <p>
            Batería 23A12V
            <br />
            Voltaje: DC12V
          </p>
        </div>
        <div className={styles.item}>
          <Image
            width={70}
            height={35}
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de conectividad y largo alcance"
            unoptimized={true}
          />
          <p>
            Rango: hasta 100m o más <br className={styles.hide__on__mobile} />
            con amplificador de señal
            <br />
            Frecuencia: 433MHz
          </p>
        </div>
        <div className={styles.item}>
          <Image
            width={70}
            height={35}
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/11_4x-8_rp9yee.webp"
            alt="icono de 3 teclas de llamado"
            className={styles.img__desktop}
            unoptimized={true}
          />
          <Image
            width={70}
            height={35}
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744770042/NUEVO_4x-8_1_lwhexm.webp"
            alt="icono de 3 teclas de llamado"
            className={styles.img__mobile}
            unoptimized={true}
          />
          <p>
            3 teclas de llamado: <br className={styles.hide__on__mobile} />
            Tecla llamar o tecla pagar.{" "}
            <br className={styles.hide__on__mobile} />
            Cancelar (para borrar el llamado{" "}
            <br className={styles.hide__on__mobile} />
            cuando atienden el cliente)
          </p>
        </div>
        <div className={styles.item}>
          <Image
            width={70}
            height={35}
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254426/11_4x-8_tfnsac.webp"
            alt="icono de negocio"
            unoptimized={true}
          />
          <p>
            Uso: en lugares para llamar
            <br />
            al mesero o empleados
          </p>
        </div>
        <div className={styles.item}>
          <Image
            width={70}
            height={35}
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740161084/9_4x-8_l5gvik.webp"
            alt="icono de compatibilidad"
            unoptimized={true}
          />
          <p>
            Compatible con: <br className={styles.hide__on__mobile} />
            Equipos de Tecnología Plus.
          </p>
        </div>
        <div className={styles.item}>
          <Image
            width={70}
            height={35}
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740172482/7_4x-8_1_ptxtfo.webp"
            alt="icono de resistencia al agua"
            unoptimized={true}
          />
          <p>
            Resiste derrames <br className={styles.hide__on__mobile} />
            accidentales de agua
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
