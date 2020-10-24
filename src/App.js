import React, { useState } from 'react';
import './css/styles.css';
import axios from 'axios'

import SearchList from './component/searchList'
import PhotoList from './component/photoList'



function App(){
  const [photo, setPhoto] = useState('');
  const [clientId, setClientId] = useState('i34h4uDrteEoa-PyJorqYsJBku5SpK9jtsH_F9-tr0w');
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState([])

  function handleChange(event){
    setPhoto(event.target.value);
  }

  function handleSubmit(e){
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo 
                + "&client_id=" + clientId

    axios.get(url).then((response) => {
      setResult(response.data.results)
      console.log(response)

      const array = query;
      array.push(photo)
  
      setQuery(array)
      console.log(array)
    })
    
  }

  function handleClick(e, s){
    // query.splice(e,1)

    if(e === 0){
      setPhoto(s)
    } else if (e === 1){
      const array = query
      array.splice(s,1)
  
      setQuery(array)
      window.alert("Removed Saved")
      console.log(query)
    }
    
  }

  return(
    <div className="App">
        <section id="search">
            <h2>
              Search Photo
            </h2>
            <input type="text" value={photo} placeholder="Search..." name="photo" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit} >Search </button>
            
            <SearchList query={query} photo={photo} handleClick={handleClick} />
        </section>

        <section id='projects'>
          <div className="wrapper">
            <PhotoList result={result} />
          </div>
          
        </section>
        
      </div>
  )
}

export default App