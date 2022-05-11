import React from 'react'

const Paginationrandm = ({number,setPageNumber}) => {

    function handlePrev(){
        if(number===0)
        {
            return
        }
        else{
            setPageNumber((x)=>x-1)
        }
    }

    function handleNext(){
        if(number===42)
        {
            return
        }
        else{
            setPageNumber((x)=>x+1)
        }
    }
    return (
        <div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Paginationrandm
