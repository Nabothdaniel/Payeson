import React from 'react';
import LoginRight from '../../components/login/LoginRight';
import DataForm from '../../components/services/DataForm';

function Data() {
  return (
    <div className='mx-4 md:px-72'>
        <LoginRight title='Buy Data' path='/dashboard'/>
        <DataForm/>
    </div>
  )
}

export default Data