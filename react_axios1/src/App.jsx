import React, { useEffect, useState } from "react";
import axios from "./Axios";
import './axios.css'

function App() {
  const [state, setState] = useState([]);
  const [name, setName] = useState('');
  
  useEffect(() => {
     axios({
       method: "get",
       url: "/users",
     }).then((res) => {
       setState(res.data);
     });
  }, [state]);

  const handleClick = (event) => {
    event.preventDefault();
        axios({
          method: "post",
          url: "/users",
          data: {name},
        }).then((res) => {
          console.log(res.data);
          alert("Data has been posted Successfully!!!");
          console.log("Data has been posted Successfully!!!")
        });
  }

  return (
    <div>
      <input 
        className="text"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input className="button" type="button" value="Add" onClick={handleClick} />
      {state.map((item) => (
        <div className="name" key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
export default App;