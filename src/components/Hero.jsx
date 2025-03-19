import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import heroImg from "../assets/heroBg.png";

const Hero = () => {
  return (
    <div className="md:px-10 px-5 h-full">
      <div className="md:relative md:bg-[url('/src/assets/heroBg.png')] h-[150px] md:h-[560px] w-full bg-contain bg-no-repeat p-1">
        <div className="md:text-white text-center md:text-left inter md:absolute md:bottom-0 md:left-0 md:pl-40 md:pb-10 mb-5 md:mb-0">
          <img className="md:hidden mb-5" src={heroImg} alt="heroImg" />
          <h2
            style={{ letterSpacing: 5 }}
            className="text-xs md:text-[16px] font-bold uppercase md:pl-1.5"
          >
            shade haven
          </h2>
          <h1 className="text-lg md:text-[50px] font-light leading-10 md:leading-20">
            Custom Blinds, <br />
            <span className="font-bold">Shades, Shutters</span>
          </h1>
        </div>
        <div className="inter md:text-white font-light md:w-[400px] md:absolute right-0 md:bottom-0 md:pr-30 pb-13">
          <p className="text-xs md:text-[16px] md:mb-4 mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <button className="bg-[#78CFEA] hover:opacity-85 hover:scale-105 duration-300 active:opacity-85 py-2 md:py-4 px-4 md:px-10 rounded-full text-xs md:text-base flex items-center gap-2 text-white">
            Contact Us <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
