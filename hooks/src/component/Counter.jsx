import React, {useState} from 'react'

const Counter = () => {

const [count, setcount] = useState(0)

function countingIn(){
    setcount(count +1)
}

function countingDec(){
    setcount(count -1)
    
}

function Jump(){
    setcount(count + 5)
}

  return (
    <>

<div class="text">
    <h1>counting : {count}</h1>
<div>
    <button onClick={countingIn} >Increase</button>
<button onClick={countingDec}>Decrease</button>
<button onClick={Jump}>Jump by 5</button>
</div>
</div>

    </>
  )
}

export default Counter