import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import style from './style.module.css'

import { getById } from '../../redux/actions/actions'
function Main({pokemon}) {
  const dispatch=useDispatch()
   const handleClick = function () {
     dispatch(getById(pokemon.id))
   
   }

   return <div>{Object.values( pokemon).length!==0 && <div className={style.container} id={pokemon.id} >
      <Link to={`/Api/pokemon/${pokemon.nombre}`}><button className={style.button} onClick={() => handleClick()}>More</button ></Link>
   
      <img className={style.img} src={pokemon.img} alt={pokemon.name} />  
      <h3>{pokemon.nombre}</h3>
      <h5  >Tipo:{pokemon.tipo&&pokemon.tipo.map((t,index)=>{
        return pokemon.tipo.length-1!==index ? ' '+ t+ ', ':' '+ t
      })}</h5>
   </div>}</div>
}

export default Main