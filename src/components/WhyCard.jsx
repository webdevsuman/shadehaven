import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const WhyCard = ({ icon, shadow, title, content }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="3000"
      className="w-110 text-center inter text-white md:px-5 md:py-5"
    >
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
        className="flex flex-col items-center h-65 w-65 px-4 py-8 rounded-xl"
      >
        <div className="relative h-18 w-18 mb-2">
          <img
            className="h-10 z-1 absolute top-0 right-0 opacity-30"
            src={shadow}
            alt="oval shadow"
          />
          <img
            className="h-15 absolute bottom-0.5 left-0.5"
            src={icon}
            alt=""
          />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-xs">{content}</p>
      </div>
    </div>
  );
};

export default WhyCard;
