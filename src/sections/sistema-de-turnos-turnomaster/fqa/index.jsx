import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { sistemasDeTurnosTurnomasterPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const TurnoMasterPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes  
      preguntasFrecuentes={sistemasDeTurnosTurnomasterPreguntasFrecuentes}
      title="Preguntas frecuentes sobre Sistema de turnos de espera"
    />
  )
}

export default TurnoMasterPreguntasFrecuentes;