 import { useState, useEffect}from 'react'
 import {useDispatch,useSelector} from 'react-redux'
 import style from './style.module.css'
 import { Link } from 'react-router-dom'
 import {getByName,filter,orderBy,setFilter,getByType, getPokemon, getCreateds, reloadHome} from '../../redux/actions/actions'
 const Navbar= function(){
    const pokemones= useSelector(state=>state.pokemon)
     
   const[ array,setArray]=useState(pokemones.slice())
    useEffect(()=>{setArray(pokemones.slice())},[pokemones])
    const dispatch = useDispatch()
    const [value, setValue] = useState({
      toggleC: false,//para ordenar ascendiente o descendiente
      toggleB:false,//para filtrar por creados o existentes
      toggle: false,//para ordenar por nombre o fuerza
      state:false,//para habilitar o no los filtrados/ordenamientos
      opcion:false,//para habilitar o no el filtrado

    })
    const [val, setVal] = useState({nombre_tipo:'',estado:false})     //pokemon a buscar
    
    const handleChange = function (e) {
        setVal({...val,nombre_tipo:e.target.value})
      }
    const handleSubmit=function(e){
        e.preventDefault()
        !val.estado?dispatch(getByName(val.nombre_tipo)):dispatch(getByType(val.nombre_tipo,array))
        document.getElementById('form').reset()
    }
    const handleClick = function (e) {
      
        switch(e){
           case 1:{
               setValue({...value, toggle: !value.toggle})
               break
            }
            case 2:{ 
                setValue({...value, toggleB: !value.toggleB })
                break
            }
            case 3:{
                setValue({...value, toggleC: !value.toggleC})
                break
            }
            case 4:{ 
                setValue({...value,state: !value.state })
                dispatch(setFilter(value.state))
               
                break
            }case 5:{
                setValue({...value,opcion:!value.opcion })
                break
            }case 6:{
                setVal({...val,estado:!val.estado})
                dispatch(setFilter(val.estado))
            }
            default:{return  }
        }  
    }
    useEffect(() =>{
        if(value.state){
        value.opcion?dispatch(filter(value.toggleB,array)):dispatch(orderBy(array,value.toggleC,value.toggle))
        }
    },[value,array])

    
    return <div className={style.container}> 
    <form id='form' className={style.form} onSubmit={(e) => { handleSubmit(e) }}>
    <Link to='/Api/Pokemon//Search'>
        <input
          type="text"
          placeholder="Pokemon..."
          value={val.v}
          onChange={e => handleChange(e)}
        />
      </Link>
      <input type="submit" value="Buscar"  ></input>
    </form>< Link to='/Api/Pokemones'>
    <button name="tipo" onClick={e => {  handleClick(6) }}>{val.estado ? 'Tipo' : 'Nombre'}</button></Link>
    <div className={style.form} > 
      <button name="state" onClick={e => { handleClick(4) }}>{value.state ? 'ON' : 'OFF'}</button>
      <button disabled={!value.state} name="toggle" onClick={e => { handleClick(1) }}>{value.toggle ? 'Nombre' : 'Fuerza'}</button>
      
      <button disabled={!value.state} name="toggleC" onClick={e => { handleClick(3) }}>{value.toggleC ? 'Descendiente' :'Ascendente' }</button>
      
      <button disabled={!value.state} name="opcion" onClick={e => { handleClick(5) }}>{value.opcion ? 'ON' :'OFF'}</button>
      
      < Link to='/Api/Pokemones'><button onClick={()=>dispatch(reloadHome(12))}>Home</button></Link>
      <Link to='/pokemon/Agregar'><button >Agregar</button> </Link>
    </div>
  </div>
}
export default Navbar