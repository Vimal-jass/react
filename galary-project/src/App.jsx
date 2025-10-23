import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(0)

  const getData = async()=>{
    const response =await axios.get(`https://picsum.photos/v2/list?page=2&limit=10`)
    
    setuserData(response.data)
    console.log(response.data)
  }

  useEffect(function(){
    getData
  }, [index])

  let  printUserData = "No images are found"

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){
      return <div>
        <div key={idx} className='h-40 w-50 overflow-hidden bg-white rounded'>
        <img className='h-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2>
        {elem.author}
      </h2>
      </div>
    })
  }

  function prev(){
    if(index > 0){
      setindex(index-1)
    }
  }
  
  function next(){
    setindex(index+1)
  }


  return (
    <>
   
    <div className='bg-black h-screen overflow-auto p-4 text-white' >
      <button className='px-5 py-2 m-5 bg-red-600 text-white rounded' onClick={getData}>Get Data</button>
      <div className='flex flex-wrap gap-1'>
        {printUserData  }
      </div>
      <div className='flex align-center gap-2 justify-center'>
        <button className='bg-amber-400 text-black px-5 py-2 mr-2 rounded font-semibold mt-5' onClick={prev}>Prev</button>
      <button className='bg-amber-400 text-black px-5 rounded font-semibold py-2 mr-2 mt-5'>page {index}</button>

      <button className='bg-amber-400 text-black px-5 rounded font-semibold py-2 mr-2 mt-5' onClick={next}>Next</button>
      </div>
    </div>
    </>
  )
}

export default App