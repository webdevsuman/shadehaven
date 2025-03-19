import React, { useEffect } from "react";
import whiteQuote from "../assets/quoteWhite.png";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialCard = ({ active, icon, stars, content, author, job }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="3000"
      className="text-left inter text-[#333333]"
    >
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
