import React,{useState,useEffect} from 'react'
import Loggedin from './Loggedin'
import Login from './Login'
const SplitPage = () => {
    const [login,setlogin] =useState(0)
   
    useEffect(()=>{
    let isLoggedIn=JSON.parse(localStorage.getItem("isLoggedIn"));
    setlogin(isLoggedIn)
    },[localStorage.getItem("isLoggedIn")])
    
    console.log(localStorage.getItem("isLoggedIn"))
    return (
        <div>
            {!!login?<Loggedin/>:<Login/> }
        </div>
    )
}

export default SplitPage
