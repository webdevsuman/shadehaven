import React from "react";
import PopularCards from "./PopularCards";
import bg1 from "../assets/category1.png";
import bg2 from "../assets/category2.png";
import bg3 from "../assets/category3.png";
import cat1 from "../assets/cat1.svg";
import cat2 from "../assets/cat2.svg";
import cat3 from "../assets/cat3.svg";

const Popular = () => {
  return (
    <div className="px-5  md:px-60 md:py-20">
      <h3
        style={{ letterSpacing: 5 }}
        className="uppercase inter text-[#31B4C9]"
      >
        Quality Products
      </h3>
      <h2 className="text-3xl">
        Popular <span className="font-semibold">Categories</span>
      </h2>
      <div className="flex gap-10 justify-center md:mt-10 mt-5">
        <PopularCards
          bg={bg1}
          icon={cat1}
          title="Cellular Shades"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting"
        />
        <PopularCards
          bg={bg2}
          icon={cat2}
          title="Faux Wood Blinds"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting"
        />
        <PopularCards
          bg={bg3}
          icon={cat3}
          title="Roller Shades"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting"
        />
      </div>
    </div>
  );
};

export default Popular;
