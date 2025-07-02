import styles from './LocalizadoresTechnicalSection.module.scss';

function LocalizadoresTechnicalSection() {
  return (
    <section className={styles.technical__section}>
      <div className={styles.technical__container}>
        <h2 className={styles.technical__title}>Especificaciones Técnicas</h2>
        <div className={styles.technical__content}>
          <div className={styles.technical__text}>
            <h3>Sistema de Alimentación y Gestión de Energía</h3>
            <p>
              Los localizadores utilizan baterías de litio-polímero de alta densidad de 3.7V/1200mAh con tecnología de carga rápida inteligente. El sistema de gestión de energía incluye un microprocesador dedicado que monitorea en tiempo real el voltaje, corriente y temperatura, implementando protección contra sobrecarga, sobredescarga y cortocircuito. La base de carga múltiple opera a 12V/2A con capacidad para 20 unidades, incorporando un sistema de balanceo de carga que optimiza la distribución de corriente. El consumo en modo activo es de 50mA, reduciéndose a 0.1mA en modo de espera, lo que permite una autonomía de hasta 72 horas de uso continuo o 30 días en standby.
            </p>

            <h3>Arquitectura de Comunicación RF</h3>
            <p>
              El sistema opera en la banda ISM de 433.05-434.79 MHz utilizando modulación GFSK con corrección de errores FEC y salto de frecuencia adaptativo. La potencia de transmisión es ajustable entre 0dBm y +20dBm, con una sensibilidad de recepción de -118dBm. El protocolo de comunicación propietario implementa encriptación AES-128 y utiliza un esquema TDMA optimizado que permite hasta 500 dispositivos por red con latencia inferior a 50ms. La tasa de transferencia de datos es de 100kbps con un alcance efectivo de 200 metros en línea de vista y 100 metros con obstáculos, manteniendo una tasa de error de paquetes inferior al 0.01%.
            </p>

            <h3>Especificaciones Mecánicas y Ambientales</h3>
            <p>
              La carcasa está fabricada en policarbonato grado médico con clasificación IP54 (IEC 60529) y certificación UL94 V-0 para retardancia de llama. Las dimensiones son 95mm x 65mm x 18mm con un peso de 120g ±5g. La pantalla OLED de 0.96" tiene una resolución de 128x64 píxeles con ángulo de visión de 160° y vida útil de 50,000 horas. El motor de vibración de precisión genera 1.2G de fuerza a 12000 RPM con 10 patrones programables. El rango de temperatura operativa es de 0°C a 50°C con humedad relativa de hasta 90% sin condensación. Los botones táctiles capacitivos están sellados con clasificación IP67 y tienen una vida útil certificada de 1 millón de ciclos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresTechnicalSection; 