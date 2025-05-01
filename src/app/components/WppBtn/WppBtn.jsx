'use client'
import { useEffect, useState } from "react";
import style from "./WppBtn.module.scss";
import { FaWhatsapp } from "react-icons/fa";

function WppBtn() {
  const [whatsappLink, setWhatsappLink] = useState("https://wa.me/573164682034");
  
  useEffect(() => {
    // Get the current page information to include in the message
    if (typeof window !== 'undefined') {
      const currentPage = window.location.href;
      const pageTitle = document.title || 'Tecnología Plus';
      
      // Create a more professional and friendly message
      const message = encodeURIComponent(
        `Hola, estoy interesado en sus productos. Estoy visitando la página "${pageTitle}" y me gustaría recibir más información. ¿Podrían ayudarme?`
      );
      
      setWhatsappLink(`https://wa.me/573164682034?text=${message}`);
    }
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className={style.wpp__btn}
      aria-label="Contactarnos por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WppBtn;
