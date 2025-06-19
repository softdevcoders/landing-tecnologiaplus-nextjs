'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import style from "./whatsapp-button.module.scss";
import { Whatsapp } from "@/components/ui/icons";
import { GOOGLE_TAG_EVENTS } from "@/config/google-tag-events";

const WhatsappButton = () => {
  const [whatsappLink, setWhatsappLink] = useState("https://wa.me/573164682034");
  const pathname = usePathname();

  useEffect(() => {
    const pageTitle = document.title || 'Tecnología Plus';
    const message = encodeURIComponent(
      `Hola, vengo de la página "${pageTitle}" y quiero más información.`
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
      id={GOOGLE_TAG_EVENTS.BTN_WHATSAPP.id}
    >
      <Whatsapp size={32} />
    </a>
  );
};

export default WhatsappButton;