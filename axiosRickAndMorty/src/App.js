import './App.css';
import React from 'react';
import Home from './Pages/Home';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
