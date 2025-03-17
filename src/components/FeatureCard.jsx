import React from "react";

const FeatureCard = ({ active, icon, shadow, title, content}) => {
  return (
    <div className={`${active? 'bg-[#31b4c9]' : 'bg-white'} md:px-10 px-5 md:py-10 w-110 text-center inter rounded-2xl`}>
      <div className="flex flex-col items-center">
        <div className="relative h-20 w-20">
          <img
            className="h-10 -z-1 absolute top-0 right-0"
            src={shadow}
            alt="oval shadow"
          />
          <img
            className="h-15 absolute bottom-0.5 left-0.5"
            src={icon}
            alt=""
          />
        </div>
        <h3 className={`${active ? "text-white" : "text-[#333333]"} font-semibold `}>{title}</h3>
        <p className={`text-sm ${active ? "text-white" : "text-[#333333]"}`}>{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
