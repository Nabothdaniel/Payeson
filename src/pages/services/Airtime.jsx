import React from 'react'
import LoginRight from '../../components/login/LoginRight'
import AirtimeForm from '../../components/services/airtime/AirtimeForm'

function Airtime() {
  return (
    <section className='px-4'>
        <LoginRight title='Buy Airtime' path='/dashboard'/>
        <AirtimeForm/>
    </section>
  )
}

export default Airtime