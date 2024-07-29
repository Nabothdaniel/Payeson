import React from "react";
import LoginRight from "../../components/login/LoginRight";

function SetPin() {
    const setUserPin = ()=>{
        console.log('pin set')
    }
  return (
    <div className="px-5 md:px-20 xl:px-72 relative ">
      <LoginRight title="Set Pin" path="/dashboard" />
      <div className="my-10  md:px-40 flex justify-around items-center gap-10 ">
        <input
          type="text"
          className="w-full text-bold  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        />
        <input
          type="text"
          className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        />
        <input
          type="text"
          className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        />
        <input
          type="text"
          className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
        />
      </div>
      <button
        onClick={setUserPin}
        className=" w-full block md:px-64 font-semibold text-center text-[1.2rem] p-3 my-6 bg-violet-700 rounded-md text-white mt-52 "
      >
        Set pin
      </button>
    </div>
  );
}

export default SetPin;
