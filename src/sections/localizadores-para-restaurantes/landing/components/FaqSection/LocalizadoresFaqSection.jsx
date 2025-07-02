import styles from './LocalizadoresFaqSection.module.scss';

function LocalizadoresFaqSection() {
  const faqs = [
    {
      question: "¿Cuál es el alcance máximo de los localizadores en plazoletas de comidas?",
      answer: "En plazoletas de comidas y restaurantes, nuestros localizadores mantienen una señal estable hasta 200 metros en espacios abiertos y 100 metros en áreas con obstáculos. Esta cobertura es ideal para centros comerciales de múltiples niveles, permitiendo que los clientes se muevan libremente entre tiendas mientras esperan su pedido. El sistema utiliza tecnología de radiofrecuencia optimizada que atraviesa paredes y pisos, manteniendo la conexión incluso en áreas congestionadas con múltiples señales inalámbricas."
    },
    {
      question: "¿Qué ventajas ofrece el sistema de carga de los localizadores?",
      answer: "Nuestro sistema de carga inteligente incorpora tecnología de carga rápida con protección contra sobrecarga, permitiendo una carga completa en solo 2 horas para 72 horas de uso continuo. La base de carga múltiple puede gestionar hasta 20 localizadores simultáneamente, con indicadores LED que muestran el estado de carga de cada unidad. El sistema incluye modo de hibernación automática cuando la batería está baja y reinicio automático al colocarse en la base, maximizando la vida útil de la batería y reduciendo el mantenimiento."
    },
    {
      question: "¿Cómo garantizan la durabilidad en ambientes de alto tráfico?",
      answer: "Los localizadores están construidos con polímeros termoplásticos de grado industrial y carcasa reforzada con clasificación IP54, soportando caídas desde 1.5 metros de altura. Los contactos de carga utilizan aleación de oro para prevenir la corrosión y asegurar más de 10,000 ciclos de carga. La pantalla está protegida con cristal templado resistente a rayones, y los botones están sellados para prevenir la entrada de líquidos y residuos de alimentos. Cada unidad pasa por pruebas de impacto, vibración y exposición a temperaturas extremas antes de su envío."
    },
    {
      question: "¿Qué capacidad de expansión tiene el sistema para restaurantes en crecimiento?",
      answer: "El sistema es altamente escalable, comenzando desde 15 localizadores hasta más de 200 unidades por establecimiento. La tecnología de multiplexación permite gestionar múltiples zonas de servicio independientes dentro del mismo local, ideal para restaurantes con diferentes áreas como comedor principal, terraza y zona VIP. El software de gestión incluye análisis de uso en tiempo real, permitiendo optimizar la cantidad de localizadores según la demanda y los patrones de tráfico de clientes."
    },
    {
      question: "¿Qué soporte y mantenimiento incluye el sistema?",
      answer: "Ofrecemos un programa completo de soporte que incluye mantenimiento preventivo trimestral, limpieza profesional de los contactos de carga, actualización de firmware para mejoras de rendimiento y calibración de sensores. El servicio técnico está disponible 24/7 con respuesta en menos de 4 horas para incidencias críticas. Proporcionamos un stock de respaldo del 10% sin costo adicional para garantizar la continuidad del servicio, y realizamos auditorías de rendimiento mensuales para optimizar el sistema según el uso específico de cada cliente."
    }
  ];

  return (
    <section className={styles.faq__section}>
      <div className={styles.faq__container}>
        <h2 className={styles.faq__title}>Preguntas Frecuentes</h2>
        <div className={styles.faq__list}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faq__item}>
              <h3 className={styles.faq__question}>{faq.question}</h3>
              <p className={styles.faq__answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresFaqSection; 