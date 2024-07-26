import React from 'react'
import LoginRight from '../components/login/LoginRight'
import LoginLeft from '../components/login/LoginLeft'

function Login() {
  return (
    <div className=' mx-4 md:px-72'>
    <LoginRight title='Login' path='/' subtitle='Welcome back' extra='Login to continue' />
    <LoginLeft/>
    <button className=' mt-[15rem] w-full  font-semibold text-center text-[1.3rem] p-3  bg-violet-700 rounded-xl text-white'> Create an account</button>
    </div>
  )
}

export default Login