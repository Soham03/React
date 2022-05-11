import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Link,Switch} from 'react-router-dom'

import axios from 'axios'
import Paginationrandm from '../Components/Paginationrandm';
import Favourites from './Favourites';
const Rickandmorty = () => {

    const [pageNumber,setPageNumber]=useState(1);
    const [fetchedData,setFetchedData]=useState([]);
    const [liked,setLiked]=useState([]);
    let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    useEffect(()=>{
     (async function(){
        let data= await axios.get(api).then((data)=>data.data);
          setFetchedData(data.results);
     })()
    },[api])
   
    function handleClick(data){
     liked.push(data);
       console.log(liked);
    }
   
    return (
        
        <div>
            <h1>Welcome to Rick & Morty Infopedia</h1>
            <div>
             <h1><Link to="/rickandmorty/home">Home</Link></h1>
             <h1><Link to="/rickandmorty/favourites">Favourites</Link></h1>
             <Switch>
                 <Route path="/rickandmorty/home">
                 <div className="container">
            <div className="row">
                <div className="col-9 offset-md-2">
                    <div className="row gap-4">
                {fetchedData.map((item)=>{return(
            
            <div className="card" style={{width:"18rem"}}>
                <img class="card-img-top" src={item.image} alt="Card image cap"/>
               <div className="card-body">
   <p className="card-text">{item.name}</p>
   <button onClick={()=>{handleClick(item)}}>Like</button>
 </div>
            </div>    
            )
            })}
            </div>
                </div>
            </div>
            </div>
            <Paginationrandm number={pageNumber} setPageNumber={setPageNumber}/>
                 </Route>
                 <Route path="/rickandmorty/favourites">
                 <div>
                     <Favourites liked={liked} setLiked={setLiked}/>
                 </div>
                 </Route>
             </Switch>
            </div>
          
         
     
            
        </div>
    )
}

export default Rickandmorty
