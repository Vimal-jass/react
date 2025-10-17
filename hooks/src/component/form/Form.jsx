import React, { useState } from 'react'

const Form = () => {

    const [title, settitle] = useState('')

    function FormHandler(e){
        e.preventDefault()
console.log("form submitted by", title)
settitle('')

    }
  return (
    <>

    <form action="" onSubmit={(e)=>{
        FormHandler(e)
    }}>
        <input type="text" 
        placeholder='Enter Your Name'

        value= {title}

        onChange={(e)=>{
            settitle(e.target.value)
        }}
         />
    <button>submit</button>
    </form>
    </>
  )
}

export default Form