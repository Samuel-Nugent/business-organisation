import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-blue-950 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-300 mt-4">
            Disclaimer: This website and its contents are intended solely for
            portfolio and demonstration purposes. All names, organizations, and
            scenarios presented are entirely fictitious. Any resemblance to
            actual persons, living or deceased, or to real organizations or
            businesses is purely coincidental. No personal information is
            collected through the subscription or contact forms. Your personal
            information is not stored, shared, or used in any way.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/business-solutions" className="hover:text-white">
              Business Solutions
            </a>
            <a href="/it-solutions" className="hover:text-white">
              IT Solutions
            </a>
            <a href="/contact" className="hover:text-white">
              Contact us
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to find out more
          </h3>
          <p className="text-gray-300 mb-4 max-w-80">
            Monthly reports, emails and information
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-600 hover:bg-blue-500 text-white">
              Subcribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 py-4 mt-10 text-center text-gray-300">
        © 2025 Business Organisation (Demo Project). All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
