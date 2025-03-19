import React from "react";
import TestimonialCard from "./TestimonialCard";
import icon from "../assets/quote.png";
import icon1 from "../assets/quoteWhite.png";
import stars from "../assets/5stars.svg";
import starsBlue from "../assets/5starsBlue.svg";

const Testimonial = () => {
  return (
    <div className="md:px-50 md:py-20 text-center mt-10 md:mt-0">
      <h3
        style={{ letterSpacing: 5 }}
        className="inter uppercase text-[#31B4C9] text-sm"
      >
        Client Testimonials
      </h3>
      <h2 className="inter capitalize text-3xl text-[#333333] my-5">
        What our
        <span className=" font-semibold"> clients say</span>
      </h2>
      <p className="inter text-[#333333] text-justify px-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="flex flex-col md:flex-row gap-10 justify-center md:mt-10 my-5 px-10 md:px-0">
        <TestimonialCard
          icon={icon}
          stars={stars}
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          author="Willam Charls"
          job="Designer"
        />
        <TestimonialCard
          icon={icon1}
          active={true}
          stars={starsBlue}
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          author="Mont Livingstone"
          job="Designer"
        />
        <TestimonialCard
          icon={icon}
          stars={stars}
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          author="Ricky Haris" job="Designer"
        />
      </div>
    </div>
  );
};

export default Testimonial;
