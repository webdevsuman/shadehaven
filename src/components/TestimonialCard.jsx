import React from "react";
import whiteQuote from "../assets/quoteWhite.png";

const TestimonialCard = ({ active, icon, stars, content, author, job }) => {
  return (
    <div className="text-left inter text-[#333333]">
      <div
        style={{
          backgroundColor: `${active ? "#31B4C9" : "white"}`,
          borderRadius: "50%",
        }}
        className="h-15 w-15 flex items-center justify-center mb-8"
      >
        <img className="h-6" src={active ? whiteQuote : icon} alt="" />
      </div>
      <img className="mb-2" src={stars} alt="" />
      <p className="mb-13">{content}</p>
      <p className="font-semibold">{author}</p>
      <p>{job}</p>
    </div>
  );
};

export default TestimonialCard;
