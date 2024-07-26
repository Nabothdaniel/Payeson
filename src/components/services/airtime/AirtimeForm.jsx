import React from 'react'

function AirtimeForm() {
  return (
    <form>
          <div className="mb-3">
      <label htmlFor="phone-number" className="sr-only text-[1.1rem] mb-2 font-semibold block">
        Phone number
      </label>
     <input
        type="text"
        className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="0706448823"
      />
     </div>
     <div className="mb-3">
      <label htmlFor="amount" className="sr-only text-[1.1rem] mb-2 font-semibold block">
        Airtime amount
        <span className="text-[#95066E] ml-2">*</span>
      </label>
     <input
        type="text"
        className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="200"
      />
     </div>
    </form>
  )
}

export default AirtimeForm