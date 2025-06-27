"use client";

import { useCallback } from "react";
import styles from "./Footer.module.scss";
import Instagram from "@/components/ui/icons/instagram";
import TikTok from "@/components/ui/icons/tiktok";
import Facebook from "@/components/ui/icons/facebook";
import YouTube from "@/components/ui/icons/youtube";
import Email from "@/components/ui/icons/email";
import Phone from "@/components/ui/icons/phone";
import { GOOGLE_TAG_EVENTS } from "@/config/google-tag-events";
import Location from "@/components/ui/icons/location";

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
                id={GOOGLE_TAG_EVENTS.BTN_INSTAGRAM_FOOTER.id}
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@tecnologiapluscolombia?_t=ZS-8vifPxXi2KX&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar nuestro perfil de TikTok"
                id={GOOGLE_TAG_EVENTS.BTN_TIKTOK_FOOTER.id}
              >
                <TikTok />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tecnologiapluscolombia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar nuestra página de Facebook"
                id={GOOGLE_TAG_EVENTS.BTN_FACEBOOK_FOOTER.id}
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCPho92vfQwC24X8Y3eI8Dvg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar nuestro canal de YouTube"
                id={GOOGLE_TAG_EVENTS.BTN_YOUTUBE_FOOTER.id}
              >
                <YouTube />
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3>Contacto</h3>
          <ul className={styles.footer__contact}>
    
            <li>
              <a href="mailto:ventas@tecnologiaplus.com" id={GOOGLE_TAG_EVENTS.EMAIL_FOOTER.id}>
                <Email />
                <span>ventas@tecnologiaplus.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+573164682034" id={GOOGLE_TAG_EVENTS.PHONE_FOOTER_1.id}>
                <Phone />
                <span>(+57) 316 468 20 34</span>
              </a>
            </li>
            <li>
              <a href="tel:+573227347971" id={GOOGLE_TAG_EVENTS.PHONE_FOOTER_2.id}>
                <Phone />
                <span>(+57) 322 734 79 71</span>
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
            {/* <li>Bogotá, Cra 19 # 82-85 oficina 401.</li>
            <li>Medellín • El Poblado edificio Oceanía.</li> */}
            <li>
              <a 
                href="https://www.waze.com/es-419/live-map/directions/co/cundinamarca/bogota/cra-19-82-85?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJHYS6OvSaP44REHXTw2Y8H6Y"
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir ubicación en Waze"
                aria-label="Abrir ubicación en Waze"
                className={styles.footer__location_link}
              >
                <Location size={16}/>
                <span>Bogotá, Cra 19 # 82-85 oficina 401.</span>
              </a>
            </li>
            <li>
              <a 
                href="https://ul.waze.com/ul?place=ChIJ-afFdjEoRI4RFepmRGgN4qA&ll=6.22033970%2C-75.56726930&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir ubicación en Waze"
                aria-label="Abrir ubicación en Waze"
                className={styles.footer__location_link}
              >
                <Location size={16}/>
                <span>Medellín • El Poblado edificio Oceanía.</span>
              </a>
            </li>
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
            <li>
              <a href="tel:+51976270171">
                <Phone />
                <span>(+51) 976 270 171</span>
              </a>
            </li>
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
