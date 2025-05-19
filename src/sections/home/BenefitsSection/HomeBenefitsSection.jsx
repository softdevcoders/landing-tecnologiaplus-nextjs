import Image from "next/image";
import style from "./HomeBenefitsSection.module.scss";

function HomeBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <div className={style.text__container}>
        <h2 className={style.benefits__title}>
          ¿POR QUÉ
          <br />
          NOS ELIGEN
        </h2>
        <Image
          width={500}
          height={50}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_500/v1738960600/texto_2x-8_sklhxz"
          alt="imagen que dice Nuestros clientes"
          className={style.benefits__subtitle}
        />
      </div>
      <ul>
        <li>
          <Image
            width={100}
            height={100}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944984/icono_1_2x-8_3_fvtagl.webp"
            alt="icono de auriculares"
          />
          Asesoría según tu sector <br className={style.hide__on__mobile} />
          para decisiones clave.
        </li>
        <li>
          <Image
            width={100}
            height={100}
            
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944983/icono_2_2x-8_3_zzggy6.webp"
            alt="icono número 10 con signo de +"
          />
          Más de 10 años ayudando a las{" "}
          <br className={style.hide__on__mobile} />
          empresas a mejorar el servicio.
        </li>
        <li>
          <Image
            width={100}
            height={100}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944981/icono_3_2x-8_3_emxtsn.webp"
            alt="icono de mantenimiento"
          />
          Soporte Técnico preventivo y correctivo{" "}
          <br className={style.hide__on__mobile} />
          para proteger tu inversión.
        </li>
      </ul>
    </section>
  );
}

export default HomeBenefitsSection;
