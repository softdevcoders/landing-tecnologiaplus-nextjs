import ArticuloPlantilla from "../components/ArticuloPlantilla";

const articuloSistemaLlamado = {
  titulo: "¿Por qué usar el Sistema de Llamado de Enfermería?",
  publicadoPor: "Autor Desconocido",
  fechaPublicacion: "julio 21, 2023",
  fechaActualizacion: "julio 21, 2023",
  contenido: [
    {
      tipo: "imagen",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743860057/18_ygcenj.webp",
      descripcion: "Paciente presionando botón de llamado de enfermería",
      altura: "32rem",
      estilo: {
        float: "left",
        width: "50%",
        marginRight: "16px",
        marginBottom: "16px",
      },
    },
    {
      tipo: "texto-enriquecido",
      partes: [
        "Hace algunos años que se comenzó a implementar el ",
        {
          texto: "sistema de llamado de enfermería",
          href: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/cuidamaster/",
        },
        " en Colombia, una manera eficiente de atender las necesidades de los pacientes en clínicas, hogares geriátricos y gerontológicos, debido a las facilidades que ofrece tanto para las enfermeras, como para los pacientes.",
      ],
    },
    {
      tipo: "texto-enriquecido",
      partes: [
        "No por nada se han vuelto tendencia y una norma casi obligatoria en los últimos años. Es por ello que en ",
        {
          texto: "Tecnología Plus",
          italic: true,
        },
        " queremos ofrecerte algunos de los mejores ",
        {
          texto: "sistemas de llamado de enfermería",
          bold: true,
        },
        " del mercado, puesto que sabemos lo importante de ofrecer comodidades tanto para tu personal como para tus pacientes.",
      ],
    },
    {
      tipo: "subtitulo",
      texto: "Ventajas de utilizar un sistema de llamado de enfermeras",
    },
    {
      tipo: "texto",
      texto:
        "Aunque no todas las empresas del sector salud en Colombia cuentan con esta tecnología, la verdad es que resulta una de las mejores opciones de inversión que pueden realizar por los grandes beneficios que aporta, no solo para el personal, sino también para los pacientes.",
    },
    {
      tipo: "lista",
      bulletStyle: "disc",
      items: [
        "No emiten ruidos molestos que puedan perturbar la paz de tu clínica.",
        "Diseñados para fijarlos sobre cualquier tipo de superficie.",
        "Los enfermeros solo deben utilizar el reloj receptor digital donde recibirán el llamado de enfermera de los pacientes.",
        "Puedes configurar y utilizar cualquiera de nuestros sistemas de llamado en la zona de enfermería.",
        "Entrenar a tu personal para utilizar los llamadores es fácil.",
        "Le ofreces a los pacientes más seguridad y accesibilidad a los enfermeros en caso de necesidad.",
        "Te mantiene actualizado en cuanto a tecnología de atención al paciente.",
        "Es fácil enseñarle el método de funcionamiento a tus pacientes para que llamen a las enfermeras.",
        "Nuestros modelos son resistentes al agua.",
        "Tienen un largo alcance de hasta 50 metros de distancia.",
        "Los llamadores de enfermeras – pacientes son inalámbricos.",
      ],
    },
    {
      tipo: "subtitulo",
      texto: "¿Cómo funciona el sistema de llamado de paciente enfermera?",
    },
    {
      tipo: "texto",
      texto:
        "El funcionamiento del sistema  de llamada paciente – enfermera es bastante práctico, ya que a través de los modelos que tenemos disponibles en Tecnología Plus, el proceso se hace más simple.",
    },
    {
      tipo: "texto-enriquecido",
      partes: [
        "El ",
        {
          texto: "sistema de llamado de enfermería",
          href: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/cuidamaster/",
        },
        " solo debes instalarlo cerca de la cama del paciente y este debe tener un acceso fácil, cómodo y rápido. Por su parte, el llamador con cable extensor es para pacientes que no pueden levantarse de la cama y así ofrecer más comodidades.",
      ],
    },
    {
      tipo: "texto",
      texto:
        "En cualquiera de los casos, ambos modelos cuentan con 2 botones para el uso de los pacientes:",
    },
    {
      tipo: "lista",
      bulletStyle: "disc",
      items: ["Call.", "Cancel."],
    },
    {
      tipo: "texto",
      texto:
        "Una vez lo has instalado, solo debes presentarle al paciente el funcionamiento que tienen los botones, lo cual no es difícil, por lo que te aseguras de evitar inconvenientes con el funcionamiento y/o errores en el uso de los llamadores.",
    },
    {
      tipo: "texto",
      texto:
        "El paciente solo debe presionar el botón respectivo para que la enfermera reciba la señal, ya sea en su muñeca con el reloj digital, en su pantalla instalada en la sala de enfermeras o a través de una alarma de luz. Esto bastará para saber que debe movilizarse hacia la sala del enfermero lo más pronto posible.",
    },
    {
      tipo: "subtitulo",
      texto: "Empresas de salud que usan nuestro llamado de enfermeras",
    },
    {
      tipo: "texto-enriquecido",
      partes: [
        "Si estás decidido a instalar estos ",
        {
          texto: "sistema de llamado de enfermeras",
          href: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/cuidamaster/",
        },
        " en tu clínica, hogar geriátrico o gerontológico, quizá te gustaría conocer algunos casos de éxitos de otras empresas que ya cuentan con los llamadores de Tecnología Plus:",
      ],
    },
    {
      tipo: "lista",
      bulletStyle: "disc",
      items: [
        "Hospital San Carlos",
        "Hogar casa Viva",
        "Dermosalud",
        "Hospital San Rafael.",
        "Hogar Gerontológico El Bosque.",
        "Hogar La Alborada.",
      ],
    },
    {
      tipo: "texto-enriquecido",
      partes: [
        "¡",
        {
          texto: "Contáctanos hoy mismo",
          href: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/contacto/",
        },
        " y descubre cómo podemos llevar tu servicio al siguiente nivel!",
      ],
    },
    {
      tipo: "boton",
      texto: "Cotizar",
      href: "https://wa.me/573164682034",
    },
  ],
};

function Articulo() {
  return (
    <ArticuloPlantilla
      titulo={articuloSistemaLlamado.titulo}
      publicadoPor={articuloSistemaLlamado.publicadoPor}
      fechaPublicacion={articuloSistemaLlamado.fechaPublicacion}
      fechaActualizacion={articuloSistemaLlamado.fechaActualizacion}
      contenido={articuloSistemaLlamado.contenido}
    />
  );
}

export default Articulo;
