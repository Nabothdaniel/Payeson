import React from "react";
import LoginRight from "../../components/login/LoginRight";

function ForgotPassword() {
  return (
    <div className="px-5 md:px-20 xl:px-72">
      <LoginRight
        title="Reset Password"
        subtitle="Enter your Email To Reset Password"
        path="/login"
      />
      <div className="mb-3">
        <label
          htmlFor="email"
          className=" text-[1.1rem] mb-2 font-semibold block"
        >
          Email address
          <span className="text-[#95066E] ml-2">*</span>
        </label>
        <input
          type="text"
          className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
          placeholder="name@example.com"
          name="email"
          id="email"
        />
        <button   className='w-full block md:px-64 font-semibold text-center text-[1.2rem] p-3 my-6 bg-violet-700 rounded-md text-white mt-[22rem]'> Verify</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
