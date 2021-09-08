import {useDispatch,useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import Cards from '../cards/cards'
import Button from './buttom'
import {saveCurrent,setFilter} from '../../redux/actions/actions'
  
 const Pagination=  function(){
  const prop=useSelector((state)=>state.filter)
const pokemones = useSelector((state)=>prop?state.pokemon:state.pokemonfilter)
const paso=useSelector((state)=>state.paso)

const [pokemon, setPokemon]= useState( useSelector((state)=>prop?state.pokemon:state.pokemonfilter).slice())
  useEffect(()=>{
  console.log('deberia cambiar el componente')
  setPokemon(pokemones.slice());},[pokemones,prop]) 
    
    const dispatch=useDispatch()
  
    const next =()=>{
      
    if(paso>pokemon.length){window.alert('no se puede avanzar');return}
    if(paso!==pokemon.length&&paso<pokemon.length){
        
        dispatch(saveCurrent(paso+12))
       
    }

    }
     
    const previous =()=>{
        if(paso===12){window.alert('no se puede retroceder');return}
           dispatch(saveCurrent(paso-12))
           
        
    }
  

    return <div>
    <div> <Button id={1} value='Next' mod={next} /> <Button id={2} value='Previous' mod={previous} /></div>
    <Cards pokemon={pokemones} />
    <div> <Button id={3} value='Next' mod={next} /> <Button id={4} value='Previous' mod={previous} /></div>
  </div>
}
export default Pagination