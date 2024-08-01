import React from "react";
import AvatarImg from "../../assets/images/avater.jpg";
import { FaPen } from "react-icons/fa";
import { BsFilePersonFill } from "react-icons/bs";

function ProfileTop() {
  return (
    <div>
      <div className="py-3">
        <h1 className="text-[1.3rem] font-semibold">Edit your Profile</h1>
        <p className="mt-2">
          Update your personal information to help us keep track of your info
        </p>
      </div>

      <div className=" relative ">
        <img
          src={AvatarImg}
          alt="profile image"
          className="mx-auto object-cover h-36 w-36 rounded-full"
        />
        < div className="absolute bottom-0 right-[5rem] sm:right-[8rem] md:right-64 xl:right-56">
        <FaPen className="w-8 h-8 bg-orange-700 text-white p-2 rounded-full  cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ProfileTop;
