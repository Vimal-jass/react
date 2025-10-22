// import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

 const GetData = async()=>{
const response = await axios.get('https://jsonplaceholder.typicode.com/albums')

   setdata(response.data)
   console.log("click hua")


  }

  return (
    <>

    <div class="jass">
      <div class="button" onClick={GetData}>App</div>
    <div> 
      {data.map(function(elem, idx){
        return <div id='data' key={idx} >{elem.id}. your title is {elem.title} </div>
        
      })}
    </div>
    </div>
    </>
    
  )
}

export default App