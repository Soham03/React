import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Favourites from "./Pages/Favourites"
import Home from './Pages/Home';



function App(){
  const [likedData, setLikedData] = useState([])

  
return(

  <Router>
    <div className="App">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home setLikedData={setLikedData}/>}/>
      <Route path="/favourites" element={<Favourites liked={likedData} setLiked={setLikedData}/>}/>
    </Routes>
  </Router>
)
}

export default App;
