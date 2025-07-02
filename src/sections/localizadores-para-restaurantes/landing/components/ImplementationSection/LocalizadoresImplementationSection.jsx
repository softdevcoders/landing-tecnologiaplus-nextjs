import styles from './LocalizadoresImplementationSection.module.scss';

function LocalizadoresImplementationSection() {
  return (
    <section className={styles.implementation__section}>
      <div className={styles.implementation__container}>
        <h2 className={styles.implementation__title}>Guía de Implementación</h2>
        <div className={styles.implementation__content}>
          <div className={styles.implementation__text}>
            <h3>Análisis y Planificación Personalizada</h3>
            <p>
              Nuestro proceso de implementación comienza con un análisis detallado de su establecimiento, incluyendo mapeo de zonas de cobertura, estudio de flujos de clientes y evaluación de puntos críticos de servicio. Realizamos pruebas de intensidad de señal en diferentes áreas para garantizar una cobertura óptima, y desarrollamos un plan de implementación por fases que minimiza cualquier interrupción en sus operaciones. El proceso incluye la integración con sistemas existentes de gestión de pedidos y la configuración de zonas prioritarias basadas en el volumen de tráfico.
            </p>
            
            <h3>Programa de Capacitación Integral</h3>
            <p>
              Implementamos un programa de capacitación multinivel diseñado específicamente para cada rol en su equipo. Los gerentes reciben entrenamiento en gestión del sistema, análisis de datos y optimización de recursos. El personal de servicio aprende protocolos de entrega eficiente, gestión de picos de demanda y resolución de incidencias comunes. Incluimos sesiones prácticas con simulaciones de escenarios reales, manuales detallados y acceso a nuestra plataforma de aprendizaje en línea para capacitación continua.
            </p>

            <h3>Optimización y Seguimiento Continuo</h3>
            <p>
              Durante los primeros 30 días post-implementación, nuestro equipo técnico realiza ajustes diarios basados en métricas de rendimiento en tiempo real. Monitoreamos patrones de uso, tiempos de respuesta y tasas de éxito de entrega para optimizar la configuración del sistema. Implementamos actualizaciones de firmware personalizadas según sus necesidades específicas, ajustamos la sensibilidad de los sensores para diferentes áreas y establecemos protocolos de mantenimiento preventivo. Proporcionamos informes semanales de rendimiento con recomendaciones específicas para mejorar la eficiencia operativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresImplementationSection; 