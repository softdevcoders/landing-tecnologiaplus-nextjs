import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { localizadoresDeRestaurantesPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const LlamadoresDeMeserosPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={localizadoresDeRestaurantesPreguntasFrecuentes} 
      title="Preguntas frecuentes de los localizadores de clientes CIR-C2 para restaurantes autoservicio" 
    />
  )
}

export default LlamadoresDeMeserosPreguntasFrecuentes;