import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col items-start justify-start p-5 space-y-6 w-[375px] bg-[#F7F8F9]">
      <h1 className="text-[28px] leading-[36px] font-medium text-[#1D2226]">
        Sign in to your <br /> PopX account
      </h1>

      <p className="text-[18px] leading-[26px] font-normal text-[#1D2226] opacity-60">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit.
      </p>

      <div className="relative w-full">
        <label className="absolute -top-0.5 left-2 bg-white px-1 text-[13px] leading-[17px] font-normal text-[#6C25FF]">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 outline-none mt-2"
        />
      </div>

      <div className="relative w-full">
        <label className="absolute -top-0.5 left-2 bg-white px-1 text-[13px] leading-[17px] font-normal text-[#6C25FF]">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 outline-none mt-2"
        />
      </div>

      <button className="w-full h-[46px] bg-[#CBCBCB] rounded-[6px]">
        Login
      </button>
    </div>
  );
};

export default SignIn;
