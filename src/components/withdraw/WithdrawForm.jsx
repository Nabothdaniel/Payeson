import React from "react";

function WithdrawForm() {
  const networkOptions = ["Keystone Bank PLc"];
  return (
    <form className="my-10">
      <input
        type="text"
        className="w-full  border-solid border mb-7 border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.1rem]"
        placeholder="Enter your 10 digits Account Number"
      />
      <select
        name="networks"
        className="mb-4 w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
      >
        {networkOptions.map((network, index) => (
          <option key={index} value={network}>
            {network}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="w-full  border-solid border mt-4 border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.1rem]"
        placeholder="Enter your amount"
      />
      <button
        type="submit"
        className=" mt-[30rem] w-full  font-semibold text-center text-[1.1rem] p-3  bg-orange-700 rounded-xl text-white"
      >
        Withdraw
      </button>
    </form>
  );
}

export default WithdrawForm;
