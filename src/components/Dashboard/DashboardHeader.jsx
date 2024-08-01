import React from "react";
import avatarImg from "../../assets/images/avater.jpg";
import { BiNotification } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

function DashbooardHeader() {
  return (
    <div className="flex justify-between items-center py-3  px-5 ">
      <div className="flex items-center gap-2">
        <Link to='/profile'>
          <img
            src={avatarImg}
            alt="profile image"
            className="h-10 w-10 rounded-full shadow-sm object-cover cursor-pointer"
          />
        </Link>
        <div className="flex flex-col">
          <span>Hello</span>
          <span className="font-semibold text-black">Daniel</span>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <Link to="/notifications">
          <BiNotification className="w-5 h-5 text-orange-700 cursor-pointer  " />
        </Link>
        <Link to="/">
          <CiLogout className="w-5 h-5 text-orange-700 cursor-pointer " />
        </Link>
      </div>
    </div>
  );
}

export default DashbooardHeader;
