import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { turnoMasterPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const TurnoMasterPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes  
      preguntasFrecuentes={turnoMasterPreguntasFrecuentes}
      title="Preguntas frecuentes sobre Sistema de turnos de espera"
    />
  )
}

export default TurnoMasterPreguntasFrecuentes;