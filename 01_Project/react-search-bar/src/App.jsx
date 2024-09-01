import './App.css'
import { useState } from 'react'
import SearchBar from './Components/searchbar'
import Searchresults from './Components/searchresults';


function App() {
  const [results, setResults] = useState([]);
  
  return ( 
    <>
    <div className="app">
      <div className="serch-bar">
      <SearchBar setResults = {setResults} />
      <Searchresults results = {results}/>
    

      </div>

    </div>
</>
  )
}

export default App
