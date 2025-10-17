import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { localizadoresDeRestaurantesPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const LlamadoresDeMeserosPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={localizadoresDeRestaurantesPreguntasFrecuentes} 
      title="Preguntas frecuentes del localizador CIR C2" 
    />
  )
}

export default LlamadoresDeMeserosPreguntasFrecuentes;