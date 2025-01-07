import React from "react";

import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Buzz = () => {
  return (
    <div className="pb-14 md:pb-36 bg-black">
      <h2 className="text-[#efeff0] px-10 md:px-20 text-4xl md:text-5xl font-semibold z-10 relative">All the buzz</h2>
      <div className="my-5 overflow-x-scroll flex  items-center gap-5 scrollbar-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-[254px] md:w-[454px] mx-2 flex-none h-[425px] md:h-[625px] p-10 bg-gradient-to-b from-gradient-start to-gradient-end rounded-[30px] flex flex-col justify-between my-5">
            <div>
              <FaQuoteLeft className="text-white w-9 h-9" />
              <h3 className="text-white text-base md:text-lg font-light leading-7 mt-5">
                Easy, even though the cost is same as at petrol station,
                technically you also save a trip to the station, which in itself
                saves fuel cost.
              </h3>
            </div>
            <div>
              <div className="text-[#4FC4CD] flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[#7e878e] text-lg font-normal">
                Ali Bin Mahmood on Play Store
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buzz;
