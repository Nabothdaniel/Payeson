import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function RegisterVerified() {
  return (
    <div className='md:px-12 xl:px-72 flex items-center justify-center'>
            <div className="text-white px-3 py-3 rounded-md shadow-md text-center">
                <p className="text-4xl font-semibold text-black">Verfied succesfully</p>
                <IoCheckmarkCircleSharp className='text-white w-10 h-10 bg-green-800'/>

            </div>
    </div>
  )
}

export default RegisterVerified