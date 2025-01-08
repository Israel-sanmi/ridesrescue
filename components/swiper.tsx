"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  FreeMode,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import fuel from "@/public/assets/landing-page/carFuel.svg";

const Carousel = () => {
  return (
    <div className="bg-black px-5 sm:px-10 py-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        // freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          120: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Mousewheel, Keyboard]}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="md:w-[286px] w-full cursor-pointer relative h-[429px] bg-gradient-to-b from-white flex flex-col gap-2 justify-between items-center to-[#0e0f11d9] rounded-2xl p-7">
              <Image src={fuel} alt="car" className="w-full" />
              <div className="h-full flex flex-col justify-end">
                <h1 className="font-semibold text-base md:text-xl text-white">
                  Spot a RideRescue truck?{" "}
                  <span className="text-[#4fc4cd]">Ask, stop, refuel</span>
                </h1>
                <p className="font-normal text-[#adb2b6] text-xs sm:text-sm mt-3">
                  If you spot a RideRescue truck parked, just ask them to refuel
                  your vehicle.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
