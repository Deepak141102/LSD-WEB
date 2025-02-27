import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0c021f] to-[#1c1c1d] text-white py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">TechBrand</h2>
          <p className="text-sm text-gray-300 mt-2">
            Your go-to platform for modern technology solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row md:justify-center gap-4">
          <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Services</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4 text-lg">
          <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-300 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} TechBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
