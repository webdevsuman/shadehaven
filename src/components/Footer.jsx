import React from "react";
import brand from "../assets/footerBrand.svg";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" md:px-10 inter text-white">
      <div className="bg-[#15203A] rounded-xl py-10 px-30">
        <div className=" flex justify-between gap-20 mb-10">
          <div className="w-60">
            <img className="w-50" src={brand} alt="" />
            <p className="text-xs mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          {/* Quick links */}
          <div>
            <h3 className="font-semibold capitalize">Quick links</h3>
            <hr style={{ width: "30px", color: "#566996" }} className="my-3" />
            <ul className="text-xs font-light leading-6">
              <a href="">
                <li>Motorization</li>
              </a>
              <a href="">
                <li>Shades</li>
              </a>
              <a href="">
                <li>Blinds</li>
              </a>
              <a href="">
                <li>Shutters</li>
              </a>
              <a href="">
                <li>Drapery</li>
              </a>
            </ul>
          </div>
          {/* Additional links */}
          <div>
            <h3 className="font-semibold capitalize">Additional links</h3>
            <hr style={{ width: "30px", color: "#566996" }} className="my-3" />
            <ul className="text-xs font-light leading-6">
              <a href="">
                <li>About Us</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
              <a href="">
                <li>Contact Us</li>
              </a>
              <a href="">
                <li>Privacy Policy</li>
              </a>
              <a href="">
                <li>Term of Service</li>
              </a>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold capitalize">contact Information</h3>
            <hr style={{ width: "30px", color: "#566996" }} className="my-3" />
            <ul className="text-xs font-light">
              <li className="flex gap-2 items-start pb-4">
                <CiLocationOn size={20} color="#31B4C9" />
                14 NE lorem ipsum., Suite 705,
                <br /> lorem ipsum, FL 12345
              </li>
              <a href="tel:1231231234">
                <li className="flex gap-2 items-start pb-4">
                  <CiPhone size={20} color="#31b4c9" /> (123) 123-1234
                </li>
              </a>
              <a href="mailto:shadehaven@gmail.com">
                <li className="flex gap-2 items-start">
                  <CiMail size={20} color="#31b4c9" /> shadehaven@gmail.com
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="capitalize font-semibold">
              Subscribe us for more update & news !!
            </h2>
            <hr style={{ width: "30px", color: "#566996" }} className="my-3" />
            <div className="flex border-2 border-[#24345A] rounded-full p-1">
              <input
                className="text-xs ml-4"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="text-sm bg-[#31B4C9] hover:opacity-85 hover:scale-105 duration-300 active:opacity-85 py-2 md:py-3 px-2 md:px-10 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-5 self-end">
            <a
              className="hover:bg-[#31B4C9] rounded-full active:bg-[#31B4C9]"
              href=""
            >
              <div className="border-1 hover:border-[#31B4C9] border-[white] p-2 rounded-full">
                <FaYoutube />
              </div>
            </a>
            <a
              className="hover:bg-[#31B4C9] rounded-full active:bg-[#31B4C9]"
              href=""
            >
              <div className="border-1 hover:border-[#31B4C9] border-[white] p-2 rounded-full">
                <FaFacebook />
              </div>
            </a>
            <a
              className="hover:bg-[#31B4C9] rounded-full active:bg-[#31B4C9]"
              href=""
            >
              <div className="border-1 hover:border-[#31B4C9] border-[white] p-2 rounded-full">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              className="hover:bg-[#31B4C9] rounded-full active:bg-[#31B4C9]"
              href=""
            >
              <div className="border-1 hover:border-[#31B4C9] border-[white] p-2 rounded-full">
                <FaInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
