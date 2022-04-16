import React,{useState} from 'react'
import styles from './Search.module.css'

const Search = ({setSearch,setPageNumber}) => {
let [keyword,setKeyword]=useState("")
    return (
        <form className="d-flex justify-content-center gap-4  mb-5 ">
            <input 
            placeholder="Search for Characters" 
            type="text" className={styles.input} 
            onChange={ (event)=>
            {   
                setKeyword(event.target.value);
            }}/>
            <button 
            onClick={
                (event)=>{
                    event.preventDefault();
                    setPageNumber(1);
                    setSearch(keyword);

            }} 
            className={`btn btn-warning fs-5 ${styles.btn}`} 
            >Search</button>

        </form>
    )
}

export default Search
