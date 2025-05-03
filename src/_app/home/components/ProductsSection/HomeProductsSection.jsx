import Card from "../../../components/Cards/Products/Card";
import style from "./HomeProductsSection.module.scss";

function HomeProductsSection() {
  return (
    <section className={style.products__section}>
      <h2>Productos</h2>
      <div className={style.products__container}>
        <Card
          title="TurnoExpress"
          description="Rapidez y agilidad para tus filas."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp"
          altText="imagen de TurnoExpress"
          link="https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero/turnoexpress"
        />

        <Card
          title="TurnoMaster"
          description="Digitaliza la gestión de turnos."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/TurnoMaster_2x-8_1_t4wh3f_ooru74.webp"
          altText="imagen de TurnoMaster"
          link="http://landing-tecnologiaplus-nextjs-dev.vercel.app/sistema-de-turnos/turnomaster"
          customClass="custom__style__one"
        />

        <Card
          title="Localizadores"
          description="Lleva el autoservicio a otro nivel."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741708165/NUEVA_etp9mi.webp"
          altText="imagen de Localizadores"
          link="http://landing-tecnologiaplus-nextjs-dev.vercel.app/localizadores-para-restaurantes"
        />

        <Card
          title="Llamadores de meseros"
          description="El botón que eleva la calidad del servicio."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743107327/NUEVA_4x-8_1_wyooar.webp"
          altText="imagen de Llamadores de meseros"
          link="https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamadores-de-meseros"
          customClass="custom__style__four"
        />

        <Card
          title="Llamado de enfermería"
          description="Facilita la comunicación paciente - enfermera. "
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596111/cuidamaster_2x-8_dlawzx.webp"
          altText="imagen de Llamado de enfermería"
          link="https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/cuidamaster"
        />

        <Card
          title="Calificador de servicios"
          description="Toma decisiones con la opinión de tus clientes"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607994/calificador_de_servicios_2x-8_pjnvol.webp"
          altText="imagen de Calificador de servicios"
          link="https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicio-al-cliente/opinamaster"
          customClass="custom__style__three"
        />

        <Card
          title="OpinaMaster"
          description="Transforma opiniones en acciones estratégicas."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685536/Opinamaster_2x-8_sg1wyy.webp"
          altText="imagen de OpinaMaster"
          link="http://landing-tecnologiaplus-nextjs-dev.vercel.app/encuesta-virtual/opinamaster"
        />

        <Card
          title="Dispensador de tiquetes"
          description="Complemento práctico para
tomar el turno."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349966/dispensador_de_tiquetes_2x-8_qusuqr_fuxs8k.webp"
          altText="imagen de Dispensador de tiquetes"
          link="http://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets"
        />

        <Card
          title="Rollos de turnos"
          description="Organiza y mejora el servicio."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs.webp"
          altText="imagen de Rollos de turnos"
          link="http://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-fichos-para-turnos"
        />

        <Card
          title="Rollos térmicos"
          description="Perfectos para tickets, facturas y más."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/image-1_1_ljyxis_qdsmdq.webp"
          altText="imagen de Rollos térmicos"
          link="https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico"
          customClass="custom__style__five"
        />

        <Card
          title="Desarrollo de software"
          description="Ajustado a tus necesidades."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738945022/11_2x-8_lb72ht.webp"
          altText="imagen de Desarrollo de software"
          link="#"
          customClass="custom__style__six"
        />

        <Card
          title="Soporte Técnico"
          description="Maximiza la vida útil y el rendimiento de tu inversión."
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738945024/12_2x-8_nnlbla.webp"
          altText="imagen de Soporte Técnico"
          link="#"
          customClass="custom__style__seven"
        />
      </div>

      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        En Tecnología Plus, somos fabricantes especializados en rollos térmicos
        de alta calidad, diseñados para satisfacer las necesidades de impresión
        de todo tipo de negocios. Nuestros productos destacan por su precisión,
        durabilidad y compatibilidad con las principales impresoras del mercado.
        Nos comprometemos a brindar soluciones confiables que optimicen tus
        procesos y refuercen la profesionalidad de tu empresa. Elige Tecnología
        Plus y experimenta la diferencia que solo los expertos pueden ofrecer.
        ¡Contacta con nosotros y descubre cómo podemos ser tu mejor aliado en
        impresión térmica!
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default HomeProductsSection;
