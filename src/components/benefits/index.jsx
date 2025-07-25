import Image from "next/image";
import style from "./benefits.module.scss";

function BenefitsSection({ benefits, title, className = "", isHome = false, isEncuestaVirtual = false }) {
  return (
    <section className={`${style.benefits__section} ${className}`}>
      <Image
        src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_50/v1738851175/fondo_2x-8_pxbzqc"
        alt="benefits-background"
        className={style.benefits__background_image}
        width={1000}
        height={1000}
      />
      <div className={style.benefits__content}>
        {title && (
          <div className={style.benefits__title_container}>
            <h2
              dangerouslySetInnerHTML={{ __html: title }}
              className={style.benefits__title}
            />
            {isHome && (
              <Image
                width={1140}
                height={109}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738960600/texto_2x-8_sklhxz"
                alt="imagen que dice Nuestros clientes"
                sizes="50vw"
                className={style.benefits__image}
              />
            )}
          </div>
        )}
        {isEncuestaVirtual ? (
          <ul className={style.benefits__container_list_encuesta_virtual}>
            {benefits.map((benefit, index) => (
              <li 
                className={style.benefits__item}
                key={index}
              >
                <Image
                  width={benefit.width}
                  height={benefit.height}
                  src={benefit.icon}
                  alt={benefit.alt}
                  sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
                />
                <h3
                  dangerouslySetInnerHTML={{ __html: benefit.title }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <ul className={style.benefits__container_list}>
            {benefits.map((benefit, index) => (
              <li 
                className={`${style.benefits__item} ${benefit.description ? style.benefits__item_two_rows : ""}`} 
                key={index}>
                <Image
                  width={benefit.width}
                  height={benefit.height}
                  src={benefit.icon}
                  alt={benefit.alt}
                  sizes="(max-width: 768px) 10vw, 10vw"
                />
                <h3>{benefit.title}</h3>
                {benefit.description && <p>{benefit.description}</p>} 
              </li>
            ))}
          </ul>
        )} 
      </div>
    </section>
  );
}

export default BenefitsSection;
