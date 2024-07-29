import React from 'react'
import LoginRight from '../../components/login/LoginRight'
import LoginLeft from '../../components/login/LoginLeft'

function Login() {
  return (
    <div className=' mx-4 md:px-72'>
    <LoginRight title='Login' path='/' subtitle='Welcome back' extra='Login to continue' />
    <LoginLeft/>
    </div>
  )
}

export default Login