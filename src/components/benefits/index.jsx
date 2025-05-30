import Image from "next/image";
import style from "./benefits.module.scss";

function BenefitsSection({ children, overlayWhite = false }) {
  return (
    <section className={`${style.benefits__section} ${overlayWhite ? style.overlay__white : ""}`}>
      <div className={style.benefits__container}>
        <div className={style.benefits__background_container}>
          <Image 
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_50/v1738851175/fondo_2x-8_pxbzqc.webp"
            alt="benefits-background" 
            className={style.benefits__background_image}
            width={1000} 
            height={1000} 
          />
        </div>
        <div className={style.benefits__content}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
