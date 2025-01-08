import Bottom from "@/components/bottom";
import Buzz from "@/components/buzz";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Mid from "@/components/mid";
import MidII from "@/components/midII";
import Questions from "@/components/questions";
import Carousel from "@/components/swiper";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Info />
      <Carousel />
      <Mid />
      <MidII />
      {/* <Buzz /> */}
      <Questions />
      {/* <Bottom/> */}
      <Footer/>
    </div>
  );
}
