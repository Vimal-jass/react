import React, { useState } from 'react'

const Part1 = () => {

    const [array, setarray] = useState({name:"vimmal", class:20})

    const btnClicked = ()=>{
        // destructuring
        const newNum = {...array}
        newNum.name = "tarun"
        newNum.class = "12th"
        setarray(newNum)
        
    }

  return (
    <>

<h1>hello {array.name} and your class is {array.class}</h1>
<button onClick={btnClicked}>Add</button>

    </>
  )
}

export default Part1