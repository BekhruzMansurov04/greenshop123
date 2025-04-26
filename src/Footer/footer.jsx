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
    <footer className="bg-gray-50 text-gray-700 pt-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b pb-8">
          {[
            { img: "gardenCare.jpg", title: "Garden Care" },
            { img: "plantRenovation.jpg", title: "Plant Renovation" },
            { img: "watering.jpg", title: "Watering Garden" },
          ].map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={service.img} alt={service.title} className="mb-4 w-16 h-16 object-cover" />
              <h4 className="font-semibold text-lg">{service.title}</h4>
              <p className="text-sm text-gray-600 mt-2">
                We are an online plant shop offering a wide range of cheap and trendy plants.
              </p>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 border-b gap-6">
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-2">Would you like to join newsletters?</h4>
            <p className="text-sm text-gray-600 max-w-md">
              We usually post offers and challenges in newsletter. We're your online houseplant destination.
            </p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full sm:w-72 px-4 py-2 border rounded-md"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
              Join
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-between items-center bg-green-50 py-6 px-4 rounded-md my-8 gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-green-600" />
            <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-green-600" />
            <a href="mailto:contact@greenshop.com" className="hover:underline">
              contact@greenshop.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-green-600" />
            <span>+88 01911 717 490</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700 mb-10">
          <div>
            <h5 className="font-semibold mb-4">My Account</h5>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Address</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Categories</h5>
            <ul className="space-y-2">
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Social Media</h5>
            <div className="flex gap-4 text-xl text-gray-500">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">We Accept</h5>
            <div className="flex gap-4 text-2xl text-gray-500">
              <SiPaypal />
              <SiVisa />
              <SiMastercard />
              <SiAmericanexpress />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 py-6 border-t">
          © 2023 GreenShop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
