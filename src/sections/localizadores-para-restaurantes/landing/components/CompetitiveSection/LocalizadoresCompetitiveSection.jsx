import styles from './LocalizadoresCompetitiveSection.module.scss';

function LocalizadoresCompetitiveSection() {
  return (
    <section className={styles.competitive__section}>
      <div className={styles.competitive__container}>
        <h2 className={styles.competitive__title}>Ventajas Competitivas</h2>
        <div className={styles.competitive__content}>
          <div className={styles.competitive__text}>
            <h3>Tecnología de Comunicación Avanzada</h3>
            <p>
              Nuestros localizadores incorporan un sistema de comunicación bidireccional con tecnología FHSS (Frequency-Hopping Spread Spectrum) que opera en múltiples bandas de frecuencia, garantizando una transmisión libre de interferencias incluso en ambientes saturados de señales WiFi y Bluetooth. El sistema utiliza encriptación AES-256 para proteger las comunicaciones, y emplea un algoritmo propietario de gestión de colisiones que permite manejar hasta 500 dispositivos simultáneos sin degradación del rendimiento. La tecnología de ahorro de energía inteligente ajusta dinámicamente la potencia de transmisión según la distancia, prolongando la vida de la batería hasta un 40% más que los sistemas convencionales.
            </p>

            <h3>Ingeniería de Precisión y Durabilidad</h3>
            <p>
              Cada localizador está fabricado con una carcasa de policarbonato de grado médico reforzado con fibra de vidrio, sometida a tratamiento UV y antimicrobiano. Los componentes electrónicos están protegidos por un recubrimiento nano-hidrofóbico que repele líquidos y previene la corrosión. El sistema de vibración utiliza un motor de precisión japonés con 10 patrones programables y 100,000 horas de vida útil garantizada. La base de carga incorpora contactos chapados en oro de 24K con sistema de alineación magnética y protección contra sobretensiones, asegurando más de 50,000 ciclos de carga sin degradación del rendimiento.
            </p>

            <h3>Plataforma de Gestión Empresarial</h3>
            <p>
              Nuestra solución incluye un software de administración basado en la nube que proporciona análisis en tiempo real del rendimiento del sistema. La plataforma ofrece métricas detalladas como tiempos promedio de entrega, mapas de calor de uso de dispositivos, análisis predictivo de demanda y reportes automatizados de eficiencia. El panel de control personalizable permite la gestión de múltiples locales desde una única interfaz, con capacidades de geolocalización y seguimiento de inventario de dispositivos. Las actualizaciones automáticas de firmware garantizan que el sistema siempre ejecute la última versión del software, incorporando nuevas funcionalidades y mejoras de seguridad sin intervención manual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresCompetitiveSection; 