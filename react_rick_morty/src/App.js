import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Favourites from "./Pages/Favourites"
import Home from './Pages/Home';



function App(){
return(

  <Router>
    <div className="App">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
  </Router>
)
}

export default App;
