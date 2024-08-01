import React from "react";
import { Link } from "react-router-dom";
import { FiSmartphone } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import { BiBaseball } from "react-icons/bi";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { HiOutlineBolt } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io"
import { LiaBusAltSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
const DashboardServices = () => {
  const services = [
    {
      id: 1,
      path: "/airtime",
      icon: <FiSmartphone className="w-10 h-10 text-orange-700 bg-orange-300/40 rounded-full p-2 " />,
      text: "Airtime",
    },
    {
      id: 2,
      path: "/data",
      icon: <TbArrowsDownUp className="w-10 h-10 text-orange-700 bg-orange-300/40 rounded-full p-2 " />,
      text: "Data",
    },
   
    {
      id: 3,
      path: "/television",
      icon: <PiTelevisionSimpleLight className="w-10 h-10 text-orange-700 bg-orange-300/40 rounded-full p-2 " />,
      text: "Tv",
    },
    {
      id: 4,
      path: "/electricity",
      icon: <HiOutlineBolt className="w-10 h-10 text-orange-700 bg-orange-300/40 rounded-full p-2 " />,
      text: "Electricity",
    },
  ];
  return (
    <div className="px-4 py-10">
      
      <div className="bg-white rounded-xl shadow-xl mt-3 mx-auto grid grid-cols-4 gap-[1.75rem] p-3 py-5 text-[0.6rem]">
        {services.map((service) => (
          <Link key={service.id} to={service.path} className="flex flex-col items-center gap-2">
            {service.icon}
            <span className="font-semibold ">{service.text}</span>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default DashboardServices;
