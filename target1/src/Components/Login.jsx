import React,{useState} from "react";
import {useForm} from "react-hook-form";

function Login()
{
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const{register,handleSubmit,formState:{errors}}=useForm()
    // const submit=submission=>console.log(submission);

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
     let finalEmail=email   
     let finalPassword=password;
  
    let storedemail=JSON.parse(localStorage.getItem("email"));
    let storedpassword=JSON.parse(localStorage.getItem("password"));
   
    if(finalEmail===storedemail && finalPassword===storedpassword)
    {
      localStorage.setItem("isLoggedIn",JSON.stringify(1));
      window.location.reload();
    }    
    }


   return(<div>
       <form>
       <br/>
      <br/>
      <br/>
      <h1>Login</h1>
      <input type="text" 
      {...register('email',{required:{value:true,message:"Enter a email address"},pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message: "Invalid email address"}})
      }
      onChange={handleEmail} placeholder="Enter your email address"/>
      <br/>
      {errors.email && (<span>{errors.email.message}</span>)}
      <br/>
      <br/>
      <input type="password" {...register('password',{required:{value:true,message:"Enter a password"},minLength:{value:8,message:"Length should be of min 8 characters "}
      ,validate: (value) => {return ( [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) => pattern.test(value)
            ) || "Password must include lower, upper, number, and special chars"
          );
        }})} onChange={handlePassword} placeholder="Enter your password"/>
      <br/>
      {errors.password && (<span>{errors.password.message}</span>)}
      <br/>
      
      <br/>
      <button type="submit" onClick={handleSubmit(handleClick)} >Login</button>
      </form>
   </div>); 
}

export default Login;