import {GET_BY_NAME,GET_BY_ID,GET_ALL,ORDER, SET_PASO,SET_FILTER,FILTER_ORIGIN,POST_POKEMON,GET_TYPE,GET_BY_TYPE,ADD_CREATEDS } from '../actions/actions.js';

const defaultValue={
     pokemon:[],
     filter:true,
     paso:12,
     pokemonfilter:[],
     pokemonSearch:{},
     pokemonId:{},
     tipos:[]
}

const reducer=(state=defaultValue,action)=> {
switch(action.type){
    case GET_ALL:{
        return { ...state, pokemon:state.pokemon.concat(action.payload)}
    }
    case ADD_CREATEDS:{
        return {...state, pokemon: action.payload}
    }
    case GET_BY_ID:{
        return { ...state, pokemonId:action.payload}
    }
    case GET_BY_NAME:{
        return { ...state,pokemonSearch:action.payload}
    }
    case ORDER:{
        return{...state,pokemonfilter:action.payload}
    }
    case SET_PASO:{
        return{...state,paso:action.payload} 
    }
    case SET_FILTER:{
        return{...state,filter:action.payload}
    }
    case FILTER_ORIGIN:{
        return{...state,pokemonfilter:action.payload}
    }
    case GET_BY_TYPE:{
        return{...state, pokemonfilter:action.payload}
    }
    case POST_POKEMON:{
        return{...state, pokemon:state.pokemon.concat([action.payload])}
    }
    case GET_TYPE:{
        return{...state,tipos:action.payload}
    }
    default:{return state}
}
}
export default reducer