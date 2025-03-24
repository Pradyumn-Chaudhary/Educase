import React from "react";

const Profile = () => {
  return (
    <div className="bg-[#F7F8F9] min-h-screen">
      <div className="w-[375px] h-[68px] bg-white shadow-md flex items-center px-4">
        <h1 className="text-[18px] leading-[21px] font-normal text-[#1D2226] capitalize">
          Account Settings
        </h1>
      </div>

      <div className="px-5 py-7 flex flex-col gap-7">
        <div className="flex gap-7">
          <div className="relative w-[76px] h-[76px]">
            <img
              src="/Ellipse 114.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <img
              src="/Group 1585.png"
              alt="Edit Icon"
              className="absolute top-[80%] left-[90%] w-[21px] h-[23px] transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div>
            <p className="text-[15px] leading-[19px] font-medium text-[#1D2226] capitalize">
              Marry Doe
            </p>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-[14px] leading-[22px] font-normal text-[#1D2226] capitalize">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <div className="h-0 border-t border-dashed border-[#CBCBCB] opacity-100"></div>
    </div>
  );
};

export default Profile;
