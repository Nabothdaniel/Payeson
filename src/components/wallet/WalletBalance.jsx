import React,{useState} from "react";
import { FiEye } from "react-icons/fi";
import { FaNairaSign, } from "react-icons/fa6";
import { BsEyeSlash } from "react-icons/bs";


function WalletBalance() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="bg-purple-700 h-auto text-white flex items-center justify-between rounded-md shadow-sm py-2 px-2">
      <div className="mx-3">
        <div className="inline-flex items-center py-2 gap-2 text-white ">
          <span className=" text-[0.9rem]">Available balance</span>
          <div onClick={toggleVisibility} className="cursor-pointer">
            {!isVisible ? (
              <BsEyeSlash className="w-4 h-4" />
            ) : (
              <FiEye className="w-4 h4" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaNairaSign className="w-4 h-4 text-gray-200/40" />
          {!isVisible ? (
            <span className=" block text-[1.1rem] text-white font-bold">2,000.00</span>
          ) : (
            <span className=" text-2xl ">***</span>
          )}
        </div>
      </div>
      
      <div className="flex items-center flex-col ">
        <p className="inline-flex items-center gap-2">
          Available
          <span className="text-[1.1rem] font-semibold">20,000.00</span>
        </p>
        <p className="inline-flex items-center gap-2">
          Unavailable
          <span className="text-[1.2rem] font-semibold">00.00</span>
        </p>
      </div>
    </div>
  );
}

export default WalletBalance;
