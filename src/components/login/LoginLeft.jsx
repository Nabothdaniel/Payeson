import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { BsEyeSlash } from "react-icons/bs";
const LoginLeft = () => {
  //sets the visbility of the element 
  const [isVisible, setIsVisible] = useState(false);
  //sets passoword visibilit
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  //this switches between visible and hidden
  const toggleVisibility = () => setIsVisible(!isVisible);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="">
      <p className="pb-4 text-black font-semibold  ">
        Login to your account by Phone Number or Email Address below:
      </p>
      <form>
        {isVisible ? (
          <input
            type="text"
            className="w-full block border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="name@example.com"
          />
        ) : (
          <input
            type="text"
            className="w-full hidden border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="name@example.com"
          />
        )}

        {isVisible ? (
          <input
            type="text"
            className="w-full hidden border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="+234 0000 0000"
          />
        ) : (
          <input
            type="text"
            className="w-full block  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="+234 0000 0000"
          />
        )}
        <p
          className="text-violet-700 font-semibold pt-2 cursor-pointer"
          onClick={toggleVisibility}
        >
          {isVisible ? "use phone number" : "use email address"}
        </p>

        <div className="mt-5 flex items-center gap-4 border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]">
          <input
            type={isPasswordVisible ? "text": "password"}
            className="w-full outline-none "
            placeholder="type your password"
          />
          <div onClick={togglePasswordVisibility} className="cursor-pointer">
              {isPasswordVisible ? <BsEyeSlash className="w-5 h-5" /> : <FiEye className="w-5 h-5"/> }
            </div>
        </div>
      </form>
      <button
        type="submit"
        className=" mt-[15rem] w-full  font-semibold text-center text-[1.3rem] p-3  bg-violet-700 rounded-xl text-white"
      >
        Login
      </button>
      <p
        className=" pt-5 cursor-pointer text-center"
        onClick={toggleVisibility}
      >
        Forgot Password.
        <Link to="/resetpassword" className="ml-2 text-violet-700 font-semibold">
          Reset Password
        </Link>
      </p>
      <Link to="/dashboard" className="ml-2 text-black font-semibold">
          Go to dashboard
        </Link>
    </div>
  );
};

export default LoginLeft;
