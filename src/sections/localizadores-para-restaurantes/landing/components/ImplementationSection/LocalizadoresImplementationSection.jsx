"use client";
import styles from './LocalizadoresImplementationSection.module.scss';
import Accordion from '@/components/ui/accordion/Accordion';

function LocalizadoresImplementationSection() {
  const implementationSteps = [
    {
      title: "Análisis y Planificación",
      content: `La fase inicial comienza con un análisis detallado de las necesidades específicas de su establecimiento. Nuestro equipo de expertos realiza una evaluación completa que incluye:

Estudio del espacio físico:
• Medición precisa de áreas de servicio
• Identificación de zonas de cobertura críticas
• Análisis de interferencias potenciales
• Evaluación de flujo de clientes
• Mapeo de puntos de entrega de pedidos

Planificación operativa:
• Definición de procesos de servicio
• Establecimiento de KPIs de rendimiento
• Diseño de flujos de trabajo optimizados
• Identificación de necesidades de capacitación
• Desarrollo de protocolos de contingencia

El resultado de esta fase es un plan detallado de implementación personalizado para su negocio, con cronograma y objetivos claramente definidos.`
    },
    {
      title: "Instalación y Configuración",
      content: `La instalación se realiza de manera sistemática y profesional, minimizando cualquier interrupción en sus operaciones. El proceso incluye:

Instalación física:
• Montaje de estaciones base estratégicamente ubicadas
• Configuración de zonas de cobertura
• Instalación de puntos de carga
• Implementación de pantallas informativas
• Configuración de alertas sonoras y visuales

Configuración del software:
• Personalización de la interfaz de usuario
• Integración con sistemas existentes (POS, cocina)
• Configuración de reportes automáticos
• Establecimiento de niveles de acceso
• Programación de copias de seguridad

Pruebas exhaustivas:
• Verificación de cobertura en todas las áreas
• Pruebas de carga máxima del sistema
• Simulación de escenarios de uso
• Validación de integraciones
• Pruebas de recuperación ante fallos`
    },
    {
      title: "Capacitación del Personal",
      content: `Nuestro programa de capacitación integral asegura que todo el personal pueda aprovechar al máximo el sistema:

Programa de formación por roles:
• Capacitación para personal de servicio
• Entrenamiento para supervisores
• Formación para personal de mantenimiento
• Instrucción para administradores del sistema
• Capacitación para nuevo personal

Metodología de enseñanza:
• Sesiones teóricas interactivas
• Prácticas hands-on con equipos
• Simulaciones de situaciones reales
• Evaluaciones de competencia
• Certificación de usuarios

Material de soporte:
• Manuales de usuario detallados
• Guías de referencia rápida
• Videos tutoriales
• Base de conocimientos en línea
• Documentación técnica completa`
    },
    {
      title: "Seguimiento y Optimización",
      content: `Implementamos un proceso continuo de seguimiento y optimización para garantizar el máximo rendimiento del sistema:

Monitoreo continuo:
• Análisis de métricas de uso
• Seguimiento de tiempos de respuesta
• Control de vida útil de baterías
• Monitoreo de cobertura de señal
• Registro de incidencias

Optimización periódica:
• Ajuste de configuraciones
• Actualización de firmware
• Optimización de flujos de trabajo
• Mejora de procesos operativos
• Implementación de nuevas funcionalidades

Reportes y análisis:
• Informes semanales de rendimiento
• Análisis mensual de tendencias
• Recomendaciones de mejora
• Comparativas con benchmarks
• Proyecciones de crecimiento`
    },
    {
      title: "Soporte Continuo",
      content: `Ofrecemos un servicio de soporte integral para asegurar la operación ininterrumpida del sistema:

Niveles de soporte:
• Soporte técnico 24/7
• Mantenimiento preventivo programado
• Reparaciones y reemplazos prioritarios
• Actualizaciones de software
• Consultoría operativa continua

Canales de atención:
• Línea telefónica dedicada
• Portal web de soporte
• Chat en tiempo real
• Correo electrónico prioritario
• Visitas técnicas programadas

Garantías y compromisos:
• Tiempo de respuesta garantizado
• Disponibilidad del sistema 99.9%
• Stock de repuestos permanente
• Garantía de equipos por 2 años
• Actualizaciones sin costo adicional`
    }
  ];

  return (
    <section className={styles.implementation__section}>
      <div className={styles.implementation__container}>
        <h2 className={styles.implementation__title}>Guía de Implementación</h2>
        <div className={styles.implementation__list}>
          {implementationSteps.map((step, index) => (
            <Accordion key={index} title={step.title}>
              <div className={styles.implementation__content}>
                {step.content.split('\n\n').map((paragraph, i) => (
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

export default LocalizadoresImplementationSection; 