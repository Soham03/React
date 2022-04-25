import React,{useState,useEffect} from 'react';
import Newuser from './Components/Newuser'
import Welcome from './Components/Welcome'
import classes from  './App.module.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SplitPage from './Components/SplitPage';

function App() {

    const [mystatus,setStatus]=useState(window.navigator.onLine);
    const[toggle,setToggle]=useState(true);

    useEffect(()=>{       
     setStatus(window.navigator.onLine);
    },[window.navigator.onLine])

    
   const handleToggle=()=>{
    setToggle(!toggle)
   }

   useEffect(()=>{
    document.body.style.backgroundColor=toggle?"black":"White";
   },[toggle])


   const renderDiv=()=>{
     return(<div className={toggle?classes.darkmode:classes.lightmode}>
      <button onClick={handleToggle}>{toggle?"Light Mode":"Dark Mode"}</button>    
     <Router>
       <div className="App">
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/login">
          <SplitPage/>
          </Route>
          <Route path="/newuser">
          <Newuser/>
          </Route>
        </Switch>
      </div>  
      </Router>
      </div>)
   }

   return(
    mystatus?renderDiv():<h1 style={{color:"red"}}>Network failed</h1>
   )
}
export default App;
