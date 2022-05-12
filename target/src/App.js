
import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Welcome from './Components/Welcome';
import SplitPage from './Components/SplitPage';
import Newuser from './Components/Newuser';
import image from './img1.jpeg'


function App() {

  const [myStatus,setStatus]=useState(window.navigator.onLine);
  
  useEffect(()=>{
   setStatus(window.navigator.onLine);
  },[window.navigator.onLine])

  const renderDiv=()=>{
    return(<div><Router>
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

  return (
   myStatus?renderDiv():<img src={image} alt="Internet is not connected"/>
  );
}

export default App;
