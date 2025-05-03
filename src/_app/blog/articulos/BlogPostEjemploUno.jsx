import ArticuloPlantilla from "./components/ArticuloPlantilla";

const articuloEjemplo = {
  titulo: "¿Cómo integrar un dispensador de turnos con tu sistema de gestión?",
  publicadoPor: "Carlos",
  fechaPublicacion: "15 de febrero de 2025",
  fechaActualizacion: "17 de febrero de 2025",
  contenido: [
    {
      tipo: "imagen",
      url: "https://via.placeholder.com/300x300?text=Icono",
      descripcion: "Icono de muestra",
      altura: "300px",
    },
    {
      tipo: "texto",
      texto:
        "Lorem ipsum dolor Sit arnet. consectetuer adipiscing elít, Sed diam monummy nibh euismod tincidunt ut laoreot dolore magna aliquam erat volutpat- Ut Wisi enim ad minim veniam, quis nostrud exorci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consoquat. Duis autom vel cum iriure dolor in hondrerit in vulputate volit osso molastie consoquat, vel illum dolare ou fougiat nulla facilisis at vero cros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril de4enit augue duis dolore te feugait nulla facilisi.",
    },
    {
      tipo: "subtitulo",
      texto:
        "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy",
    },
    {
      tipo: "texto",
      texto:
        "nostrud exerci tation ullarncorper suscipit lobortis nisa ut aliquip er ea commodo consequat. torern ipsum dolo« sit amet. consectetuer adipiscir,g elit. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarn erat volutpaL ut Wisi enim ad minim veniam. quis nostrud exerci tation ullamcotper suscipit lobortis nisl ut aliquip ex ea commodo consequat_ Outs autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ved illum d01,ore eu teugiat mulla tacilis.iS at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril de4enit augue duis dolore te feugait nulla facilisi_ torom ipsum dolor sit amet. cort5 ectetuer adipiscing elit, diam nonummy laorcot doloro magna aliquam erat volutpat. ut Wisi enim ad minim veniam, ullamcorper suscipit bobortis nisi ut aliquip ox oa consequat, evem ipsum dolor sit amet. consectetuer adir»scing elit. sed diam nonummy laoreet dolore magna aliquam erat volutpat Ut Wisi enim ad minim veniam. ullarncorper suscipit lobortis nisl ut aliquip ex ea cornmodo consequat nibh quis nibh quis euismod tincidunt ut nostrud exorci tation euisrn«i tincidunt ut nostrud exerci tation",
    },
    /* {
      tipo: "lista",
      ordenada: false,
      items: [
        "Industria textil",
        "Exportación de café",
        "Innovación tecnológica",
      ],
    }, */
    {
      tipo: "imagen",
      url: "https://via.placeholder.com/300x300?text=Icono",
      descripcion: "Icono de muestra",
      altura: "300px",
    },
    {
      tipo: "subtitulo",
      texto:
        "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy",
    },
    {
      tipo: "texto",
      texto:
        "nostrud exerci tation ullarncorper suscipit lobortis nisa ut aliquip er ea commodo consequat. torern ipsum dolo« sit amet. consectetuer adipiscir,g elit. sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarn erat volutpaL ut Wisi enim ad minim veniam. quis nostrud exerci tation ullamcotper suscipit lobortis nisl ut aliquip ex ea commodo consequat_ Outs autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. ved illum d01,ore eu teugiat mulla tacilis.iS at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril de4enit augue duis dolore te feugait nulla facilisi_ torom ipsum dolor sit amet. cort5 ectetuer adipiscing elit, diam nonummy laorcot doloro magna aliquam erat volutpat. ut Wisi enim ad minim veniam, ullamcorper suscipit bobortis nisi ut aliquip ox oa consequat, evem ipsum dolor sit amet. consectetuer adir»scing elit. sed diam nonummy laoreet dolore magna aliquam erat volutpat Ut Wisi enim ad minim veniam. ullarncorper suscipit lobortis nisl ut aliquip ex ea cornmodo consequat nibh quis nibh quis euismod tincidunt ut nostrud exorci tation euisrn«i tincidunt ut nostrud exerci tation",
    },
  ],
};

function BlogPostEjemploUno() {
  return (
    <ArticuloPlantilla
      titulo={articuloEjemplo.titulo}
      publicadoPor={articuloEjemplo.publicadoPor}
      fechaPublicacion={articuloEjemplo.fechaPublicacion}
      fechaActualizacion={articuloEjemplo.fechaActualizacion}
      contenido={articuloEjemplo.contenido}
    />
  );
}

export default BlogPostEjemploUno;
