import React from 'react'
import LoginRight from '../../components/login/LoginRight'
import ElectricityForm from '../../components/services/ElectrcityForm'

function Electricity() {
  return (
    <div className='mx-4 md:px-72'>
        <LoginRight title='Electrcity' path='/dashboard'/>
        <ElectricityForm/>
    </div>
  )
}

export default Electricity