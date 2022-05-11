import React,{useState} from 'react'
import styles from './Cards.module.css'

function Cards({results,setLikedData2}) {
    
    let display;
    const [likedData,setLiked]=useState([])

    
    function handleClick(data){
        likedData.push(data);
          setLikedData2(likedData);
       }
    
    
    if(results)
    {
      display=results.map(x=>{
          let {id,name,image,gender,status,species}=x;
          
        

          return (

          <div className={styles.flipcard} key={id}>
                <div className={styles.flipcardinner} >
                     <div className={styles.flipcardfront}>
                          <img src={image} className={`${styles.img}`} alt=""/>
                          </div>
                          <div className={styles.flipcardback}>
                           <div className={`${styles.content} gap-5`}> 
                            <div className="fs-3 fw-bold mb-1" style={{color:"black"}}>{name}</div>
                            <div className="fs-6">Gender</div>
                            <div className="fs-6 fw-bold">{gender}</div>
                            <div className="fs-6">Species</div>
                            <div className="fs-6 fw-bold">{species}</div>
                            <div className="fs-6">Status</div>
                            <div className="fs-6 fw-bold">{status}</div> 
                            <button className="btn btn-primary my-1" type="submit" onClick={()=>handleClick(x)}>Like</button>
                     
                           </div> 
                        </div>
                  </div>
          </div>
    

      )});
    }
    else{
        display="No Characters Found :/"
    }
    return (
            <>{display}</>
    )
}

export default Cards;
