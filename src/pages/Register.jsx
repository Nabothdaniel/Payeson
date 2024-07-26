import React from 'react'
import LoginRight from '../components/login/LoginRight'
import RegisterInfo from '../components/Register/RegisterInfo'
import RegisterForm from '../components/Register/RegisterForm'

function Register() {
  return (
    <div className='md:px-20 xl:px-72'>
        <LoginRight title='Get started' path='/'  />
        <RegisterInfo/>
        <RegisterForm/>
    </div>
  )
}

export default Register