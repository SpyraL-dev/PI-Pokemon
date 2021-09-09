import './App.css';
import { useEffect, } from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {getPokemon,getTipos} from './redux/actions/actions'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import CardDetail from './components/cardDetail/CardDetail'
import Pagination from './components/pagination/pagination'
import Navbar from './components/navbar/navbar'
import Main from './components/cards/card';
import Form from './components/form/form'
import Landing from './components/landingPage/landing'
function App() {
  const dispatch =useDispatch()
  const pokemonSearch = useSelector((state=>state.pokemonSearch))
  const pokemon=useSelector((state)=>state.pokemon)
  const tipos=useSelector((state)=>state.tipos)
  const filter=useSelector((state)=>state.filter)

  useEffect(()=>{
  
    if(tipos.length===0){dispatch(getTipos())}
    if(pokemon.length<48){dispatch(getPokemon(pokemon.length+12))}
  
  },[pokemon.length])
  return (
    <div className="App">
      <Switch>
      <Router>
      <Route exact path="/" component={Landing}/>     
      <Route  path="/" component={Navbar}/>
      <Route exact path="/Api/Pokemones" component={Pagination}/>
      <Route exact path="/Api/Pokemon//Search"><Main pokemon={pokemonSearch}/></Route> 
      <Route exact path="/Pokemon/Agregar" component={Form}>
       <Form/>
      </Route>
      <Route exact path="/Api/Pokemon/:pokemon" component={CardDetail}/>
      </Router>
      </Switch>
    </div>
  );
}

export default App;
