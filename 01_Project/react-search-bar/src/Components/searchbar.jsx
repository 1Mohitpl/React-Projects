// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from 'react'
import {FaSearch} from "react-icons/fa";
import "./searchbar.css"

const SearchBar = ({setResults}) => {
 const [input, setInput] = useState("");

 const fetchData = (value)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
    const result=json.filter((user) => {
        return value && user && user.name && user.name.toLowerCase().includes(value);
       });
      setResults(result);
    });
}

const handleChange =  (value) =>{
    setInput(value)
    fetchData(value)
}

  return (
    <>
    <div className="input">
    <FaSearch  id = "search-icon" />
    <input className="text" type="text" placeholder="Type to search ..." value={input} onChange={(e)=>{
        handleChange(e.target.value);
    }}/>

    </div>
    </>
  )
}

export default SearchBar
