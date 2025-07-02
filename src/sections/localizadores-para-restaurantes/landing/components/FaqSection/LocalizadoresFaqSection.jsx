"use client";
import styles from './LocalizadoresFaqSection.module.scss';
import Accordion from '@/components/ui/accordion/Accordion';

function LocalizadoresFaqSection() {
  const faqs = [
    {
      question: "¿Cuál es el alcance máximo de los localizadores en plazoletas de comidas?",
      answer: `En plazoletas de comidas y restaurantes, nuestros localizadores mantienen una señal estable hasta 200 metros en espacios abiertos y 100 metros en áreas con obstáculos. Esta cobertura es ideal para centros comerciales de múltiples niveles, permitiendo que los clientes se muevan libremente entre tiendas mientras esperan su pedido.

El sistema utiliza tecnología de radiofrecuencia optimizada que atraviesa paredes y pisos, manteniendo la conexión incluso en áreas congestionadas con múltiples señales inalámbricas. La tecnología de salto de frecuencia adaptativo (AFH) evita interferencias con otros dispositivos electrónicos y redes WiFi.

Características adicionales de cobertura:
• Mapeo automático de zonas de señal débil
• Ajuste dinámico de potencia según la ubicación
• Sistema de repetidores opcional para áreas extensas
• Monitoreo en tiempo real de la calidad de señal
• Alertas automáticas de pérdida de conexión`
    },
    {
      question: "¿Qué ventajas ofrece el sistema de carga de los localizadores?",
      answer: `Nuestro sistema de carga inteligente incorpora tecnología de carga rápida con protección contra sobrecarga, permitiendo una carga completa en solo 2 horas para 72 horas de uso continuo. La base de carga múltiple puede gestionar hasta 20 localizadores simultáneamente, con indicadores LED que muestran el estado de carga de cada unidad.

Características avanzadas del sistema de carga:
• Diagnóstico automático de la salud de la batería
• Ciclos de carga optimizados para máxima vida útil
• Sistema de ventilación activa para carga segura
• Protección contra cortocircuitos y sobretensiones
• Modo de mantenimiento para almacenamiento prolongado

El sistema incluye modo de hibernación automática cuando la batería está baja y reinicio automático al colocarse en la base, maximizando la vida útil de la batería y reduciendo el mantenimiento. La tecnología de balanceo de carga asegura una distribución uniforme de la corriente entre todos los dispositivos.

Especificaciones técnicas de carga:
• Voltaje de entrada: 100-240V AC
• Eficiencia de carga: >90%
• Tiempo de carga rápida: 2 horas
• Ciclos de carga garantizados: >1000
• Monitoreo de temperatura en tiempo real`
    },
    {
      question: "¿Cómo garantizan la durabilidad en ambientes de alto tráfico?",
      answer: `Los localizadores están construidos con polímeros termoplásticos de grado industrial y carcasa reforzada con clasificación IP54, soportando caídas desde 1.5 metros de altura. Los contactos de carga utilizan aleación de oro para prevenir la corrosión y asegurar más de 10,000 ciclos de carga.

Características de durabilidad:
• Carcasa con protección UV y antimicrobiana
• Pantalla Gorilla Glass resistente a impactos
• Juntas de sellado doble en todas las aperturas
• Botones capacitivos sin partes móviles
• Recubrimiento hidrofóbico en componentes internos

Pruebas de resistencia realizadas:
• Test de caída desde 1.5m en múltiples ángulos
• Prueba de vibración continua durante 48 horas
• Exposición a temperaturas extremas (-10°C a 60°C)
• Prueba de humedad al 95% durante 72 horas
• Test de resistencia a productos químicos comunes

La pantalla está protegida con cristal templado resistente a rayones, y los botones están sellados para prevenir la entrada de líquidos y residuos de alimentos. Cada unidad pasa por pruebas de impacto, vibración y exposición a temperaturas extremas antes de su envío.`
    },
    {
      question: "¿Qué capacidad de expansión tiene el sistema para restaurantes en crecimiento?",
      answer: `El sistema es altamente escalable, comenzando desde 15 localizadores hasta más de 200 unidades por establecimiento. La tecnología de multiplexación permite gestionar múltiples zonas de servicio independientes dentro del mismo local, ideal para restaurantes con diferentes áreas como comedor principal, terraza y zona VIP.

Características de escalabilidad:
• Arquitectura modular para fácil expansión
• Configuración automática de nuevos dispositivos
• Gestión de múltiples puntos de entrega
• Sistema de priorización inteligente
• Análisis predictivo de necesidades de expansión

Capacidades del software de gestión:
• Monitoreo en tiempo real de uso de dispositivos
• Análisis de patrones de tráfico de clientes
• Reportes automatizados de eficiencia
• Integración con sistemas POS
• Planificación de capacidad predictiva

El software de gestión incluye análisis de uso en tiempo real, permitiendo optimizar la cantidad de localizadores según la demanda y los patrones de tráfico de clientes. El sistema puede crecer orgánicamente sin necesidad de reemplazar la infraestructura existente.`
    },
    {
      question: "¿Qué soporte y mantenimiento incluye el sistema?",
      answer: `Ofrecemos un programa completo de soporte que incluye mantenimiento preventivo trimestral, limpieza profesional de los contactos de carga, actualización de firmware para mejoras de rendimiento y calibración de sensores. El servicio técnico está disponible 24/7 con respuesta en menos de 4 horas para incidencias críticas.

Plan de mantenimiento preventivo:
• Inspección trimestral de todos los dispositivos
• Limpieza y calibración de sensores
• Actualización de firmware y software
• Verificación de baterías y contactos
• Ajuste de parámetros de rendimiento

Servicios de soporte incluidos:
• Monitoreo remoto 24/7
• Soporte técnico prioritario
• Reemplazo inmediato de unidades defectuosas
• Capacitación continua del personal
• Auditorías de rendimiento mensuales

Proporcionamos un stock de respaldo del 10% sin costo adicional para garantizar la continuidad del servicio, y realizamos auditorías de rendimiento mensuales para optimizar el sistema según el uso específico de cada cliente. Nuestro equipo de soporte técnico está certificado y actualizado constantemente en las últimas tecnologías.`
    }
  ];

  return (
    <section className={styles.faq__section}>
      <div className={styles.faq__container}>
        <h2 className={styles.faq__title}>Preguntas Frecuentes</h2>
        <div className={styles.faq__list}>
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              <div className={styles.faq__answer}>
                {faq.answer.split('\n\n').map((paragraph, i) => (
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

export default LocalizadoresFaqSection; 