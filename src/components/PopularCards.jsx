import React from "react";

const PopularCards = ({ bg, icon, title, content }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="md:h-85 md:w-100 relative hover:scale-105 duration-300"
    >
      <div className="absolute bottom-5 left-4 inter text-white">
        <img src={icon} alt="category icon" />
        <h3 className="font-semibold my-2">{title}</h3>
        <p className="text-xs">{content}</p>
      </div>
    </div>
  );
};

export default PopularCards;
