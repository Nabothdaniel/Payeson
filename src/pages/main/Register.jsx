import React from 'react'
import {useForm} from 'react-hook-form'
import LoginRight from '../../components/login/LoginRight'
import RegisterInfo from '../../components/Register/RegisterInfo'
import RegisterForm from '../../components/Register/RegisterForm'

function Register() {
  const {register,handleSubmit,errors} = useForm();
  return (
    <div className='px-4 md:px-20 xl:px-72'>
        <LoginRight title='Get started' path='/'  />
        <RegisterInfo/>
        <RegisterForm/>
    </div>
  )
}

export default Register