import React,{useState} from "react";
import {useForm} from "react-hook-form";

function Newuser()
{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    
   

    const{register,handleSubmit,getValues,formState:{errors}}=useForm()
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

    function handleClick(event)
    {
     let finalEmail=email;   
        let finalPassword=password;   
        localStorage.setItem('email',JSON.stringify(finalEmail))
        localStorage.setItem('password',JSON.stringify(finalPassword))
    }
   return(<div>
       <form>
      <h1>Register New User</h1>
      <input type="text" {...register('email',{required:{value:true,message:"Enter a email address"},pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,message: "Invalid email address"}})}onChange={handleEmail} placeholder="Enter your email address"/>
      <br/>
      {errors.email && (<span>{errors.email.message}</span>)}
      <br/>
      <br/>
      <input type="password" {...register('password',{required:{value:true,message:"Enter a password"},minLength:{value:8,message:"Length should be of min 8 characters "},validate: (value) => {return (
            [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
              pattern.test(value)
            ) || "Password must include lower, upper, number, and special chars"
          );
        }})} onChange={handlePassword} placeholder="Enter your password"/>
      <br/>
      {errors.password && (<span>{errors.password.message}</span>)}
      <br/>
      <input type="password" {...register('confirmpassword',{required:{value:true,message:"Password doesnot match"}
      ,validate: (value) => value === getValues("password")||"Password doesnot match"})} 
      placeholder="Confirm Password"/>
      <br/>
      <br/>
      {errors.confirmpassword && (<span>{errors.confirmpassword.message}</span>)}
      <br/>
      <button type="submit" onClick={handleSubmit(handleClick)} >Login</button>
      <br/>
      <br/>
      <input type="number" placeholder="Enter your age"/>
      </form>
   </div>); 
}

export default Newuser;