import Image from "next/image";
import style from "./benefits.module.scss";

function BenefitsSection({ benefits, title, className = "" }) {
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
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className={style.benefits__title}
          />
        )}
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
                sizes="100vw"
              />
              <h3>{benefit.title}</h3>
              {benefit.description && <p>{benefit.description}</p>} 
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BenefitsSection;
