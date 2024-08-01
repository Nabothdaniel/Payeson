import React from "react";
import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { PiWalletThin } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";

function DashboardNav() {
  const services = [
    {
      id: 1,
      path: "/dashboard",
      icon:<RiHomeLine className="w-8 h-8 text-orange-700 bg-orange-300/40 rounded-full p-2 " />
      ,
      text: "Home",
    },
    {
      id: 2,
      path: "/wallet",
      icon:  <PiWalletThin className="w-8 h-8 text-orange-700 bg-orange-300/40 rounded-full p-2 " /> ,
      text: "Wallet",
    },
    {
      id: 3,
      path: "/support",
      icon: (
        <BiSupport className="w-8 h-8 text-orange-700 bg-orange-300/40 rounded-full p-2 " />
      ),
      text: "Support",
    },
    {
      id: 4,
      path: "/profile",
      icon: (
        <FaRegCircleUser className="w-8 h-8 text-orange-700 bg-orange-300/40 rounded-full p-2 " />
      ),
      text: "Profile",
    },
  ];

  return (
    <div className="flex justify-around items-center mr-20 py-2  w-full bg-white shadow-sm  ">
      {services.map((service) => (
        <Link
          key={service.id}
          to={service.path}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          {service.icon}
          <span className="text-[0.6rem] ">{service.text}</span>
        </Link>
      ))}
    </div>
  );
}

export default DashboardNav;
