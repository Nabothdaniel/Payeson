import React, { useState } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";

function Notfications() {
  //returns the current date in this format MM/DD/YY
  const formatDate = (date = new Date()) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date = new Date()) => {
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return date.toLocaleTimeString("en-US", options);
  };

  const formattedTime = formatTime();
  const formattedDate = formatDate();

  const [notifications, setNotfications] = useState([
    {
      id: 1,
      icon: (
        <BsArrowDown className="w-10 h-10 text-orange-700 bg-purple-300/40 rounded-full p-2" />
      ),
      title: "Transfer from",
      username: "JOHN DOE",
      date: formattedDate,
      time: formattedTime,
      price: "350.00",
      status: "success",
    },
    {
      id: 2,
      icon: (
        <BsArrowUp className="w-10 h-10 text-orange-700 bg-purple-300/40 rounded-full p-2" />
      ),
      title: "Transfer to",
      username: "JANE DOE",
      date: formattedDate,
      time: formattedTime,
      price: "350.00",
      status: "success",
    },
    {
      id: 3,
      icon: (
        <BsArrowUp className="w-10 h-10 text-orange-700 bg-purple-300/40 rounded-full p-2" />
      ),
      title: "Transfer to ",
      username: "JOHN DOE",
      date: formattedDate,
      time: formattedTime,
      price: "350.00",
      status: "success",
    },
    {
      id: 4,
      icon: (
        <FiSmartphone className="w-10 h-10 text-orange-700 bg-purple-300/40 rounded-full p-2" />
      ),
      title: "Airtime transfer to ",
      username: "",
      number: "07064936543",
      date: formattedDate,
      time: formattedTime,
      price: "350.00",
      status: "success",
    },
    {
      id: 5,
      icon: (
        <FiSmartphone className="w-10 h-10 text-orange-700 bg-purple-300/40 rounded-full p-2" />
      ),
      title: "Gift card reedeemed  ",
      username: "",
      date: formattedDate,
      time: formattedTime,
      price: "350.00",
      status: "success",
    },
  ]);
  return (
    <div className="">
      {notifications.map((notification) => (
        <div
          className="flex justify-between items-center gap-3 mb-5 bg-white shadow-md rounded-md p-4  px-5 cursor-pointer"
          key={notification.id}
        >
          <div className="flex items-center gap-3">
            <div>{notification.icon}</div>
            <div className="flex justify-center  flex-col">
              <div className="inline-flex items-center flex-c text-black font-semibold justify-between gap-2">
                <span>{notification.title}</span>
                <span>{notification.username}</span>
              </div>

              <div className="text-gray-600">
                <span>{notification.date} </span>
                <span>{notification.time} </span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-black font-semibold text-[1.1rem]">
              {notification.price}
            </div>
            <div className="bg-orange-700/70 text-white rounded-md px-[5px] py-[1px] text-[.8rem]">
              {notification.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notfications;
