import React from 'react'
import LoginRight from '../../components/login/LoginRight'
import Notfications from '../../components/notifications/Notfications'
function Notifications() {
  return (
    <div className='mx-4 mt-3 md:mx-10 xl:px-72'>
            <LoginRight title='Notifications' path='/dashboard'  />
            <Notfications/>
            
    </div>
  )
}

export default Notifications