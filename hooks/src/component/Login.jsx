import React, {useState} from 'react'

const Login = () => {
const [IsLoggedIn, setIsLoggedIn] = useState(false)

const  handleLogin=()=>{
    if(IsLoggedIn){
        setIsLoggedIn(false)
    }else{
        setIsLoggedIn(true)
    }
}

  return (
    <div className='flex justify-center '>
        <h2 className='text-center bg-red-600 px-10 py-2 rounded w-[200px] text-white ' >
            {IsLoggedIn ? "you logged in jass " : "please login jass"}
        </h2>
        <button 

onClick={handleLogin}
        >
            {IsLoggedIn ? "logout": "login"}
        </button>
    </div>
  )
}

export default Login