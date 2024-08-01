import React from "react";
import { BsArrowUp } from 'react-icons/bs'
function TransActionSingle() {
  return (
    <div className="flex justify-between items-center gap-3 mb-5 bg-white shadow-sm rounded-md p-4  px-5 cursor-pointer">
      <div className="flex items-center gap-3">
        <div>
          <BsArrowUp className="w-10 h-10 text-orange-700 bg-purple-300/40 rounded-full p-2" />
        </div>
        <div className="flex justify-center  flex-col">
          <div className="inline-flex items-center flex-c text-black font-semibold justify-between gap-2">
            <span>Transfer to</span>
            <span>Usman Doe</span>
          </div>

          <div className="text-gray-600">
            <span>26 July 2024</span>
            <span>12:30:28 AM </span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-black font-semibold text-[1.1rem]">2000</div>
        <div className="bg-orange-700/70 text-white rounded-md px-[5px] py-[1px] text-[.8rem]">
          Success
        </div>
      </div>
    </div>
  );
}

export default TransActionSingle;
