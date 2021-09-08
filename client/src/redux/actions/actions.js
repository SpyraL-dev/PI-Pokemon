import axios from 'axios'
import validator from 'validator'

export const GET_ALL='GET_ALL'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_BY_TYPE = 'GET_BY_TYPE'
export const GET_BY_ID = 'GET_BY_ID'
export const SET_PASO='SET_PASO'
export const ORDER = 'ORDER'
export const POST_POKEMON= 'POST_POKEMON'
export const SET_FILTER = 'SET_FILTER'
export const FILTER_ORIGIN= 'FILTER_ORIGIN'
export const GET_TYPE= 'GET_TYPE'
export const ADD_CREATEDS= "ADD_CREATEDS"

 export const getPokemon=  function(paso){
  const inicio=paso-12
    return async(dispatch )=>{
         const result= await axios.get(`http://localhost:3001/pokemon/All?inicio=${inicio}&paso=${paso}`)
         dispatch({type:GET_ALL, payload:result.data })
     } 
 }
 export  function saveCurrent(paso){
    return{type:SET_PASO,payload:paso}
}
export  function setFilter(state){
    return{type:SET_FILTER,payload:state}
}
 export const getByName= function(name){
  if(name!==''){
    return function(dispatch){
         axios.get('http://localhost:3001/pokemon?name='+name)
        .then(result=>{
        dispatch({type:GET_BY_NAME, payload:result.data })})
    } }else{
       window.alert('introduzca un pokemon') 
    }
}
export function filter(identificator,array){
    return function(dispatch){
      if(identificator){
       dispatch({type:FILTER_ORIGIN,payload:array.filter(pos=>validator.isUUID(pos.id+''))})
      }else{
        dispatch({type:FILTER_ORIGIN,payload:array.filter(pos=> !validator.isUUID(pos.id+''))})
      }
    }

}
export function orderBy(pokemon,order,by){
    const array=  pokemon.slice()
    return function(dispatch){
    if(by){
            if(order){
                dispatch({type:ORDER,payload:array.sort((a, b) => {
                        if(a.nombre < b.nombre) return 1;
                        if(a.nombre > b.nombre) return -1;
                        return 0;})
                    })
                
            }else{
            dispatch({type:ORDER,payload:array.sort((a, b) => {
                        if(a.nombre < b.nombre) return -1;
                        if(a.nombre > b.nombre) return 1;
                        return 0;})
                    })
                }
    }else{
            if(order){
               
                dispatch({type:ORDER,payload:array.sort((a, b) => a.fuerza-b.fuerza)
                })
            }else{
                
                dispatch({type:ORDER,payload:array.sort((a, b) => b.fuerza-a.fuerza)
                })
        }}
    }
}
export const getByType = function(type,array){
    const pokemones=array.slice()
    return function(dispatch){
        dispatch({type:GET_BY_TYPE,payload:pokemones.filter(pokemon=>pokemon.tipo.includes(type))})
    }
}
export const getTipos= function(){
    return function(dispatch){
        axios.get('http://localhost:3001/type/')
        .then(return_=>{
            console.log(return_.statusText)
            dispatch({type:GET_TYPE,payload:return_.data})
        })
    }
}
export const postPokemon = function(obj){
return async function (dispatch){
    axios.post('http://localhost:3001/pokemon/',obj)
    .then(result=>{
    console.log(result.data)
      result&&dispatch({type:POST_POKEMON,payload:result.data})
    })
}
}
export const reloadHome= function(paso){
    if(paso === "creados"){
        return async(dispatch )=>{
            const result= await axios.get(`http://localhost:3001/creados`)
            dispatch({type:ADD_CREATEDS, payload:result.data })
    }
}
    if(paso === "api"){
        const num = 12
        const inicio=num-12
    return async(dispatch )=>{
         const result= await axios.get(`http://localhost:3001/pokemon/All?inicio=${inicio}&paso=${num}`)
         dispatch({type:ADD_CREATEDS, payload:result.data })
     } 
    }else{
    const inicio=paso-12
    return async(dispatch )=>{
         const result= await axios.get(`http://localhost:3001/pokemon/All?inicio=${inicio}&paso=${paso}`)
         dispatch({type:ADD_CREATEDS, payload:result.data })
     }
    } 
 }


export const getById=  function(id){
 
    return  async function(dispatch ){
      axios.get('http://localhost:3001/pokemon/'+id).then(result=>{
        dispatch({type:GET_BY_ID, payload:result.data })})
    } 
}