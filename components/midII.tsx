import React from "react";
import Image from "next/image";

import lapi from "@/public/assets/landing-page/lapi.webp";
import { MdKeyboardArrowRight } from "react-icons/md";

const MidII = () => {
  return (
    <div className=" relative bg-black py-12 md:py-26 px-10 md:px-20 ">
      <div className="md:w-80 w-20 sm:w-40 h-20 hidden sm:block sm:h-40 md:h-80 bg-[#ffe082] blur-[110px] opacity-25 rounded-[300px] mx-auto z-20 absolute" />
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
        <div className="p-2 w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold max-w-full md:text-left text-center md:max-w-[900px] mx-auto bg-gradient-to-r from-white to-[#ffe082] bg-clip-text text-transparent">
            The RidesRescue you know but for business
          </h1>
          <div className="flex items-center md:justify-start justify-center gap-2 my-10">
            <button className="flex text-black rounded-2xl bg-[#F7F7F8] text-sm items-center gap-2 py-3 px-5">
              Fleet services <MdKeyboardArrowRight />
            </button>
            <button className="flex bg-black rounded-2xl text-[#F7F7F8] border border-[#F7F7F8] text-sm items-center gap-2 py-3 px-5">
              Become a partner <MdKeyboardArrowRight />
            </button>
          </div>
        </div>{" "}
        <Image src={lapi} className="w-1/2 p-4" alt="lapi" priority />
      </div>
    </div>
  );
};

export default MidII;
