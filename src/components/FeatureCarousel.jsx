import React from "react";
import CarouselFeatures from "./CarouselFeatures";
import img1 from "../assets/Mask group.png";
import img2 from "../assets/Mask group2.png";
import img3 from "../assets/Mask group3.png";

const FeatureCarousel = () => {
  return (
    <div className="inter flex gap-10 mt-10">
      <CarouselFeatures
        img={img1}
        title="Light Filtering Roller Shades"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
      />
      <CarouselFeatures
        img={img2}
        title="Blackout Roller Shades"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
      />
      <CarouselFeatures
        img={img3}
        title="Premium Cellular Shades"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
      />
    </div>
  );
};

export default FeatureCarousel;
