import React from 'react'
import {Route,Link,Switch } from 'react-router-dom';
import Pokemon from './Pokemon';
import Rickandmorty from './Rickandmorty';



const Home = () => {
    return (
        <div>
       
       
      
        
         <Switch>  
         <Route path="/pokemon">
       <Pokemon/>
       <h2 ><Link to="/">Mainpage</Link></h2>  
       </Route>
       <Route path="/rickandmorty">
        <Rickandmorty/>
        <h2 ><Link to="/">Mainpage</Link></h2>  
       </Route>
       <Route exact path="/">
       <h1>Select your favourite tv show</h1>
      
      <h1><Link to="/pokemon">Pokemon</Link></h1>
      <h1><Link to="/rickandmorty">Rick & Morty</Link></h1>
          
        </Route> 
       </Switch>
    
        </div>
    )
}

export default Home
