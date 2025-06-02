import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from "react-icons/fa";

const TinesPreguntasButton = ({ styles }) => {
  const [whatsappLink, setWhatsappLink] = useState("https://wa.me/573164682034");
  const pathname = usePathname();
  
  useEffect(() => {
    const pageTitle = document.title || 'Tecnología Plus';
    const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;
    const message = encodeURIComponent(
      `Hola, vengo de la página "${pageTitle}" y quiero m. \n\n ${currentUrl}`
    );

    setWhatsappLink(`https://wa.me/573164682034?text=${message}`);
  }, [pathname]);

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className={styles.icon__wpp} />
      </a>
      <h3>¿Tienes preguntas?</h3>
    </>
  );
};

export default TinesPreguntasButton;