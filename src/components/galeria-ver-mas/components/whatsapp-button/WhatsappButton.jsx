'use client';

import style from "./whatsapp-button.module.scss";
import { Whatsapp } from "@/components/ui/icons";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const WhatsappButton = () => {

  const [whatsappLink, setWhatsappLink] = useState("https://wa.me/573164682034");
  const pathname = usePathname();

  useEffect(() => {
    const pageTitle = document.title || 'Tecnología Plus - Galeria Ver Mas';
    const message = encodeURIComponent(
      `Hola, vengo de la página "${pageTitle}" y quiero más información.`
    );

    setWhatsappLink(`https://wa.me/573164682034?text=${message}`);
  }, [pathname]);


  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer noopener"
      className={style.whatsapp__btn}
      aria-label="Contactar por WhatsApp" 
    >
      <Whatsapp size={21} />
      <span>Hablar con un asesor</span>
    </a>
  );
};

export default WhatsappButton;