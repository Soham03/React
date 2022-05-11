import React,{useEffect,useState} from 'react';
import Cards from "../Components/Cards/Cards"
import Pagination from '../Components/Pagination/Pagination';
import Search from '../Components/Search/Search';



const Home=({setLikedData})=> {
    let [pageNumber,setPageNumber]=useState(1);
    let [fetchedData,updateFetchedData]=useState([]);
    let [search,setSearch]=useState("")
    let {results}=fetchedData;
    let [likedData2,setLikedData2]=useState([]);
    

    setLikedData(likedData2);
    
   
    let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
    
    
   
    useEffect(()=>{
  
      (async function(){
        let data= await fetch(api).then(res=>res.json());
         updateFetchedData(data);
      })()
    },[api])

   
  
    return (
      <div style={{backgroundColor:"#ffffdb"}}>
       
        <br/>
        <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
      
      <div className="container">
        <div className="row">
          
          <div className="col-12 " style={{marginLeft:"12%",marginRight:"15%"}}   >
            <div className="row gap-5">
              <Cards  results={results} setLikedData2={setLikedData2}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber}  setPageNumber={setPageNumber}/>
      <br/>
      </div>
    );
  }
  
  export default Home;