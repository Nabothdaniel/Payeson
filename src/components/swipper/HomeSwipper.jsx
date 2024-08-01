import React from 'react'
import home from '../../assets/Svg/home.svg'

function HomeSwipper() {
  return (
    <div className='mb-10 px-5 flex items-center justify-between flex-col'>
        <img src={home} alt="btc image" className='h-[15rem] w-[15rem] mb-20' />
        <p className='text-3xl font-bold text-black py-2'>Make payements seamlessly and enjoy bonuses too</p>
       
    </div>
  )
}

export default HomeSwipper