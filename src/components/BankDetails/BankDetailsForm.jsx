import React from 'react'

function BankDetailsForm() {
  return (
    <form className='my-5'>
          <div className="mb-3">
      <label htmlFor="bankName" className=" text-[1.1rem] mb-2 font-semibold block">
        Bank Name
        <span className="text-[#95066E] ml-2">*</span>
      </label>
     <input
        type="text"
        className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="Keystone Bank"
        name="bankname"
        id="bankname"
      />
     </div>
     <div className="mb-3">
      <label htmlFor="account" className=" text-[1.1rem] mb-2 font-semibold block">
        Bank Account
        <span className="text-[#95066E] ml-2">*</span>
      </label>
     <input
        type="text"
        className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="6033******"
        name="account"
        id="account"
      />
     </div>
     <button
        type="submit"
        className=" mt-[15rem] w-full  font-semibold text-center text-[1.1rem] p-3  bg-violet-700 rounded-xl text-white"
      >
        Update Bank Details
      </button>
    </form>
  )
}

export default BankDetailsForm