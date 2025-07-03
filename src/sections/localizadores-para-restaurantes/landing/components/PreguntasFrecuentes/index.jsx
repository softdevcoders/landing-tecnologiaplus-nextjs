import PreguntasFrecuentes from "@/components/preguntas-frecuentes";

const preguntasFrecuentes = [
  {
    question: "¿Cuál es el alcance máximo de los localizadores en plazoletas de comidas?",
    answer: "En plazoletas de comidas y restaurantes, nuestros localizadores mantienen una señal estable hasta 200 metros en espacios abiertos y 100 metros en áreas con obstáculos. Esta cobertura es ideal para centros comerciales de múltiples niveles, permitiendo que los clientes se muevan libremente entre tiendas mientras esperan su pedido. El sistema utiliza tecnología de radiofrecuencia avanzada que atraviesa paredes y pisos eficientemente, garantizando que las notificaciones lleguen al cliente sin importar su ubicación dentro del centro comercial. Además, nuestros localizadores cuentan con un sistema de retroalimentación que confirma la recepción de la señal, asegurando que ningún cliente se quede sin ser notificado cuando su pedido esté listo."
  },
  {
    question: "¿Qué ventajas ofrece el sistema de carga de los localizadores?",
    answer: "Nuestro sistema de carga inteligente incorpora tecnología de carga rápida con protección contra sobrecarga, permitiendo una carga completa en solo 2 horas para 72 horas de uso continuo. La base de carga múltiple puede gestionar hasta 20 localizadores simultáneamente, con indicadores LED que muestran el estado de carga de cada unidad. El sistema incluye protección contra cortocircuitos y sobretensiones, además de un modo de hibernación automático que preserva la vida útil de la batería cuando no está en uso. La base de carga está diseñada ergonómicamente para facilitar la inserción y extracción de los localizadores, y cuenta con un sistema de diagnóstico que identifica automáticamente unidades que requieren mantenimiento o reemplazo."
  },
  {
    question: "¿Cómo funciona el sistema de notificación para el personal del restaurante?",
    answer: "El sistema de notificación para el personal integra una consola de control táctil intuitiva que permite gestionar todos los localizadores desde un punto central. Los empleados pueden enviar llamados con diferentes prioridades, programar alertas automáticas basadas en tiempo de espera, y monitorear el estado de cada localizador en tiempo real. La interfaz muestra información crucial como el número de mesa, tiempo de espera, y tipo de pedido, permitiendo una gestión eficiente del flujo de clientes. El sistema también incluye un registro detallado de todas las notificaciones enviadas, tiempos de respuesta y estadísticas de uso, facilitando la optimización del servicio y la identificación de áreas de mejora en la atención al cliente."
  },
  {
    question: "¿Qué características de durabilidad tienen los localizadores?",
    answer: "Los localizadores están fabricados con materiales de grado industrial que incluyen una carcasa de policarbonato resistente a impactos y un recubrimiento antimicrobiano que previene el crecimiento de bacterias. Cada unidad está sellada herméticamente con clasificación IP54, lo que las protege contra salpicaduras de agua, polvo y caídas accidentales desde altura de mesa. La pantalla está protegida por cristal templado resistente a rayones, y los botones están diseñados para soportar más de 1 millón de pulsaciones. Los componentes electrónicos internos están montados en una placa con revestimiento conformal que los protege contra la humedad y la oxidación, garantizando una vida útil promedio de 5 años con uso comercial intensivo."
  },
  {
    question: "¿Qué opciones de personalización ofrece el sistema para diferentes tipos de restaurantes?",
    answer: "Nuestro sistema ofrece múltiples niveles de personalización que se adaptan a las necesidades específicas de cada establecimiento. Los restaurantes pueden configurar diferentes tipos de alertas visuales, sonoras y de vibración, así como personalizar los mensajes mostrados en la pantalla LCD con el logo del establecimiento y mensajes personalizados. El software permite crear perfiles específicos para diferentes áreas del restaurante, configurar prioridades de servicio, y establecer zonas de cobertura personalizadas. Además, el sistema puede integrarse con software de gestión de restaurantes existente mediante nuestra API, permitiendo la sincronización automática de pedidos y la generación de informes personalizados sobre tiempos de espera y eficiencia del servicio."
  },
  {
    question: "¿Qué medidas de seguridad incluye el sistema contra pérdida o robo de localizadores?",
    answer: "El sistema incorpora múltiples capas de seguridad para proteger la inversión del restaurante. Cada localizador cuenta con un sistema de geolocalización interno que activa una alarma sonora si se sale del perímetro establecido, y un sistema de seguimiento que registra el último usuario y ubicación conocida. Los dispositivos incluyen tecnología antirrobo con identificación única que los hace inútiles fuera del sistema del restaurante, y pueden ser desactivados remotamente en caso de pérdida. La base de carga realiza un inventario automático al final del día, alertando sobre unidades faltantes, y el software genera informes de seguimiento que ayudan a identificar patrones de pérdida y prevenir futuros incidentes."
  },
  {
    question: "¿Qué tipo de mantenimiento requieren los localizadores y con qué frecuencia?",
    answer: "El mantenimiento de los localizadores está diseñado para ser mínimo y eficiente, requiriendo solo una revisión trimestral básica que incluye la limpieza de contactos de carga, verificación de baterías y actualización del firmware si es necesario. El sistema realiza diagnósticos automáticos diarios que identifican unidades que requieren atención, y nuestro software de gestión mantiene un registro detallado del ciclo de vida de cada dispositivo, prediciendo necesidades de mantenimiento preventivo. Los componentes están diseñados para facilitar la limpieza con desinfectantes comerciales sin dañar el dispositivo, y las bases de carga incluyen un modo de mantenimiento automático que optimiza la vida útil de las baterías mediante ciclos de carga inteligentes."
  },
  {
    question: "¿Cómo se integra el sistema con otros softwares de gestión de restaurantes?",
    answer: "Nuestro sistema ofrece una API RESTful completa y documentada que permite una integración seamless con la mayoría de los sistemas de gestión de restaurantes populares, incluyendo POS, sistemas de pedidos en línea y aplicaciones de delivery. La integración permite la asignación automática de localizadores al momento de la orden, sincronización en tiempo real del estado de los pedidos, y la generación de análisis detallados sobre tiempos de preparación y entrega. El sistema soporta protocolos estándar de la industria como OAuth 2.0 para autenticación segura, webhooks para actualizaciones en tiempo real, y formatos de datos flexibles que facilitan la personalización según las necesidades específicas del negocio."
  },
  {
    question: "¿Qué opciones de conectividad ofrece el sistema y cómo se gestiona la red?",
    answer: "El sistema utiliza una arquitectura de red híbrida que combina conectividad RF propietaria para la comunicación con los localizadores y conexión WiFi/Ethernet para la gestión del sistema. La base central actúa como un hub inteligente que puede operar de manera autónoma en caso de pérdida de conexión a internet, garantizando la continuidad del servicio. El sistema incluye redundancia automática con múltiples puntos de acceso que aseguran cobertura completa, y utiliza encriptación de grado militar para proteger todas las comunicaciones. La gestión de red se realiza a través de una interfaz web intuitiva que permite monitorear el estado de la red, realizar diagnósticos remotos y configurar parámetros de rendimiento en tiempo real."
  },
  {
    question: "¿Qué tipos de reportes y análisis proporciona el sistema para mejorar el servicio?",
    answer: "El sistema genera reportes comprensivos que incluyen métricas clave como tiempos promedio de espera, patrones de uso por hora y día, eficiencia del personal en la atención de llamados, y análisis de flujo de clientes. Los dashboards interactivos permiten visualizar datos en tiempo real y históricos, con la capacidad de desglosar la información por zonas del restaurante, tipos de pedido o personal específico. El análisis predictivo utiliza machine learning para anticipar períodos de alta demanda y optimizar la asignación de recursos, mientras que las alertas automáticas identifican cuellos de botella en el servicio que requieren atención inmediata. Los reportes son personalizables y pueden exportarse en múltiples formatos para su análisis posterior."
  },
  {
    question: "¿Qué opciones de escalabilidad ofrece el sistema para restaurantes en crecimiento?",
    answer: "Nuestro sistema está diseñado con una arquitectura modular que permite escalar desde pequeños restaurantes hasta grandes cadenas con múltiples ubicaciones. La plataforma soporta la adición seamless de nuevos localizadores, estaciones de carga y puntos de control sin necesidad de modificar la infraestructura existente. El software de gestión centralizado permite administrar múltiples locaciones desde una única interfaz, con capacidad para sincronizar configuraciones, actualizar firmware remotamente y gestionar inventarios de dispositivos a nivel global. La escalabilidad también incluye opciones para expandir funcionalidades mediante módulos adicionales como integración con apps móviles, sistemas de reservas o programas de fidelización."
  },
  {
    question: "¿Qué medidas de higiene y sanitización se aplican a los localizadores?",
    answer: "Los localizadores están diseñados con superficies antimicrobianas y materiales que resisten la limpieza frecuente con desinfectantes hospitalarios sin degradarse. El proceso de sanitización incluye un ciclo automático UV-C en las bases de carga que elimina el 99.9% de bacterias y virus entre usos, complementado con un recubrimiento nano-cerámico que previene la adherencia de patógenos. Cada unidad puede ser limpiada rápidamente con toallitas desinfectantes estándar, y el diseño sin hendiduras evita la acumulación de suciedad. El sistema incluye un registro de limpieza digital que ayuda a mantener un programa regular de desinfección y cumplir con los protocolos de higiene más estrictos del sector alimentario."
  },
  {
    question: "¿Qué opciones de personalización visual y branding ofrece el sistema?",
    answer: "El sistema ofrece amplias opciones de personalización visual que permiten integrar completamente la imagen corporativa del restaurante. Los localizadores pueden personalizarse con el logo de la empresa mediante impresión UV resistente al desgaste, y las pantallas LCD pueden mostrar mensajes personalizados con la tipografía y colores corporativos. La interfaz de usuario del software de gestión puede adaptarse con temas personalizados, incluyendo dashboards branded y reportes con la imagen corporativa. Además, ofrecemos opciones de personalización física como selección de colores para las carcasas, diseños grabados láser, y la posibilidad de crear modelos exclusivos para cadenas grandes con requisitos específicos de marca."
  },
  {
    question: "¿Qué soporte técnico y garantía incluye el sistema?",
    answer: "Nuestro paquete de soporte técnico incluye asistencia 24/7 a través de múltiples canales, incluyendo teléfono, chat en vivo y portal de soporte en línea con base de conocimientos extensa. La garantía estándar cubre 2 años de protección completa contra defectos de fabricación, con opción de extensión hasta 5 años. El soporte incluye monitoreo proactivo del sistema que identifica y resuelve problemas potenciales antes de que afecten el servicio, actualizaciones regulares de software y firmware, y un programa de reemplazo avanzado que garantiza la continuidad del servicio. También ofrecemos capacitación inicial y continua para el personal, junto con consultoría para optimizar el uso del sistema."
  },
  {
    question: "¿Cómo maneja el sistema los picos de demanda y la gestión de colas?",
    answer: "El sistema incorpora algoritmos avanzados de gestión de colas que optimizan automáticamente la asignación de localizadores durante períodos de alta demanda. La plataforma utiliza análisis predictivo para anticipar picos de tráfico basándose en datos históricos y factores externos como eventos especiales o clima. Durante períodos de alta demanda, el sistema puede implementar automáticamente estrategias de gestión de colas como asignación prioritaria, estimaciones de tiempo de espera dinámicas y redistribución de carga entre diferentes áreas del restaurante. Además, incluye herramientas de comunicación masiva para mantener informados a los clientes sobre tiempos de espera actualizados."
  },
  {
    question: "¿Qué características de accesibilidad incluye el sistema para usuarios con necesidades especiales?",
    answer: "Nuestros localizadores incorporan múltiples características de accesibilidad diseñadas para usuarios con diferentes capacidades. Los dispositivos incluyen alertas multimodales que combinan señales visuales de alto contraste, patrones de vibración personalizables y alertas sonoras de frecuencia ajustable. La pantalla utiliza tecnología de alto contraste con tamaño de fuente ajustable y símbolos universales fácilmente reconocibles. Los botones están diseñados con relieve táctil y retroalimentación haptica, y el sistema puede configurarse para modos especiales que se adaptan a usuarios con discapacidades visuales, auditivas o motrices, cumpliendo con estándares internacionales de accesibilidad."
  },
  {
    question: "¿Qué opciones de pago y planes de financiamiento están disponibles?",
    answer: "Ofrecemos múltiples opciones de adquisición que se adaptan a diferentes presupuestos y necesidades operativas. El sistema está disponible para compra directa con opciones de pago único o financiamiento hasta 36 meses, así como un modelo de suscripción mensual que incluye mantenimiento y actualizaciones continuas. Los planes de arrendamiento operativo incluyen opciones de actualización tecnológica cada 24 meses, garantizando que siempre tenga acceso a las últimas innovaciones. Todos los planes incluyen instalación profesional, capacitación inicial y soporte técnico, con descuentos disponibles para implementaciones en múltiples ubicaciones o grandes volúmenes de dispositivos."
  },
  {
    question: "¿Cómo se gestiona la privacidad y seguridad de los datos en el sistema?",
    answer: "Nuestro sistema implementa múltiples capas de seguridad que cumplen con estándares internacionales de protección de datos, incluyendo encriptación AES-256 para todos los datos en tránsito y en reposo. La plataforma utiliza autenticación multifactor para acceso administrativo, mantiene registros detallados de auditoría, y realiza copias de seguridad automáticas cifradas. Los datos de clientes se anonimizan automáticamente y se eliminan según políticas configurables de retención. El sistema cumple con regulaciones GDPR y PCI-DSS, realizando actualizaciones regulares de seguridad y evaluaciones de vulnerabilidades para mantener la integridad y confidencialidad de la información."
  },
  {
    question: "¿Qué innovaciones tecnológicas incluirán las próximas actualizaciones del sistema?",
    answer: "Las próximas actualizaciones del sistema incorporarán tecnologías emergentes como integración con asistentes virtuales para gestión por voz, capacidades de realidad aumentada para visualización de estados de mesa en tiempo real, y análisis predictivo mejorado utilizando inteligencia artificial. Estamos desarrollando funcionalidades de IoT avanzadas que permitirán la interacción seamless con otros dispositivos inteligentes del restaurante, mejoras en la eficiencia energética mediante tecnología de harvesting de energía, y nuevas opciones de personalización utilizando pantallas e-ink de bajo consumo. También se incluirán capacidades expandidas de análisis de datos con machine learning para optimización automática del servicio."
  },
  {
    question: "¿Qué impacto ambiental tiene el sistema y qué medidas de sostenibilidad se implementan?",
    answer: "Nuestro sistema está diseñado con un fuerte compromiso con la sostenibilidad, utilizando componentes de bajo consumo energético y materiales reciclables en su fabricación. Los localizadores incorporan baterías de litio de larga duración con sistemas de gestión inteligente que maximizan su vida útil, y ofrecemos un programa de reciclaje para dispositivos al final de su vida útil. El sistema utiliza tecnología de ahorro de energía que reduce el consumo durante períodos de baja actividad, y las bases de carga incluyen temporizadores inteligentes que optimizan el uso de energía. Además, nuestro packaging es 100% reciclable y utilizamos procesos de manufactura certificados como ecológicamente responsables."
  }
];

const LocalizadoresPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes preguntasFrecuentes={preguntasFrecuentes} />
  )
}

export default LocalizadoresPreguntasFrecuentes;