import styles from './LocalizadoresSuccessSection.module.scss';

function LocalizadoresSuccessSection() {
  return (
    <section className={styles.success__section}>
      <div className={styles.success__container}>
        <h2 className={styles.success__title}>Casos de Éxito</h2>
        <div className={styles.success__content}>
          <div className={styles.success__text}>
            <h3>Centro Comercial Premium - Optimización de Plazoleta de Comidas</h3>
            <p>
              Implementamos una solución integral para la plazoleta de comidas más grande del país, con más de 30 locales y capacidad para 1,200 comensales. El sistema incluye 150 localizadores distribuidos estratégicamente entre los diferentes restaurantes, con zonas de cobertura optimizadas para los tres niveles del centro comercial. Los resultados después de 12 meses de operación incluyen: reducción del 45% en tiempos de espera, aumento del 85% en satisfacción del cliente según encuestas post-servicio, incremento del 28% en rotación de mesas durante horas pico, y disminución del 60% en conflictos por confusión en la entrega de pedidos. El sistema ha procesado más de 500,000 llamados exitosos con una tasa de precisión del 99.98%.
            </p>

            <h3>Cadena Nacional de Restaurantes - Transformación Digital del Servicio</h3>
            <p>
              Una reconocida cadena con 25 sucursales implementó nuestro sistema como parte de su estrategia de transformación digital. La solución incluyó 40 localizadores por local, integración con su sistema de POS existente y capacitación para más de 300 empleados. Los resultados tras 6 meses de implementación muestran: reducción del 35% en costos operativos relacionados con servicio al cliente, aumento del 42% en ventas de postres y bebidas debido al mayor tiempo de permanencia en mesa, mejora del 55% en eficiencia del personal de servicio, y recuperación de la inversión en 4.5 meses. El sistema también permitió la recopilación de datos valiosos sobre patrones de consumo y tiempos de servicio.
            </p>

            <h3>Restaurante de Alta Cocina - Elevación de la Experiencia Gastronómica</h3>
            <p>
              Un restaurante galardonado implementó nuestros localizadores como parte de su estrategia de servicio premium. El sistema personalizado incluye 30 localizadores con acabado en negro mate y logotipo grabado con láser, integración con su sistema de reservas y configuración especial para diferentes áreas del restaurante. Los resultados del primer año incluyen: aumento del 30% en ventas de bar durante tiempos de espera, mejora del 65% en la gestión de tiempos entre platos, reducción del 90% en interrupciones durante la experiencia gastronómica, y un incremento del 40% en propinas debido al servicio más eficiente. El sistema también ha contribuido a mantener su calificación de 4.8/5 estrellas en plataformas de reseñas gastronómicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresSuccessSection; 