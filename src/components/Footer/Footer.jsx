import React from "react";
import { FaGithubAlt, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-10">
          {/* Logo and Info Section */}
          <div className="text-center sm:text-left">
            <p className="text-3xl font-bold mb-3">Discount PRO</p>
            <p className="text-lg">Your go-to platform for the best deals and discounts!</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
            <div>
              <p className="font-semibold mb-2">Quick Links</p>
              <Link to="/" className="hover:text-gray-400 transition duration-200">Home</Link><br />
              <Link to="/brands" className="hover:text-gray-400 transition duration-200">Brands</Link><br />
              <Link to="/about-us" className="hover:text-gray-400 transition duration-200">About Us</Link><br />
              <Link to="/contact" className="hover:text-gray-400 transition duration-200">Contact Us</Link>
            </div>

            {/* Contact Section */}
            <div>
              <p className="font-semibold mb-2">Contact Info</p>
              <p className="flex items-center space-x-2">
                <FaEnvelope className="text-lg" />
                <span>support@discountpro.com</span>
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center sm:justify-end space-x-6 mt-6 sm:mt-0">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              <FaGithubAlt className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 mt-10 pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 Discount PRO. All Rights Reserved. Developed by Md Humaun Kabir Parvez
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
