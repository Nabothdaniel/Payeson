import React from 'react'
import LoginRight from '../components/login/LoginRight'
import Notfications from '../components/notifications/Notfications'

function Notifications() {
  return (
    <div className='md:px-10 xl:px-72'>
            <LoginRight title='Notifications' path='/dashboard'  />
            <Notfications/>
            
    </div>
  )
}

export default Notifications