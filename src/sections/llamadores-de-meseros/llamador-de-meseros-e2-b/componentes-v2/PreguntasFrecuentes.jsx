import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { llamadoresDeMeserosPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const LlamadoresDeMeserosPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={llamadoresDeMeserosPreguntasFrecuentes} 
      title="Preguntas frecuentes del llamador de meseros E2-B" 
      headingLevel="h3"
    />
  )
}

export default LlamadoresDeMeserosPreguntasFrecuentes;