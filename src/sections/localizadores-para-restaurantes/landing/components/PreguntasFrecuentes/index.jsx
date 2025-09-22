import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import { localizadoresDeRestaurantesPreguntasFrecuentes } from "@/config/preguntas-frecuentes";

const LocalizadoresPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={localizadoresDeRestaurantesPreguntasFrecuentes} 
      title="Preguntas frecuentes sobre el avisador de pedidos"
    />
  )
}

export default LocalizadoresPreguntasFrecuentes;