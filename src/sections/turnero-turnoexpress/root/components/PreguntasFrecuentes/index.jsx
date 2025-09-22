import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import { turneroTurnoexpressPreguntasFrecuentes } from "@/config/preguntas-frecuentes";

const TurneroTurnoexpressPreguntasFrecuentes = () => {  
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={turneroTurnoexpressPreguntasFrecuentes} 
      title="Preguntas frecuentes sobre el Turnero Digital Digiturno"
    />
  )
}

export default TurneroTurnoexpressPreguntasFrecuentes;