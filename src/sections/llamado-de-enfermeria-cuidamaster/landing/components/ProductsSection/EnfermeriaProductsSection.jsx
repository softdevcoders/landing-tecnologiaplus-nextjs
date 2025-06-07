import ToggleTextContent from "@/components/toggle-text-content";
import style from "./EnfermeriaProductsSection.module.scss";
import Image from "next/image";

function EnfermeriaProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__container__item}>
          <div className={style.products__container__item__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738795337/Group_6_1_oukvce.webp"
              alt="Botón de llamado de personal"
              width={468}
              height={669}
              className={style.products__container__item__image__img}
            />
          </div>
        </div>
        <div className={style.products__container__item}>
          <div className={style.products__container__item__image}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738795342/Group_7_1_qxkgvu.webp"
              alt="Llamador de enfermeras para colgar en el cuello"
              width={649}
              height={649}
              className={style.products__container__item__image__img}
            />
          </div>
        </div>
      </div>
      <ToggleTextContent>
        Garantizar el bienestar del paciente es esencial, y con nuestro Sistema de Llamado de Enfermería, se facilita la comunicación entre pacientes y personal de enfermería. Equipado con un llamador de personal adaptable a todos los sectores, este dispositivo facilita una asistencia oportuna con solo presionar un botón. Su diseño portátil permite reubicarlo fácilmente o incluso puede ser usado en el cuello del paciente, brindando comodidad y tranquilidad. La señal de largo alcance y notificación instantánea mejoran la eficiencia del personal de salud, ofreciendo un servicio de calidad que ayuda a pacientes y enfermeras.
      </ToggleTextContent>
    </section>
  );
}

export default EnfermeriaProductsSection;
