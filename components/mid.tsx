import React from "react";
import Image from "next/image";

import qr from "@/public/assets/landing-page/qr.webp";

const Mid = () => {
  return (
    <div className=" relative bg-black py-12 md:py-26 px-10 md:px-20 ">
      <div className="w-80 h-80 bg-[#61BBC7] blur-[110px] opacity-25 rounded-[300px] left-32 top-20 mx-auto z-20 absolute" />
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="w-1/2 h-auto sm:h-screen"
          src="https://videos.ctfassets.net/5ho7gz3tsepv/5UMiakZWS2yDgHfFS1ruH3/aef05982410e5567408a061c2be13265/home_3D-phone_v2.mp4"
        ></video>
        <div className="md:p-4 p-2 w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl md:text-left text-center font-bold max-w-[900px] mx-auto bg-gradient-to-r from-white to-[#4FC4CD] bg-clip-text text-transparent">
            The everything app for your car
          </h1>
          <p className="text-sm md:text-xl text-[#ADB2B6] font-light md:text-left text-center my-5 md:my-10">
            Fuel delivery, car wash, servicing and more – just tap and we’ll
            roll to wherever you are. I mean, who still goes to the petrol
            station or the garage for vehicle services anymore? It’s 2024 –
            where RidesRescue comes to you.
          </p>
          <div className="bg-[#21292F] cursor-pointer max-w-full sm:max-w-[270px] flex sm:justify-normal justify-center items-center gap-3 py-1 px-4 rounded-[10px] mt-5">
            <Image src={qr} alt="qr-code" priority />
            <p className="text-white font-semibold text-sm">Scan to download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
