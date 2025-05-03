import styles from "./Footer.module.scss";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        {/* Redes Sociales */}
        <div>
          <h3>Síguenos</h3>
          <ul className={styles.footer__social}>
            <li>
              <a
                href="https://www.instagram.com/tecnologiapluscolombia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar nuestro perfil de Instagram"
              >
                <FiInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@tecnologiapluscolombia?_t=ZS-8vifPxXi2KX&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar nuestro perfil de TikTok"
              >
                <FaTiktok />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tecnologiapluscolombia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar nuestra página de Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCPho92vfQwC24X8Y3eI8Dvg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar nuestro canal de YouTube"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3>Contacto</h3>
          <ul>
            <li>
              <a
                href="mailto:ventas@tecnologiaplus.com"
                aria-label="Enviar correo a ventas@tecnologiaplus.com"
              >
                <MdOutlineEmail /> ventas@tecnologiaplus.com
              </a>
            </li>
            <li>
              <a
                href="tel:+573164682034"
                aria-label="Llamar al teléfono 316 468 20 34"
              >
                <HiPhone /> (+57) 316 468 20 34
              </a>
            </li>
            <li>
              <a
                href="tel:+573227347971"
                aria-label="Llamar al teléfono 322 734 79 71"
              >
                <HiPhone /> (+57) 322 734 79 71
              </a>
            </li>
          </ul>
        </div>

        {/* Ubicación */}
        <div>
          <h3>Estamos en</h3>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/colombia_1_mcsiuu_vyabd4.png"
                alt="Bandera de Colombia"
                loading="lazy"
                width="20"
                height="15"
              />{" "}
              Colombia
            </li>
            <li>Bogotá, Cra 19 # 82-85 oficina 401.</li>
            <li>Medellín • El Poblado edificio Oceanía.</li>
            <li>Cobertura nacional</li>
          </ul>
        </div>
        <div className={styles.footer__peru}>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/peru_myylpq_rpvpzb.png"
                alt="Bandera del Perú"
                loading="lazy"
                width="20"
                height="15"
              />{" "}
              Perú
            </li>
            <li>(+51) 976 270 171</li>
            <li>Envíos a toda Latinoamérica</li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className={styles.footer__bottom}>
        <img
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350028/Tplus_en_blanco_2x-8_uokdmv_zoykmd.webp"
          alt="Logo de Tecnología Plus"
          loading="lazy"
          width="400"
          height="110"
        />
      </div>
    </footer>
  );
};

export default Footer;
