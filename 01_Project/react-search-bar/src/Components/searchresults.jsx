import React from 'react'
import "./searchresults.css";
import Searchresult from './searchresult'
const searchresults = ({results}) => {
  return (
    <div className="searchresults">
    {results.map((result, id) => {
      return <Searchresult result={result} key={id}/>
    })}
      
    </div>
  )
}

export default searchresults

