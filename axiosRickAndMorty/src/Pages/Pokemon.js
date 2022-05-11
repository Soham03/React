import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Paginationpoki from '../Components/Paginationpoki';



const Pokemon = () => {

const [fetchedData,setFetchedData]=useState([]);
const [pageNumber,setPageNumber]=useState(0);
let api=`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageNumber}`;


    useEffect(()=>{
        (async function (){
       let data= await axios.get(api).then((data)=>data.data.results);
       setFetchedData(data);
        })()
    },[api])
      console.log(fetchedData)
    return (
        <div>
            <h1>Welcome to Pokemon Infopedia</h1>
             
                <div className="container">
                    <div className="row">
                         <div className="col-9 offset-md-2">
                             <div className="row">
                             {fetchedData.map((item)=>{
                               return(
        
                               <div className="card" style={{width:"18rem"}}>
                                   <div className="card-body">
                                    <p className="card-text">
                                    {item.name}
                                    </p>
                                   </div>

                               </div>    
                               )      
                
                            })}
                             </div> 
                         </div>   
                    </div>
                </div>
            
            
            <Paginationpoki number={pageNumber} setPageNumber={setPageNumber}/>
        </div>
    )
}

export default Pokemon
