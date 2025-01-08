import React from "react";

import Image from "next/image";
import app from "@/public/assets/landing-page/app.png";
import google from "@/public/assets/landing-page/google.png";
import { BsInstagram, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="bg-[#111315] h-auto md:h-[55vh] p-3 sm:p-10">
      <div className="flex md:flex-row flex-col items-center justify-between md:items-start gap-2">
        <div>
          <h1 className="text-white md:text-left text-center font-semibold pl-0 md:pl-4 mb-5 text-xl">
            RideRescue
          </h1>
          {/* <div className="flex items-center gap-1 ">
            <Image src={app} alt="app" className="max-w-[132px]" />
            <Image src={google} alt="google" className="max-w-[132px]" />
          </div> */}
        </div>
        <div className="flex  gap-5">
          <ul className="text-[#7E878E] text-sm font-normal flex flex-col gap-2">
            <li>About Us</li>
            <li>Fleet Services</li>
            <li>Partnerships</li>
            <li>Community</li>
            <li>Careers</li>
          </ul>
          <ul className="text-[#7E878E] text-sm font-normal flex flex-col gap-2">
            <li>Fuel Delivery</li>
            <li>Car Wash</li>
            <li>Car Tyre</li>
            <li>Car Engine Oil</li>
            <li>Car Battery</li>
            <li className="text-red-500">Rescue</li>
          </ul>
        </div>
      </div>
      <hr className="my-10 bg-[#323E48] border border-[#323E48]" />
      <div className="flex sm:flex-row flex-col items-center gap-2 justify-between">
        <div className="text-[#7E878E] text-sm font-normal flex items-center gap-5">
          <p>© 2024 RidesRescue. All Rights Reserved</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className="text-[#7E878E] text-lg flex items-center gap-2">
            <BsInstagram/>
            <FaFacebook/>
            <LiaLinkedin/>
            <BsTiktok/>
            <BsYoutube/>
            <BsTwitter/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
