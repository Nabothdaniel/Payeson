import React from "react";

function AirtimeForm() {
    
const networkOptions = [
    'MTN',
    'Airtel',
    'Globacom',
    '9mobile'
  ];

  return (
    <form>
      <div className="mb-3 ">
        <label
          htmlFor="phone-number"
          className=" text-[1.1rem] mb-3 font-semibold block"
        >
          Phone number
        </label>
        <input
          type="text"
          className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
          placeholder="0706448823"
        />
      </div>
      <div>
      <label
          htmlFor="networks"
          className=" text-[1.1rem] mb-3 font-semibold block"
        >
          Networks
        </label>
        <select  name='networks' className="mb-4 w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]">
          {networkOptions.map((network, index) => (
            <option key={index} value={network}>
              {network}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label
          htmlFor="amount"
          className=" text-[1.1rem] mb-3 font-semibold block"
        >
          Airtime amount
        </label>
        <input
          type="text"
          className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
          placeholder="200"
        />
      </div>

      <button
        type="submit"
        className=" mt-[30rem] w-full mb-5  font-semibold text-center text-[1.1rem] p-3  bg-violet-700 rounded-xl text-white"
      >
        Buy
      </button>
    </form>
  );
}

export default AirtimeForm;
