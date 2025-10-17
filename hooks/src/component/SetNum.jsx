import React , {useState} from 'react'

const SetNum = () => {

 const [Number, setNumber] = useState(10)
 const [username, setusername] = useState("sarthak")
 const [array, setarray] = useState([20,30,40])

  function change (){
    setNumber(30)
    setusername("vimal")
    setarray([30,40,50])
    
  }

  return (
<>
<p>your class is {Number} and your name is {username} and your marks as an array for {array} in semester 3</p>
 <div onClick={change} className=''>SetNum</div>
 <button onClick={change} className='bg-gray-300 p-2 ml-20 rounded text-white'>click me</button>
</>
   
  )
}

export default SetNum