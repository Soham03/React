import React,{useState,useEffect} from 'react'
import styles from '../Components/Cards/Cards.module.css'


const Favourites = () => {

    const [array,setArray]=useState([]);
    let newArray;
    newArray=array.toString();
    const [favdata,updateFavData]=useState();
    
    
    
    
    
    useEffect(()=>{
        (async function(){
          if(localStorage.liked !=null)
         { let data1= await fetch(`https://rickandmortyapi.com/api/character/${localStorage.liked}`).then((response)=>{return response.json()});
       updateFavData(data1)
        }
        })()
      },[])

      const renderDisplay = () =>{
if(favdata)
          {
            return favdata.map(x=>{
  
return(<div className="col-12 " style={{marginLeft:"12%",marginRight:"15%"}}   >
        <div className="row gap-4">
        <div className={styles.flipcard} key={x.id}>
                     <div className={styles.flipcardinner} >
                        <div className={styles.flipcardfront}>
                                <img src={x.image} className={`${styles.img}`} alt=""/>
                                </div>
                                <div className={styles.flipcardback}>
                                <div className={styles.content}> 
                                  <div className="fs-3 fw-bold mb-1" style={{color:"black"}}>{x.name}</div>
                    
                                  <div className="fs-6">Gender</div>
                                  <div className="fs-6 fw-bold">{x.gender}</div>
                                  <div className="fs-6">Species</div>
                                  <div className="fs-6 fw-bold">{x.species}</div>
                                  <div className="fs-6">Status</div>
                                  <div className="fs-6 fw-bold">{x.status}</div> 
                                 </div> 
                              </div>
                        </div>
                </div>
</div>
</div>
             ) })
          }  
          else{
           return (
             <h1>No Data Found</h1>
           )
          }
     
      }      
    return (
            <>{renderDisplay()}</>
    )
    }

export default Favourites;
   
