"use client";
import styles from './LocalizadoresTechnicalSection.module.scss';
import Accordion from '@/components/ui/accordion/Accordion';

function LocalizadoresTechnicalSection() {
  const specifications = [
    {
      title: "Especificaciones del Localizador",
      content: `Características físicas y técnicas detalladas de nuestros localizadores:

Dimensiones y construcción:
• Tamaño: 85mm x 55mm x 8mm
• Peso: 45g con batería
• Material: Policarbonato grado médico
• Resistencia: IP54 (polvo y salpicaduras)
• Acabado: Antimicrobiano y anti-UV

Pantalla y controles:
• Pantalla OLED 1.3"
• Resolución: 128 x 64 píxeles
• Brillo: 500 nits
• Ángulo de visión: 160°
• Controles táctiles capacitivos

Sistema electrónico:
• Procesador: ARM Cortex-M4
• Memoria: 256KB RAM
• Flash: 1MB
• Acelerómetro de 3 ejes
• Sensor de temperatura integrado`
    },
    {
      title: "Sistema de Comunicación",
      content: `Detalles técnicos del sistema de comunicación inalámbrica:

Tecnología RF:
• Frecuencia: 433/868/915 MHz
• Potencia: 10mW ajustable
• Sensibilidad: -110dBm
• Modulación: GFSK/FSK
• Ancho de banda: 100kHz

Características de transmisión:
• Alcance: 200m en espacio abierto
• Latencia: <100ms
• Tasa de datos: 250kbps
• Encriptación: AES-256
• FHSS (Frequency Hopping)

Gestión de interferencias:
• Detección automática de canal
• Salto adaptativo de frecuencia
• Corrección de errores FEC
• Filtrado de ruido digital
• Redundancia de datos`
    },
    {
      title: "Sistema de Alimentación",
      content: `Especificaciones detalladas del sistema de alimentación y carga:

Batería:
• Tipo: Li-Po 3.7V
• Capacidad: 1000mAh
• Tiempo de operación: 72h
• Ciclos de vida: >1000
• Protección de sobrecarga

Sistema de carga:
• Voltaje de entrada: 5V DC
• Corriente de carga: 500mA
• Tiempo de carga: 2 horas
• Eficiencia: >90%
• Protección térmica

Base de carga:
• Capacidad: 20 unidades
• Contactos: Oro 24K
• Alineación magnética
• LED indicador por unidad
• Protección contra cortocircuitos`
    },
    {
      title: "Software de Gestión",
      content: `Características técnicas del software de administración:

Arquitectura del sistema:
• Backend: Node.js/Express
• Base de datos: PostgreSQL
• Cache: Redis
• WebSocket para tiempo real
• API RESTful documentada

Capacidades del sistema:
• Usuarios simultáneos: 100+
• Dispositivos por sistema: 500+
• Tiempo de respuesta: <50ms
• Disponibilidad: 99.9%
• Backup automático

Seguridad:
• Autenticación JWT
• HTTPS/TLS 1.3
• Cifrado de datos en reposo
• Logs de auditoría
• Copias de seguridad cifradas`
    },
    {
      title: "Integración y Conectividad",
      content: `Especificaciones de integración con sistemas externos:

Protocolos soportados:
• HTTP/HTTPS
• WebSocket
• MQTT
• TCP/IP
• Bluetooth LE 5.0

APIs disponibles:
• REST API completa
• WebHooks
• Streaming de eventos
• GraphQL (opcional)
• SDK para desarrollo

Integraciones nativas:
• Sistemas POS principales
• Gestión de cocina
• CRM y fidelización
• Analytics y BI
• Plataformas de delivery`
    }
  ];

  return (
    <section className={styles.technical__section}>
      <div className={styles.technical__container}>
        <h2 className={styles.technical__title}>Especificaciones Técnicas</h2>
        <div className={styles.technical__list}>
          {specifications.map((spec, index) => (
            <Accordion key={index} title={spec.title}>
              <div className={styles.technical__content}>
                {spec.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresTechnicalSection; 