import React,{useState} from "react";
import { createImportEqualsDeclaration } from "typescript";



function App() 

{
const[number1,setNumber1]=useState(0);
const[total,setTotal]=useState(number1);

 let result=0;  
  function num(event)
  {
  return setNumber1(event.target.value)
  }


  function  calculateTotalAdd()
{
 result=parseInt(number1);
 return setTotal(total+result);
}

function  calculateTotalSub()
{
 result=parseInt(number1);
 return setTotal(total-result);
}
  
  return(<div className="container">
     <div>
     <input className="num1" type="number" placeholder="Enter a number" onChange={num}></input>
     <br/>
     <br/>
     <button className="onclick1" onClick={calculateTotalAdd}>+</button>
     <button className="onclick2" onClick={calculateTotalSub}>-</button>
      <br/>
     <br/>
    
     <h1>{total}</h1>
     
     </div>
   </div>
  )
  
 
}

export default App;
