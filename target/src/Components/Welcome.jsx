import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"


const Welcome = () => {

    const history=useHistory();
    function newUser()
    {
        history.push('/newuser');
        window.location.reload();
    }

    function login()
    {
        history.push('/login'); 
        window.location.reload();  
    }
    return (
        <div className="welcome">
           <h1>Welcome Page</h1> 
           <br/>
           <br/>
           <button type="button" className="newuser btn btn-primary" onClick={newUser}>Register</button>
           <br/>
           <br/>
           <button type="button" className="login btn btn-primary" onClick={login}>Login</button>
        </div>
  
    )
}

export default Welcome
