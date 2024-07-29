import React from 'react'
import LoginRight from '../../components/login/LoginRight'
import AirtimeForm from '../../components/services/AirtimeForm'

function Airtime() {
  return (
    <section className='px-5 md:px-20 xl:px-72'>
        <LoginRight title='Buy Airtime' path='/dashboard'/>
        <AirtimeForm/>
    </section>
  )
}

export default Airtime