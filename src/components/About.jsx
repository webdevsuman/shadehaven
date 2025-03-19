import React from "react";
import FeatureCard from "./FeatureCard";
import ovalImg from "../assets/Ellipse 7210.svg";
import icon1 from "../assets/Group.svg";
import icon2 from "../assets/Group1.svg";
import ovalImg2 from "../assets/Ellipse 7211.svg";
import icon3 from "../assets/Group2.svg";
import ovalImg3 from "../assets/Ellipse 7212.svg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:my-0 mt-70 mb-30 md:py-20 justify-center gap-10 md:gap-3">
      <FeatureCard
        active={false}
        icon={icon1}
        shadow={ovalImg}
        title="Rather Have A Pro Do It?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text."
      />
      <FeatureCard
        active={true}
        shadow={ovalImg2}
        icon={icon2}
        title="Buy Risk-Free"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text."
      />
      <FeatureCard
        active={false}
        shadow={ovalImg3}
        icon={icon3}
        title="Find Your Inspiration"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
      />
    </div>
  );
};

export default About;
