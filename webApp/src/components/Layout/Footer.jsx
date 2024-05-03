import React from "react";
import { AiFillInstagram, AiFillTwitterSquare, AiFillGithub, AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="text-center bg-orange-400 text-white p-3">
      <div className="my-3">
        {/* icons */}
        <AiFillInstagram className="text-white text-3xl cursor-pointer inline-block mr-2 hover:text-black transform hover:translate-x-5 transition duration-400" />
        <AiFillTwitterSquare className="text-white text-3xl cursor-pointer inline-block mr-2 hover:text-black transform hover:translate-x-5 transition duration-400" />
        <AiFillGithub className="text-white text-3xl cursor-pointer inline-block mr-2 hover:text-black transform hover:translate-x-5 transition duration-400" />
        <AiFillYoutube className="text-white text-3xl cursor-pointer inline-block mr-2 hover:text-black transform hover:translate-x-5 transition duration-400" />
      </div>
      <p className="text-lg md:text-xl">
        teamroadsafe@gmail.com
        <br />
        9876543217
      </p>
    </div>
  );
};

export default Footer;
