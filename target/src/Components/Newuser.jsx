import React,{useState} from 'react'
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

const Newuser = () => {

    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[contactNo,setContactNo]=useState("")
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{register,handleSubmit,formState:{errors},getValues}=useForm();

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

   

    function handleFirst(event)
    {
        event.preventDefault()
        let value3=event.target.value;
        setFirstName(value3);
    }

    function handleSecond(event)
    {
        event.preventDefault()
        let value4=event.target.value;
        setLastName(value4);
    }

    function handleContact(event)
    {
        event.preventDefault()
        let value5=event.target.value;
        setContactNo(value5);
    }

    function handleClick()
    {
        let finalEmail=email;
        let finalPassword=password;
        localStorage.setItem('email',JSON.stringify(finalEmail))
        localStorage.setItem('password',JSON.stringify(finalPassword))

        let fs=firstName;
        let ls=lastName;
        let contact=contactNo;
        localStorage.setItem('firstName',JSON.stringify(fs))
        localStorage.setItem('lastName',JSON.stringify(ls))
        localStorage.setItem('contactNumber',JSON.stringify(contact))
        alert("Thankyou for signing up!")
    }

    function handleLogin()
    {
      history.push('/login');
      window.location.reload();
    }
    return (
        <div className="container col-2" >
             <form>
                <h1>Please Register</h1>
                <input type="text" placeholder="Enter your first name" onChange={handleFirst}/>
                <br/>
                <input type="text" placeholder="Enter your last name" onChange={handleSecond}/>
                <br/>
                <br/>
                <input type="number" placeholder="Enter your contact number" onChange={handleContact}/>
                <br/>
                <br/>
                <input type="text" {...register('email',{required:{value:true,message:"Enter a email address"},pattern:{value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Invalid Email Address"}})}
                onChange={handleEmail} placeholder="Enter your email address"/>
                <br/>
                {errors.email && (<span>{errors.email.message}</span>)}
                <br/>
                <br/>
                <input type="password" {...register('password',{required:{value:true,message:"Enter a password"},minLength:{value:8,message:"Length should be of minimum 8 characters"}
                ,validate:(value)=>{return ([/[a-z]/,/[A-Z]/,/[0-9]/,/[^a-zA-Z0-9]/].every((pattern)=>pattern.test(value))||"Password must include lower,upper and special characters")}})}  placeholder="Enter Password" onChange={handlePassword}/>
                <br/>
                {errors.password && (<span>{errors.password.message}</span>)}
                <br/>
                <br/>
                <input type="password" {...register('confirmpassword',{required:{value:true,message:"Enter a password"}
            ,validate:(value)=>value===getValues("password")||"Password does not match"})} placeholder="Confirm Password"/>
                <br/>
                {errors.confirmpassword && (<span>{errors.confirmpassword.message}</span>)}
                <br/>
                <br/>
                <button type="submit" className="login btn btn-primary gap-5" onClick={handleSubmit(handleClick)}>Submit</button>
                <br/>
                <br/>
                <button type="submit" className="login btn btn-primary gap-5" onClick={handleLogin}>Login Page</button>

            </form>
        </div>
    )
}

export default Newuser;
