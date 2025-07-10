// import style from "./CalificadorBenefitsSection.module.scss";

// function CalificadorBenefitsSection() {
//   return (
//     <section className={style.benefits__section}>
//       <h2 className={style.benefits__title}>
//         BENEFICIOS
//         <br />
//         DESTACADOS
//       </h2>
//       <ul>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596137/Icono_1_2x-8_1_ddkdtv.webp"
//             alt="Recibe alertas por email"
//           />
//           Alerta de calificación <br className={style.hide__on__mobile} />
//           negativa al correo.
//         </li>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596138/Icono_2_2x-8_1_vcthy7.webp"
//             alt="Preguntas personalizadas"
//           />
//           Personaliza tus preguntas.
//         </li>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596138/Icono_3_2x-8_1_ebqi7y.webp"
//             alt="Reportes graficos para mejor toma de decisiones"
//           />
//           Estadísticas en internet.
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default CalificadorBenefitsSection;

import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596137/Icono_1_2x-8_1_ddkdtv",
    title: "Alerta de calificación negativa al correo.",
    width: 213,
    height: 155,
    alt: "icono de alerta",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596138/Icono_2_2x-8_1_vcthy7",
    title: "Personaliza tus preguntas.",
    width: 213,
    height: 155,
    alt: "icono de personalización",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596138/Icono_3_2x-8_1_ebqi7y",
    title: "Estadísticas en internet.",
    width: 213,
    height: 155,
    alt: "icono de estadísticas",
  },
];

function CalificadorBenefitsSection() { 
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="BENEFICIOS<br />DESTACADOS"
    />
  );
}

export default CalificadorBenefitsSection;
