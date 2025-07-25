import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import { localizadoresDeRestaurantesPreguntasFrecuentes } from "@/config/preguntas-frecuentes";

const LocalizadoresPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes preguntasFrecuentes={localizadoresDeRestaurantesPreguntasFrecuentes} />
  )
}

export default LocalizadoresPreguntasFrecuentes;