import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import { rollosTermicosPreguntasFrecuentes } from "@/config/preguntas-frecuentes";

const RollosTermicosPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={rollosTermicosPreguntasFrecuentes} 
      title="Preguntas frecuentes sobre rollos de papel termico personalizados"
    />
  )
}

export default RollosTermicosPreguntasFrecuentes;