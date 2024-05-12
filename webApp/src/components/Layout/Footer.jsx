import React from "react";
import { AiFillInstagram, AiFillTwitterSquare, AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="text-center bg-orange-300 p-3 flex flex-col md:flex-row items-center justify-between">
      <div className="my-3 flex items-center">
        <h2>Our Social Networks</h2>
        <AiFillLinkedin className="text-white text-3xl cursor-pointer inline-block text-center mr-2 w-9 h-9 bg-orange-500 p-1 rounded-md transition duration-300 ease-in-out" />
        <AiFillTwitterSquare className="text-white text-3xl cursor-pointer inline-block text-center mr-2 w-9 h-9 bg-orange-500 p-1 rounded-md transition duration-300 ease-in-out" />
        <AiFillInstagram className="text-white text-3xl cursor-pointer inline-block text-center mr-2 w-9 h-9 bg-orange-500 p-1 rounded-md transition duration-300 ease-in-out" />
        <AiFillGithub className="text-white text-3xl cursor-pointer inline-block text-center mr-2 w-9 h-9 bg-orange-500 p-1 rounded-md transition duration-300 ease-in-out" />
        <AiFillYoutube className="text-white text-3xl cursor-pointer inline-block text-center mr-2 w-9 h-9 bg-orange-500 p-1 rounded-md transition duration-300 ease-in-out" />

      </div>

      <div className="text-left">
        <h3><span className="font-bold">Mail</span> - help@roadsafe.com</h3>
        <h3><span className="font-bold">Call</span> - 1800-00-0000</h3>
        <h3><span className="font-bold">App</span> - Download Now</h3>
      </div>

    </div>
  );
};

export default Footer;
