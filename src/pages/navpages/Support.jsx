import React from 'react'
import LoginRight from '../../components/login/LoginRight'
import SupportMessage from '../../components/Support/SupportMessage'
import SupportOptions from '../../components/Support/SupportOptions'

function Support() {
  return (
    <div className='px-4 md:px-20 xl:px-72'>
        <LoginRight title='Support' path='/dashboard'/>
        <SupportMessage/>
        <SupportOptions/>
    </div>
  )
}

export default Support