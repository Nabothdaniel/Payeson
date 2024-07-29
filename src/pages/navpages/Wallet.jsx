import React from 'react'
import WalletBalance from '../../components/wallet/WalletBalance'
import LoginRight from '../../components/login/LoginRight'
import WalletResult from '../../components/wallet/WalletResult'

function Wallet() {
  return (
    <div className='mx-3 mt-3 md:mx-10 xl:px-72'>
      <LoginRight title='Wallet' path='/dashboard'/>
      <WalletBalance/>
      <WalletResult/>
    </div>
  )
}

export default Wallet