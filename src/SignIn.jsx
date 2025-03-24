import React from "react";

const SignIn = () => {
  return (
    <div>
      <div className="absolute top-[40px] left-[20px] w-[188px] h-[69px] text-left text-[28px] leading-[36px] font-medium text-[#1D2226] opacity-100">
        Sign in to your PopX account
      </div>
      <p className="absolute top-[123px] left-[20px] w-[232px] h-[48px] text-left text-[18px] leading-[26px] font-normal text-[#1D2226] opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="absolute top-[195px] left-[34px] w-[89px] h-[15px] text-left text-[13px] leading-[17px] font-normal text-[#6C25FF] opacity-100 bg-white z-30">
        &nbsp;Email Address
      </div>
      <input
        type="email"
        placeholder="Enter Email Address"
        className="absolute top-[204px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-2 outline-none"
      />

      <div className="absolute top-[260px] left-[34px] w-[89px] h-[15px] text-left text-[13px] leading-[17px] font-normal text-[#6C25FF] opacity-100  bg-white z-30">
        &nbsp;Password
      </div>
      <input
        type="password"
        placeholder="Enter Password"
        className="absolute top-[269px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-2 outline-none"
      />
      <button className="absolute top-[321px] left-[20px] w-[335px] h-[46px] bg-[#CBCBCB] rounded-[6px] opacity-100">
        Login
      </button>
    </div>
  );
};

export default SignIn;
