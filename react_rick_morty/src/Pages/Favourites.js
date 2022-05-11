import React,{useState} from 'react'


const Favourites = ({liked,setLiked}) => {


    function handleClick(data)
    {
        setLiked(liked.filter(x=>x!==data))
    }
    return (
        <div className="container">
        <div className="row">
            <div className="col-9 offset-md-2">
                <div className="row gap-4">
            {liked.map((item)=>{return(
        
        <div className="card" style={{width:"18rem"}}>
            <img class="card-img-top" src={item.image} alt="Card image cap"/>
           <div className="card-body">
<p className="card-text">{item.name}</p>
<button onClick={()=>{handleClick(item)}}>Unlike</button>
</div>

        </div>    
        )
        })}
        </div>
            </div>
        </div>
        </div>
    )
}

export default Favourites
