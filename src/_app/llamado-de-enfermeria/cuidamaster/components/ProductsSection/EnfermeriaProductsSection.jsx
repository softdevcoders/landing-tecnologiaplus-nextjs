import style from "./EnfermeriaProductsSection.module.scss";

function EnfermeriaProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738795337/Group_6_1_oukvce.webp"
          alt="Botón de llamado de personal"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738795342/Group_7_1_qxkgvu.webp"
          alt="Llamador de enfermeras para colgar en el cuello"
        />
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        Garantizar el bienestar del paciente es esencial, y con nuestro Sistema
        de Llamado de Enfermería, se facilita la comunicación entre pacientes y
        personal de enfermería. Equipado con un llamador de personal adaptable a
        todos los sectores, este dispositivo facilita una asistencia oportuna
        con solo presionar un botón. Su diseño portátil permite reubicarlo
        fácilmente o incluso puede ser usado en el cuello del paciente,
        brindando comodidad y tranquilidad. La señal de largo alcance y
        notificación instantánea mejoran la eficiencia del personal de salud,
        ofreciendo un servicio de calidad que ayuda a pacientes y enfermeras.
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default EnfermeriaProductsSection;
