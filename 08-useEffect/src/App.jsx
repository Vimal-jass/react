import React, { useEffect, useState } from 'react'


const App = () => {

  const [num, setnum] = useState(10)
  const [num2, setnum2] = useState(100)

  function getdata(){
setnum(num + 1);
setnum2(num2+10);
  }

  useEffect(function(){
    console.log("num 1 chal rha hai ")
  }, [num])
  return (
    <>
<h1>num is {num}</h1>
<h2>num2 is {num2} </h2>

<button onMouseEnter={getdata} onMouseLeave={getdata} >hover me</button>


    </>
  )
}

export default App