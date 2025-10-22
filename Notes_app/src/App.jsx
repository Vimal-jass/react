import React, { useState } from 'react'





const App = () => {

  
 const [Notes, setNotes] = useState('')
 const [description, setdescription] = useState('')
 const [Tasks, setTasks] = useState([])
 const [Message, setMessage] = useState('')

 const formHandler = (e)=>{
  e.preventDefault()
  if(Notes.trim()==="" || description.trim()=== ""){
    setMessage("plz filled all inputs")

    
 return;
 
  }

  // console.log("form Submitted", Notes , description)
  const copyTask = [...Tasks];
  copyTask.push({Notes, description})





  // console.log(copyTask)
  // console.log(Tasks)
  setTasks(copyTask)


  setNotes('')
  setdescription('')

  
  

 }

 const taskdelete = (idx)=>{
  const copyTask = [...Tasks]
  // console.log(idx)

  copyTask.splice(idx, 1)
  setTasks(copyTask)
 }


  

  return (
    <div className='h-screen lg:flex bg-[#212121] text-white'>
     <form


onSubmit={(e)=>{
  formHandler(e)
}}


     className='flex lg:w-1/2 items-start flex-col gap-4 p-10'
      action="" >
                <h1 className='font-semibold px-2 text-2xl py-2  w-[140px]'>Add Notes</h1>

        <input
         type="text" 
         placeholder='Enter Notes Heading'
         className='px-1 w-full py-2 outline-none border-2 rounded'
         value={Notes}
         onChange={(e)=>{
          setNotes(e.target.value)
         }}
         />
        <textarea
         type="text" 
         placeholder='Enter Description'
         className='px-1 w-full h-50 outline-none border-2 rounded'
         value={description}
         onChange={(e)=>{
          setdescription(e.target.value)
         }}
         />

         <button className='bg-white w-full text-black px-5 py-2 rounded'>Add Now</button>
               <p className="mt-3 text-lg font-semibold text-red-500">{Message}</p>

      </form>

      <div className=' pl-20 bg-gray-900 lg:w-1/2 flex-wrap p-10'>
        <h1 className='font-semibold px-2 text-2xl py-2 mb-4 '>Recent Notes</h1>
        <div className='flex gap-10 flex-wrap h-full overflow-auto '>
          
        {Tasks.map(function(event, idx){


return <div key={idx} className=' flex flex-col   h-52 w-45 text-black p-2 rounded-2xl bg-white'>
  <h1 className='font-semibold text-xl p-2 rounded mb-2 bg-gray-200'>{event.Notes} </h1>
  <p className=' mt-1 p-2 rounded mb-2 bg-blue-100'>{event.description}</p>
  <button className='bg-red-700 mb-3 text-white px-5 py-2 text-center' onClick={()=>{
    taskdelete(idx)
  }} >delete</button>
</div>
        })}
        </div>
      </div>

    </div>
  )
}

export default App

