import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parents'>
      <Card user= "vimal" age={23} />
      <Card user= "tarun" age={25}  />
      <Card user= "suraj" age={20}  />
      <Card user= "karan" age={18}  />
      <Card user= "shyam" age={21}  />
      <Card user= "kiran" age={20}  />
    </div>
  )
}

export default App