'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import style from "./whatsapp-button.module.scss";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const [whatsappLink, setWhatsappLink] = useState("https://wa.me/573164682034");
  const pathname = usePathname();

  useEffect(() => {
    const pageTitle = document.title || 'Tecnología Plus';
    const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;
    const message = encodeURIComponent(
      `Hola, vengo de la página "${pageTitle}" y quiero más información. \n\n ${currentUrl}`
    );

    setWhatsappLink(`https://wa.me/573164682034?text=${message}`);
  }, [pathname]);

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
};

export default WhatsappButton;


