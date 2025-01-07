"use client";
import React, { useEffect, useState } from "react";
import NavBaar from "./nav";
import Image from "next/image";

import qr from "@/public/assets/landing-page/qr.webp";
// import emergency from "@/public/assets/landing-page/emergency.webp";

const Hero = () => {
  const words = ["Emergency", "Medical", "Security", "Fire", "Roadside"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <NavBaar />
      <div className="h-[100vh] absolute top-0 w-full">
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-md z-10"
          style={{ height: "100%", width: "100%" }}
        ></div>
        <video
          className="relative z-0"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src="https://videos.ctfassets.net/5ho7gz3tsepv/6qNmrGvE8ArhdiaTc2NRC5/b42802acdfbe14f833a204c518f3a9b7/home-bg-02.mp4"
          autoPlay
          playsInline
          loop
          muted
        ></video>
      </div>
      <div className=" z-10 relative">
        {/* <Image src={emergency} alt="emergency" priority /> */}
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
          <h1 className="text-5xl md:text-6xl font-bold text-center max-w-[900px] mx-auto bg-gradient-to-r from-white to-[#4FC4CD] bg-clip-text text-transparent">
            The all in one app for <br />
            <span className="transition-opacity duration-500">
              {words[currentWordIndex]}
            </span>
          </h1>
          <div className="bg-[#21292F] cursor-pointer flex items-center gap-3 py-1 px-4 rounded-[10px] mt-5">
            <Image src={qr} alt="qr-code" priority />
            <p className="text-white font-semibold text-xs md:text-sm">Scan to download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
