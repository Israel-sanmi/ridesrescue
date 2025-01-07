"use client";
import React, { useState } from "react";
import Image from "next/image";
import oil from "@/public/assets/landing-page/oil.webp";
import fuel from "@/public/assets/landing-page/fuel.webp";
import battery from "@/public/assets/landing-page/battery.webp";
import car from "@/public/assets/landing-page/car-wash.webp";
import tyres from "@/public/assets/landing-page/tyres.webp";
import rescue from "@/public/assets/landing-page/rescue.webp";

import carFuel from "@/public/assets/landing-page/carFuel.svg";
import engineOil from "@/public/assets/landing-page/engineOil.webp";
import rescueService from "@/public/assets/landing-page/rescueService.webp";
import tyreBig from "@/public/assets/landing-page/tyreBig.webp";
import washBig from "@/public/assets/landing-page/washBig.webp";
import batteryBig from "@/public/assets/landing-page/batteryBig.webp";

import { MdKeyboardArrowRight } from "react-icons/md";

const Info = () => {
  const tabs = [
    {
      name: "fuel",
      image: fuel,
      title: "24/7 Fuel service, at petrol station rates.",
      description:
        "Enjoy our contactless fuel delivery straight to your car with flexible scheduling. Easy booking, at your convenience!",
      buttonText: "Discover fuel delivery",
      buttonLink: "/fuel",
      contentImage: carFuel,
    },
    {
      name: "battery",
      image: battery,
      title: "Reliable Battery Replacement Service.",
      description:
        "We provide on-demand battery replacements wherever you are. Affordable, fast, and efficient!",
      buttonText: "Discover battery service",
      buttonLink: "/battery",
      contentImage: batteryBig,
    },
    {
      name: "Car wash",
      image: car,
      title: "Premium Car Wash at Your Doorstep.",
      description:
        "Get your car sparkling clean without leaving your home. Flexible scheduling, hassle-free service!",
      buttonText: "Book a car wash",
      buttonLink: "/car-wash",
      contentImage: washBig,
    },
    {
      name: "Tyres",
      image: tyres,
      title: "Tyre Replacement and Repair Service.",
      description:
        "From puncture repairs to tyre replacements, our experts come to you. On-demand service, anywhere!",
      buttonText: "Discover tyre service",
      buttonLink: "/tyres",
      contentImage: tyreBig,
    },
    {
      name: "Engine oil",
      image: oil,
      title: "Engine Oil Change Service.",
      description:
        "Keep your engine running smoothly with our top-quality oil change service delivered to your location.",
      buttonText: "Discover engine oil",
      buttonLink: "/engine-oil",
      contentImage: engineOil,
    },
    {
      name: "rescue",
      image: rescue,
      title: "24/7 Roadside Assistance.",
      description:
        "Stranded? Call us for fast and reliable roadside assistance anytime, anywhere!",
      buttonText: "Get roadside assistance",
      buttonLink: "/rescue",
      contentImage: rescueService,
    },
  ];

  const [selected, setSelected] = useState("fuel");

  const currentTab = tabs.find((tab) => tab.name === selected);

  return (
    <div className="bg-black text-white relative z-10 h-auto md:h-screen">
      {/* Tabs */}
      <div className="w-[90%] sm:w-[70%] overflow-x-scroll md:overflow-x-auto scrollbar-none mx-auto py-5 sm:py-10 flex items-center gap-2 justify-between">
        {tabs.map((tab, index) => (
          <div key={index}>
            <div
              onClick={() => setSelected(tab.name)}
              className={`flex flex-col items-center gap-1 cursor-pointer px-4 sm:px-6 py-2 sm:py-4 ${
                selected === tab.name ? "bg-[#191f24cc]" : ""
              } rounded-[10px]`}
            >
              <Image src={tab.image} alt={tab.name} className="w-7 sm:w-12 h-7 sm:h-12" />
              <p className="text-xs font-medium text-center capitalize">{tab.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:w-[70%] w-[95%] flex sm:flex-row flex-col items-center gap-2 justify-between mx-auto bg-gradient-to-r to-white rounded-[20px] md:rounded-[40px] p-6 md:p-12 from-[#4FC4CD]">
        <div className="flex flex-col w-full sm:w-1/2 gap-5">
          <h1 className="text-2xl lg:text-4xl font-bold text-black">{currentTab?.title}</h1>
          <p className="text-sm lg:text-lg font-normal text-black">
            {currentTab?.description}
          </p>
          <button className="rounded-[16px] flex-none w-full md:w-1/2 flex items-center gap-2 font-semibold md:text-base text-sm bg-black p-[10px_16px] text-white ">
            {currentTab?.buttonText}
            <MdKeyboardArrowRight className="text-white" />
          </button>
        </div>
        <Image src={currentTab?.contentImage} alt="images" className="w-1/2" />
      </div>
    </div>
  );
};

export default Info;