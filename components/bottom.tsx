import React from "react";
import Image from "next/image";

import qr from "@/public/assets/landing-page/qr.webp";
import phone from "@/public/assets/landing-page/b-phone.webp";

const Bottom = () => {
  return (
    <div className="bg-black py-10 px-5">
      <div className="w-full bg-[#72d0d7] rounded-[30px] px-7 md:px-16 pt-7 md:pt-16 flex md:flex-row flex-col items-center gap-2 justify-between">
        <div>
          <h1 className="text-white text-3xl md:text-left text-center sm:text-4xl font-semibold">Get the App</h1>
          <div className="bg-white max-w-[270px] cursor-pointer flex items-center gap-3 py-1 px-4 rounded-[10px] mt-5">
            <Image src={qr} alt="qr-code" priority />
            <p className="text-black font-semibold text-sm">Scan to download</p>
          </div>
        </div>
        <Image src={phone} alt="phone" priority className="max-w-[284px] w-[100%]" />
      </div>
    </div>
  );
};

export default Bottom;
