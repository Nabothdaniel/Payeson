import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function LoginRight({title,subtitle,extra,path}) {
  return (
    <>
      <div className="flex justify-between items-center py-3 mx-2 px-1 md:px-5">
        <Link to={path}>
          <FaArrowLeft />
        </Link>
        <p className="text-[1.1rem] text-black font-semibold">{title}</p>
        <div></div>
      </div>
      {/* login page*/}
      <div className="my-4 text-center">
        <p className="text-[2rem] font-semibold mb-1">{subtitle}</p>
        <p className="text-[1.2rem]">{extra}</p>
      </div>
    </>
  );
}

export default LoginRight;
