import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'; 

function Welcome()
{

    const [toggle,setToggle]=useState(true);
    
    // function handleToggle()
    // {
    //     if(toggle===false)
    //     {
    //         setToggle(true);
    //         console.log(toggle)
    //     }
    
    //     else
    //     {
    //         setToggle(false);
    //         console.log(toggle);
    //     }
    // }
const history=useHistory();  

function newUser()
{
    history.push('/newuser');
}

function login()
{
    history.push('/login');
}
    return(<div>
      <h1>Welcome Page</h1>
      <br/>
     
     <br/>
      <button type="submit" onClick={newUser}>Register</button>
      <br/>
      <br/>    
    
      <button type="submit" onClick={login}>Login</button>
      <br/>

    </div>)
}
export default Welcome;    
