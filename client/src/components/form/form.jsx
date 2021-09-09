import {postPokemon} from '../../redux/actions/actions'
import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'
import style from './style.module.css'
import axios from 'axios'
const Form =function(){
    const dispatch =useDispatch()
    const arrayTipos= useSelector(state=>state.tipos)
    const [selected, setSelected]= useState([])
    const [value,setValue]=useState({
        Nombre:'',
        Fuerza:0,
        Velocidad:0,
        Defensa:0,
        Vida:0,
        Peso:0,
        Altura:0,
        Imagen:'',
        Tipos:[]
    })
    let lala=[]
    let id1 = 0
    
    const onChange=(e)=>{
         setValue(()=>{return{...value,[e.target.name]:e.target.value}})
    }
    const enviar = async ()=>{
    const resultdb = await axios.get("http://localhost:3001/creados")
    if(resultdb){
        const re2 = resultdb.data.filter((el) => el.Nombre === value.Nombre)
        if(re2.length>0){throw alert("Ya existe un pokemon con ese nombre")}
    }else{
     const resultapi = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=48`)
     const reapi = resultapi.data.filter((el) => el.name === value.Nombre)
     if(reapi.length>0){throw alert("Ya existe un pokemon con ese nombre")}
    }
    axios.post("http://localhost:3001/pokemon/NewPokemon", {value})
    .then((res)=>{console.log(res)})
    .then((res) => {
        console.log(res)          
        alert("Pokemon Creado")
     })
     .catch((error) => {
         console.log(error)
         alert("No se pudo crear el pokemon")
 });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(value)
    }
    const checkboxselected = ()=>{
        lala =[]
        const checkbox = Array.from(document.getElementsByClassName("tipos"))
        for(let i = 0; i < checkbox.length ; i++){
          if(checkbox[i].checked){
              lala.push(checkbox[i].value)
              setValue({...value, Tipos: [...lala]})
              console.log(checkbox[i].value)
            }
        }
        console.log(arrayTipos)
    }



    return <><form id="form" className={style.container} onSubmit={e=>handleSubmit(e)}> 
    
    <div>
         <input className={style.input_text} type='text' placeholder='Nombre' name='Nombre' onChange={e=>onChange(e)}/>
    </div>
    <div>
         <input className={style.input_text} type='number'  placeholder='Fuerza'name='Fuerza'min="1" max="200" onChange={e=>onChange(e)} />
    </div>
    <div>
         <input className={style.input_number} type='number'  placeholder='Velocidad'name='Velocidad' min="1" max="200" onChange={e=>onChange(e)} />
    </div>
    <div>
         <input className={style.input_number} type='number'  placeholder='Defensa'name='Defensa' min="1" max="200" onChange={e=>onChange(e)} />
    </div>
    <div>
         <input className={style.input_number} type='number'  placeholder='Vida'name='Vida' min="1" max="200" onChange={e=>onChange(e)} />
    </div>
    <div>
         <input className={style.input_number} type='number'  placeholder='Peso'name='Peso' min="1" max="200" onChange={e=>onChange(e)} />
    </div>
    <div>
         <input className={style.input_number} type='number'  placeholder='Altura'name='Altura' min="1" max="200" onChange={e=>onChange(e)} />
    </div>
    <div>
         <input className={style.input_text} type='text' placeholder='Imagen' name='Imagen' onChange={e=>onChange(e)} />
    </div>

        <div className={style.descripcion_pokemon}>
         <div>
            <p>Tipos:</p> 
                <div className={style.types_conteiner}>
                    {arrayTipos.map((el) => (  
                        <div>
                            <input
                            className="tipos"
                            type="checkbox"
                            name="Tipos"
                            value={el.Nombre}
                            id={id1 ++}
                            />
                        <label htmlFor="Tipos">{el.Nombre}</label>
                         </div>
                        ))}
                    </div> 
                    <button onClick={checkboxselected}>set temperaments</button>
                </div>
            </div> 
         <button className={style.input_text}  placeholder="Agregar" onClick={enviar} >Agregar</button></form>
    </>


}
export default Form;