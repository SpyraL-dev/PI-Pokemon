import style from './style.module.css'
import { Link } from 'react-router-dom'
const Landing = function(){


    return<div className={style.page}>
        <div className={style.container}>
            <h1>Bienvenido</h1>
            <Link to='/Api/Pokemones'><button className={style.button} >HOME</button></Link>
        </div>
    </div>
}
export default Landing