"use client";
import styles from './LocalizadoresSuccessSection.module.scss';
import Accordion from '@/components/ui/accordion/Accordion';

function LocalizadoresSuccessSection() {
  const successCases = [
    {
      title: "Cadena de Restaurantes Premium - 15 Locales",
      content: `Una reconocida cadena de restaurantes premium implementó nuestro sistema en sus 15 locales, logrando resultados excepcionales:

Desafíos iniciales:
• Tiempos de espera prolongados
• Confusión en la entrega de pedidos
• Baja rotación de mesas
• Quejas por servicio inconsistente
• Dificultad en gestión multi-local

Solución implementada:
• 200 localizadores por local
• Sistema de gestión centralizado
• Integración con POS existente
• Capacitación completa del personal
• Monitoreo en tiempo real

Resultados obtenidos:
• Reducción del 40% en tiempos de espera
• Aumento del 35% en satisfacción del cliente
• Incremento del 25% en rotación de mesas
• Mejora del 30% en eficiencia operativa
• ROI alcanzado en 6 meses`
    },
    {
      title: "Food Court Centro Comercial - 30 Restaurantes",
      content: `Un importante centro comercial implementó nuestro sistema para gestionar los pedidos de 30 restaurantes en su food court:

Situación previa:
• Congestión en áreas de espera
• Pérdida de pedidos
• Conflictos entre locales
• Experiencia del cliente deficiente
• Alto costo operativo

Implementación:
• Sistema centralizado de 500 localizadores
• Zonificación inteligente por restaurante
• Panel de control unificado
• Integración con sistema de audio
• Capacitación multi-restaurante

Mejoras alcanzadas:
• Optimización del 50% en flujo de clientes
• Reducción del 60% en pedidos perdidos
• Aumento del 40% en ventas promedio
• Disminución del 45% en quejas
• Mejora del 55% en satisfacción general`
    },
    {
      title: "Restaurante de Alta Cocina - Servicio Premium",
      content: `Un restaurante de alta cocina implementó nuestro sistema para elevar su experiencia de servicio al cliente:

Retos específicos:
• Mantener ambiente exclusivo
• Servicio discreto y elegante
• Coordinación cocina-servicio
• Experiencia personalizada
• Estándares de calidad exigentes

Solución personalizada:
• Localizadores premium personalizados
• Integración con sistema de reservas
• Alertas silenciosas personalizadas
• Tracking de tiempos por curso
• Monitoreo de temperatura de servicio

Impacto en el negocio:
• Mejora del 45% en precisión de servicio
• Reducción del 30% en interrupciones
• Aumento del 25% en propinas
• Incremento del 35% en recomendaciones
• Distinción en guías gastronómicas`
    },
    {
      title: "Cadena de Comida Rápida - Alto Volumen",
      content: `Una cadena nacional de comida rápida implementó nuestro sistema para optimizar sus operaciones de alto volumen:

Problemática inicial:
• Alto volumen de pedidos diarios
• Picos de demanda intensos
• Errores en entrega de pedidos
• Tiempos de espera variables
• Saturación en horas pico

Sistema implementado:
• 300 localizadores por local
• Algoritmo de priorización automática
• Sistema de colas inteligente
• Integración con cocina digital
• Análisis predictivo de demanda

Resultados destacados:
• Procesamiento de 1000+ pedidos/hora
• Reducción del 50% en errores de entrega
• Mejora del 40% en velocidad de servicio
• Aumento del 30% en satisfacción
• Optimización del 35% en costos operativos`
    },
    {
      title: "Restaurante Familiar - Transformación Digital",
      content: `Un restaurante familiar tradicional modernizó sus operaciones con nuestro sistema:

Estado inicial:
• Sistema manual de pedidos
• Largos tiempos de espera
• Confusión en la entrega
• Baja eficiencia operativa
• Limitada capacidad de crecimiento

Transformación realizada:
• Implementación de 100 localizadores
• Digitalización completa de procesos
• Capacitación integral del personal
• Sistema de reportes automatizado
• Integración con redes sociales

Beneficios obtenidos:
• Aumento del 60% en eficiencia
• Reducción del 45% en errores
• Incremento del 35% en ventas
• Mejora del 50% en reseñas online
• Expansión a 3 nuevas ubicaciones`
    }
  ];

  return (
    <section className={styles.success__section}>
      <div className={styles.success__container}>
        <h2 className={styles.success__title}>Casos de Éxito</h2>
        <div className={styles.success__list}>
          {successCases.map((case_, index) => (
            <Accordion key={index} title={case_.title}>
              <div className={styles.success__content}>
                {case_.content.split('\n\n').map((paragraph, i) => (
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

export default LocalizadoresSuccessSection; 