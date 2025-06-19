import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import WhatsApp from "@/components/ui/icons/whatsapp";

const TinesPreguntasButton = ({ styles }) => {
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
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className={styles.tinesPreguntasButton}
        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        <WhatsApp className={styles.icon__wpp} />
        <h3>¿Tienes preguntas?</h3>
      </a>
    </>
  );
};

export default TinesPreguntasButton;