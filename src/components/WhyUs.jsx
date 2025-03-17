import React from "react";
import WhyCard from "./WhyCard";
import shadow from "../assets/shadow.svg"
import icon1 from "../assets/whyicon1.svg"
import icon2 from "../assets/whyicon2.svg"
import icon3 from "../assets/whyicon3.svg"
import icon4 from "../assets/whyicon4.svg"

const WhyUs = () => {
  return (
    <div className="bg-[#31B4C9] md:mx-10 mx-5 rounded-2xl text-white inter text-center md:py-10 md:px-20">
      <h3 style={{ letterSpacing: 5 }} className="uppercase text-sm pb-5">
        See why shade haven
      </h3>
      <h2 className="capitalize text-3xl pb-5">
        online retailer of custom
        <span className="font-semibold pb-5"> window coverings</span>
      </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="flex justify-center mt-5">
        <WhyCard
          title="Your Windows, Your Way"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          shadow={shadow} icon={icon1}
        />
        <WhyCard
          title="Top Quality & Style at Low Prices"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          shadow={shadow} icon={icon2}
        />
        <WhyCard
          title="Don't Worry About It"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          shadow={shadow} icon={icon3}
        />
        <WhyCard
          title="Get Free Advice from Experts"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          shadow={shadow} icon={icon4}
        />
      </div>
    </div>
  );
};

export default WhyUs;
