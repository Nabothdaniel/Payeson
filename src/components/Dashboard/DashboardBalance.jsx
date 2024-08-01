import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaNairaSign, FaPlay } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

function DashboardBalance() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="relative mt-8 mb-3 mx-3 text-xs">
      <div className="absolute left-0 top-[-20px] h-[11rem] w-[100%] rounded-[0.75rem] bg-amber-100"></div>
      <div className="absolute left-0 top-[-10px] h-[11rem] w-[100%] rounded-[0.75rem] bg-amber-300"></div>
      <div className="relative flex h-[11rem] w-full flex-col justify-start rounded-[0.75rem] bg-orange-700 text-white py-3 shadow-sm">
        <div className="mx-3">
          <div className="inline-flex items-center py-2 gap-2 text-white ">
            <span className=" text-[0.9rem]">Available balance</span>
            <div onClick={toggleVisibility} className="cursor-pointer">
              {!isVisible ? <BsEyeSlash className="w-5 h-5" /> : <FiEye className="w-5 h-5"/> }
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaNairaSign className="w-5 h-5 text-gray-200/40" />
            {!isVisible ? (
              <span className=" block text-4xl text-white font-bold">0.9000</span>
            ) : (
              <span className=" text-4xl ">***</span>
            )}
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center bg-[#ffffff34] px-3 py-2">
          <Link
            to="/history"
            className="text-[#fcc12b] text-[.9rem] flex iitems-center gap-2"
          >
            History
            <FaPlay className="w-4 h-4 " />
          </Link>
          <Link
            to="/withdraw"
            className="flex items-center gap-1 bg-white rounded-full px-3 py-2 cursor-pointer font-semibold "
          >
            <MdArrowOutward className="w-4 h-4 text-orange-700" />
            <span className="text-[1rem] text-orange-700"> withdraw</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardBalance;
