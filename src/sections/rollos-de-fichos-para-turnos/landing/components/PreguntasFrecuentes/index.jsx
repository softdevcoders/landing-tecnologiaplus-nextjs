import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import { rollosDeFichosParaTurnosPreguntasFrecuentes } from "@/config/preguntas-frecuentes";

const RollosDeFichosParaTurnosPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={rollosDeFichosParaTurnosPreguntasFrecuentes} 
      title="Preguntas frecuentes sobre rollos de números para turnos"
    />
  )
}

export default RollosDeFichosParaTurnosPreguntasFrecuentes;