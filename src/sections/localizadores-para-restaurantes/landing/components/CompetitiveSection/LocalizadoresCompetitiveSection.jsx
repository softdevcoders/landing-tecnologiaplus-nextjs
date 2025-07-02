"use client";
import styles from './LocalizadoresCompetitiveSection.module.scss';
import Accordion from '@/components/ui/accordion/Accordion';

function LocalizadoresCompetitiveSection() {
  const advantages = [
    {
      title: "Tecnología de Última Generación",
      content: `Nuestros localizadores incorporan los últimos avances en tecnología inalámbrica y procesamiento de señales:

Innovaciones tecnológicas:
• Procesador ARM Cortex-M4 de bajo consumo
• Sistema de localización de precisión submétrica
• Tecnología de salto de frecuencia adaptativo
• Algoritmos de optimización de batería
• Sensores de movimiento y proximidad integrados

Características avanzadas:
• Pantalla OLED de alta visibilidad
• Vibración háptica personalizable
• LEDs RGB programables
• Altavoz de alta fidelidad
• Sensor de temperatura integrado

Ventajas técnicas:
• Mayor alcance que sistemas competidores (200m vs 100m)
• Duración de batería superior (72h vs 48h estándar)
• Menor latencia en transmisión (<100ms)
• Mayor resistencia a interferencias
• Actualización remota de firmware`
    },
    {
      title: "Sistema de Gestión Inteligente",
      content: `Nuestra plataforma de gestión incorpora inteligencia artificial y análisis predictivo para optimizar las operaciones:

Funcionalidades avanzadas:
• Dashboard en tiempo real personalizable
• Análisis predictivo de demanda
• Sistema de priorización automática
• Gestión inteligente de zonas
• Integración omnicanal

Capacidades analíticas:
• Métricas de rendimiento en tiempo real
• Análisis de patrones de servicio
• Predicción de picos de demanda
• Optimización automática de recursos
• Reportes personalizados avanzados

Beneficios operativos:
• Reducción del 30% en tiempos de espera
• Mejora del 25% en rotación de mesas
• Incremento del 20% en satisfacción del cliente
• Optimización del 15% en costos operativos
• Aumento del 10% en ventas promedio`
    },
    {
      title: "Diseño Ergonómico Superior",
      content: `Cada aspecto del diseño ha sido cuidadosamente considerado para maximizar la comodidad y facilidad de uso:

Características de diseño:
• Perfil ultradelgado de 8mm
• Peso optimizado de 45g
• Bordes redondeados ergonómicos
• Superficie antideslizante
• Diseño resistente al agua IP54

Elementos de usabilidad:
• Interfaz táctil intuitiva
• Botones de respuesta háptica
• Indicadores LED multicolor
• Clip de sujeción reforzado
• Base de carga magnética

Beneficios para el usuario:
• Mayor comodidad en uso prolongado
• Reducción de caídas accidentales
• Mejor visibilidad en todas condiciones
• Facilidad de limpieza y desinfección
• Durabilidad comprobada >2 años`
    },
    {
      title: "Integración y Compatibilidad Universal",
      content: `Nuestro sistema se integra perfectamente con la mayoría de las soluciones existentes en el mercado:

Compatibilidad con sistemas:
• Integración con principales POS
• Conexión con sistemas de cocina
• Compatibilidad con apps de delivery
• Sincronización con CRM
• API REST documentada

Protocolos soportados:
• HTTP/HTTPS
• WebSocket
• MQTT
• TCP/IP
• Bluetooth LE 5.0

Capacidades de integración:
• Sincronización en tiempo real
• Transferencia segura de datos
• Backup automático en la nube
• Gestión de múltiples locales
• Escalabilidad horizontal ilimitada`
    },
    {
      title: "Soporte y Garantía Premium",
      content: `Ofrecemos el programa de soporte más completo de la industria:

Cobertura de garantía:
• 2 años de garantía completa
• Reemplazo inmediato de equipos
• Mantenimiento preventivo incluido
• Actualizaciones gratuitas de por vida
• Seguro contra daños accidentales

Niveles de servicio:
• Tiempo de respuesta <4 horas
• Soporte técnico 24/7/365
• Mantenimiento preventivo trimestral
• Visitas técnicas programadas
• Monitoreo proactivo remoto

Beneficios adicionales:
• Capacitación continua del personal
• Auditorías de rendimiento mensuales
• Stock de respaldo sin costo
• Descuentos en expansiones
• Prioridad en nuevas características`
    }
  ];

  return (
    <section className={styles.competitive__section}>
      <div className={styles.competitive__container}>
        <h2 className={styles.competitive__title}>Ventajas Competitivas</h2>
        <div className={styles.competitive__list}>
          {advantages.map((advantage, index) => (
            <Accordion key={index} title={advantage.title}>
              <div className={styles.competitive__content}>
                {advantage.content.split('\n\n').map((paragraph, i) => (
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

export default LocalizadoresCompetitiveSection; 