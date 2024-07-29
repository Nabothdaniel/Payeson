import React from "react";

function TvForm() {
  const networkOptions = ["Star Times", "DSTV", "GO TV", "FREE TV","Start Times ON"];
  return (
    <div>
      <form>
        <div className="mb-3 ">
          <label
            htmlFor="phone-number"
            className=" text-[1.1rem] mb-3 font-semibold block"
          >
            Smartcard Number
          </label>
          <input
            type="text"
            className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="-- -- -- --"
          />
        </div>
        <div>
          <label
            htmlFor="networks"
            className=" text-[1.1rem] mb-3 font-semibold block"
          >
            Select Provider
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
            Amount
          </label>
          <input
            type="text"
            className="w-full  border-solid border border-black/40 rounded-md bg-white p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500 text-[1.2rem]"
            placeholder="1000"
          />
        </div>

        <button
        type="submit"
        className=" mt-[30rem] mb-5 w-full  font-semibold text-center text-[1.1rem] p-3  bg-violet-700 rounded-xl text-white"
      >
        Subscribe
      </button>
      </form>
    </div>
  );
}

export default TvForm;
