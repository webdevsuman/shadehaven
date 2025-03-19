import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const PopularCards = ({ bg, icon, title, content }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      style={{
        background: `url(${bg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="md:h-85 md:w-100 relative hover:scale-105 duration-300"
    >
      {/* //AOS duration is in Conflict with TailwindCSS hover duration */}
      <div className="absolute bottom-5 left-4 inter text-white">
        <img src={icon} alt="category icon" />
        <h3 className="font-semibold my-2">{title}</h3>
        <p className="text-xs">{content}</p>
      </div>
    </div>
  );
};

export default PopularCards;
