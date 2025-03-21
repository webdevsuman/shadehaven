import React, { useEffect } from "react";
import pdfImg from "../assets/pdf.svg";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const CarouselFeatures = ({ img, title, content }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="md:w-70 inter text-left"
    >
      <img className="md:h-60" src={img} alt="" />
      <h3 className="font-semibold my-2">{title}</h3>
      <p className="text-xs mb-2">{content}</p>
      <button className="border-[#31B4C9] border-2 px-4 py-2 rounded-full hover:bg-[#31B4C9] hover:text-white active:text-white duration-300 hover:scale-105 flex gap-2">
        Download PDF
        <div>
          <img className="bg-amber-50" src={pdfImg} alt="download pdf" />
        </div>
      </button>
    </div>
  );
};

export default CarouselFeatures;
