import React from "react";
import brandImg from "../assets/brand.svg";
import callBtn from "../assets/callBtn.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between md:items-center px-5 md:px-10 py-3 md:py-6">
      <img className="md:h-14 h-8" src={brandImg} alt="brand logo" />
      <ul className="text-[14px] md:flex gap-6 items-center font-semibold text-[#333333]">
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">Motorization</li>
        </a>
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">Shades</li>
        </a>
        <a href=""><li className="hover:text-[#31b4c9] duration-300">Shutters</li></a>
        <a href=""><li className="hover:text-[#31b4c9] duration-300">Binds</li></a>
        <a href=""><li className="hover:text-[#31b4c9] duration-300">Drapery</li></a>
        <a href=""><li className="hover:text-[#31b4c9] duration-300">About Us</li></a>
        <a href=""><li className="hover:text-[#31b4c9] duration-300">Blog</li></a>
        <a href=""><li className="hover:text-[#31b4c9] duration-300">Contact Us</li></a>
        <li>
          <img className="md:h-14 h-8" src={callBtn} alt="call button" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
