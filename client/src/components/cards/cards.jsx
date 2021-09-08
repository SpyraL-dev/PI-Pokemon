 import {useSelector } from 'react-redux'
 import {useState,useEffect,useReducer}from 'react'
 import style from './style.module.css'
 import Main from './card'
function Cards({pokemon}) {
  
  const prop=useSelector((state)=>state.filter)
   
  
  const paso=useSelector(state=>state.paso)
  const [arrayP,setArrayP]=useState(pokemon.slice(paso-12,paso))
 useEffect(() =>{setArrayP(pokemon.slice(paso-12,paso))},[paso,pokemon,prop])
 
  return <div className={style.padre}>{
      arrayP.length!==0&& arrayP.map(pokemon=> {
          
          return <Main pokemon={pokemon} />
          
        })
   } 
         
         <hr/>
     </div>}
     
export default Cards;

