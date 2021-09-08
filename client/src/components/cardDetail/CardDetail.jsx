import {useSelector} from 'react-redux'
import style from './style.module.css'

function CardDetail() {
   const pokemon=useSelector((state)=>state.pokemonId)

console.log(pokemon)
    return <>
        <div id={pokemon.id} className={style.container} >
            <img className={style.img} src={pokemon.imagen} alt={pokemon.nombre}/>
            <h2 > {pokemon.nombre}</h2>
            <h4 >Altura:{pokemon.altura}</h4>
            <h4>Peso:{pokemon.peso}</h4>
            <h4 >Vida:{pokemon.vida}</h4>
            <h4 >Fuerza:{pokemon.fuerza}</h4>
            <h4 >Defensa:{pokemon.defensa}</h4>
            <h4>Velocidad:{pokemon.velocidad}</h4>
            <h4>Tipo:{pokemon.tipo&&pokemon.tipo.map((t,index)=>{
        return pokemon.tipo.length-1!==index ? ' '+ t+ ', ':' '+ t
      })}</h4>
        </div>
    </>
}
export default CardDetail