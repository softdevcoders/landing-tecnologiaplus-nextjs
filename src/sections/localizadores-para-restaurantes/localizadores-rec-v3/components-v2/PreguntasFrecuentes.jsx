import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { localizadoresDeRestaurantesPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const LlamadoresDeMeserosPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={localizadoresDeRestaurantesPreguntasFrecuentes} 
      title="Preguntas frecuentes del localizador REC V3" 
    />
  )
}

export default LlamadoresDeMeserosPreguntasFrecuentes;