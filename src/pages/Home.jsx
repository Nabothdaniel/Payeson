import React,{useState} from "react";
import HomeSwipper from "../components/swipper/HomeSwipper";
import { Link } from "react-router-dom";

export const Home = ()=>{
    return(
    <>
    <div className="flex items-center justify-center flex-col p-5 mt-5  md:px-12 xl:px-72 ">
      <HomeSwipper/>
      <Link to='/register' className='w-full md:px-64 font-semibold text-center text-[1.3rem] p-3 bg-violet-700 rounded-xl text-white mt4'> Create an account</Link>
      <p className="text-center text-2xl fontsemibold mt-8"> I have an account <Link to='/login' className="text-violet-700 cursor-pointer">Login</Link></p>
    </div> 
   
    </>
    )
};

export default Home;