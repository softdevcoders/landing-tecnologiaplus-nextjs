import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { llamadoresDeMeserosPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const LlamadoresDeMeserosPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={llamadoresDeMeserosPreguntasFrecuentes} 
      title="Preguntas frecuentes sobre llamadores de meseros"
    />
  )
}

export default LlamadoresDeMeserosPreguntasFrecuentes;