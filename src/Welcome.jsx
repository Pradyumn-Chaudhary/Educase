import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-end items-start min-h-screen p-4">
      <div className="w-[231px] h-[33px] text-left text-[28px] leading-[17px] font-medium text-[#1D2226] opacity-100">
        Welcome to PopX
      </div>

      <p className="w-[232px] h-[48px] text-left text-[18px] leading-[26px] font-normal text-[#1D2226] opacity-60 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Link to={"/signup"}>
        <button className="w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-white font-medium my-1">
          Create Account
        </button>
      </Link>

      <Link to={"/signin"}>
        <button className="w-[335px] h-[46px] bg-[#6C25FF4B] opacity-100 text-[#6C25FF] font-medium my-1">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
