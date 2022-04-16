import React from 'react'


const pagination = ({setPageNumber,pageNumber}) => {
    let next=()=>{
        if(pageNumber===42)
        {
            return;
        }
        setPageNumber((x)=>x+1)
    }

    let prev=()=>{
        if(pageNumber===1)
        {
            return;
        }
        setPageNumber((x)=>x-1)
    }

    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button className="btn btn-secondary fs-3" onClick={prev}>Prev</button>
            <button className="btn btn-secondary fs-3" onClick={next}>Next</button>
        </div>
        
        

    )
}

export default pagination
