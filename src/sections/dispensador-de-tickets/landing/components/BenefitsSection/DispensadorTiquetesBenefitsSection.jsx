import Image from "next/image";
import style from "./DispensadorTiquetesBenefitsSection.module.scss";

function DispensadorTiquetesBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        BENEFICIOS
        <br />
        DESTACADOS
      </h2>
      <ul>
        <li>
          <Image
            width={70}
            height={70}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350354/2_wtupum.png"
            alt="icono de agilidad en turnos"
          />
          <div>
            Control total de los turnos.{" "}
            <br className={style.hide__on__mobile} />
            <span>Permite a tu equipo ofrecer mejor servicio.</span>
          </div>
        </li>
        <li>
          <Image
            width={70}
            height={70}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350353/1_fgaw9h.png"
            alt="icono de reloj y dinero"
          />
          <div>
            Elimina filas evitando largas esperas{" "}
            <br className={style.hide__on__mobile} />
            <span>y mejorando la organización del servicio.</span>
          </div>
        </li>
        <li>
          <Image
            width={70}
            height={70}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424675/icono_3_2x-8_qsgnsv.webp"
            alt="icono de tipos de cara feliz"
          />
          <div>
            Mejor experiencia de servicio{" "}
            <br className={style.hide__on__mobile} />
            <span>porque tus clientes lo merecen.</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default DispensadorTiquetesBenefitsSection;
