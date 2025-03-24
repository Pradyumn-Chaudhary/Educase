import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-start justify-start p-5 space-y-6 w-[375px] bg-[#F7F8F9]">
      <h1 className="text-[28px] leading-[36px] font-medium text-[#1D2226]">
        Create your <br /> PopX account
      </h1>

      <div className="relative w-full">
        <label className="absolute -top-0.5 left-2 bg-white px-1 text-[13px] leading-[17px] font-normal text-[#6C25FF]">
          Full Name <span className="text-[#DD4A3D]">*</span>
        </label>
        <input
          type="fullName"
          placeholder="Enter FullName"
          className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 outline-none mt-2"
        />
      </div>

      <div className="relative w-full">
        <label className="absolute -top-0.5 left-2 bg-white px-1 text-[13px] leading-[17px] font-normal text-[#6C25FF]">
          Phone number <span className="text-[#DD4A3D]">*</span>
        </label>
        <input
          type="phone"
          placeholder="Enter Phone Number"
          className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 outline-none mt-2"
        />
      </div>

      <div className="relative w-full">
        <label className="absolute -top-0.5 left-2 bg-white px-1 text-[13px] leading-[17px] font-normal text-[#6C25FF]">
          Email Address <span className="text-[#DD4A3D]">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 outline-none mt-2"
        />
      </div>

      <div className="relative w-full">
        <label className="absolute -top-0.5 left-2 bg-white px-1 text-[13px] leading-[17px] font-normal text-[#6C25FF]">
          Password <span className="text-[#DD4A3D]">*</span>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 outline-none mt-2"
        />
      </div>

      <div className="relative w-full">
        <label className="absolute -top-0.5 left-2 bg-white px-1 text-[13px] leading-[17px] font-normal text-[#6C25FF]">
          Company Name <span className="text-[#DD4A3D]">*</span>
        </label>
        <input
          type="company"
          placeholder="Enter Company Name"
          className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-2 outline-none mt-2"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-[13px] leading-[17px] font-normal opacity-100">
          Are you an Agency?*
        </p>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="agency"
              value="yes"
              className="w-4 h-4 accent-[#6C25FF]"
            />
            <span className="text-[13px]">Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="agency"
              value="no"
              className="w-4 h-4 accent-[#6C25FF]"
            />
            <span className="text-[13px]">No</span>
          </label>
        </div>
      </div>

      <button className="absolute bottom-5 w-[335px] h-[46px] bg-[#6C25FF] text-white text-[16px] font-medium rounded-[6px] opacity-100">
        Create Account
      </button>
    </div>
  );
};

export default SignUp;
