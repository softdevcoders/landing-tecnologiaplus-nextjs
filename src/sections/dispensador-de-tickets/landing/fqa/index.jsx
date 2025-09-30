import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { dispensadorDeTicketsPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const DispensadorDeTicketsFQASection = () => {
  return (
    <PreguntasFrecuentes  
      preguntasFrecuentes={dispensadorDeTicketsPreguntasFrecuentes}
      title="Preguntas frecuentes sobre el dispensador de turnos"
    />
  )
}

export default DispensadorDeTicketsFQASection;