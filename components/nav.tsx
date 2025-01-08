import React from "react";

import { IoMdMenu } from "react-icons/io";

const NavBaar = () => {
  return (
    <div className="w-[100vw] fixed z-20 py-3">
      <div className="w-[85%] bg-[#191f24cc] flex items-center justify-between p-2 rounded-[100px] backdrop-blur-[10px] mx-auto">
        <h1 className="text-white font-semibold pl-4 text-xs sm:text-xl">RideRescue</h1>
        <div className="lg:block hidden">
          <ul className="text-xs text-white flex items-center gap-5">
            <li>Services</li>
            <li>For Business</li>
            <li>Careers</li>
            <li>Community</li>
            <li>About Us</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="lg:flex hidden items-center gap-3">
          <p className="text-red-500 text-xs font-medium">Rescue me!</p>
          <button className=" text-sm py-4 px-6 rounded-[24px] text-white bg-[#4FC4CD]">
            Download app
          </button>
        </div>
        <div className="lg:hidden block">
        <IoMdMenu className="text-2xl cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default NavBaar;
