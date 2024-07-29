import React from "react";
import { FaSearch } from "react-icons/fa";

function TransactionSearch() {
  return (
    <div>
      <div className=" xl:px-5 flex items-center gap-4 border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]">
        <FaSearch className="w-5 h-5 text-violet-500" />
        <input
          type="text"
          className="w-full outline-none "
          placeholder="search transactions"
        />
      </div>
    </div>
  );
}

export default TransactionSearch;
