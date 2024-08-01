import React from 'react'

function ProfileForm() {
  return (
    <form className='my-10'>
         <input
        type="text"
        className="w-full  border-solid border mb-5 border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="full name"
      />
         <input
        type="text"
        className="w-full  border-solid border mb-5 border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="mobile number"
      />
         <input
        type="text"
        className="w-full  border-solid border  mb-5 border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="Gender"
      />
         <input
        type="email"
        className="w-full  border-solid border mb-5 border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="Email Address"
      />
         <input
        type="text"
        className="w-full  border-solid border mb-5 border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="Address"
      />
         <input
        type="text"
        className="w-full  border-solid border mb-5 border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        placeholder="Date of Birth"
      />
       <button
        type="submit"
        className=" mt-[10rem] w-full mb-5 font-semibold text-center text-[1.1rem] p-3  bg-orange-700 rounded-xl text-white"
      >
        Update Details
      </button>
    </form>
  )
}

export default ProfileForm