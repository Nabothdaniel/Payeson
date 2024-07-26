import React from 'react'
import btcImg from '../../assets/Svg/btc.svg'
import giftCardImg from '../../assets/Svg/gift-card.svg'

function HomeSwipper() {
  return (
    <div className='mb-10 px-5 flex items-center justify-between flex-col'>
        <img src={btcImg} alt="btc image" className='h-[15rem] w-[15rem] mb-20' />
        <p className='text-4xl font-bold text-black py-2'>Easy way to invest in cryptocurrency</p>
        <div className='text-black text-center text-[1.2rem] text-semibold'>
        Trade all your crypto easily and fast in the market
        </div>
    </div>
  )
}

export default HomeSwipper