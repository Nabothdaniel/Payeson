import React from "react";

function DataForm() {
  const networkOptions = ["Ibadan Electricity", "Jos Electricity", "Kaduna Electricity", "Ikeja Disco", "Abuja Electricity","Port Harcout Electrcity","EKo Electricity","Enugu Electricity","Kano Electricity","Benin Electricity"];
  return (
    <div className="mx-2 md:mx-auto">
      <form>
        <div className="mb-3 ">
          <label
            htmlFor="phone-number"
            className=" text-[1.1rem] mb-3 font-semibold block"
          >
            Meter Number
          </label>
          <input
            type="text"
            className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="Enter Meter Number"
          />
        </div>
        <div>
          <label
            htmlFor="networks"
            className=" text-[1.1rem] mb-3 font-semibold block"
          >
            Service Provider
          </label>
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
        </div>
        <div className="mb-3">
          <label
            htmlFor="amount"
            className=" text-[1.1rem] mb-3 font-semibold block"
          >
            Enter Amount
          </label>
          <input
            type="text"
            className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="1000"
          />
        </div>

       <div>
       <button
        type="submit"
        className=" mt-[10rem] w-full mb-5 font-semibold text-center text-[1.1rem] p-3  bg-orange-700 rounded-xl text-white"
      >
        Pay
      </button>
       </div>
      </form>
    </div>
  );
}

export default DataForm;
