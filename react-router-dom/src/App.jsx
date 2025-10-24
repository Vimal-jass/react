import React from 'react'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './pages/home'




const App = () => {
  return (
    
   <div>
    
    <Routes>
    
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
   </Routes>
   </div>
  )
}

export default App