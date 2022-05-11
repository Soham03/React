import React from 'react'

const Paginationpoki = ({number,setPageNumber}) => {
    console.log(number)
    function handlePrev()
    {  
        if(number!==0)
        {
        return setPageNumber((x)=>x-20)
        
        }
    }

    function handleNext()
    {
        return setPageNumber((x)=>x+20)
    }

    return (
        <div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>    
        </div>
    )
}

export default Paginationpoki
