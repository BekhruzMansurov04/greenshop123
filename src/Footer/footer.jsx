import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiAmericanexpress } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-10">
        <div className="flex flex-col items-center">
          <img src="gardenCare.jpg" alt="garden care" className="mb-3 w-14 h-14" />
          <h4 className="font-semibold text-lg">Garden Care</h4>
          <p className="text-sm">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="plantRenovation.jpg" alt="plant renovation" className="mb-3 w-14 h-14" />
          <h4 className="font-semibold text-lg">Plant Renovation</h4>
          <p className="text-sm">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="watering.jpg" alt="watering garden" className="mb-3 w-14 h-14" />
          <h4 className="font-semibold text-lg">Watering Garden</h4>
          <p className="text-sm">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
      </div>

      <div className="bg-green-50 py-6 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between rounded-md mb-10">
        <div className="mb-4 lg:mb-0 text-center lg:text-left">
          <h4 className="text-lg font-semibold mb-1">Would you like to join newsletters?</h4>
          <p className="text-sm text-gray-600">We usually post offers and challenges in newsletter.</p>
        </div>
        <div className="flex gap-2 w-full lg:w-auto">
          <input
            type="email"
            placeholder="enter your email address..."
            className="px-4 py-2 rounded-md border border-gray-300 w-full lg:w-80"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
            Join
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-2">
          <img src="/nature.png" alt="logo" className="w-8" /> <span className="text-green-600 font-bold text-lg">GreenShop</span>
          <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <MdEmail />
          <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <MdPhone />
          <span>+88 01911 717 490</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700 max-w-7xl mx-auto mb-6">
        <div>
          <h5 className="font-semibold mb-2">My Account</h5>
          <ul className="space-y-1">
            <li>My Account</li>
            <li>Address</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Categories</h5>
          <ul className="space-y-1">
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Social Media</h5>
          <div className="flex gap-3 text-xl text-gray-500">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
        <div>
          <h5 className="font-semibold mb-2">We accept</h5>
          <div className="flex gap-4 text-2xl text-gray-500">
            <SiPaypal />
            <SiVisa />
            <SiMastercard />
            <SiAmericanexpress />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t">
        © 2021 Greenshop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
