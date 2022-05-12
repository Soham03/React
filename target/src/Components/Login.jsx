
import React,{useState} from 'react'
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';



const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{register,handleSubmit,formState:{errors}}=useForm();

    const history=useHistory();

    function handleEmail(event)
    {
        event.preventDefault()
        let value1=event.target.value;
        return(setEmail(value1));
    }

    function handlePassword(event)
    {
        event.preventDefault()
        let value2=event.target.value;
        return(setPassword(value2));
    }

    function handleClick()
    {
        let finalEmail=email;
        let finalPassword=password;

        let storedemail=JSON.parse(localStorage.getItem("email"));
        let storedpassword=JSON.parse(localStorage.getItem("password"));

        if(finalEmail===storedemail && finalPassword ===storedpassword)
        {
            localStorage.setItem("isLoggedIn",JSON.stringify(1));
            window.location.reload();
        }
    }

    function handleHome()
    {
      history.push("/")
      window.location.reload();
    }

    return (
        <div className="container col-2">
            <form>
                <h1>Login</h1>
                <input className="justify-content-center" type="text" {...register('email',{required:{value:true,message:"Enter a email address"},pattern:{value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Invalid Email Address"}})}
                onChange={handleEmail} placeholder="Enter your email address"/>
                <br/>
                {errors.email && (<span>{errors.email.message}</span>)}
                <br/>
                <br/>
                <input className="justify-content-center" type="password" {...register('password',{required:{value:true,message:"Enter a password"},minLength:{value:8,message:"Length should be of minimum 8 characters"}
                ,validate:(value)=>{return ([/[a-z]/,/[A-Z]/,/[0-9]/,/[^a-zA-Z0-9]/].every((pattern)=>pattern.test(value))||"Password must include lower,upper and special characters")}})}  placeholder="Enter Password" onChange={handlePassword}/>
                <br/>
                {errors.password && (<span>{errors.password.message}</span>)}
                <br/>
                <br/>
                <button type="submit" className="login btn btn-primary gap-5" onClick={handleSubmit(handleClick)}>Login</button>
                <br/>
                <button className="login btn btn-primary gap-3 my-3" onClick={handleHome}>Home</button>

            </form>
        </div>
    )
}

export default Login
