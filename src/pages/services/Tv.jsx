import React from 'react'
import LoginRight from '../../components/login/LoginRight'
import TvForm from '../../components/services/TvForm'

function Tv() {
  return (
    <div className='mx-4 md:px-72'>
        <LoginRight title='Tv' path='/dashboard'/>
        <TvForm/>
    </div>
  )
}

export default Tv