import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { localizadoresDeRestaurantesCirResistentesAlAguaPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const LocalizadoresDeRestaurantesCirResistentesAlAguaPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={localizadoresDeRestaurantesCirResistentesAlAguaPreguntasFrecuentes} 
      title="Preguntas frecuentes sobre el localizador CIR resistente a derrames accidentales de agua" 
    />
  )
}

export default LocalizadoresDeRestaurantesCirResistentesAlAguaPreguntasFrecuentes;