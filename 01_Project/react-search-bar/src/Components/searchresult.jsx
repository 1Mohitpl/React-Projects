import React from 'react'
import "./searchresult.css";
const searchresult = ({result}) => {
  return <div className='search-result' onClick={(e) =>{
    alert(`you cliked on ${result.name}`)
  }}>{result.name}  </div>
  
}

export default searchresult
