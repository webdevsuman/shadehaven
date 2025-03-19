import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import brandImg from "../assets/brand.svg";
import callBtn from "../assets/callBtn.svg";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center px-5 md:px-10 py-3 md:py-6">
      <img className="md:h-14 h-8" src={brandImg} alt="brand logo" />
      <ul
        className={`${
          menu ? "block" : "hidden"
        } text-[14px] md:flex gap-6 items-center font-semibold text-[#333333]`}
      >
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">Motorization</li>
        </a>
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">Shades</li>
        </a>
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">Shutters</li>
        </a>
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">Binds</li>
        </a>
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">Drapery</li>
        </a>
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">About Us</li>
        </a>
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300">Blog</li>
        </a>
        <a href="">
          <li className="hover:text-[#31b4c9] duration-300 mb-3 md:mb-0">Contact Us</li>
        </a>
        <li>
          <img className="md:h-14 h-8" src={callBtn} alt="call button" />
        </li>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          color="#31b4c9"
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          color="#31b4c9"
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
