import React from 'react'
import { useNavigate } from 'react-router-dom'
import imageLogin from "../assets/iNeedLogin.jpeg"

function Login() {
    const navigate = useNavigate()

  return (
    <>
    <div className='w-auto h-60 bg-gray-400 flex  justify-center items-center m-3 rounded-full text-sm justify-center '>
        <h1 className='font-semibold text-4xl underline decoration-4 text-cyan-900 hover:text-cyan-200' onClick={() => navigate("/")}>LOGIN</h1>
    </div>
    <div className='flex justify-center'>
        <img className="rounded-2xl" src={imageLogin} alt="" />
    </div>
    </>
  )
}

export default Login