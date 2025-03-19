import React from "react";
import FeatureCarousel from "./FeatureCarousel";

const Features = () => {
  return (
    <div className="px-5 md:px-10 mb-50 md:mb-0">
      <div className="relative bg-[url('/src/assets/FeaturesBg.png')] h-[150px] md:h-[700px] w-full bg-contain bg-no-repeat md:px-50 md:py-20 text-center">
        <h3
          style={{ letterSpacing: 5 }}
          className="inter uppercase text-[#31B4C9]"
        >
          We are the Experts
        </h3>
        <h2 className="inter text-3xl text-[#333333] my-5">
          Custom Blinds,
          <span className=" font-semibold"> Shades and Shutters</span>
        </h2>
        <p className="inter text-[#333333]">
          We're 100% online so the showroom is in your pocket. Whether you’re a
          DIY warrior or prefer to use our professional services, you can count
          on us to deliver top-quality blinds, shades, shutters and curtains at
          an affordable price.
        </p>
        <FeatureCarousel />
      </div>
    </div>
  );
};

export default Features;
