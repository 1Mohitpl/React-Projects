// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from 'react'
import {FaSearch} from "react-icons/fa";
import "./searchbar.css"

const SearchBar = () => {
 const [input, setInput] = useState("");

 const fetchData = (value)=>{
    
 }
  return (
    <>
    <div className="input">
    <FaSearch  id = "search-icon" />
    <input className="text" type="text" placeholder="Type to search ..." value={input} onChange={(e)=>{
        setInput(e.target.value);
    }}/>

    </div>
    </>
  )
}

export default SearchBar
