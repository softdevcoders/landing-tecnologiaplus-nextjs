import { templateNames } from "@/config/landing-heros";
import LLamadoEnfermeriaHomeDesktop from "./llamado-enfermeria-home-desktop/llamado-enfermeria-home-desktop.jsx";
import EncuestaVirtualCuidamasteHomeDesktop from "./encuesta-virtual-cuidamaster-home-desktop/encuesta-virtual-cuidamaster-home-desktop.jsx";

const CustomTemplates = ({templateName, images}) => {
  let templateContent;
  
  switch (templateName) {
    case templateNames.LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME:
      templateContent = <LLamadoEnfermeriaHomeDesktop images={images} />;
      break;
    case templateNames.ENCUESTA_VIRTUAL_OPINAMASTER_HOME:
      templateContent = <EncuestaVirtualCuidamasteHomeDesktop images={images} />;
      break;
    default:
      templateContent = null;
  }

  return templateContent
}

export default CustomTemplates